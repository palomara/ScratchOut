import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton } from 'react-native-fbsdk';
const FBSDK = require('react-native-fbsdk');
const {
    LoginManager,
} = FBSDK;

// ...

// Attempt a login using the Facebook login dialog,
// asking for default permissions.
LoginManager.logInWithReadPermissions(['public_profile']).then(
    function(result) {
        if (result.isCancelled) {
            alert('Login was cancelled');
        } else {
            alert('Login was successful with permissions: '
                + result.grantedPermissions.toString());
        }
    },
    function(error) {
        alert('Login failed with error: ' + error);
    }
);

export default class FBLoginButton extends Component {
    render() {
        return (
            <View>
                <LoginButton
                    publishPermissions={["email"]}
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                alert("Login failed with error: " + error.message);
                            } else if (result.isCancelled) {
                                alert("Login was cancelled");
                            } else {
                                alert("Login was successful with permissions: " + result.grantedPermissions)
                            }
                        }
                    }
                    onLogoutFinished={() => alert("User logged out")}/>
            </View>
        );
    }
};

module.exports = FBLoginButton;