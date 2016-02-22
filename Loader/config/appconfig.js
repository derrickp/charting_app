import 'bluebird';
import 'whatwg-fetch';

var fullConfig;

export function loadFullConfig() {
    fullConfig = fullConfig ? fullConfig : new Promise((resolve, reject) => {
        // fetch doesn't error out on bad http status codes. We need a function to check that.
        fetch('src/config/temp-full-config.json').then((configResponse) => {
            return configResponse.json();
        }).then((config) => {
            resolve(config);
        }).catch((error) => {
            console.log("error getting full config");
            reject(error);
        });
    });

    return fullConfig;
}