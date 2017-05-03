import React, {PropTypes, Component} from 'react';

class Message extends Component {
    static propTypes = {
        username: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired
    }

    render() {
        console.log("Rendering <Message/>");
        return (
            <div>
                <div className="message">
                    <span className="message-username">{this.props.username}</span>
                    <span className="message-content">{this.props.message}</span>
                </div>
                <div className="message system">
                    Anonymous changed their name to {this.props.username}.
                </div>
            </div>
        )
    }
}
export default Message;