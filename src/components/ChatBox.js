import React from 'react';
import moment from 'moment';
import '../App.css';

class ChatBox extends React.Component {

    componentDidUpdate(){
        this.end.scrollIntoView()
    }

    render() {
        return (
            <div className="w-100 pb-3" id="chatBox">
                {
                    this.props.conversations.map((bubble, index) =>
                        <div className="row align-items-center pl-4 pt-3" key={index}>
                            <div className="rounded-circle bg-info d-flex justify-content-center align-items-center mr-2" style={{ height: '40px', width: '40px', fontWeight: '700' }}>
                                {bubble.username[0]}
                            </div>
                            <div className="p-2" id="bubble">
                                <div style={{ fontWeight: '700' }}>{bubble.username}</div>
                                <div className="flex-wrap">{bubble.message}</div>
                                <div className="text-muted text-right">{moment(new Date(bubble.timestamp)).format("hh:mm, DD/MM/YYYY")}</div>
                            </div>
                        </div>
                    )
                }
                <div ref={(elem => {this.end = elem})}></div>
            </div>
        )
    }

}
export default ChatBox