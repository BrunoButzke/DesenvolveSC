import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MyButton from '../util/MyButton.jsx';

import Answers from './Answers.jsx';
import Popup from './Popup.jsx';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            total: this.props.data.length,
            showButton: false,
            questionAnswered: false,
            score: 0,
            displayPopup: 'flex',
            popupPrefix: 'Você fez ',
            popupSufix: 'pontos, aumente seus pontos chamando seus pais para jogar!'
        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.handleShowButton = this.handleShowButton.bind(this);
        this.handleStartQuiz = this.handleStartQuiz.bind(this);
        this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
    }

    componentWillMount() {
        let { count } = this.state;
        this.insertData(count);
    }

    insertData(count) {
        this.setState({
            question: this.props.data[count].question,
            answers: [  this.props.data[count].answers[0], 
                        this.props.data[count].answers[1], 
                        this.props.data[count].answers[2], 
                        this.props.data[count].answers[3] 
                    ],
            correct: this.props.data[count].correct,
            count: this.state.count + 1
        });
    }

    handleShowButton() {
        this.setState({
            showButton: true,
            questionAnswered: true
        })
    }
    
    nextQuestion() {
        let { count, total} = this.state;

        if(count === total){
            this.setState({
                displayPopup: 'flex'
            });
        } else {
            this.insertData(count);
            this.setState({
                showButton: false,
                questionAnswered: false
            });
        }
    }

    handleStartQuiz() {
        this.setState({
            displayPopup: 'none',
            count: 1
        });
    }

    handleIncreaseScore() {
        this.setState({
            score: this.state.score + 127
        });
    }

  render() {

    let { count, total, question, answers, correct, showButton, questionAnswered, displayPopup, score, popupPrefix, popupSufix} = this.state;

    return (
      <div className="container">

       <Popup style={{display: displayPopup}} 
             score={score} 
             total={total} 
             startQuiz={this.handleStartQuiz}
             popupPrefix={popupPrefix}
             popupSufix={popupSufix}
        />
        
        <div className="row">
            <div className="col-lg-12 col-md-10">
                <div id="question">
                    <h4 className="bg-light">Pergunta {count}/{total}</h4>
                    <MyButton
                        text="Saiba mais"
                        bck='#FF9800'
                        color='#fff'
                    />
                    <p>{question}</p>
                </div>
                

                <Answers 
                    answers={answers} 
                    correct={correct} 
                    showButton={this.handleShowButton} 
                    isAnswered={questionAnswered} 
                    increaseScore={this.handleIncreaseScore}
                />


                <div id="submit">
                    {showButton ? 
                    <button className="fancy-btn" 
                            onClick={this.nextQuestion} >
                    {count === total ? 'Finalizar Lista de exercicios' : 'Proxima questão'}
                    </button> : <span></span>}
                </div>
            </div>
        </div>
      </div>
    )
  }
}

Main.propTypes = {
    data: PropTypes.array,
};

export default Main;