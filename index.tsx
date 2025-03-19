import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import Reduxuse from "./redux/Reduxuse";
import appConfig from "./app.json";
import store from "./redux/store";
import List from "./src/List";
import App from "./App";
const appName = appConfig.expo.name;

const AppRedux = () => (
    <Provider store={store}>
        <Reduxuse />
    </Provider>
);
AppRegistry.registerComponent(appName, () => AppRedux);
