import React from 'react'

import HiddenContent from './HiddenContent.jsx'

export default class Registration extends React.Component {
  constructor (props) {
    super(props)

    this.state = { username: '', realname: '', password: '', message: '' }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUsername = this.handleUsername.bind(this)
    this.handleRealname = this.handleRealname.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
  }

  handleUsername (evt) {
    this.setState({ username: evt.target.value })
  }

  handleRealname (evt) {
    this.setState({ realname: evt.target.value })
  }

  handlePassword (evt) {
    this.setState({ password: evt.target.value })
  }

  handleSubmit (evt) {
    evt.preventDefault()
    this.props.createUser(
      this.state.username, this.state.realname, this.state.password
    )
    this.setState({ message: 'Вы успешно зарегистрировались!' })
  }

  render () {
    return (
      <HiddenContent title="Регистрация">
        <form onSubmit={this.handleSubmit}>
          <div>
            Ник или псевдоним:
            <input type="text"
                   value={this.state.username}
                   onChange={this.handleUsername}
            />
          </div>
          <div>
            Ваше настоящее имя:
            <input type="text"
                   value={this.state.realname}
                   onChange={this.handleRealname}
            />
          </div>
          <div>
            Пароль:
            <input type="password"
                   value={this.state.password}
                   onChange={this.handlePassword}
            />
          </div>
          <input type="submit"  className="btn1" value="зарегистрироваться" />
          <div style={{ color: 'green' }}>
            {!this.props.error ? this.state.message : ''}
          </div>
        </form>
      </HiddenContent>
    )
  }
}
