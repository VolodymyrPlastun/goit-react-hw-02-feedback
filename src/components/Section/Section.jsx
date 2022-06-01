import s from './Section.module.css';

const Section = ({ title, children }) => (
    <section className={s.section}>
        <h2 className={s.header}>{title}</h2>
        {children}
    </section>
);

export default Section;