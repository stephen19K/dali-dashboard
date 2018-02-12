import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "name",
      iconUrl: "",
      url: "",
      message: "",
      lat_long: "",
      project: ""
    }
  }

  render() {
    return (
      <div className="Profile">
        <p>
          {this.state.name}
        </p>
      </div>
    )
  }
}

export default Profile;
