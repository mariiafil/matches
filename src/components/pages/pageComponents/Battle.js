import React from 'react';
import PropTypes from 'prop-types';

export const Battle = (props) => {
  const {
    title,
    date,
    time,
    status,
    group1,
    info,
    logo,
    group2,
    map,
  } = props;

  const cardStyle = `card ${status}`;

  return (
    <div className={cardStyle}>
      <header className="card__header">
        <h3 className="card__title">{title}</h3>
        {status === 'live'
          ? (
            <div className="card__status-container">
              <img
                className="card__start"
                src="/images/start.png"
                alt="start"
              />
              <p className="card__watch">Whatch live!</p>
            </div>
          ) : (
            <div className="card__status-container">
              <p className="card__time">{time}</p>
              <p className="card__date">{date}</p>
            </div>
          )}
      </header>
      <img className="card__team-logo" src={logo} alt="groupLogo" />
      <div className="card__groups-info">
        <div className="card__groups-container">
          <p className="card__group">{group1}</p>
          <p className="card__group">{group2}</p>
        </div>
        <span className="card__match-number">{info}</span>
      </div>
      <footer className="card__footer">
        <p className="card__map">{map}</p>
      </footer>
    </div>
  );
};

Battle.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  group1: PropTypes.string.isRequired,
  group2: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  map: PropTypes.string.isRequired,
};
