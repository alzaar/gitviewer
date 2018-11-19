import React from 'react';

class Repo extends React.Component {

  render(){
    const {repo} = this.props
    return (
      <div>
        <ul className='list-group -item'>
          <a className='h4' href={repo.html_url} target='blank'>
            {repo.name.replace(/\b\w/g, l => l.toUpperCase())}
          </a>Description:
        </ul>
      </div>
    );
  }
}
export default Repo;
