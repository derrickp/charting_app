import 'whatwg-fetch';

export class Chart{
    config;
    dy;
    element;
    data = [];

    constructor(chartConfig) {
            this.config = defaultConfig;
            this.configure(chartConfig);
    }

    configure(chartConfig) {
        if (!chartConfig) {
            return;
        }
        this.mixConfiguration(chartConfig);
    }

    mixConfiguration(chartConfig) {
        for (var p in chartConfig) {
            if (this.config.hasOwnProperty(p)) {
                this.config[p] = chartConfig[p];
            }
        }
    }

    addData(inData, refresh) {
        this.data.push(inData);
        if (refresh) {
            this.render();
        }
    }

    setData(inData, refresh) {
        this.data = inData;
        if (refresh) {
            this.render();
        }
    }

    clearData(refresh) {
        this.data = [];

        if (refresh) {
            this.render();
        }
    }

    assignElement(inElementId) {
        if (inElementId[0] === "#"){
            inElementId = inElementId.substring(1, inElementId.length -1);
        }
        this.element = document.getElementById(inElementId);
    }

    render() {
        if (!this.element){
            //whine
            alert("No Element Supplied");
            return;
        }
        if (!this.data){
            //whine
            alert("No Data Supplied");
            return;
        }

        if (this.dy)
        {
            this.refresh();
        }
        else {
            this.dy = new Dygraph(this.element, this.data, this.config);
        }
        
    }

    refresh() {
        if (!this.dy) {
            alert("No dy yo");
            return;
        }

        this.dy.updateOptions( { 'file': this.data });
    }
}
var defaultConfig = {
    highlightCircleSize: 3,
    highlightSeriesOpts: null,
    highlightSeriesBackgroundAlpha: 0.5,

    labelsDivWidth: 250,
    labelsDivStyles: {
        // TODO(danvk): move defaults from createStatusMessage_ here.
    },
    labelsSeparateLines: false,
    labelsShowZeroValues: true,
    labelsKMB: false,
    labelsKMG2: false,
    showLabelsOnHighlight: true,

    digitsAfterDecimal: 2,
    maxNumberWidth: 6,
    sigFigs: null,

    strokeWidth: 1.0,
    strokeBorderWidth: 0,
    strokeBorderColor: "white",

    axisTickSize: 3,
    axisLabelFontSize: 14,
    rightGap: 5,

    showRoller: false,

    delimiter: ',',

    sigma: 2.0,
    errorBars: false,
    fractions: false,
    wilsonInterval: true,  // only relevant if fractions is true
    customBars: false,
    fillGraph: false,
    fillAlpha: 0.15,
    connectSeparatedPoints: false,

    stackedGraph: false,
    stackedGraphNaNFill: 'all',
    hideOverlayOnMouseOut: true,

    legend: 'onmouseover',
    stepPlot: false,
    avoidMinZero: false,
    xRangePad: 0,
    yRangePad: null,
    drawAxesAtZero: false,

    // Sizes of the various chart labels.
    titleHeight: 28,
    xLabelHeight: 18,
    yLabelWidth: 18,

    drawXAxis: true,
    drawYAxis: true,
    axisLineColor: "black",
    axisLineWidth: 0.3,
    gridLineWidth: 0.3,
    axisLabelColor: "black",
    axisLabelWidth: 50,
    drawYGrid: true,
    drawXGrid: true,
    gridLineColor: "rgb(128,128,128)",

    interactionModel: null,  // will be set to Dygraph.Interaction.defaultModel
    animatedZooms: false,  // (for now)

    // Range selector options
    showRangeSelector: false,
    rangeSelectorHeight: 40,
    rangeSelectorPlotStrokeColor: "#808FAB",
    rangeSelectorPlotFillColor: "#A7B1C4",
    showInRangeSelector: null,

    // The ordering here ensures that central lines always appear above any
    // fill bars/error bars.

    plugins: [ ],

    // per-axis options
    axes: {
        x: {
            pixelsPerLabel: 70,
            axisLabelWidth: 60,
            drawGrid: true,
            drawAxis: true,
            independentTicks: true,
            ticker: null  // will be set in dygraph-tickers.js
        },
        y: {
            axisLabelWidth: 50,
            pixelsPerLabel: 30,
            drawGrid: true,
            drawAxis: true,
            independentTicks: true,
            ticker: null  // will be set in dygraph-tickers.js
        },
        y2: {
            axisLabelWidth: 50,
            pixelsPerLabel: 30,
            drawAxis: true,  // only applies when there are two axes of data.
            drawGrid: false,
            independentTicks: false,
            ticker: null  // will be set in dygraph-tickers.js
        }
    }
}