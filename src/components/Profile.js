import React from 'react';

class Profile extends React.Component {

  render(){
    return (
      <div>
        <h5>{this.props.userData.name}</h5>
      </div>
    );
  }
}
export default Profile;
