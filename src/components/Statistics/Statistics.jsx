import s from './Statistics.module.css';

const Statistics = ({ goodState, neutralState, badState, total, posPersentage }) => (
    <div>
        <ul>
            <li className={s.StatisticsItem}>Good: <span>{goodState}</span></li>
            <li className={s.StatisticsItem}>Neutral: <span>{neutralState}</span></li>
            <li className={s.StatisticsItem}>Bad: <span>{badState}</span></li>
            <li className={s.StatisticsItem}>Total: <span>{total}</span></li>
            <li className={s.StatisticsItem}>Positive feedback: <span>{posPersentage}%</span></li>
        </ul>
    </div>
);

export default Statistics;

