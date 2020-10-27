import React from 'react'
import './style.scss'
import zafClient from '../../zafClient'
import Footer from '../Footer'


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
      <Footer />
    </div>
  )
}

export default App
