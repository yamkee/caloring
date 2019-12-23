export const SAVE_ALARM = 'SAVE_ALARM'

export const saveAlarmData = (data: any) => {
    return { type: SAVE_ALARM, response: data }
}
