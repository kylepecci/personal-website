import * as React from "react"
import { NavLink } from "react-router-dom"
import "./nav.css"
import { Menu } from "antd"

class Nav extends React.Component {
  render() {
    const location = window.location.pathname
    return (
      <div className="nav">
        <div className="name-box">
          <p className="nav-name">Kyle Pecci</p>
          <p className="nav-quote">
            <i>"Collaboration sparks innovation."</i>
          </p>
        </div>
        <div className="nav-links">
          <Menu defaultSelectedKeys={["/"]} selectedKeys={[location]}>
            <Menu.Item key="/">
              <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item key="/resume">
              <NavLink to="/resume">Resume</NavLink>
            </Menu.Item>
            <Menu.Item key="/contact-me">
              <NavLink to="/contact-me">Contact Me</NavLink>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    )
  }
}

export default Nav
