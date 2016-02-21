import 'bluebird';
import 'whatwg-fetch';

export var basicConfig = {
    title: "Charting Application"
}

var fullConfig;

export function loadFullConfig() {
    debugger;
    var cp = fullConfig ? fullConfig : new Promise((resolve, reject) => {
        debugger;
    });
    return cp;
}