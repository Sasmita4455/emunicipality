// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("tabTranUpcoming_chart", am4charts.XYChart);
chart.padding(10, 10, 10, 10);
var data = [];

chart.data = [{
  "month": "Apr",
  "income": 0,
  "lineColor": chart.colors.next()
}, {
  "month": "May",
  "income": 0,
  "lineColor": chart.colors.next()
}, {
  "month": "Jun",
  "income": 0,
  "lineColor": chart.colors.next()
}, {
  "month": "Jul",
  "income": 0,
  "lineColor": chart.colors.next()
}, {
  "month": "Aug",
  "income": 0,
  "lineColor": chart.colors.next()
}, {
  "month": "Sep",
  "income": 0,
  "lineColor": chart.colors.next()
}, {
  "month": "Oct",
  "income": 0,
  "lineColor": chart.colors.next()
}, {
  "month": "Nov",
  "income": 0,
  "lineColor": chart.colors.next()
}, {
  "month": "Dec",
  "income": 0,
  "lineColor": chart.colors.next()
}, {
  "month": "Jan",
  "income": 24,
  "lineColor": chart.colors.next()
}, {
  "month": "Feb",
  "income": 23,
  "lineColor": chart.colors.next()
}, {
  "month": "Mar",
  "income": 25,
  "lineColor": chart.colors.next()
}];

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.line.opacity = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 40;
categoryAxis.dataFields.category = "month";
categoryAxis.startLocation = 0.4;
categoryAxis.endLocation = 0.6;


var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.line.opacity = 0;
valueAxis.renderer.ticks.template.disabled = true;
valueAxis.min = 0;

var lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.dataFields.categoryX = "month";
lineSeries.dataFields.valueY = "income";
lineSeries.tooltipText = "Total Fund to be Disbursed: {valueY.value} Cr";
lineSeries.fillOpacity = 0.7;
lineSeries.strokeWidth = 3;
lineSeries.propertyFields.stroke = "lineColor";
lineSeries.propertyFields.fill = "lineColor";

var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
bullet.circle.radius = 6;
bullet.circle.fill = am4core.color("#fff");
bullet.circle.strokeWidth = 3;

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "panX";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
chart.logo.disabled = true;
