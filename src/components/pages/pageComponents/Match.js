import React from 'react';
import PropTypes from 'prop-types';

export const Match = (props) => {
  const {
    title,
    date,
    time,
    status,
    player1,
    info1,
    teamLogo1,
    player2,
    info2,
    teamLogo2,
    additional,
    partner,
  } = props;

  const cardStyle = `card ${status}`;
  const playerStyle1 = (status === 'finished' && info1 > info2)
    ? 'card__player-container--grey'
    : 'card__player-container';
  const playerStyle2 = (status === 'finished' && info2 > info1)
    ? 'card__player-container--grey'
    : 'card__player-container';

  return (
    <div className={cardStyle}>
      <header className="card__header">
        <h3 className="card__title">{title}</h3>
        {status === 'live'
          ? (
            <div className="card__status-container">
              <img
                className="card__start"
                src="images/start.png"
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
      <div className="card__teams">
        <img className="card__team-img" src={teamLogo1} alt="teamLogo" />
        <img className="card__team-img" src={teamLogo2} alt="teamLogo" />
      </div>
      <div className={playerStyle1}>
        <p className="card__player">{player1}</p>
        <span className="card__info">{info1}</span>
      </div>
      <div className={playerStyle2}>
        <p className="card__player">{player2}</p>
        <span className="card__info">{info2}</span>
      </div>
      <footer className="card__footer">
        <p className="card__additional">{additional}</p>
        <img className="card__partner" src={partner} alt="partner" />
      </footer>
    </div>
  );
};

Match.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  player1: PropTypes.string.isRequired,
  info1: PropTypes.number.isRequired,
  teamLogo1: PropTypes.string.isRequired,
  player2: PropTypes.string.isRequired,
  info2: PropTypes.number.isRequired,
  teamLogo2: PropTypes.string.isRequired,
  additional: PropTypes.string.isRequired,
  partner: PropTypes.string.isRequired,
};
