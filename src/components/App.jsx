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

  
leaveFeedback = (feedback) => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
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
    const btns = Object.keys(this.state);
    const stats = Object.entries(this.state);
  return (
    <div className={s.container}>
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={btns}
            onLeaveFeedback={this.leaveFeedback}
        />
        </Section>
           <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? <Statistics
            state={stats}
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