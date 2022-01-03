import { PATHS } from "../../config/config.js";
import { UIComponent } from "../../lib/web/uicomponent.js";

export default class CounterV extends UIComponent {

    public counter : UIComponent;

    public constructor() {
        super({
            type: "view",
            classes: ["box-center","box-column"],
            id: "glowing",
            styles: {
                width: "100%",
                height: "100%",
                background: "url(" + PATHS.IMAGES + "wall.png)",
                backgroundSize: "cover",
            },
        });
    }

    public show(params: string[]): void {

        const max = params[1] ? parseInt(params[1]) : 5;
        this.counter = this.generateCounterDiv(max);

        const chatTitle = new UIComponent({
            type: "h1",
            text: "La voz del pueblo:",
            classes: ["box-y-center", "box-x-left"],
            styles: {
                position : "absolute",
                top: "2rem",
                left : "2rem",
                width: "450px",
                color: "white",
                fontSize: "2rem",
            }
        });
        

        this.counter = this.generateCounterDiv(max);
        this.count(max);
      
        this.counter.appendTo(this);        
        this.appendChild(chatTitle);
        this.appendTo(document.body);

    }


    private generateCounterDiv(max : number): UIComponent {
        const comp = new UIComponent({
            type: "div",
            classes: ["box-column", "box-y-center"],
            styles: {
                transition: "var(--fast)", 
                opacity: ".5",
            },
        });

        const count = new UIComponent({
            type: "h1",
            id: "counter",
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
                marginTop: "3rem",
                width: "100%",
                color: "white",
                fontSize: "2.75rem",
            }
        });

        count.appendTo(comp);
        title.appendTo(comp);
       
        return comp;
    }


    private count(minutes: number): void {
        let count = minutes*60;

        const counter = this.counter.element.querySelector("#counter");

        const interval = setInterval(() => {
            if (count >= 0) {
                const seconds = count % 60;
                const minutes = Math.floor(count / 60);

                counter.innerHTML = `${minutes}:${seconds.toFixed(0).padStart(2, "0")}`;
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

