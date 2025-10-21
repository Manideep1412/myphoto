import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type MagneticOptions = {
  strength?: number;
};

export function useMagnetic<T extends HTMLElement>({ strength = 0.35 }: MagneticOptions = {}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = event.clientX - rect.left - rect.width / 2;
      const relY = event.clientY - rect.top - rect.height / 2;
      gsap.to(el, {
        x: relX * strength,
        y: relY * strength,
        duration: 0.4,
        ease: "power3.out"
      });
    };

    const handleLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1,0.4)" });
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength]);

  return ref;
}

export function useSplitTextReveal(selector: string) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      const el = element as HTMLElement;
      const text = el.innerText;
      el.innerHTML = "";
      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.display = "inline-block";
        span.style.transform = "translateY(100%)";
        span.style.opacity = "0";
        el.appendChild(span);
      });
      const spans = el.querySelectorAll("span");
      gsap.to(spans, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.04,
        ease: "expo.out",
        delay: 0.2
      });
    });
  }, [selector]);
}

type ScrollScene = {
  target: string;
  onEnter?: () => void;
  onLeave?: () => void;
};

export function createScrollScenes(scenes: ScrollScene[]) {
  gsap.delayedCall(0, () => {
    scenes.forEach((scene) => {
      ScrollTrigger.create({
        trigger: scene.target,
        start: "top 80%",
        onEnter: scene.onEnter,
        onLeaveBack: scene.onLeave
      });
    });
  });
}
