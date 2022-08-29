import React, {Component} from 'react';
import './card.css';

class Card extends Component{
    constructor(props){
        super(props)
        this.state = {
            viewMore: false,
            text:'Ver más',
            selected: false,
        }
    }
    viewMore(){
        if(this.state.viewMore){
            this.setState({
                viewMore: false,
                text: 'Ver más'
            })
        } else {
            this.setState({
                viewMore: true,
                text: 'ver menos'
            })            
        }
    }

    selected(){
        if(this.state.selected){
            this.setState({
                selected: false,
            })
        } else {
            this.setState({
                selected: true,
            })
        }
    }

    render(){
        return (
            <div className={`character-card ${this.state.selected ? 'active' : ''}`} onDoubleClick={ ()=>this.selected()}>
                <img src={`/assets/images/characters/${this.props.data.img}`} alt="" />
                <h4>{this.props.data.name}</h4>
                <p>{this.props.data.description}</p>
                <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>Universe: {this.props.data.extra}</p>
                <p className='more' onClick={()=>this.viewMore()}>{this.state.text}</p>
            </div>
        );
    }
}

export default Card