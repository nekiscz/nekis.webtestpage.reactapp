import axios from "axios";

export const RUN_TEST = "run_test";

const ROOT_URL = "http://www.webpagetest.org/runtest.php&f=json";
const API_KEY = "A.9380982fd3efa1b0814bddcb0d025f88";

export function runTest() {
    const request = axios.get(`${ROOT_URL}?k=${API_KEY}`);

    return {
        type: RUN_TEST,
        payload: request
    }
}