/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import analytics from '@segment/analytics-react-native'
import mixpanel from '@segment/analytics-react-native-mixpanel'

analytics
    .setup('xxxxxxx KEY FROM SEGMENT xxxxxxx', {
        using: [mixpanel],
        recordScreenViews: true,
        trackAppLifecycleEvents: true,
        trackAttributionData: true,
        android: {
            flushInterval: 60000, // 60 seconds
            collectDeviceId: true
        }
    })
    .then(() =>
        console.log('Analytics is ready')
    )
    .catch(err =>
        console.error('Something went wrong', err)
    )

analytics.identify("UUIDxxxxx", {
    email: "xxxxxx@gmail.com"
})


AppRegistry.registerComponent(appName, () => App);
