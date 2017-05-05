import React, {Component} from 'react';
import Message from './Message.jsx';
import Notification from './Notification.jsx';

class MessageList extends Component {
    render() {
        console.log("Rendering <MessageList/>");
        // Loops through all messages contained in the props, maps them to an array which piped into a container rendered into Message.jsx
        var allMessages = this.props.messages.map((message) => {
            if (message.type === 'incomingMessage') {
                return <Message key={message.id} username={message.username} content={message.content} color={message.color} img={message.img} />
            } else {
                return <Notification key={message.id} content={message.content} />
            }
        })
        return (
            <main className='messages'>
                {allMessages}
            </main>
        )
    }
}
export default MessageList;