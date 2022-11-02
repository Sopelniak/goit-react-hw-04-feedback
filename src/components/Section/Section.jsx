import PropTypes from 'prop-types';
import s from './Section.module.css';

function Section({ title, children }) {
  return (
    <>
      <section>
        <h2 className={s.text}>{title}</h2>
        {children}
      </section>
    </>
  );
}

export { Section };

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
