import 'bluebird';
import 'whatwg-fetch';

export var basicConfig = {
    title: "Charting Application",
    fullConfigUrl: "/src/config/temp-full-config.json",
    routes: [
        { route: ['','welcome'], name: 'welcome', moduleId: './modules/welcome/welcome', nav: true, title:'Welcome' }
    ]
}

var fullConfig;

export function loadFullConfig() {
    fullConfig = fullConfig ? fullConfig : new Promise((resolve, reject) => {
        // fetch doesn't error out on bad http status codes. We need a function to check that.
        fetch(basicConfig.fullConfigUrl).then((configResponse) => {
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