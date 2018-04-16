import React from 'react';

export default class AuthProfileForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.userAuth.name,
      error: this.props.userAuth.error
    };
  }

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.name);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form">
        <input
          className="text-input"
          type="text"
          value={this.state.name}
          onChange={this.onNameChange}
        />
        <div>
          <button className="button">Save</button>
        </div>
      </form>
    );
  };
}

