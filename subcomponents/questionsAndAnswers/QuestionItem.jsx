import React from 'react';
import QuestionAnswerItem from './QuestionAnswerItem.jsx';

class QuestionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: []
    }
    this.moreAnswersClick = this.moreAnswersClick.bind(this);
  }

  componentDidMount() {
    var oneAnswer = [Object.values(this.props.question.answers)[0]];
    this.setState({
      answers: oneAnswer
    })
  }

  moreAnswersClick() {
    var allAnswers = Object.values(this.props.question.answers);
    this.setState({
      answers: allAnswers
    })
  }
  render() {
    return (
      <div className='questionItem' >
        <div className='question'> Q: {this.props.question.question_body} </div>
        Helpful?
        <div className='questionYesButton'>Yes({this.props.question.question_helpfulness})</div>
        {Object.values(this.state.answers).map((answer, key) => {
            return <QuestionAnswerItem answer={answer} key={key} />
          })}
        <button className='moreAnswers' onClick={this.moreAnswersClick}>More Answers</button>
      </div>
    )
  }
}

export default QuestionItem;