import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usuarioDioLike: false
        }
    }

    render() {
        return (
            <div>
                <p>¡Hola, {this.props.nombre}!</p>
                {
                    this.state.usuarioDioLike === true ? <p>Te gusta esto</p> : ""
                }
                <button onClick={() => this.darLike()}>
                    {
                        this.state.usuarioDioLike ? "UNLIKE" : "LIKE"
                    }
                </button>
            </div>
        );
    }

    darLike() {
        this.setState({
            usuarioDioLike: !this.state.usuarioDioLike
        });
    }
}

export default User;