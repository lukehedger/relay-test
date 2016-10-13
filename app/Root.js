import React, { Component } from 'react'
import Relay from 'react-relay'

class Root extends Component {

  render() {

    console.log(this.props)

    const { hello: { world } } = this.props

    return (
      <h1>Hello { world }</h1>
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
