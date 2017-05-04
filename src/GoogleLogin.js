import React from 'react';

let auth2;

export default class GoogleLogin extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let socialId = this.props.socialId, scope = this.props.scope;
        window.googlePlatformReadyCb = () => {
            window.gapi.load('auth2', () => {
                window.gapi.auth2.init({
                    client_id: socialId,
                    fetch_basic_profile: false,
                    scope
                });
            });
        };

        (function (d, s, id) {
            var js, gs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://apis.google.com/js/platform.js?onload=googlePlatformReadyCb';
            gs.parentNode.insertBefore(js, gs);
        }(document, 'script', 'google-platform'));
    }

    checkLoginState(response) {
        if (auth2.isSignedIn.get()) {
            auth2.currentUser.get().getBasicProfile();
        } else {
            this.props.responseHandler({status: response.status});
        }
    }

    clickHandler() {
        window.gapi.auth2.getAuthInstance().signIn().then((googleUser) => {
            this.props.responseHandler(googleUser);
        });
    }

    render() {
        return (
            <button className={this.props.class} onClick={ this.clickHandler.bind(this) }>
                {this.props.buttonText}
                {this.props.children}
            </button>
        );
    }
};