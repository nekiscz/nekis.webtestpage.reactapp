import { RUN_TEST, FETCH_TEST, CHECK_TEST } from '../actions/action_test';

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
            console.log(action.payload.data.data)
            return {
                    ...state,
                    runningTest: action.payload.data.data
                };
        case FETCH_TEST:
            return { ...state, [action.payload.data.data.testId]: action.payload.data };
        default:
            return state;
    }
}
