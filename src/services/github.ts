import { HTTPS_METHOD } from "../lib/core/http.js";
import { efetch } from "../lib/data/easyfetch.js";

export default class Github {

    public static getFollowers(username: string): Promise<any> {
        
        return new Promise((resolve, reject) => {
            
            
            const response = efetch({
                method: HTTPS_METHOD.GET,
                url: `https://api.github.com/users/${username}`,
                parameters: {}
            });
            

            response.success(data => {
                resolve(data.followers);
            });
          
            response.error(error => {
                reject(error);
            });

            response.json();

        });
    }

} 