// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Default = props => (
  <React.Fragment>
    <div>This is the {props.displayText}!</div>
    <a className="btn btn-primary btn-sign-up" href="/users/auth/facebook">Sign in with <span className="badge badge-light"><i className="fab fa-facebook-f"></i></span></a>
  </React.Fragment>
)
/*
Default.defaultProps = {
  name: 'David'
}
Hello.propTypes = {
  name: PropTypes.string
}

*/

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Default displayText="sign in page" />,
    document.getElementById('app'),
  )
})
