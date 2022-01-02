import homeV from "./home/homeV.js";
import errorV from "./error/errorV.js";
import { CONFIG } from "../config/config.js";
import CounterV from "./counter/counterV.js";
import EndingV from "./ending/endingV.js";
import PlayingV from "./playing/playingV.js";

export default class Router {
    /**
     * Load a view
     * @param {array} params
     */
    public static load = (params) => {
        document.body.style.background = "transparent";
        Router.clear();
        switch (params[0]) {
            case undefined:
            case "":
            case "home":
                new homeV().show(params);
                break;
            case "counter":
                new CounterV().show(params);
                break;
            case "playing":
                new PlayingV().show(params);
                break;
            case "ending":
                new EndingV().show(params);
                break;
            case "error":
                new errorV().show(params);
                break;
            default:
                location.href = CONFIG.URL + "#/error/404/";
        }
    };

    /** show a view */
    public static clear() {
        document.body.innerHTML = "";
    };
}
