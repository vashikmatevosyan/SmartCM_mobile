import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/store/configureStore";
import Main from "./src/navigation/Main";
function App(props) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Main />
            </PersistGate>
        </Provider>
    );
}
export default App;

