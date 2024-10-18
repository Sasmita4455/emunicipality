am4core.ready(function() {
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

let chart = am4core.create("fund_balance", am4charts.SlicedChart);
chart.data = [{
  "name": "Availabe Fund",
  "value": 200
}, {
  "name": "Used Fund",
  "value": 300
}];

var series = chart.series.push(new am4charts.PictorialStackedSeries());
series.dataFields.value = "value";
series.dataFields.category = "name";
series.alignLabels = true;
series.maskSprite.path = "m418.474 0h-324.949v64.559h114.593c42.083 0 77.976 26.986 91.3 64.559h-205.893v64.559h205.893c-13.324 37.573-49.217 64.559-91.3 64.559h-114.593v64.559l189.203 189.205 45.65-45.651-143.552-143.552h23.292c77.943 0 143.158-55.538 158.153-129.119h52.203v-64.559h-52.203c-4.858-23.84-14.99-45.783-29.116-64.559h81.319z";

series.labels.template.maxWidth = 90;
series.labels.template.wrap = true;


series.colors.list = [
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