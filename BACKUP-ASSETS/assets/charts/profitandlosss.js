am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  var chart = am4core.create("profitandlosss", am4charts.XYChart);
  chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
  
  chart.data = [{
    "country": "Jan",
    "value": 3025
  }, {
    "country": "Feb",
    "value": 1882
  }, {
    "country": "Mar",
    "value": 1809
  }, {
    "country": "April",
    "value": 1322
  }, {
    "country": "May",
    "value": 1122
  }, {
    "country": "June",
    "value": -1114
  }, {
    "country": "July",
    "value": -984
  }, {
    "country": "Aug",
    "value": 711
  }, {
    "country": "Sept",
    "value": 665
  }, {
    "country": "Oct",
    "value": -580
  }, {
    "country": "Nov",
    "value": 443
  }, {
    "country": "Dec",
    "value": 441
  }];
  
 
  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.dataFields.category = "country";
  categoryAxis.renderer.minGridDistance = 40;
  
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  
  var series = chart.series.push(new am4charts.CurvedColumnSeries());
  series.dataFields.categoryX = "country";
  series.dataFields.valueY = "value";
  series.tooltipText = "{valueY.value}"
  series.columns.template.strokeOpacity = 0;
  
  series.columns.template.fillOpacity = 0.75;



  var hoverState = series.columns.template.states.create("hover");
  hoverState.properties.fillOpacity = 1;
  hoverState.properties.tension = 0.4;
  
  chart.cursor = new am4charts.XYCursor();
  
  // Add distinctive colors for each column using adapter
  series.columns.template.adapter.add("fill", function(fill, target) {
    return chart.colors.getIndex(target.dataItem.index);
  });
  
  chart.scrollbarX = new am4core.Scrollbar();
  
  }); // end am4core.ready()