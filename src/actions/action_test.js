import axios from "axios";

export const RUN_TEST = "run_test";
export const FETCH_TEST = "fetch_test";
export const CHECK_TEST = "check_test";
export const CANCEL_TEST = "cancel_test";

const ROOT_URL = "http://www.webpagetest.org";
const API_KEY = "A.9380982fd3efa1b0814bddcb0d025f88";

export function runTest(values, callback) {
    const request = axios.get(`${ROOT_URL}/runtest.php?f=json&k=${API_KEY}&url=${values.url}`).then(callback());
   
    return {
        type: RUN_TEST,
        payload: request
    }
}

export function cancelTest(testId, callback) {
    const request = axios.get(`${ROOT_URL}/cancelTest.php?test=${testId}&k=${API_KEY}`).then(callback());

    return {
        type: CANCEL_TEST,
        payload: request
    }
}

export function fetchTest(testId) {
    const request = axios.get(`${ROOT_URL}/jsonResult.php?test=${testId}`);

    return {
        type: FETCH_TEST,
        payload: request
    }
}

export function checkTest(testId) {
    const request = axios.get(`${ROOT_URL}/testStatus.php?f=json&test=${testId}`);

    return {
        type: CHECK_TEST,
        payload: request
    }
}