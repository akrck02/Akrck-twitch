import SocialBar from "../../components/socialbar.js";
import { PATHS } from "../../config/config.js";
import { UIComponent } from "../../lib/web/uicomponent.js";

export default class EndingV extends UIComponent {
 
    public constructor() {
        super({
            type: "view",
            id: "glowing",
            classes: ["box-column", "box-x-between"],
            styles: {
                width: "100%",
                height: "100%",
                position: "absolute",
                background: "url(" + PATHS.IMAGES + "wall.png)",
                backgroundSize: "cover",
            },
        });
    }

    /**
     * Show the view 
     * @param params The parameters of the view
     */
    public show(params: string[]): void {

        const header = this.drawHeader();
        const footer = this.drawFooter();

        this.appendChild(header);
        this.appendChild(footer);
        this.appendTo(document.body);

    }

    /**
     * Draw the header of the view
     * @returns {UIComponent} The header
     */
    private drawHeader() : UIComponent {

        const row = new UIComponent({
            type: "div",
            classes: ["row","box-x-between"],
            styles: {
                width: "100%",
                padding: "3.5rem",
            }
        });

        const column1 = new UIComponent({
            type: "div",
            classes: ["column", "box-column"],
        });

        const title = new UIComponent({
            type: "h1",
            text: "Gracias por verme.",
            classes: ["box-left"],
            styles: {
                margin: ".5rem",
                width: "100%",

                color: "white",
                fontSize: "3.75rem",
            }
        });

        const ciao = new UIComponent({
            type: "h2",
            text: "Nos vemos!",
            classes: ["box-left"],
            styles: {
                margin: ".5rem",
                width: "100%",
                color: "white",
                fontSize: "2.5rem",
            }
        });

        const column2 = new UIComponent({
            type: "div",
            classes: ["column","box-x-end"],
        });

        const imageSize = "14rem";
        const userImage = new UIComponent({
            type: "img",
            attributes: {
                src: PATHS.IMAGES + "user.png",
            },
            classes: ["box-left"],
            styles: {
                objectFit: "cover",
                width: imageSize,
                height: imageSize,
                borderRadius: "100rem",
                boxShadow: "0 0 10px rgba(0,0,0,0.5)",
            }
        });

        title.appendTo(column1);
        ciao.appendTo(column1);
        column1.appendTo(row);

        userImage.appendTo(column2);
        column2.appendTo(row);

        return row;
    }

    /**Draw
     * Draw the footer of the view
     * @returns {UIComponent} The header
     */
         private drawFooter() : UIComponent {

            const row = new UIComponent({
                type: "div",
                classes: ["row","box-x-between", "box-y-left"],
                styles: {
                    width: "100%",
                    position: "relative",
                }
            });

            const column1 = new UIComponent({
                type: "div",
                classes: ["column", "box-row", "box-x-start"],
                styles : {
                    flex: ".7",
                    paddingLeft: "5rem",
                    paddingBottom: "2rem",
                }
            });
    
            const title = new UIComponent({
                type: "h1",
                text: "Sigueme en redes!",
                classes: ["box-center"],
                styles: {
                    fontSize: "2rem",
                    color: "white",
                }
            });
    
            const column2 = new UIComponent({
                type: "div",
                classes: ["column","box-x-end"],
            });

            const socialbar = new SocialBar();

            title.appendTo(column1);
            column1.appendTo(row);

            socialbar.appendTo(column2);
            column2.appendTo(row);
            return row;
        }
    

}

