import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

const Data = {
  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: [
    {
      id: "1",
      username: "Bob",
      content: "Has anyone seen my marbles?",
    },
    {
      id: "2",
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good.",
    }
  ]
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = Data;
    this.id = 1;
  }
  
get newID() {
  return this.id += 2;
}

  makeMessage(username, content) {
    const id = this.newID;
    return {
      id,
      username,
      content
    }
  }

  onNewMessage = (username, content) => {
    const newMessage = this.makeMessage(username, content);
    this.setState({
      messages: this.state.messages.concat(newMessage),
    });
  }

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
