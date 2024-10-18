am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("tabEPPIA_chart", am4charts.XYChart);

// Add data
chart.data = [ {
  "district": "PIA- 01",
  "Enrolled": 25,
  "Placed": 25
}, {
  "district": "PIA- 02",
  "Enrolled": 26,
  "Placed": 23
}, {
  "district": "PIA- 03",
  "Enrolled": 28,
  "Placed": 25
}, {
  "district": "PIA- 04",
  "Enrolled": 22,
  "Placed": 20
}, {
  "district": "PIA- 05",
  "Enrolled": 27,
  "Placed": 25
}, {
  "district": "PIA- 06",
  "Enrolled": 32,
  "Placed": 22
}, {
  "district": "PIA- 07",
  "Enrolled": 28,
  "Placed": 25
}, {
  "district": "PIA- 08",
  "Enrolled": 20,
  "Placed": 18
}, {
  "district": "PIA- 09",
  "Enrolled": 23,
  "Placed": 22
}, {
  "district": "PIA- 10",
  "Enrolled": 32,
  "Placed": 25
}, {
  "district": "PIA- 11",
  "Enrolled": 26,
  "Placed": 25
}, {
  "district": "PIA- 12",
  "Enrolled": 35,
  "Placed": 28
}, {
  "district": "PIA- 13",
  "Enrolled": 28,
  "Placed": 25
}, {
  "district": "PIA- 14",
  "Enrolled": 26,
  "Placed": 20
}, {
  "district": "PIA- 15",
  "Enrolled": 26,
  "Placed": 25
}, {
  "district": "PIA- 16",
  "Enrolled": 36,
  "Placed": 25
}, {
  "district": "PIA- 17",
  "Enrolled": 38,
  "Placed": 32
}, {
  "district": "PIA- 18",
  "Enrolled": 36,
  "Placed": 34
}, {
  "district": "PIA- 19",
  "Enrolled": 28,
  "Placed": 25
}, {
  "district": "PIA- 20",
  "Enrolled": 22,
  "Placed": 20
}, {
  "district": "PIA- 21",
  "Enrolled": 15,
  "Placed": 12
}, {
  "district": "PIA- 22",
  "Enrolled": 16,
  "Placed": 25
}, {
  "district": "PIA- 23",
  "Enrolled": 29,
  "Placed": 27
}, {
  "district": "PIA- 24",
  "Enrolled": 28,
  "Placed": 25
}, {
  "district": "PIA- 25",
  "Enrolled": 26,
  "Placed": 26
}, {
  "district": "PIA- 26",
  "Enrolled": 22,
  "Placed": 21
}, {
  "district": "PIA- 27",
  "Enrolled": 20,
  "Placed": 15
}, {
  "district": "PIA- 28",
  "Enrolled": 35,
  "Placed": 32
}, {
  "district": "PIA- 29",
  "Enrolled": 28,
  "Placed": 25
}, {
  "district": "PIA- 30",
  "Enrolled": 27,
  "Placed": 22
} ];


// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;
categoryAxis.renderer.minHeight = 110;

categoryAxis.dataFields.category = "district";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 10;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.6;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "Beneficiaries";
valueAxis.title.fontWeight = 600;

// Create series
var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "Enrolled";
series.dataFields.categoryX = "district";
series.tooltipText = "Enrolled: [bold]{valueY}[/]";

var series2 = chart.series.push(new am4charts.ColumnSeries());
series2.dataFields.valueY = "Placed";
series2.dataFields.categoryX = "district";
series2.columns.template.width = am4core.percent(50);
series2.tooltipText = "Placed : [bold]{valueY}[/]";

chart.cursor = new am4charts.XYCursor();
chart.cursor.lineX.disabled = true;
chart.cursor.lineY.disabled = true;

chart.colors.list = [
  am4core.color("#ffa500"),
  am4core.color("#fb5607"),
  am4core.color("#009688"),
  am4core.color("#2bb907"),
  am4core.color("#3cb44b"),
  am4core.color("#42d4f4"),
  am4core.color("#4363d8"),
  am4core.color("#911eb4"),
  am4core.color("#f032e6")
];
chart.logo.disabled = true;
}); // end am4core.ready()