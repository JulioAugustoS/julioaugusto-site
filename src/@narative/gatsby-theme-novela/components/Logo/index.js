import React from 'react';

export default function Logo({ fill }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <h1 style={{
        fontSize: 30,
        color: fill
      }}>
        JULIO AUGUSTO
      </h1>
      <h4 style={{
        color: fill === "#000"
          ? '#2980b9'
          : '#3498db'
      }}>
        Mobile Software Engineer
      </h4>
    </div >
  );
}