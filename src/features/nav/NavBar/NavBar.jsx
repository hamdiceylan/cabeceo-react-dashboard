import React from 'react'
import { Menu, Image, Dropdown  } from 'semantic-ui-react'
import { NavLink, Link } from 'react-router-dom'

function NavBar({logout, auth}) {
  return (
    <Menu>
      <Menu.Item>
          <Image style={{maxHeight: '40px'}} src='../assets/logo.png' alt='logo' /> 
      </Menu.Item>
      <Menu.Item as={NavLink} to='/dashboard/home'>Dashboard</Menu.Item>
      <Menu.Item as={NavLink} to='/dashboard/user'>Users</Menu.Item>
      <Menu.Item position="right">
          <Image avatar spaced="left" src="/assets/user.png" />
          <Dropdown pointing="top right" text={auth.email}>
          <Dropdown.Menu>
              <Dropdown.Item as={Link} to='/settings' text="Settings" icon="settings" />
              <Dropdown.Item onClick={() => logout()} text="Sign Out" icon="power" />
          </Dropdown.Menu>
      </Dropdown>
      </Menu.Item>
    </Menu>
  )
}

export default NavBar;


