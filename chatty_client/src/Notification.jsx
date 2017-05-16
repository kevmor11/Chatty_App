import React, {PropTypes, Component} from 'react';

class Notification extends Component {
    static propTypes = {
        message: PropTypes.string
    }

    render() {
        return (
            <div className="message system">
                {this.props.content}
            </div>
        )
    }
}
export default Notification;