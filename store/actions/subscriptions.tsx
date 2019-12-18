export const SAVE_SUBS = 'SAVE_SUBS'

export const saveSubs = (subscription: any) => {
    return { type: SAVE_SUBS, sub: subscription }
}
