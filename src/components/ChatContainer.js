import React from 'react';
import { Form, Button, Input } from 'reactstrap';
import '../App.css';
import InputMsg from './InputMsg';
import Users from './Users';
import ChatBox from './ChatBox';
import Socket from '../utils/socket';


class ChatContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            conversations: []
        }
    Socket.on('RECEIVE_BROADCAST',data=>{
      this.setState({conversations:[...this.state.conversations,data]})
    })
    }

    updateChat = (msg) => {
        const newConvo = [...this.state.conversations]
        const newMsg = [{username: this.props.user.username, message: msg, timestamp: Date.now()}]
        Socket.emit('BROADCAST_MESSAGE', {username: this.props.user.username, message: msg, timestamp: Date.now()})
        this.setState({
            conversations: newConvo
        })
        debugger
    }

    render() {
        return (
            <div className="row" id="container">
                <nav className="navbar navbar-expand-md sticky-top d-inline-flex flex-nowrap justify-contents-start align-items-center w-100">
                    <div className="d-inline-flex flex-nowrap justify-contents-start align-items-center">
                        <img height="40px" width="40px" src="http://files.gamebanana.com/img/ico/sprays/4fdf7f156ff7b.png" placeholder="logo" />
                        <h3 className="pt-2 pl-2">Next Chat</h3>
                    </div>
                </nav>
                <Users myUsername={this.props.user.username}/>
                <div className="col-md-9 border-left border-light" >
                    <ChatBox conversations={this.state.conversations}/>
                    <InputMsg updateChat={(msg)=>this.updateChat(msg)} conversations={this.state.conversations}/>
                </div>
            </div>
        )
    }
}

export default ChatContainer;