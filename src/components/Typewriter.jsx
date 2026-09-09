import React, { useState, useEffect } from 'react';

export default function Typewriter({
  words = [
    'Senior Flutter Developer',
    'Mobile Application Architect',
    'Native Android Developer',
    'Full-Stack Web Developer',
    'Offline-First Systems Specialist'
  ],
  typeSpeed = 90,
  deleteSpeed = 45,
  delayBetweenWords = 1800
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = words[currentWordIndex];

    let timer;
    if (!isDeleting) {
      if (currentText.length < fullWord.length) {
        timer = setTimeout(() => {
          setCurrentText(fullWord.slice(0, currentText.length + 1));
        }, typeSpeed);
      } else {
        // Word completed, wait before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullWord.slice(0, currentText.length - 1));
        }, deleteSpeed);
      } else {
        // Fully deleted, move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typeSpeed, deleteSpeed, delayBetweenWords]);

  return (
    <span className="typewriter-container">
      <span className="typewriter-text">{currentText}</span>
      <span className="typewriter-cursor">|</span>
    </span>
  );
}
