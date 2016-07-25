import { renderComponent, expect } from './../test_helper';
import CommentBox from './../../src/components/comment_box';

describe('CommentBox', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has a class comment-box',() => {
    expect(component.hasClass('comment-box')).to.be.true
  });

  it('has a text area',() => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
    //expect(component)
  });

  describe('entering some text',() => {

    beforeEach(() => {
      component.find('textarea').simulate('change','new commnent');
    });

    it('shows text in textarea',() => {

    });

    it('when submitted, clears the input',() => {

    });
  });


});