am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("tabASSession_chart", am4charts.XYChart);
chart.padding(10, 0, 10, 0);
// Add data
chart.data = [{
  "country": "Before 9.00",
  "visits": 70
}, {
  "country": "9.00 - 9.30",
  "visits": 92
}, {
  "country": "9.30 - 10.00",
  "visits": 97
}, {
  "country": "10.00 - 10.30",
  "visits": 94
}, {
  "country": "10.30 - 11",
  "visits": 85
}, {
  "country": "11 - 11.30",
  "visits": 79
}, {
  "country": "11.30 - 12",
  "visits": 74
}, {
  "country": "After 12",
  "visits": 78
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
series.tooltipText = "Average Attendance Rate: [bold]{valueY}%";
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