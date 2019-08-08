import React from 'react';
import '../App.css';
import Socket from '../utils/socket';

class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeUsers: []
        }
        Socket.on('UPDATE_USER_LIST', users => {
            console.log(users)
            this.setState({
                activeUsers: users
            })
        })
    }


    render() {
        return (
            !this.state.activeUsers.length == 0 ?
                <div className="d-flex align-items-start col-md-3 bg-dark border-right border-light w-100" id="usersBox">      {/*Make user show collapsible */}
                    <div className="row p-2">
                        <div className="text-light w-100">You appear as : </div>
                        <div className="d-inline-flex align-items-center p-2">
                            <div className="rounded-circle mr-2 d-flex justify-content-center align-items-center" style={{ height: '30px', width: '30px', background: 'papayawhip' }}>
                                Me
                            </div>
                            <div className="text-light text-muted">{this.props.myUsername}</div>
                        </div>
                        <div className="text-light w-100 pt-3">Other Users: </div>
                        {
                            this.state.activeUsers.map((user, index) =>
                                <div className="d-inline-flex align-items-center p-2 w-100" key={'othUser' + index}>
                                    <div className="bg-info rounded-circle mr-2 d-flex justify-content-center align-items-center" style={{ height: '30px', width: '30px' }}>
                                        {user.username[0]}
                                    </div>
                                    <div className="text-light text-muted">{user.username}</div>
                                </div>
                            )
                        }
                    </div>
                </div>
                  
        :
            <div className="d-flex align-items-start col-md-3 bg-dark border-right border-light w-100" id="usersBox">      {/*Make user show collapsible */}
                <div className="row p-2">
                    <div className="text-light w-100">You appear as : </div>
                    <div className="d-inline-flex align-items-center p-2">
                        <div className="rounded-circle mr-2 d-flex justify-content-center align-items-center" style={{ height: '30px', width: '30px', background: 'papayawhip' }}>
                            Me
                            </div>
                        <div className="text-light text-muted">{this.props.myUsername}</div>
                    </div>
                    <div className="text-light w-100 pt-3">Other Users: </div>

                            <div className="d-inline-flex align-items-center p-2 w-100">
                                <div className="text-muted" style={{fontWeight:'400i'}}>there are no users online :(</div>
                            </div>

                </div>
            </div>
        )
    }

}

export default Users;