import React from 'react'

import ConnectedPostList from '../../containers/ConnectedPostList.jsx'
import ConnectedFilterList from '../../containers/ConnectedFilterList.jsx'

const MainPage = ({ store }) =>
  <div>
    <div className="cat"><ConnectedFilterList store={store} /></div>
    <div><ConnectedPostList store={store} /></div>
  </div>

export default MainPage
