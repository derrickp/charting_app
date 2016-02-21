import {basicConfig, loadFullConfig} from 'config/appconfig';

export class App {
    configureRouter(config, router) {
        config.title = basicConfig.title ? basicConfig.title : "Charting";
        config.map(basicConfig.routes);

        this.router = router;
        loadFullConfig().then((config) => {
            console.log(config);
        });
    }
}