import React,{Component} from 'react';

class CommentBox extends Component {
  render() {
    return(
      <div className="comment-box">
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Submit Comment</button>
      </div>
    )
  }
}

export default CommentBox;