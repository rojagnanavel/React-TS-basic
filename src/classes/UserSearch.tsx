import { Component } from "react";

interface user {
    name: string;
    age: number;
}

interface UserSearchProps{
    users:user[]
}

interface UserSearchState{
    name: string;
    user:user | undefined;
};

class UserSearch extends Component<UserSearchProps>{
    state:UserSearchState ={
        name: '',
        user: undefined
    };

    onClick(){
        const foundUser = this.props.users.find((user) => {
            return user.name === this.state.name;
        });
        this.setState({user: foundUser});
    
    };

    render() {
        const {name, user} =  this.state;
        return (<div>
            User Search
            <input value={name} onChange={(e) => this.setState({name: e.target.value})} />
            <button onClick={this.onClick}>Find User</button>
            <div>
                {user && user.name}
                {user && user.age}
            </div>
        </div>)
    }
}

export default UserSearch; 