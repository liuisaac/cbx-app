import React, { useState, useEffect, useRef } from "react";
import "./Transition-F.css";

interface TextProps {
  text: string[];
}

const TransitionF = ({ text }: TextProps) => {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const calculateHighlight = () => {
    if (!containerRef.current) return;

    const targetPosition = window.innerHeight / 2; // Middle of the viewport
    const lines = containerRef.current.children;

    for (let i = 0; i < lines.length; i++) {
      const { top, bottom } = lines[i].getBoundingClientRect();

      if (top < targetPosition && bottom > targetPosition) {
        setHighlightedIndex(i);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", calculateHighlight);
    calculateHighlight(); // Initial check

    return () => window.removeEventListener("scroll", calculateHighlight);
  }, [text]);

  return (
    <div ref={containerRef} className="text-container">
      {text.map((line, index) => (
        <p
          key={index}
          className={`text-line ${
            index === highlightedIndex ? "highlight" : ""
          }`}
        >
          {line}
        </p>
      ))}
    </div>
  );
};

export default TransitionF;
