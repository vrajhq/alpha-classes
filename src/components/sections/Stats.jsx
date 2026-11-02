import React from 'react';

export const Stats = () => {
  const stats = [
    { label: 'Students Taught', value: '1000+' },
    { label: 'Success Rate', value: '98%' },
    { label: 'Expert Faculty', value: '15+' },
    { label: 'Years Experience', value: '10+' },
  ];

  return (
    <section className="stats-section" aria-label="Alpha Classes statistics">
      <dl className="stats-grid page-width">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-item">
            <dt className="stat-label">{stat.label}</dt>
            <dd className="stat-value">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};
