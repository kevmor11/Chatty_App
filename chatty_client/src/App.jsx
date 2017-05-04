import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Bob"},
      messages: [] // messages coming from the server will be stored here as they arrive
    };
  }

  // Once the components have mounted, initialize the socket connection to the server
  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001/');

    // Upon connecting to the server, confirm the confirmation
    this.socket.onopen = (event) => {
      console.log('Connected to the server.');
    }

    // Confirm that the client side can recieve messages from the server
    this.socket.onmessage = (event) => {
      console.log('event:', event)
      const incomingMessage = JSON.parse(event.data);
      console.log('Incoming message:', incomingMessage);
      this.setState(this.state.messages = this.state.messages.concat(incomingMessage));
    }
  }

  // Formats the data set (message) acquired using onNewMessage
  makeMessage(username, content) {
    return {
      username,
      content
    }
  }

  // Passed to ChatBar module and triggered upon press of the Enter key
  // message prop is then sent to the server-side via the socket as a JSON string
  onNewMessage = (username, content) => {
    const newMessage = this.makeMessage(username, content);
    this.socket.send(JSON.stringify(newMessage));
  }

  // Renders html, including the contained modules
  render() {
    console.log("Rendering <App/>");
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={this.state.messages} />
        <ChatBar user={this.state.currentUser.name} onNewMessage={this.onNewMessage} />
      </div>
    );
  }
}
export default App;
