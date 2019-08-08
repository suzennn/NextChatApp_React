import React from 'react';
import './App.css';
import ChatContainer from './components/ChatContainer';
import Socket from './utils/socket';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
    Socket.emit('NEW_USER')  // Once the chat app is loaded, we tell server that we are joining
    
    Socket.on('GET_CURRENT_USER', newUser => {
      this.setState({user: newUser})
    })
    // we got newUser object from the server
    // which we can use to do whatever we want
    // such as displaying the name and id
  }

  render() {
    return (
      <>
        <ChatContainer user={this.state.user}/>
      </>
    )
  }
}

export default App;
