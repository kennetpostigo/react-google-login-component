import React from 'react';

export default class GoogleLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true
    };
  }

  componentDidMount() {
    const { socialId, scope, fetchBasicProfile } = this.props;
    ((d, s, id, callback) => {
      let js, gs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { 
        this.setState({
          disabled: false
        });
      } else {
        js = d.createElement(s); js.id = id;
        js.src = 'https://apis.google.com/js/platform.js';
        gs.parentNode.insertBefore(js, gs);
        js.onload = callback;
      }
    })(document, 'script', 'google-platform', () => {
      gapi.load('auth2', () => {
        this.setState({
          disabled: false
        });
        if (!gapi.auth2.getAuthInstance()) {
          gapi.auth2.init({
            client_id: socialId,
            fetch_basic_profile: fetchBasicProfile,
            scope: scope
          });
        }
      });
    });
  }

  checkLoginState (response) {
    if (auth2.isSignedIn.get()) {
      const profile = auth2.currentUser.get().getBasicProfile();
    } else {
      if(this.props.responseHandler) {
        this.props.responseHandler({status: response.status});
      }
    }
  }

  clickHandler () {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then(googleUser => this.props.responseHandler(googleUser));
  }

  render () {
    const {
      socialId, scope, fetchBasicProfile, responseHandler,
      children, buttonText, ...props
    } = this.props;

    props.disabled = this.state.disabled || props.disabled;

    return (
      <button {...props} onClick={this.clickHandler.bind(this)}>
        {children}
        {buttonText}
      </button>
    )
  }
}

GoogleLogin.defaultProps = {
  fetchBasicProfile: false,
  scope: 'profile'
}
