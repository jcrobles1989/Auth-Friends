import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendForm extends React.Component {
  initialState = {
    friend: {
      name: "",
      age: "",
      email: "",
    },
  };

  state = {
    friend: {
      name: "",
      age: "",
      email: "",
    },
  };

  addFriend = () => {
    axiosWithAuth()
      .post("/api/friends", this.state.friend)
      .then((res) => {
        console.log(
          `Added new friend successfully: ${JSON.stringify(res.data)}`
        );
      })
      .catch((err) => console.log(`Failed to add new friend: ${err}`));
  };

  handleChanges = (e) => {
    this.setState({
      ...this.state.friend,
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value,
        [e.target.name]: e.target.value,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getFriends();
    this.addFriend(this.state.friend);
    this.setState(this.initialState);
  };

  render() {
    return (
      <div id="friend-form">
        <form>
          <input
            type="text"
            name="name"
            value={this.state.friend.name}
            placeholder="Name"
            onChange={this.handleChanges}
          />
          <br />
          <input
            type="text"
            name="age"
            value={this.state.friend.age}
            placeholder="Age"
            onChange={this.handleChanges}
          />
          <br />
          <input
            type="email"
            name="email"
            value={this.state.friend.email}
            placeholder="Email"
            onChange={this.handleChanges}
          />
        </form>
        <button onClick={this.handleSubmit}>Add Friend</button>
      </div>
    );
  }
}

export default FriendForm;
