import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Battle } from './pageComponents/Battle';
import battlesList from '../../battles.json';

export class Battles extends Component {
  state = {
    battles: battlesList,
  }

  render() {
    const { battles } = this.state;

    return (
      <ul className="list">
        {battles.map(battle => (
          <li className="list__item" key={battle.id}>
            {battle.status === 'live'
              ? (
                <Link className="link" to={`/battles/${battle.id}`}>
                  <Battle {...battle} />
                </Link>
              )
              : <Battle {...battle} />
            }
          </li>
        ))}
      </ul>
    );
  }
}
