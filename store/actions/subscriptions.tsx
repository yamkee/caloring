export const PLUS = 'PLUS'
export const MINUS = 'MINUS'

export const plus = (num: number) => {
    return { type: PLUS, num: num + 1 }
}

export const minus = (num: number) => {
    return { type: MINUS, num: num - 1 }
}
