import React from "react";
import axios from 'axios';

export default class PersonList extends React.Component{
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then( res => {
                console.log(res);
                this.setState({persons: res.data});
            })
    }

    render(){
        return(
            <div>
                <ul>z
                    {this.state.persons.map( (person:any) => <li key={person.id}> {person.name}</li>)}
                </ul>
            </div>
        )

    }
};