import React from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';
import Repo from './Repo';
import $ from 'jquery';

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: 'alzaar',
      userData: [],
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
        console.log(data);
        this.setState({userData: data})
      },
      error: (xhr, status, err) => {
        alert(err);
        this.setState({username: null})
      }
    })
  }

  componentDidMount() {
    this.getUserData();
  }


    render() {
      const style = {
        'marginTop': '60px'
      }
      return (
        <React.Fragment>
          <div style={style} >
            <Profile userData={this.props.userData} />
            <Repo />
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
