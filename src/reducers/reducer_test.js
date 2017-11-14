import { RUN_TEST, FETCH_TEST, CHECK_TEST, CANCEL_TEST } from '../actions/action_test';

export default function (state = {}, action) {
    switch (action.type) {
        case RUN_TEST:
            return {
                ...state,
                runningTest: {
                    id: action.payload.data.data.testId,
                    statusCode: 0
                }
            };
        case CHECK_TEST:
            return {
                ...state,
                runningTest: action.payload.data.data
            };
        case CANCEL_TEST:
            return {
                ...state,
                runningTest: {}
            }
        case FETCH_TEST:
            return { ...state, [action.payload.data.data.testId]: action.payload.data };
        default:
            return state;
    }
}
