import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Match } from './pageComponents/Match';
import matchesList from '../../matches.json';

export class Matches extends Component {
  state = {
    matches: matchesList,
  }

  render() {
    const { matches } = this.state;

    return (
      <ul className="list">
        {matches.map(match => (
          <li className="list__item" key={match.id}>
            {match.status === 'live'
              ? (
                <Link className="link" to={`/matches/${match.id}`}>
                  <Match {...match} />
                </Link>
              )
              : <Match {...match} />
            }
          </li>
        ))}
      </ul>
    );
  }
}
