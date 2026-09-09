import React from 'react';

const techItems = [
  { name: 'Flutter 3.x', icon: '⚡' },
  { name: 'Dart Language', icon: '🎯' },
  { name: 'Android SDK & Kotlin', icon: '🤖' },
  { name: 'Clean Architecture', icon: '🏛️' },
  { name: 'BLoC & State Mgmt', icon: '🔄' },
  { name: 'Offline SQLite & sqflite', icon: '📦' },
  { name: 'Firebase & Cloud Messaging', icon: '🔥' },
  { name: 'REST APIs & Dio / Retrofit', icon: '🌐' },
  { name: 'React.js & Modern Web', icon: '⚛️' },
  { name: '99.8% Crash-Free Stability', icon: '🛡️' },
  { name: 'Google Play Store CI/CD', icon: '🚀' },
  { name: 'Postman & Git Workflows', icon: '🛠️' },
];

export default function TechMarquee() {
  return (
    <div className="marquee-container" aria-hidden="true">
      {/* Content duplicated for seamless infinite loop */}
      <div className="marquee-content">
        {techItems.map((item, idx) => (
          <div key={`m1-${idx}`} className="marquee-item">
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <div className="marquee-content" aria-hidden="true">
        {techItems.map((item, idx) => (
          <div key={`m2-${idx}`} className="marquee-item">
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
