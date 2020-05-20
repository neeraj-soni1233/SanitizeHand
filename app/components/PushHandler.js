import React, { useState } from "react";
import { View, Text } from "react-native";
//import PushNotification from 'react-native-push-notification'

// To Do becacause getting weird compilation errro llvm when  adding 
// library .. so this part is pending, will solve soon. Thanks
// Iam following instruction from git below hub 
// https://github.com/zo0r/react-native-push-notification


export default function PushHandler() {


    configurePushNotification = () => {
        PushNotification.configure({
            onRegister: function (token) {
                console.log('TOKEN:', token);
            },
            onNotification: function (notification) {
                console.log('NOTIFICATION:', notification);
            },
            senderID: "YOUR GCM SENDER ID",
            permissions: {
                alert: true,
                badge: true,
                sound: true
            },
            popInitialNotification: true,
            requestPermissions: true,
        });
    };
    testPush = () => {
        PushNotification.localNotification({
            title: "My Notification Title", // (optional)
            message: "My Notification Message", // (required)
        });
    }

    cancelAndroidLocalNotification = () => {
        PushNotification.cancelAllLocalNotifications()
    }
    scheduleLocalNotification = () => {
        PushNotification.localNotificationSchedule({
            //... You can use all the options from localNotifications
            message: "My Notification Message", // (required)
            date: new Date(Date.now() + 60 * 1000), // in 60 secs
        });
    }

    return (
        <View>
            <Text>Push Handler</Text>
        </View>
    );
}

