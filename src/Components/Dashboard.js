import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: ""
    };
  }

  componentDidMount() {
    this.setMembers();
  }

  setMembers() {
    var requestURL = 'http://mappy.dali.dartmouth.edu/members.json'
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
      var members = request.response;
      console.log(members);
      console.log(typeof(members));
      var members_string = JSON.stringify(members);
      console.log(members_string);
      this.setState({
        members: members_string
      });
    }.bind(this);
  }

  renderMembers() {
    console.log(this.state.members + "renderMembers")
    return (
      <p>
        {this.state.members}
      </p>
    );
  }

  render() {
    return (
      <div className="Dashboard">
        <p>
          This is the dashboard. {s}
        </p>
        <hr></hr>
        {this.state.members}
      </div>
    );
  }
}

var s = "omg"

export default Dashboard;
