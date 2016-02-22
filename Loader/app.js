export class App {
    configureRouter(config, router) {
        config.title = chartingApp.config.title ? chartingApp.config.title : "Charting";
        config.map(chartingApp.config.routes);

        this.router = router;
    }
}