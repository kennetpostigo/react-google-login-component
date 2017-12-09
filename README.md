# react-google-login-component
> React Google Component to log users in through google

[![version](https://img.shields.io/npm/v/react-google-login-component.svg?style=flat-square)](http://npm.im/react-google-login-component)
[![MIT License](https://img.shields.io/npm/l/react-google-login-component.svg?style=flat-square)](http://opensource.org/licenses/MIT)

react-google-login-component is a module that easily lets you drop it into
your existing project and get the benefits of Google Login. It's a plug and
play component that'll fit in your workflow if your using standalone React or
React with Redux.

You can find login with Facebook [here](https://github.com/kennetpostigo/react-facebook-login-component)

##### Up to date with the latest API Version

## Usage
```bash
npm install --save react-google-login-component
```
```js
import React from 'react';
import { GoogleLogin } from 'react-google-login-component';

class Login extends React.Component{

  constructor (props, context) {
    super(props, context);
  }

  responseGoogle (googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var googleId = googleUser.getId();
    
    console.log({ googleId });
    console.log({accessToken: id_token});
    //anything else you want to do(save to localStorage)...
  }

  render () {
    return (
      <div>
        <GoogleLogin socialId="yourClientID"
                     className="google-login"
                     scope="profile"
                     fetchBasicProfile={false}
                     responseHandler={this.responseGoogle}
                     buttonText="Login With Google"/>
      </div>
    );
  }

}

export default Login;

```
