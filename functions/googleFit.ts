import { PermissionsAndroid } from 'react-native'
import GoogleFit, { Scopes } from 'react-native-google-fit'

export const googleFit = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'WALK WITH',
                message: 'WALK WITH neads access to your location ',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the camera')
        } else {
            console.log('Camera permission denied')
        }
    } catch (err) {
        console.warn(err)
    }
    const options = {
        scopes: [
            Scopes.FITNESS_ACTIVITY_READ_WRITE,
            Scopes.FITNESS_LOCATION_READ_WRITE,
            Scopes.FITNESS_BODY_READ_WRITE,
        ],
    }
    const authResult = await GoogleFit.authorize(options)
    if (authResult.success) {
        GoogleFit.startRecording(callback => {
            // Process data from Google Fit Recording API (no google fit app needed)
        })
    }
}

export const getStep = (set: any) => {
    const options = {
        startDate: new Date(
            new Date().setDate(new Date().getDate() - 2)
        ).toISOString(),
        endDate: new Date().toISOString(),
    }
    let step = 0

    GoogleFit.getDailyStepCountSamples(options, (isError, result) => {
        if (!isError) {
            result.map(res => {
                if (res.source === 'com.google.android.gms:estimated_steps') {
                    const ldx = res.steps.length
                    if (ldx === 0) {
                    } else {
                        set(res.steps[ldx - 1].value)
                    }
                }
            })
        } else {
            console.log(isError)
        }
    })
}
