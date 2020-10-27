import React from 'react'
import './style.scss'

const Component = () => {
  return (
    <footer className="app-footer">
      <a
        className="app-link"
        href="https://cloudhuset.dk"
        target="_blank"
      >
        Made with&nbsp;
        <span role="img" aria-label="Love">
          ❤️
        </span>
        &nbsp;
        and
        &nbsp;
        <span role="img" aria-label="Love">
          ☕
        </span>
        &nbsp;by Cloudhuset
      </a>
    </footer>
  )
}

export default Component