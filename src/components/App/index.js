import React from 'react'
import './style.scss'
import zafClient from '../../api/zafClient';

function App(props) {
  const [requester, setRequester] = React.useState(null)

  React.useEffect(() => {
    zafClient.get('ticket.requester').then(function(data) {
      const requester = data['ticket.requester']
      setRequester(requester)
    });
  }, [])
  

  return (
    <div className="App">
      <header className="App-header">
        <p className="Requester-name">Requesters name is {requester ? requester.name : ''}.</p>
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
  )
}

export default App
