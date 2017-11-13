import { RUN_TEST, FETCH_TEST, CHECK_TEST } from '../actions/action_test';

export default function (state = {}, action) {
    switch (action.type) {
        case RUN_TEST:
            return {
                ...state,
                runningTest: {
                    id: action.payload.data.data.testId,
                    status: action.payload.data.statusCode
                }
            };
        case CHECK_TEST:
            return {
                ...state,
                runningTest: {
                    id: action.payload.data.data.id,
                    status: action.payload.data.statusCode
                }
            };
        case FETCH_TEST:
            return { ...state, [action.payload.data.data.testId]: action.payload.data };
        default:
            return state;
    }
}
