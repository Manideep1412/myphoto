import test from 'node:test';
import assert from 'node:assert/strict';
import React from 'react';
import Home from '../page';

type ElementWithChildren = React.ReactElement<{ children?: React.ReactNode }>;

function collectElements(root: ElementWithChildren) {
  const result: ElementWithChildren[] = [];
  const stack: ElementWithChildren[] = [root];

  while (stack.length > 0) {
    const current = stack.pop()!;
    result.push(current);

    React.Children.forEach(current.props.children, (child) => {
      if (React.isValidElement(child)) {
        stack.push(child as ElementWithChildren);
      }
    });
  }

  return result;
}

function getTextContent(element: ElementWithChildren) {
  let text = '';

  React.Children.forEach(element.props.children, (child) => {
    if (typeof child === 'string') {
      text += child;
    } else if (React.isValidElement(child)) {
      text += getTextContent(child as ElementWithChildren);
    }
  });

  return text.trim();
}

test('Home renders the neon hero heading', () => {
  const home = Home() as ElementWithChildren;
  assert.equal(home.type, 'main', 'Home should render a <main> element');

  const elements = collectElements(home);
  const heading = elements.find((child) => child.type === 'h1');
  if (!heading) {
    throw new Error('Expected to find a heading element');
  }
  assert.equal(
    getTextContent(heading),
    'Immersive photography sculpted in neon light and analog texture.'
  );
});

test('Home showcases four interactive collection cards', () => {
  const home = Home() as ElementWithChildren;
  const elements = collectElements(home);
  const cards = elements.filter((child) => child.type === 'article');

  assert.equal(cards.length, 4, 'Expected to find four featured collection cards');
});

test('Home includes a primary enter gallery call to action', () => {
  const home = Home() as ElementWithChildren;
  const elements = collectElements(home);
  const primary = elements.find(
    (element) => getTextContent(element) === 'Enter Gallery'
  );

  if (!primary) {
    throw new Error('Expected to find the primary Enter Gallery action');
  }
});
