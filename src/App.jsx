import React, { Component } from 'react';
import Tabs from "./components/feels-like-mobile/Tabs";
import Stack from "./components/feels-like-mobile/Stack";
import Detail from "./components/feels-like-mobile/Detail";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import Menu, { MenuItem } from "./components/feels-like-mobile/Menu";
import Tab from './components/feels-like-mobile/Tab';

const IconCog = (
  <FontAwesome
    name='cog'
    size='lg'
    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "white" }}
  />
)

const IconUser = (
  <FontAwesome
    name='user'
    size='lg'
    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "white" }}
  />
)

const itemCog = (
  <MenuItem
    icon={IconCog}
  />
)

const ItemProfile = (
  <MenuItem
    icon={IconUser}
    onClick={() => console.log("icon clicked")}
  />
)

const MenuBelt = (
  <Menu
    items={[ItemProfile, itemCog]}
  />
)

const Settings = () => (
  <Stack
    title="Settings"
    menu={MenuBelt}
  >
    <div>
      <p>settings</p>
    </div>
  </Stack>
)

class Profile extends Component {
  render() {
    return (
      <Detail
        onBackArrowPress={() => console.log("gg")}
        menu={MenuBelt}
      >
        <div>
          <p>profile</p>
        </div>
      </Detail>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Tabs>
            <Tab
              name="Settings"
              icon={IconCog}
            >
              <Route path="/settings" component={Settings} />
              <Link to="/settings" />
            </Tab>
            <Tab
              name="Profile"
              icon={IconUser}
            >
              <Route path="/profile" component={null} />
              <Link to="/profileg" />
            </Tab>
            <Tab
              name="Profile"
              icon={IconUser}
            >
              <Route path="/profile" component={Profile} />
              <Link to="/profile" />
            </Tab>
          </Tabs>
        </Switch>
      </Router>
    );
  }
}

export default App;
