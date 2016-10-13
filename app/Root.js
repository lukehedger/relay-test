import React, { Component } from 'react'
import Relay from 'react-relay'

import UpdateHelloMutation from './mutations/update'

class Root extends Component {

  handleClick = world => {

    Relay.Store.commitUpdate(
      new UpdateHelloMutation({
        id: this.props.hello.id,
        world: world,
      }),
    )

    // UI state...
    // this.setState({
    //   isLoading: true,
    // })

  }

  render = () => {

    const { hello: { world } } = this.props

    return (
      <h1 onClick={ () => this.handleClick( world === 'Earth' ? 'Mars' : 'Earth' ) }>Hello { world }</h1>
    )
  }

}

export default Relay.createContainer(Root, {
  fragments: {
    hello: () => Relay.QL`
      fragment on Hello {
        id,
        world
      }
    `
  }
})
