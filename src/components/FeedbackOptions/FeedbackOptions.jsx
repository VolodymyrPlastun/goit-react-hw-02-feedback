import s from '../FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
   <div className={s.BtnList}>
        {options.map(btn => (
<button key={btn} className={s.BtnListItem}  onClick={() => onLeaveFeedback(btn)} type="button">{btn}</button>
        ))}
            </div>
);

FeedbackOptions.propTypes = {
        options: PropTypes.array.isRequired,
        onLeaveFeedback: PropTypes.func.isRequired,  
}

export default FeedbackOptions;