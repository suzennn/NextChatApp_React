import React from 'react';
import { Form, Button, Input } from 'reactstrap';
import '../App.css';

class InputMsg extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            txt: ''
        }
    }

    sendMsg = (e) => {
        e.preventDefault()
        this.props.updateChat(this.state.txt)
        this.setState({txt: ''})
    }

    inputTxt = (e) => {
        this.setState({txt: e.target.value})
    }

    render() {
        const {txt} = this.state
        return (
            <Form onSubmit={this.sendMsg} className="row d-flex justify-content-between align-items-center mx-2 pb-2" id="submitForm">
                <Input id="inputTxt" type="text" placeholder="type here..." onChange={this.inputTxt} value={txt}/>
                <Input id="btn" type="image" style={{width:'50px',height:'50px'}} src="https://desight.pro/upload/img/linerix-free/paper-577ac11b97cbc-big.png" alt="Enter" disabled={!txt.length}/>
            </Form>
        )
        }
}

export default InputMsg;