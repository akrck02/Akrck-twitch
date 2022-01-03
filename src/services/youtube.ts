import { PATHS } from "../config/config";
import { HTTPS_METHOD } from "../lib/core/http";
import { efetch } from "../lib/data/easyfetch.js";

export default class Youtube {

   
    public static getFollowers(username: string): Promise<any> {
        
        return new Promise((resolve, reject) => {
            
            const response = efetch({
                method: HTTPS_METHOD.GET,
                url: PATHS.JSON + "followers.json",
                parameters: {}
            });
            

            response.success(data => {
                resolve(data.youtube);
            });
          
            response.error(error => {
                reject(error);
            });

            response.json();

        });
    }

}
