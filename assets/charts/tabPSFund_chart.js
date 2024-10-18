am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("tabPSFund_chart", am4charts.XYChart);

// Add data
chart.data = [{
    "country": "Project- 1",
    "Disbursed": 39,
    "Used": 35
    
}, {
    "country": "Project- 2",
    "Used": 30,
    "Disbursed": 37
    
}, {
    "country": "Project-  3",
    "Used": 29,
    "Disbursed": 34
    
}, {
    "country": "Project- 4",
    "Used": 30,
    "Disbursed": 37
    
}, {
    "country": "Project-  5",
    "Used": 29,
    "Disbursed": 34
    
}, {
    "country": "Project- 6",
    "Used": 30,
    "Disbursed": 37
    
}, {
    "country": "Project-  7",
    "Used": 29,
    "Disbursed": 34
    
}, {
    "country": "Project- 8",
    "Used": 30,
    "Disbursed": 37
    
}, {
    "country": "Project- 9",
    "Used": 29,
    "Disbursed": 34
    
}, {
    "country": "Project- 10",
    "Used": 30,
    "Disbursed": 37
    
}, {
    "country": "Project- 11",
    "Used": 29,
    "Disbursed": 34
    
}, {
    "country": "Project- 12",
    "Used": 30,
    "Disbursed": 37
    
}, {
    "country": "Project-  13",
    "Used": 29,
    "Disbursed": 34
    
}, {
    "country": "Project- 15",
    "Used": 30,
    "Disbursed": 37
    
}, {
    "country": "Project-  16",
    "Used": 29,
    "Disbursed": 34
    
}, {
    "country": "Project- 17",
    "Used": 30,
    "Disbursed": 37
    
}, {
    "country": "Project-  18",
    "Used": 29,
    "Disbursed": 34
    
}, {
    "country": "Project- 19",
    "Used": 30,
    "Disbursed": 37
    
}, {
    "country": "Project-  20",
    "Used": 29,
    "Disbursed": 34
    
}, {
    "country": "Project- 21",
    "Used": 30,
    "Disbursed": 37
    
}, {
    "country": "Project-  22",
    "Used": 29,
    "Disbursed": 34
    
}, {
    "country": "Project- 23",
    "Used": 30,
    "Disbursed": 37
    
}, {
    "country": "Project-  24",
    "Used": 29,
    "Disbursed": 34
    
}, {
    "country": "Project-  25",
    "Used": 29,
    "Disbursed": 34
    
}];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;
categoryAxis.renderer.minHeight = 110;
categoryAxis.dataFields.category = "country";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 30;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.fontWeight = 800;

// Create series
var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "Used";
series.dataFields.categoryX = "country";
series.clustered = false;
series.tooltipText = "Fund Used: [bold]{valueY} Cr";

var series2 = chart.series.push(new am4charts.ColumnSeries());
series2.dataFields.valueY = "Disbursed";
series2.dataFields.categoryX = "country";
series2.clustered = false;
series2.columns.template.width = am4core.percent(50);
series2.tooltipText = "Fund Disbursed: [bold]{valueY} Cr";

chart.cursor = new am4charts.XYCursor();
chart.cursor.lineX.disabled = true;
chart.cursor.lineY.disabled = true;

}); // end am4core.ready()