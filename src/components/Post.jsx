import React from 'react'

import User from './User.jsx'
import Timestamp from './Timestamp.jsx'

const Post = ({ user, title, text, category, created, updated }) =>
  <span>
    <div className="tb1"><i><User {...user} /></i><br /><Timestamp data={created} /></div>
    <div className="tb2"><h3>{title}</h3>{text}</div>
  </span>

export default Post
