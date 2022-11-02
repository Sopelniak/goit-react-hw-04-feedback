import PropTypes from 'prop-types';
import s from './Notification.module.css';

const Notification = ({ message }) => {
  return (
    <>
      <p className={s.text}>{message}</p>
    </>
  );
};

export { Notification };

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
