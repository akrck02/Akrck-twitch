import { PATHS } from "../../config/config.js";
import { UIComponent } from "../../lib/web/uicomponent.js";

export default class CounterV {

    public counter : UIComponent;

    public show(params: string[]): void {

        const max = params[1] ? parseInt(params[1]) : 5;

        const view = new UIComponent({
            type: "view",
            classes: ["box-center","box-column"],
            styles: {
                width: "100%",
                height: "100%",
                background: "url(" + PATHS.IMAGES + "wall.png)",
                backgroundSize: "cover",
            },
        });

        this.counter = new UIComponent({
            type: "h1",
            text: `${this.round(max)}:00`,
            classes: ["box-center"],
            styles: {
                width: "100%",
                color: "white",
                fontSize: "10rem",
            }
        });

        const title = new UIComponent({
            type: "h1",
            text: "Comenzamos en breve",
            classes: ["box-center"],
            styles: {
                marginTop: "5rem",
                width: "100%",
                color: "white",
                fontSize: "2.75rem",
            }
        });

        const chatTitle = new UIComponent({
            type: "h1",
            text: "La voz del pueblo:",
            classes: ["box-y-center", "box-x-left"],
            styles: {
                marginTop: "1rem",
                width: "450px",
                color: "white",
                fontSize: "2rem",
            }
        });
        
        this.count(max);
        this.counter.appendTo(view);
        
        title.appendTo(view);
        chatTitle.appendTo(view);
        view.appendTo(document.body);
    }


    private count(minutes: number): void {
        let count = minutes*60;
        const interval = setInterval(() => {
            if (count >= 0) {
                const seconds = count % 60;
                const minutes = Math.floor(count / 60);
                this.counter.element.innerHTML = `${minutes}:${seconds.toFixed(0).padStart(2, "0")}`;
                
                count--;
            } else {
                clearInterval(interval);
            }
        }, 1000);

    }


    private round(value: number): string {
        return (Math.round(value * 100) / 100).toFixed(0);
    };
}

