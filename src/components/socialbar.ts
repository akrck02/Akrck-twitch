import { GITHUB, TWITCH, TWITTER, YOUTUBE } from "../lib/social.js";
import { UIComponent } from "../lib/web/uicomponent.js";
import Github from "../services/github.js";
import Twitch from "../services/twitch.js";
import Twitter from "../services/twitter.js";
import Youtube from "../services/youtube.js";

export default class SocialBar extends UIComponent {

    public github : UIComponent;
    public youtube : UIComponent;
    public twitch : UIComponent;
    public twitter : UIComponent;

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

    }

    public async show(){

        this.github = this.social(
            GITHUB({
                size: "2rem",
                fill: "white",
                classes: [],
            }),
           ""
        );

        this.youtube = this.social(
            YOUTUBE({
                size: "2rem",
                fill: "white",
                classes: [],
            }),
            ""
        );

        this.twitch = this.social(
            TWITCH({
                size: "2rem",
                fill: "white",
                classes: [],
            }),
            ""
        );

        this.twitter = this.social(
            TWITTER({
                size: "2rem",
                fill: "white",
                classes: [],
            }),
            ""
        );
      

        this.appendChild(this.github);
        this.appendChild(this.youtube);
        this.appendChild(this.twitch);
        this.appendChild(this.twitter);

        await Github.getFollowers("akrck02").then((data) => this.github.element.querySelector("p").innerHTML = data);
        await Youtube.getFollowers("akrck02").then((data) => this.youtube.element.querySelector("p").innerHTML = data);
        await Twitch.getFollowers("akrck02").then((data) => this.twitch.element.querySelector("p").innerHTML = data);
        await Twitter.getFollowers("akrck_02").then((data) => this.twitter.element.querySelector("p").innerHTML = data);

    }

    private social(icon, text): UIComponent {
        const comp = new UIComponent({
            type: "div",
            classes: ["box-row", "box-center", "social-pill"],
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


    getYoutube(): UIComponent {
        return this.youtube;
    }

    getGithub(): UIComponent {
        return this.github;
    }

    getTwitch(): UIComponent {
        return this.twitch;
    }

    getTwitter(): UIComponent {
        return this.twitter;
    }


    getChilds(): UIComponent[] {
        return [
            this.github,
            this.youtube,
            this.twitch,
            this.twitter,
        ];
    }
}
