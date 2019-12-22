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
        } else {
            console.log('location permission denied')
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
    const timezoneOffset = new Date().getTimezoneOffset() * 60000
    const timezoneDate = new Date(Date.now() - timezoneOffset)

    const options = {
        startDate: new Date(
            new Date().setDate(new Date().getDate() - 3) - timezoneOffset
        ).toISOString(),
        endDate: timezoneDate.toISOString(),
    }
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

export const getWeekStep = (set: any) => {
    const timezoneOffset = new Date().getTimezoneOffset() * 60000
    const timezoneDate = new Date(Date.now() - timezoneOffset)

    const options = {
        startDate: new Date(
            new Date().setDate(new Date().getDate() - 6) - timezoneOffset
        ).toISOString(),
        endDate: timezoneDate.toISOString(),
    }

    GoogleFit.getDailyStepCountSamples(options, (isError, result) => {
        if (!isError) {
            result.map(res => {
                if (res.source === 'com.google.android.gms:estimated_steps') {
                    console.log(options.startDate)
                    console.log(options.endDate)
                    console.log(res.steps)
                    set(res.steps)
                }
            })
        } else {
            console.log(isError)
        }
    })
}
