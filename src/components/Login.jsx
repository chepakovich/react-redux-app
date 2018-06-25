import React from 'react'

import HiddenContent from './HiddenContent.jsx'

export default class Login extends React.Component {
  constructor (props) {
    super(props)

    this.state = { username: '', password: '', message: '' }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUsername = this.handleUsername.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
  }

  handleUsername (evt) {
    this.setState({ username: evt.target.value })
  }

  handlePassword (evt) {
    this.setState({ password: evt.target.value })
  }

  handleSubmit (evt) {
    evt.preventDefault()
    this.props.login(this.state.username, this.state.password)
    this.setState({ message: 'Вы успешно вошли на сайт!' })
  }

  render () {
    return (
      <HiddenContent title="Логин">
        <form onSubmit={this.handleSubmit}>
          <div>
          Ник пользователя:
            <input type="text"
                   value={this.state.username}
                   onChange={this.handleUsername}
            />
          </div>
          <div>
          Пароль:
            <input type="password"
                   value={this.state.password}
                   onChange={this.handlePassword}
            />
          </div>
          <input type="submit" className="btn1" value="войти на сайт" />
          <div style={{ color: 'green' }}>
            {!this.props.error ? this.state.message : ''}
          </div>
        </form>
      </HiddenContent>
    )
  }
}
