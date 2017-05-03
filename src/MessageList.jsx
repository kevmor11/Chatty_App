import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
    render() {
        console.log("Rendering <MessageList/>");
        var allMessages = this.props.messages.map((message) => {
            return <Message key={message.id} username={message.username} message={message.content} />
        })
        return (
            <main className='messages'>
                {allMessages}
            </main>
        )
    }
}
export default MessageList;