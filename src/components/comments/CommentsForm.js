import React from 'react';

export default class CommentsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      note: '',
      error: ''
    };
  };

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };


  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.note || !this.state.name) {
      this.setState(() => ({ error: 'Please provide note and name' }));
    } else {
      this.setState(() => ({ error: '' }));
    }
    this.props.onSubmit(
      this.props.postId,
      {
        name: this.state.name,
        note: this.state.note
      }
    );
    
  this.setState(() => ({ name: '', note: '' }))  ;  
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <input
          className="text-input"
          type="text"
          placeholder="name"
          value={this.state.name}
          onChange={this.onNameChange}
        />
        <input
          className="text-input"
          type="text"
          placeholder="comment"
          value={this.state.note}
          onChange={this.onNoteChange}
        />
        <div>
          <button className="button">Add comment</button>
        </div>
      </form>
    )
  }
}; 
