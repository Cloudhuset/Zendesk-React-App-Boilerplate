import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import { connect } from 'react-redux';

function App(props) {
  const { users } = props;
  const { requester = {} } = users;
  return (
    <div className="App">
      <header className="App-header">
        <p className="Requester-name">Requesters name is {requester.name}.</p>
      </header>
      <footer className="app-footer">
      <a
          className="app-link"
          href="https://cloudhuset.dk"
          target="_blank"
          rel="noopener noreferrer"
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
    </div>
  );
}

App.propTypes = {
  users: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

export default connect(mapStateToProps)(App);
