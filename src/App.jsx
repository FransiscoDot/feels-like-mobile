import React, { Component } from 'react';
import likeStack from "./components/feels-like-mobile/StackNavigator";

class App extends Component {
  render() {
    return (
      <div>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default likeStack({
 component: App
});
