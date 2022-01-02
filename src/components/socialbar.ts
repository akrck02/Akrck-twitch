import { GITHUB, TWITCH, TWITTER, YOUTUBE } from "../lib/social.js";
import { UIComponent } from "../lib/web/uicomponent.js";
import Github from "../services/github.js";
import Twitch from "../services/twitch.js";
import Twitter from "../services/twitter.js";
import Youtube from "../services/youtube.js";

export default class SocialBar extends UIComponent {
    public constructor() {
        super({
            type: "div",
            classes: ["box-row", "box-x-end", "row"],
            styles: {
                width: "100%",
                height: "100%",
                paddingRight: "5rem",
                paddingBottom: "2rem",
            },
        });

        this.show();
    }

    public async show(){

        Github.getFollowers("akrck02").then((data) => {
            const github = this.social(
                GITHUB({
                    size: "2rem",
                    fill: "white",
                    classes: [],
                }),
                data
            );

            this.appendChild(github);
        });

        Youtube.getFollowers("akrck02").then((data) => {
            const youtube = this.social(
                YOUTUBE({
                    size: "2rem",
                    fill: "white",
                    classes: [],
                }),
                data
            );

            this.appendChild(youtube);
        });

        Twitch.getFollowers("akrck02").then((data) => {
            const twitch = this.social(
                TWITCH({
                    size: "2rem",
                    fill: "white",
                    classes: [],
                }),
                data
            );

            this.appendChild(twitch);
        });

        Twitter.getFollowers("akrck_02").then((data) => {
            const twitter = this.social(
                TWITTER({
                    size: "2rem",
                    fill: "white",
                    classes: [],
                }),
                data
            );

            this.appendChild(twitter);
        });
    }

    private social(icon, text): UIComponent {
        const comp = new UIComponent({
            type: "div",
            classes: ["box-row", "box-center"],
            styles: {
                borderRadius: "50rem",
                background: "rgba(255,255,255,0.1)",
                margin: "1rem",
                height: "4rem",
                padding: "0rem .4rem",
                maxWidth: "10rem",
            },
        });

        const iconComp = new UIComponent({
            type: "div",
            classes: ["box-row", "box-center"],
            text: icon,
            styles: {
                width: "3rem",
                height: "3rem",
                margin: "0.5rem",
            },
        });

        const textComp = new UIComponent({
            type: "p",
            text: text,
            styles: {
                color: "white",
                fontSize: "1.5rem",
                marginRight: "0.5rem",
            },
        });

        comp.appendChild(iconComp);
        comp.appendChild(textComp);

        return comp;
    }
}
