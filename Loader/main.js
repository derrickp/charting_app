import 'bootstrap';
import {loadFullConfig} from 'config/appconfig';

export function configure(aurelia) {
    return loadFullConfig().then(fullConfig => {
        window.chartingApp = {
            config: fullConfig
        };
        aurelia.use
            .standardConfiguration()
            .developmentLogging();

        return aurelia.start().then(() => aurelia.setRoot());
    });
}