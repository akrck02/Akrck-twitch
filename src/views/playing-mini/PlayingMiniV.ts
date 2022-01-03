import SocialBar from "../../components/socialbar.js";
import { PATHS } from "../../config/config.js";
import { setStyles, UIComponent } from "../../lib/web/uicomponent.js";

export default class PlayingMiniV extends UIComponent {
    public constructor() {
        super({
            type: "view",
            classes: ["box-center", "box-column"],
            id: "glowing",
            styles: {
                width: "100%",
                height: "100%",
                background: "url(" + PATHS.IMAGES + "wall.png)",
                backgroundSize: "cover",
            },
        });
    }

    public async show(params: string[]): Promise<void> {
        const socialBar = new SocialBar();
        await socialBar.show();

        setStyles(socialBar.element, {
            position: "absolute",
            bottom: "2rem",
            height: "5rem",
            padding: "0",
            right: "2rem",
        });

        socialBar.getChilds()?.forEach((child) => {
            setStyles(child.element, {
                margin: "0.5rem",
            });
        });
       
        this.appendChild(socialBar);
        this.appendTo(document.body);
    }
}

export class PlayingMiniOverLayV extends UIComponent{
    public constructor() {
        super({
            type: "view",
        });
    }

    public show(params: string[]): void {
     
        const title = params[1] ? decodeURI(params[1]): "En directo"; 

        const camera = new UIComponent({
            styles: {
                position: "absolute",
                right: "3rem",
                top: "2.7rem",
                borderRadius: "1.8rem",
                background: "rgba(0,0,0,0.2)",
                border: "1rem solid #151515",
                width: "32.5rem",
                boxShadow: "0 3rem 6rem rgba(0, 0, 0, 0.5)",
                height: "18.5rem",
            }
        });

        let switcher = false;
        for (let h = 0; h < 16.5; h += .25) {
            switcher = !switcher;
            const line = new UIComponent({
                styles: {
                    position: "absolute",
                    width: "100%",
                    height: "0.125rem",
                    background: switcher ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.15)",
                    top: h + "rem",
                }
            });

            camera.appendChild(line);
        }


        const titlebox = new UIComponent({
            text: title,
            classes: ["box-row", "box-x-between", "box-y-center"],
            styles: {
                color: "white",
                position: "absolute",
                bottom: "7.7rem",
                left: "3.5rem",
                width: "20rem",
                padding: ".5rem 2rem",
                height: "3rem",
                borderRadius: "0 1rem 0 0",
                background: "rgba(0,0,0,0.9)",
            }
        });

        


        this.appendChild(camera);
        this.appendChild(titlebox);
        this.appendTo(document.body);
    }

} 