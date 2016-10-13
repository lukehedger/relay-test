import React from 'react'
import { render } from 'react-dom'
import Relay from 'react-relay'

import Reindex from './Reindex'
import Root from './Root'

Relay.injectNetworkLayer(Reindex.getRelayNetworkLayer())

render(<Relay.Renderer
  Container={Root}
  environment={Relay.Store}
  queryConfig={{
    name: 'HelloQueries',
    params: {},
    queries: {
      hello: () => Relay.QL`
        query {
          node(id: "SGVsbG86NTdmZTQ4NTcwYjlmNmEwMDAzOTRlMDkw")
        }
      `
    },
  }}
/>, document.getElementById('root'))
