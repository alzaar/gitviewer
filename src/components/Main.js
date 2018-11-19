import React from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';
import $ from 'jquery';

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: 'alzaar',
      userData: {},
      userRepos: [],
      perPage: 5
    }
  }
  getUserData = () => {
    $.ajax({
      url: `https://api.github.com/users/${this.state.username}?client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}`,
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({userData: data})
      },
      error: (xhr, status, err) => {
        alert(err);
        this.setState({username: null})
      }
    })
  }

  getUserRepos = () => {
		$.ajax({
			url: 'https://api.github.com/users/'+this.state.username+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created',
			dataType: 'json',
			cache: false,
			success: function(data){
        console.log(data);
				this.setState({userRepos: data});
			}.bind(this),
			error: function(xhr, status, err){
				this.setState({username: null});
				alert(err);
			}.bind(this)
		});
	}


  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
  }



    render() {
      const style = {
        'marginTop': '60px'
      }
      return (
        <React.Fragment>
          <div style={style} >
            <Profile name={this.state.userData.login} bio={this.state.userData.bio} image={this.state.userData.avatar_url}
            publicRepos={this.state.userData.public_repos}
            publicGists={this.state.userData.public_gists}
            followers={this.state.userData.followers}
            location={this.state.userData.location}
            email={this.state.userData.email}
            link={this.state.userData.html_url}
            following={this.state.userData.following}
            userRepos={this.state.userRepos}
            />
          </div>
        </React.Fragment>
      );
    }
}

Main.propTypes = {
  clientId: PropTypes.string,
  clientSecret: PropTypes.string
}

Main.defaultProps = {
  clientId: '',
  clientSecret: ''
}

export default Main;
