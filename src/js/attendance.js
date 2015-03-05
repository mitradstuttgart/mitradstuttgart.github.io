function showAttendance(source, graphElement) {
  if (graphElement === undefined) {
    return;
  }
  var color = d3.scale.category10();

  var svgWidth  = 600,
      svgHeight = 400,
      margin = { top: 20, right: 40, bottom: 40, left: 40 },
      chartWidth  = svgWidth  - margin.left - margin.right,
      chartHeight = svgHeight - margin.top  - margin.bottom;

  var x = d3.scale.ordinal()
      .rangePoints([0, chartWidth]);

  var y = y = d3.scale.linear()
      .range([chartHeight, 0]);

  d3.json(source, function (error, data) {
    if (error) {
      console.error(error);
      return;
    }

    var svg = d3.select('#' + graphElement).append('svg')
        .attr('width',  svgWidth)
        .attr('height', svgHeight)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


    // Axes
    axes = drawAxes(svg, data, x, y, chartWidth, chartHeight);

    // Data
    drawPaths(svg, data, x, y, color);

    // Legend
    drawLegend(svg, color, chartWidth, chartHeight);
  });
}


function drawAxes(svg, data, x, y, chartWidth, chartHeight) {
  var xAxis = d3.svg.axis()
      .scale(x)
      .tickFormat(function(d) { return toMonthName(d); })
      .orient('bottom');

  x.domain(data.map(function(d) { return d.Month; }));

  svg.append('g')
     .attr('class', 'x axis')
     .attr('transform', 'translate(0,' + chartHeight + ')')
     .call(xAxis);


  var yAxis = d3.svg.axis()
      .scale(y)
      .orient('left');

  var maxY = d3.max(data, function(d) {
    var localMax = 0;
    for (var key in d) {
      if (Object.prototype.hasOwnProperty.call(d, key) &&
          key != "Month" && d[key] > localMax) {
        localMax = d[key];
      }
    }
    return localMax;
  });

  y.domain([0, maxY]);

  svg.append('g')
     .attr('class', 'y axis')
     .call(yAxis);
}


function drawPaths (svg, data, x, y, color) {
  svg.datum(data);

  var keys = {};

  data.forEach(function(d) {
    for (var key in d) {
      if (Object.prototype.hasOwnProperty.call(d, key) && key != "Month") {
        keys[key] = {};
      }
    }
  });
  var years = [];

  for (var key in keys) {
    if (Object.prototype.hasOwnProperty.call(keys, key)) {
      years.push(key);
    }
  }

  for (var i = years.length-1; i >= 0; i--) {
    var year = years[i];

    var area = d3.svg.area()
        .interpolate('monotone')
        .x (function (d) { return x(d.Month); })
        .y0(function (d) { return y(0); })
        .y1(function (d) { return d[year] !== undefined ? y(d[year]) : y(0); });

    svg.append('path')
      .attr('d', area)
      .style("fill-opacity", .3)
      .style("fill", function() { return color(year); })
      .style("stroke-width", 0)
      .attr('clip-path', 'url(#rect-clip)');

    var line = d3.svg.line()
        .interpolate('monotone')
        .x(function(d) { return x(d.Month); })
        .y(function(d) { return d[year] !== undefined ? y(d[year]) : y(0); });

    svg.append('path')
      .attr('d', line)
      .style("fill", "transparent")
      .style("stroke", color(year))
      .style("stroke-width", 2);
  }
}


function drawLegend(svg, color, chartWidth, chartHeight) {
  var legend = svg.selectAll(".legend")
      .data(color.domain().slice().reverse())
      .enter().append("g")
      .attr("transform", function(d, i) {
        return "translate(0," + i * 20 + ")";
      });

  legend.append("rect")
        .attr("x", chartWidth - 18)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill-opacity", 1)
        .style("fill", color);

  legend.append("text")
        .attr("x", chartWidth - 24)
        .attr("y", 9)
        .attr("dy", ".35em")
        .style("text-anchor", "end")
        .text(function(d) { return d; });
}


function toMonthName (month) {
  switch(month) {
  case 1:
    return 'Jan.';
  case 2:
    return 'Feb.';
  case 3:
    return 'März';
  case 4:
    return 'April';
  case 5:
    return 'Mai';
  case 6:
    return 'Juni';
  case 7:
    return 'Juli';
  case 8:
    return 'Aug.';
  case 9:
    return 'Sep.';
  case 10:
    return 'Okt.';
  case 11:
    return 'Nov.';
  case 12:
    return 'Dez.';
  default:
    return month;
  }
}
