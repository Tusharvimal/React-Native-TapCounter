export const ADD_TAP = 'ADD_TAP'
export const RESET = 'RESET'
export const ONE_LESS = 'ONE_LESS'
export const LOCKED = 'LOCKED'
export const DARK_MODE = 'DARK_MODE'

export const addTap = () => {
    return {
        type: ADD_TAP
    }
}
export const reset = () => {
    return {
        type: RESET
    }
}
export const oneLess = () => {
    return {
        type: ONE_LESS
    }
}
export const locked = () => {
    return {
        type: LOCKED
    }
}
export const darkMode = () => {
    return {
        type: DARK_MODE
    }
}
