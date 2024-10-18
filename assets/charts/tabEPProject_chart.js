am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("tabEPProject_chart", am4charts.XYChart);

// Add data
chart.data = [ {
  "district": "Project- 01",
  "Enrolled": 25,
  "Placed": 25
}, {
  "district": "Project- 02",
  "Enrolled": 26,
  "Placed": 23
}, {
  "district": "Project- 03",
  "Enrolled": 28,
  "Placed": 25
}, {
  "district": "Project- 04",
  "Enrolled": 22,
  "Placed": 20
}, {
  "district": "Project- 05",
  "Enrolled": 27,
  "Placed": 25
}, {
  "district": "Project- 06",
  "Enrolled": 32,
  "Placed": 22
}, {
  "district": "Project- 07",
  "Enrolled": 28,
  "Placed": 25
}, {
  "district": "Project- 08",
  "Enrolled": 20,
  "Placed": 18
}, {
  "district": "Project- 09",
  "Enrolled": 23,
  "Placed": 22
}, {
  "district": "Project- 10",
  "Enrolled": 32,
  "Placed": 25
}, {
  "district": "Project- 11",
  "Enrolled": 26,
  "Placed": 25
}, {
  "district": "Project- 12",
  "Enrolled": 35,
  "Placed": 28
}, {
  "district": "Project- 13",
  "Enrolled": 28,
  "Placed": 25
}, {
  "district": "Project- 14",
  "Enrolled": 26,
  "Placed": 20
}, {
  "district": "Project- 15",
  "Enrolled": 26,
  "Placed": 25
}, {
  "district": "Project- 16",
  "Enrolled": 36,
  "Placed": 25
}, {
  "district": "Project- 17",
  "Enrolled": 38,
  "Placed": 32
}, {
  "district": "Project- 18",
  "Enrolled": 36,
  "Placed": 34
}, {
  "district": "Project- 19",
  "Enrolled": 28,
  "Placed": 25
}, {
  "district": "Project- 20",
  "Enrolled": 22,
  "Placed": 20
}, {
  "district": "Project- 21",
  "Enrolled": 15,
  "Placed": 12
}, {
  "district": "Project- 22",
  "Enrolled": 16,
  "Placed": 25
}, {
  "district": "Project- 23",
  "Enrolled": 29,
  "Placed": 27
}, {
  "district": "Project- 24",
  "Enrolled": 28,
  "Placed": 25
}, {
  "district": "Project- 25",
  "Enrolled": 26,
  "Placed": 26
}, {
  "district": "Project- 26",
  "Enrolled": 22,
  "Placed": 21
}, {
  "district": "Project- 27",
  "Enrolled": 20,
  "Placed": 15
}, {
  "district": "Project- 28",
  "Enrolled": 35,
  "Placed": 32
}, {
  "district": "Project- 29",
  "Enrolled": 28,
  "Placed": 25
}, {
  "district": "Project- 30",
  "Enrolled": 27,
  "Placed": 22
}, {
  "district": "Project- 31",
  "Enrolled": 28,
  "Placed": 25
}, {
  "district": "Project- 32",
  "Enrolled": 27,
  "Placed": 22
}, {
  "district": "Project- 33",
  "Enrolled": 28,
  "Placed": 25
}, {
  "district": "Project- 34",
  "Enrolled": 27,
  "Placed": 22
}, {
  "district": "Project- 35",
  "Enrolled": 28,
  "Placed": 25
}, {
  "district": "Project- 36",
  "Enrolled": 27,
  "Placed": 22
}, {
  "district": "Project- 37",
  "Enrolled": 28,
  "Placed": 25
}, {
  "district": "Project- 38",
  "Enrolled": 27,
  "Placed": 22
}, {
  "district": "Project- 39",
  "Enrolled": 28,
  "Placed": 25
}, {
  "district": "Project- 40",
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