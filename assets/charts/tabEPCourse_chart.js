am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("tabEPCourse_chart", am4charts.XYChart);

// Add data
chart.data = [ {
  "district": "Course- 01",
  "Enrolled": 25,
  "Placed": 25
}, {
  "district": "Course- 02",
  "Enrolled": 26,
  "Placed": 23
}, {
  "district": "Course- 03",
  "Enrolled": 28,
  "Placed": 25
}, {
  "district": "Course- 04",
  "Enrolled": 22,
  "Placed": 20
}, {
  "district": "Course- 05",
  "Enrolled": 27,
  "Placed": 25
}, {
  "district": "Course- 06",
  "Enrolled": 32,
  "Placed": 22
}, {
  "district": "Course- 07",
  "Enrolled": 28,
  "Placed": 25
}, {
  "district": "Course- 08",
  "Enrolled": 20,
  "Placed": 18
}, {
  "district": "Course- 09",
  "Enrolled": 23,
  "Placed": 22
}, {
  "district": "Course- 10",
  "Enrolled": 32,
  "Placed": 25
}, {
  "district": "Course- 11",
  "Enrolled": 26,
  "Placed": 25
}, {
  "district": "Course- 12",
  "Enrolled": 35,
  "Placed": 28
}, {
  "district": "Course- 13",
  "Enrolled": 28,
  "Placed": 25
}, {
  "district": "Course- 14",
  "Enrolled": 26,
  "Placed": 20
}, {
  "district": "Course- 15",
  "Enrolled": 26,
  "Placed": 25
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