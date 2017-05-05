import React, {PropTypes, Component} from 'react';

class ChatBar extends Component {
    static propTypes = {
        onNewMessage: PropTypes.func.isRequired,
        user: PropTypes.string.isRequired,
        onNewUsername: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            username: props.user
        }
    }

    // Set the state.username everytime the input field changes
    onUsernameChanged = (e) => {
        this.setState({ username: e.target.value });
    }
  
// Upon pressing the enter key, the username is set as a prop
    onUsernameKeypress = (e) => {
        if(e.key === 'Enter') {
            this.props.onNewUsername(e.target.value);
            console.log('username: ',this.state.username);
        }
    }

    // Set the state.message everytime the input field changes
    onMessageChanged = (e) => {
        this.setState({ message: e.target.value });
    }

// Upon pressing the enter key, the message content is set as a prop - it is attached to the input tag via onKeyPress
    onMessageKeypress = (e) => {
        if(e.key === 'Enter') {
            this.props.onNewMessage(this.state.message);
            // Clear the message field after the props are set and message is submitted
            this.setState({ message: '' });
        }
    }

    render() {
        console.log("Rendering <ChatBar/>");
        return (
            <footer className="chatbar">
                <input className="chatbar-username" placeholder="Your Name (Optional)" value={this.state.user} onChange={this.onUsernameChanged} onKeyPress={this.onUsernameKeypress} />
                <input className="chatbar-message" placeholder="Type a message and hit ENTER" value={this.state.message} onChange={this.onMessageChanged} onKeyPress={this.onMessageKeypress} />
            </footer>
        );
    }
};
export default ChatBar;