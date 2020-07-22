import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

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
          friendsList: res.data.data,
        });
        console.log(res, "from FriendsList");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="friends-list">
        {this.state.friendsList.map((friend) => (
          <p>{friend.name}</p>
        ))}
      </div>
    );
  }
}

export default FriendsList;
