import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.post ? props.post.description : '',
      note: props.post ? props.post.note : '',
      createdAt: props.post ? moment(props.post.createdAt) : moment(),
      error: ''
    };
  };
  
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description) {
      this.setState(() => ({ error: 'Please provide description' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          className="text-input"
          type="text"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <textarea
          className="textarea"
          placeholder="Add a note for your post (optional)"
          value={this.state.note}
          onChange={this.onNoteChange}
        >
        </textarea>
        <div>
          <button className="button">Save post</button>
        </div>
      </form>
    )
  }
}
