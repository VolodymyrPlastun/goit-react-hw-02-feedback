import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Section from './Section';
import s from './App.module.css';

class App extends Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0
}
  
      goodBtn = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
    };

        neutralBtn = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    };

          badBtn = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
          };
  
  countTotalFeedback = () => {
    const totalFeedback = Object.values(this.state);
    return totalFeedback.reduce((acc, value) => {
      acc += value;
      return acc;
    })     
  } 

  countPositiveFeedbackPercentage = () => {
    return Math.trunc(this.state.good / this.countTotalFeedback() * 100);
  }

  
  render() {
    const stateArr = Object.values(this.state);
    console.log(stateArr);
  return (
    <div className={s.container}>
      <div>
        <Section title="Please leave feedback">
     <FeedbackOptions
          goodBtn={this.goodBtn}
          neutralBtn={this.neutralBtn}
          badBtn={this.badBtn}
        />
        </Section>
           <Section title="Statistics">
        {this.countTotalFeedback() > 0 ? <Statistics
                    goodState={this.state.good}
                    neutralState={this.state.neutral}
                    badState={this.state.bad}
          total={this.countTotalFeedback()}
          posPersentage={this.countPositiveFeedbackPercentage()}/>
                : <Notification message="There is no feedback"/>}
               </Section> 
      </div>
    </div>
  );
  }

};

export default App;