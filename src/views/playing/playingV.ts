import SocialBar from "../../components/socialbar.js";
import { PATHS } from "../../config/config.js";
import { UIComponent } from "../../lib/web/uicomponent.js";

export default class PlayingV extends UIComponent {
 
    public constructor() {
        super({
            type: "view",
            id: "",
            classes: ["box-column", "box-x-between"],
            styles: {
                width: "100%",
                height: "100%",
                position: "absolute",
            },
        });

    }

    /**
     * Show the view 
     * @param params The parameters of the view
     */
    public show(params: string[]): void {

        const chatbox = this.chatbox();
        const camera = this.camera();
        chatbox.appendTo(this);
        camera.appendTo(this);
      
        this.appendTo(document.body);

    }   



    private chatbox(): UIComponent {
        const chatbox = new UIComponent({
            type: "div",
            id: "glowing",
            classes: ["box-row", "box-y-between","box-x-center","back-blur"],
            styles: {
                position: "absolute",
                background: "rgba(0,0,0,.95)",
                boxShadow: "0px 4px 10px rgba(0,0,0,.75)",
                width: "28rem",
                height: "50%",
                padding: "1rem",
                right: "2em",
                top: "2em",
                borderRadius: "1em",
              
            },
        });

        const title = new UIComponent({
            type: "div",
            id: "title",
            classes: ["box-row", "box-y-center"],
            styles: {
                width: "90%",
                padding: "2.5rem 1rem",
                background: "rgba(250,250,250,.07)",
                marginTop: "1rem",
                boxShadow: "0px 2px 4px rgba(0,0,0,.5)",
                height: "2rem",
                borderRadius: "1rem",
            },

        });

        const titleText = new UIComponent({
            type: "div",
            text: "La voz del pueblo: ",
            classes: ["box-column", "box-x-center"],
            styles: {
                width: "100%",
                height: "100%",
                fontWeight: "light",
                letterSpacing: "1px",
                fontSize: "2.1rem",
                color: "#f7f7f7",
            },
        });
    
        titleText.appendTo(title);
        title.appendTo(chatbox);
        return chatbox;
    }

    private camera(): UIComponent {
    
        const camera = new UIComponent({
            type: "div",
            id: "camera",
            classes: ["box-row", "box-y-center"],
            styles: {
                position: "absolute",
                top: "2rem",
                left: "2rem",
                width: "23rem",
                height: "15.5rem",
                boxShadow: "0px 4px 20px rgba(0,0,0,.5)",
                padding: "2.5rem 1rem",
                background: "rgba(250,250,250,0)",
                border: ".5rem solid #101010",
                borderRadius: "1rem",
            }
        });

        return camera;
    }

}

