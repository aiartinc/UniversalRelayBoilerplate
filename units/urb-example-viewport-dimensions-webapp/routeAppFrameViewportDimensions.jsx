// @flow

import Async from 'react-code-splitting'
import { graphql } from 'react-relay'
import React from 'react'
import Route from 'found/lib/Route'

const ViewportDimensionsScreen = props => (
  <Async
    load={import( './components/ViewportDimensionsScreen' )}
    componentProps={props}
  />
)

export default (
  <Route key="viewport-dimensions" path="viewport-dimensions">
    <Route
      path="/"
      Component={ViewportDimensionsScreen}
      query={graphql`
        query routeAppFrameViewportDimensions_ViewportDimensionsScreen_Query {
          Viewer {
            ...ViewportDimensionsScreen_Viewer
          }
        }
      `}
    />
  </Route>
)
