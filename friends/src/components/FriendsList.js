import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendForm from "./FriendForm";

class FriendsList extends React.Component {
  state = {
    friendsList: [],
  };

  componentDidMount() {
    this.getFriends();
  }

  getFriends = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        this.setState({
          friendsList: res.data,
        });
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="friends-list">
        {this.state.friendsList.map((friend, index) => (
          <div className="friend-card" key={index}>
            <h2>{friend.name}</h2>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </div>
        ))}
        <div className="form-container">
          <FriendForm getFriends={this.getFriends} />
        </div>
      </div>
    );
  }
}

export default FriendsList;
