import { ADD_TAP, DARK_MODE, LOCKED, ONE_LESS, RESET } from "./action";

const initialState = {
    noOfTaps: 0,
    isDark: false,
    isLocked: false
}

const tapsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TAP:
            const taps = state.noOfTaps + 1
            if (state.isLocked) {
                return;
            }
            return { ...state, noOfTaps: taps }

        case RESET:
            return { ...state, noOfTaps: 0 }

        case LOCKED:
            const locked = state.isLocked
            return { ...state, isLocked: !locked }

        case DARK_MODE:
            const mode = state.isDark
            return { ...state, isDark: !mode }

        case ONE_LESS:
            const lesstaps = state.noOfTaps - 1
            return { ...state, noOfTaps: lesstaps }

        default:
            return state;
    }
}

export default tapsReducer;