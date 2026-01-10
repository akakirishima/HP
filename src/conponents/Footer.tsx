import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <small>&copy; {new Date().getFullYear()} My App</small>
      </div>
    </footer>
  );
}

