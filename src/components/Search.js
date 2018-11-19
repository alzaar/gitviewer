import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef();
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault()
    if (!this.myRef.current.value) {
      alert('please enter a username')
    }

    this.props.onSubmit(this.myRef.current.value);
    this.myRef.current.value = '';
  }
  render(){
    const {repo} = this.props
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Search GitHub Users</label>
          <input className='form-control' ref={this.myRef} type='text' />
        </form>
      </div>
    );
  }
}
export default Search;
