import {basicConfig} from 'config/appconfig';

export class App {
    configureRouter(config, router) {
        config.title = basicConfig.title ? basicConfig.title : "Charting";
        config.map([
          { route: ['','welcome'], name: 'welcome', moduleId: './welcome', nav: true, title:'Welcome' }
        ]);

        this.router = router;
    }
}