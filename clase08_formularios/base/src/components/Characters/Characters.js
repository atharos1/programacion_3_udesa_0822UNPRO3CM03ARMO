import React, {Component} from 'react';
import Card from '../Card/Card'
const info = [
    {
        img: 'ahsoka.jpg',
        name: 'Ashoka',
        description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
        extra: 'StarWars',
    }, 
    {
        img: 'anakin.jpg',
        name: 'Anakin',
        description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
        extra: 'StarWars',
    },
    {
        img: 'batman.jpg',
        name: 'Batman',
        description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
        extra: 'DC Comics',
    },
    {
        img: 'hulkSmall.jpg',
        name: 'Hulk',
        description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
        extra: 'Marvel',
    },
    {
        img: 'kyloRen.jpg',
        name: 'Kylo Ren',
        description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
        extra: 'StarWars',
    },       
]; 

class Characters extends Component{
    constructor(){
        super();
        this.state = {
            
        }
    }

    render(){
        return(
            <div className="row card-container">
              {info.map( (characterData, idx) => <Card data={characterData} key={characterData.name + idx} /> )}
            </div>
        )
    }
}

export default Characters;