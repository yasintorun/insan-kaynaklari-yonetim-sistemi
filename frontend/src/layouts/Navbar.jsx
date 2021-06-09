import React, { Component } from 'react'
import {Button, Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment >
        <Menu >
          <Menu.Item
            name="Hrms.NET"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            className="logo"
          />
          <Menu.Item
            name="İş ilanları"
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Kariyer Rehberi'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />

          <Menu.Menu position='right'>
            <Menu.Item>
              <Button secondary className="bg-theme-color color-white">Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>

        </Menu>

      </Segment>
    )
  }
}
