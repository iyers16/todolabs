import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 30, delay = 0, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIndex(0);
    setHasStarted(false);

    const timeout = setTimeout(() => {
      setHasStarted(true);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [text, delay]);

  useEffect(() => {
    if (!hasStarted) return;
    
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, hasStarted]);

  return (
    <span className={className}>
      {displayedText}
      {index < text.length && (
        <span className="inline-block w-2 h-4 bg-green-500 ml-1 animate-pulse"></span>
      )}
    </span>
  );
};

export default Typewriter;