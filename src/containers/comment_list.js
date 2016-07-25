import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {

  _renderList() {
    return this.props.comments.map((comment) => {

      return(
        <li key={comment}>{comment}</li>
      )
    })
  }
  render() {
    return (
      <ul className="comment-list">
        {this._renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {comments: state.comments};
}

export default connect(mapStateToProps)(CommentList);