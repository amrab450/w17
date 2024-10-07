import React from 'react';

/**
 * Renders the Sidebar component.
 *
 * @param {object} props
 * @param {string} props.title - The title of the sidebar.
 * @returns {JSX.Element} The Sidebar component.
 */
function Sidebar({ title }) {
  return (
    <div className="sidebar">
      <h2>{title}</h2>
      <ul>
        <li><a href="#">Genres</a></li>
        <li><a href="#">Artists</a></li>
        <li><a href="#">Tracks</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;

