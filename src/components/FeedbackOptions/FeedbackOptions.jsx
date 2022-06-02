import s from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
   <div className={s.BtnList}>
        {options.map(option => (
<button key={option} className={s.BtnListItem}  onClick={() => onLeaveFeedback(option)} type="button">{option}</button>
        ))}
            </div>
);
export default FeedbackOptions;