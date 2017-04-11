import React from 'react';

var gapi;
var auth2;

export default class GoogleLogin extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    window.googlePlatformReadyCb = () => {
      console.info('gapi ready.');
      window.gapi.load('auth2', function () {
        var auth2 = window.gapi.auth2.init({
          client_id: socialId,
          fetch_basic_profile: false,
          scope: scope
        });
      });
    };

    (function (d, s, id) {
      var js, gs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://apis.google.com/js/platform.js?onload=googlePlatformReadyCb';
      gs.parentNode.insertBefore(js, gs);
    }(document, 'script', 'google-platform'));

    var socialId = this.props.socialId,
      responseHandler = this.props.responseHandler,
      scope = this.props.scope;
  }

  checkLoginState (response) {
    if (auth2.isSignedIn.get()) {
      var profile = auth2.currentUser.get().getBasicProfile();
    } else {
      if (this.props.responseHandler) {
        this.props.responseHandler({status: response.status});
      }
    }
  }

  clickHandler () {
    var auth2 = window.gapi.auth2.getAuthInstance();

    auth2.signIn().then((googleUser) => {
      this.props.responseHandler(googleUser);
    });
  }

  render () {
    return (
      <div>
        <button className={this.props.class} onClick={ this.clickHandler.bind(this) }>
          {this.props.buttonText}
        </button>
      </div>
    );
  }
};