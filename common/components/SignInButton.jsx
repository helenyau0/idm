import React, {Component, PropTypes} from 'react'

import {Button} from 'react-toolbox/lib/button'

import styles from './SignInUp.scss'

export default class SignIn extends Component {
  render() {
    const {
      location,
      buttonLabel,
    } = this.props
    const redirectTo = (location && location.query) ? location.query.redirect : null
    const signInGitHubHref = redirectTo ? `/auth/github?redirectTo=${redirectTo}` : '/auth/github'
    return (
      <Button
        href={signInGitHubHref}
        linkButton
        raised
        primary
        style={styles.button}
        >
        <span className="socicon socicon-github button-icon"></span> {`${buttonLabel || 'Sign-in'} Using GitHub`}
      </Button>
    )
  }
}

SignIn.propTypes = {
  location: PropTypes.shape({
    query: PropTypes.object.isRequired,
  }),
  buttonLabel: PropTypes.string,
}
