import * as React from "react"
import { hot } from "react-hot-loader"
import { Switch, Route } from "react-router-dom"
import HomePage from "./containers/home-page"
import ResumePage from "./containers/resume-page"
import ContactPage from "./containers/contact-page"
import Nav from "./components/nav"
import "./App.css"
import "antd/dist/antd.css"

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={true} path="/contact-me" component={ContactPage} />
          <Route exact={false} path="/resume" component={ResumePage} />
        </Switch>
      </div>
    )
  }
}

export default hot(module)(App)
