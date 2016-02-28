import 'whatwg-fetch';
import {Chart} from 'charts/chart';

export class Adaptor {
    heading = 'Chart Adaptor';
    config;
    chart;
    textData;
    data = [];
    console = "console";
    newLineChar = "\n";

    createChart(){
        var newCon = chartingApp.config.modules.adaptor.newConfig;
        this.chart = new Chart(newCon);
        this.chart.assignElement("chart-div");
    }

    addData(){
        if (!this.textData) {
            return;
        }
        
        this.data.push([new Date(Date.now()), parseInt(this.textData)]);
    }

    render(){
        this.chart.setData(this.data, true);
    }

    clear() {
        this.data.length = 0;
        this.chart.clearData(true);
    }

    log(inString){
        this.console += this.newLineChar + inString;
    }
}

