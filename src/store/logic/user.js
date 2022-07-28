import { createLogic } from 'redux-logic';
import { USER_DATA_REQUEST, USER_DATA_SUCCESS , USER_DATA_FAIL } from "../actions/user";
import axios from "react-native/Libraries/Settings/Settings";

export const userDataLogic = createLogic({
    // declarative built-in functionality wraps your code
    type: USER_DATA_REQUEST, // only apply this logic to this type
    latest: true, // only take latest

    // your code here, hook into one or more of these execution
    // phases: validate, transform, and/or process
    process({ getState, action }, dispatch, done) {
        axios
            .get('https://survey.codewinds.com/polls')
            // .then((resp) => resp.data.polls)
            .then((resp) => dispatch({ type: USER_DATA_REQUEST, payload: resp.data }))
            .catch((err) => {
                console.error(err); // log since could be render err
                dispatch({ });
            })
            .then(() => done()); // call done when finished dispatching
    }
});