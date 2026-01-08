import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white p-6 mt-8">
      <div className="text-center">
        <p>&copy; {new Date().getFullYear()} MVSR College Lost & Found. All Rights Reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/dashboard" className="hover:underline">Dashboard</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
