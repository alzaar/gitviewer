import React from 'react';
import Repo from './Repo';
class Profile extends React.Component {

  render(){
    console.log(this.props.userRepos);
    return (
      <div>
        <ul className='list-group'>
        {
          this.props.userRepos.map(repo => {
            return <Repo
                    repo={repo}
                    key={repo.id}
                    {...this.props}
            />
          })
        }
        </ul>
      </div>
    );
  }
}
export default Profile;
