import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './Section.module.css';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <>
        <section>
          <h2 className={s.text}>{title}</h2>
          {children}
        </section>
      </>
    );
  }
}

export { Section };

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
