import React,{Component} from 'react';
import { connect } from 'react-redux';

import * as actions from './../actions';

class CommentBox extends Component {

  constructor(props) {
    super(props);

    this.state = {comment:''}
  }

  _onHandleChange(event) {
    this.setState({comment:event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({comment:''});
  }
  render() {
    return(
      <form className="comment-box"
            onSubmit={this._handleSubmit.bind(this)}>
        <h4>Add a comment</h4>
        <textarea
          value={this.state.comment}
          onChange={this._onHandleChange.bind(this)}
          name="" id="" cols="30" rows="10">
        </textarea>
        <div>
          <button action="submit">Submit Comment</button>
        </div>

      </form>
    )
  }
}

export default connect(null,actions)(CommentBox);