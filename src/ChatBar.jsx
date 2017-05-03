import React, {PropTypes, Component} from 'react';

class ChatBar extends Component {
    static propTypes = {
        onNewMessage: PropTypes.func.isRequired,
        user: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            username: props.user
        }
    }

    onUsernameChanged = (e) => {
        this.setState({ username: e.target.value });
    }

    onMessageChanged = (e) => {
        this.setState({ message: e.target.value });
    }

    onMessageKeypress = (e) => {
        if(e.key === 'Enter') {
            // this.props.onNewUsername(this.state.username);
            this.props.onNewMessage(this.state.username, this.state.message);
            this.setState({ message: '' });
        }
    }

    render() {
        console.log("Rendering <ChatBar/>");
        return (
            <footer className="chatbar">
                <input className="chatbar-username" placeholder="Your Name (Optional)" value={this.state.user} onChange={this.onUsernameChanged} onKeyPress={this.onMessageKeypress} />
                <input className="chatbar-message" placeholder="Type a message and hit ENTER" value={this.state.message} onChange={this.onMessageChanged} onKeyPress={this.onMessageKeypress} />
            </footer>
        );
    }
};
export default ChatBar;