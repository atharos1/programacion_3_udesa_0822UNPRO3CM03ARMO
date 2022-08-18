import React, { Component } from "react";
import User from "../User/User";

class UserList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.usuarios.map((usuario, i) => {
                        return (
                            <div key={usuario + "_" + i}>
                                <User nombre={usuario} />
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}

export default UserList;