import React, { Component } from 'react';
import { Text, View } from 'react-native';
// import * as firebase from 'firebase'
//
//
// const config = {
//     apiKey: "AIzaSyD5UCuAca7uDUE8IKfwrIyVbirz3ccsUA8",
//     authDomain: "wishery-45f02.firebaseapp.com",
//     databaseURL: "https://wishery-45f02.firebaseio.com",
//     projectId: "wishery-45f02",
//     storageBucket: "wishery-45f02.appspot.com",
//     messagingSenderId: "580777879391"
// };
// firebase.initializeApp(config);

export default class HelloWorldApp extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Hello, world!</Text>
            </View>
        );
    }
}
