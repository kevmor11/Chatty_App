import React, {Component} from 'react';

module.exports = function(props) {
  return (
    <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
    </footer>
  );
};