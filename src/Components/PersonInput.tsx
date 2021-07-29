import React from "react";
import axios from "axios";

export default class PersonInput extends React.Component{

    state = {
        name: '',
        id: 0
    };

    handleSubmit = (e:any) => {
        e.preventDefault();

        const user = {
            name: this.state.name
        }

        axios.post('https://jsonplaceholder.typicode.com/users', {user})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    handleSubmitDel = (e:any) => {
        e.preventDefault();

        axios.delete(`https://jsonplaceholder.typicode.com/users/ ${this.state.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };

    handleChange = (e:any) =>{
        e.preventDefault();

        this.setState({id: e.target.value})
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmitDel}>
                    <label>
                        Person ID:
                        <input type="text" name="text" onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Delete" />
                </form>
            </div>
        );
    }
};

