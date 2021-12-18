import React from 'react';


class QuestionAnswerItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.answer);
    return(
      <div>
        <div className='answer'>A: {this.props.answer.body}</div>
        Helpful?
        <div className='answerYesButton'>Yes({this.props.answer.helpfulness})</div>
      </div>
    )
  }
}

export default QuestionAnswerItem;