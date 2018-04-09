import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, searchInTitle, searchInText } from '../../actions/filters';
import { Link } from 'react-router-dom';

export class PostsListFilters extends React.Component {



  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = (e) => {
    if (e.target.value === 'title') {
      this.props.searchInTitle();
    } else if (e.target.value === 'text') {
      this.props.searchInText();
    }
  };

  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              className="text-input"
              placeholder="Search posts"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="title">Title</option>
              <option value="text">Text</option>
            </select>
          </div>
        </div>
        {
          this.props.isAuthenticated &&
          <Link className="button button-add" to="/create">Add new</Link>
        }

      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  filters: state.filters,
  isAuthenticated: !!state.auth.uid
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  searchInTitle: () => dispatch(searchInTitle()),
  searchInText: () => dispatch(searchInText()),

});

export default connect(mapStateToProps, mapDispatchToProps)(PostsListFilters);