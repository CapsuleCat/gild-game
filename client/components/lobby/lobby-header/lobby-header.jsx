import React from 'react';

import {default as Game} from '../../game/game/game.jsx';

import {SceneActions} from '../../../stores/scene-store.jsx';
import {LobbyActions} from '../../../stores/lobby-store';

export default React.createClass({
  handleClick(e) {
    e.preventDefault();

    const username = this.refs.username.value;

    LobbyActions.create(username);

    SceneActions.transition(<Game />);
  },

  handleChange() {
    const username = this.refs.username.value;

    LobbyActions.updateUserName(username);
  },

  render() {
    return (
      <div>
        <div>
          <label htmlFor="username">Username: </label>
          <input
              onChange={this.handleChange}
              id="username"
              type="text"
              ref="username" />
        </div>

        <button onClick={this.handleClick}>+ Create Room</button>
      </div>
    );
  }
});
