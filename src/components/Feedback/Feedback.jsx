import React, {Component} from 'react';
import s from './Feedback.module.css';

class FeedbackForm extends Component {
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

    render() {
        return (
        <div>
            <h2 className={s.title}>Please leave feedback</h2>
            <ul className={s.BtnList}>
                <li className={s.BtnListItem}><button onClick={this.goodBtn} type="button">Good</button></li>
                <li className={s.BtnListItem}><button onClick={this.neutralBtn} type="button">Neutral</button></li>
                <li className={s.BtnListItem}><button onClick={this.badBtn} type="button">Bad</button></li>
            </ul>
            <div>
                <h2 className={s.title}>Statistics</h2>
                <ul>
                    <li className={s.StatisticsItem}>Good: <span>{this.state.good}</span></li>
                    <li className={s.StatisticsItem}>Neutral: <span>{this.state.neutral}</span></li>
                    <li className={s.StatisticsItem}>Bad: <span>{this.state.bad}</span></li>
                    <li className={s.StatisticsItem}>Total: <span></span></li>
                    <li className={s.StatisticsItem}>Positive feedback: <span></span></li>
                </ul>
            </div>
        </div>
        )
    }
}

export default FeedbackForm;