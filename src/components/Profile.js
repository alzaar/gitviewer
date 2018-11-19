import React from 'react';

class Profile extends React.Component {

  render(){
    const viewProfile= `www.github.com/${this.props.name}`;
    return (
      <div>
        <div className="card">
          <div className="card-header">
            {this.props.name}
          </div>
          <div className="card-body">
            <div className='col-md-4'>
              <img src={this.props.image} className='img-style rounded float-left' alt='profile image' />
            </div>
            <div className='col-md-8' >
              <div className='row'>
                <div className='col-md-12'>
                  <span className="badge badge-primary">Public Repos: {this.props.publicRepos}</span>
                  <span className="badge badge-success">Public Gists: {this.props.publicGists}</span>
                  <span className="badge badge-info">Followers: {this.props.followers}</span>
                  <span className="badge badge-danger">Following: {this.props.following}</span>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12' >
                  <ul className='list-group'>
                    <li className='list-group-item'><strong>Username: </strong>{this.props.name}</li>
                    <li className='list-group-item'><strong>Location: </strong>{this.props.location}</li>
                    <li className='list-group-item'><strong>Email: </strong>{this.props.email}</li>
                  </ul>
                </div>
              </div>
              <br />
              <a className='btn btn-outline-success' href={this.props.link} target='blank' >Visit Profile</a>
            </div>
            </div>
        </div>
      </div>
    );
  }
}
export default Profile;
