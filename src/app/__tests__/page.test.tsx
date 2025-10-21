import test from 'node:test';
import assert from 'node:assert/strict';
import React from 'react';
import Home from '../page';

type ElementWithChildren = React.ReactElement<{ children?: React.ReactNode }>;

function getChildElements(element: ElementWithChildren) {
  return React.Children.toArray(element.props.children).filter((child): child is ElementWithChildren =>
    React.isValidElement(child)
  );
}

test('Home renders the main welcome heading', () => {
  const home = Home() as ElementWithChildren;
  assert.equal(home.type, 'main', 'Home should render a <main> element');

  const children = getChildElements(home);
  const heading = children.find((child) => child.type === 'h1');
  if (!heading) {
    throw new Error('Expected to find a heading element');
  }
  assert.equal(heading.props.children, 'Welcome to My Photography Portfolio');
});

test('Home renders the subtitle text', () => {
  const home = Home() as ElementWithChildren;
  const children = getChildElements(home);
  const subtitle = children.find((child) => child.type === 'p');
  if (!subtitle) {
    throw new Error('Expected to find a subtitle paragraph');
  }
  assert.equal(subtitle.props.children, 'Next.js + Tailwind setup successful 🚀');
});
