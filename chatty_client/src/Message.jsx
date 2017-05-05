import React, {PropTypes, Component} from 'react';

class Message extends Component {
    static propTypes = {
        username: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        img: PropTypes.string
    }

    render() {
        console.log("Rendering <Message/>");
        let imgTag;
        if(this.props.img) {
            imgTag = (<img style={{"maxWidth": "30%", "float": "right"}} src={this.props.img} />)
        }

        return   (
            <div className="message">
                <span className="message-username" style={{color: this.props.color}}>{this.props.username}</span>
                <span className="message-content">{this.props.content}{imgTag}</span>
                
            </div>
        )
    }
}

export default Message;