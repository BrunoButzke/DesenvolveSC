import React, { Component } from 'react';
import MyButton from '../util/MyButton.jsx';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';


class Popup extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            time: 'start',
            title: 'Bem vindo',
            text: 'Nessa plataforma você e seu filho tem que mostrar que são uma equipe fenomenal. <br /><br />',
            buttonText: 'Vamos jogar' 
        };
        
        this.popupHandle = this.popupHandle.bind(this);
    }
    
    popupHandle() {
        let { time } = this.state;
        
        if(time === 'start'){
            this.setState({
                time: 'end',
                title: 'Parabéns!',
                buttonText: 'Recomeçar'
            });

            //START THE QUIZ
            this.props.startQuiz();
        } else {
            
            //FINISHED QUIZ            
            location.reload();// restart the application
        }
    }
     
    createMarkup(text) {
        return {__html: text};
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
    finalityString: PropTypes.string,
    text: 'Vocês realmente são uma equipe sensacional :D. <br />' + this.props.popupPrefix + '<strong>' + this.props.score.toFixed(2) + '</strong> ' + this.props.popupSufix 
        })
    }

    
    render() {
       
        let { title, text, buttonText } = this.state;
        let { style } = this.props;

        
        return (
            <Fade delay={500}>
                <div className="popup-container" style={style}>
                    <div className="container">
                        <div className="ml-5 col-md-10 col-10">
                            <div className="popup">
                                <h1>{title}</h1>
                                <p dangerouslySetInnerHTML={this.createMarkup(text)} />
                                <span onClick={this.popupHandle}>
                                    <MyButton
                                        text={buttonText}
                                        bck='#FF9800'
                                        color='#fff'
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        );
    }
}

export default Popup; 

