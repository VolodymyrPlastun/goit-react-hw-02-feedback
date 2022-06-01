import s from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ goodBtn, neutralBtn, badBtn }) => (
<ul className={s.BtnList}>
                <li className={s.BtnListItem}><button onClick={goodBtn} type="button">Good</button></li>
                <li className={s.BtnListItem}><button onClick={neutralBtn} type="button">Neutral</button></li>
                <li className={s.BtnListItem}><button onClick={badBtn} type="button">Bad</button></li>
            </ul>
);

export default FeedbackOptions;