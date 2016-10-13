import Relay from 'react-relay'

export default class UpdateHelloMutation extends Relay.Mutation {

  getMutation() {

    return Relay.QL`mutation{ updateHello }`

  }

  getVariables() {

    return {
      id: this.props.id,
      world: this.props.world,
    }

  }

  getFatQuery() {

    return Relay.QL`
      fragment on _HelloPayload {
        changedHello {
          world,
        },
      }
    `

  }

  getConfigs() {

    return [{
      type: 'FIELDS_CHANGE',
      fieldIDs: {
        changedHello: this.props.id,
      },
    }]

  }

  getOptimisticResponse() {

    return {
      changedHello: {
        id: this.props.id,
        world: this.props.world,
      },
    }

  }

  // static fragments = {
  //
  //   hello: () => Relay.QL`
  //     fragment on Hello {
  //       id,
  //     }
  //   `
  //
  // }

}
