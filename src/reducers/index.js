import { RUN_TEST } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case RUN_TEST:
            console.log(`${RUN_TEST} case`)
            return action.payload;
        default:
            return state;
    }
}