import React, { Component } from 'react';
import Profile from './Profile';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
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
      this.setState({
        members: members
      });
      console.log(this.state.members[1].name);

    }.bind(this);
  }

  render() {
    return (
      <div className="Dashboard">
        <p>
          This is the dashboard.
        </p>
        {this.state.members.map(function(member) {
          return (
            <div key={member.url} className="member">
              {member.name}
            </div>
          )
        })}
      </div>
    );
  }
}

export default Dashboard;
