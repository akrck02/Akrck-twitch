import { PATHS } from "../../config/config.js";
import { UIComponent } from "../../lib/web/uicomponent.js";

export default class HomeV {
    public show(params: string[]): void {
        console.log("Home view is showing");
        console.log("Params: ", params);

        const view = new UIComponent({
            type: "view",
            id: "glowing",
            classes: ["box-center"],
            styles: {
                width: "100%",
                height: "100%",
                background: "url(" + PATHS.IMAGES + "wall.png)",
                backgroundSize: "cover",
            },
        });

        view.appendTo(document.body);
    }
}
