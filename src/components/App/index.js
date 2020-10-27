import React from 'react'
import './style.scss'
import zafClient from '../../zafClient'
import Footer from '../Footer'

const App = () => {
  const [requester, setRequester] = React.useState(null)

  React.useEffect(async () => {
    const data = await zafClient.get('ticket.requester')
    const requester = data['ticket.requester']
    setRequester(requester)
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
