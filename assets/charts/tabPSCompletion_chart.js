am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("tabPSCompletion_chart", am4charts.XYChart);
chart.padding(10, 0, 10, 0);
// Add data
chart.data = [{
  "country": "Project- 1",
  "visits": 80
}, {
  "country": "Project- 2",
  "visits": 78
}, {
  "country": "Project- 3",
  "visits": 76
}, {
  "country": "Project- 4",
  "visits": 70
}, {
  "country": "Project- 5",
  "visits": 68
}, {
  "country": "Project- 6",
  "visits": 55
}, {
  "country": "Project- 7",
  "visits": 70
}, {
  "country": "Project- 8",
  "visits": 68
}, {
  "country": "Project- 9",
  "visits": 75
}, {
  "country": "Project- 10",
  "visits": 70
}, {
  "country": "Project- 11",
  "visits": 78
}, {
  "country": "Project- 12",
  "visits": 55
}, {
  "country": "Project- 13",
  "visits": 70
}, {
  "country": "Project- 14",
  "visits": 78
}, {
  "country": "Project- 15",
  "visits": 75
}, {
  "country": "Project- 16",
  "visits": 70
}, {
  "country": "Project- 17",
  "visits": 78
}, {
  "country": "Project- 18",
  "visits": 65
}, {
  "country": "Project- 19",
  "visits": 70
}, {
  "country": "Project- 20",
  "visits": 68
}, {
  "country": "Project- 21",
  "visits": 70
}, {
  "country": "Project- 22",
  "visits": 68
}, {
  "country": "Project- 23",
  "visits": 77
}, {
  "country": "Project- 24",
  "visits": 70
}, {
  "country": "Project- 25",
  "visits": 68
}];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "country";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 30;
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;
categoryAxis.tooltip.disabled = false;
categoryAxis.renderer.minHeight = 110;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.minWidth = 50;

// Create series
var series = chart.series.push(new am4charts.ColumnSeries());
series.sequencedInterpolation = true;
series.dataFields.valueY = "visits";
series.dataFields.categoryX = "country";
series.tooltipText = "Completed: [bold]{valueY}%";
series.columns.template.strokeWidth = 0;

series.tooltip.pointerOrientation = "vertical";

series.columns.template.column.cornerRadiusTopLeft = 10;
series.columns.template.column.cornerRadiusTopRight = 10;

// on hover, make corner radiuses bigger
var hoverState = series.columns.template.column.states.create("hover");
hoverState.properties.cornerRadiusTopLeft = 0;
hoverState.properties.cornerRadiusTopRight = 0;
hoverState.properties.fillOpacity = 1;

series.columns.template.adapter.add("fill", function(fill, target) {
  return chart.colors.getIndex(target.dataItem.index);
});

// Cursor
chart.cursor = new am4charts.XYCursor();
chart.logo.disabled = true;



}); // end am4core.ready()