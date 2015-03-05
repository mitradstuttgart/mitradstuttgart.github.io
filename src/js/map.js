function makeMap(mapsource, element, route) {
  L.mapbox.accessToken = 'pk.eyJ1IjoibWl0cmFkc3R1dHRnYXJ0IiwiYSI6ImNaSko4cHcifQ.46Jz7d_F7BoNcrIiBLYUaQ';

  $.getJSON(mapsource, function(data) {

    adjustMapHeight();
    $( window ).resize(function() {
      adjustMapHeight();
    });

    function adjustMapHeight() {
      var winHeight = $( window ).height();
      var height = 850;

      if (winHeight < height) {
        height = 0.9 * winHeight;
      }

      $("#" + element).css("height", height + "px");
    }

    var geojson = L.geoJson(data, {
      style: L.mapbox.simplestyle.style,

      pointToLayer: function(feature, latlng) {
        return new L.marker(latlng, {
          icon: L.mapbox.marker.icon(feature.properties),
          title: feature.properties.Treffpunkt + ": " + feature.properties.Zeit,
          riseOnHover: true
        });
      },

      onEachFeature: function (feature, layer) {
        var popupContent = "";

        if (feature.geometry.type === "LineString") {
          popupContent += "<div style=\"text-align:center;\">"
            + feature.properties.Strecke + "<br>"
            + "<span class=\"fa fa-bicycle\"></span>&nbsp;<strong>" + feature.properties.Distanz + "</strong>"
            + "</div>";
        } else {
          popupContent += "<div style='text-align:center;'>"
            + "<strong>" + feature.properties.Ort + "</strong><br>"
            + "<i>Treffpunkt:</i> <mark>" + feature.properties.Treffpunkt + "</mark><br>"
            + "<span class=\"fa fa-clock-o\"></span> <mark>" + feature.properties.Zeit + "</mark>";

          if (feature.properties.Zug) {
            popupContent += "<small><br>&nbsp;<table class=\"table table-striped table-condensed\">";
            var trains = feature.properties.Zug
            for (var key in trains) {
              if (trains.hasOwnProperty(key)) {
                popupContent += "<tr><td class=\"text-left\"><span class=\"fa fa-train\"></span> " + key + "</td>"
                  + "<td class=\"text-right\"><span class=\"fa fa-clock-o\"></span> " + trains[key] + "</td></tr>"
              }
            }
            popupContent += "</table></small>";
          }

          if (feature.properties.image) {
            popupContent += "<img "
              + "src=\"" + feature.properties.image.src + "\" "
              + "alt=\"" + feature.properties.image.alt + "\" "
              + "class=\"img-rounded\" width=\"100%\">";
          }

          popupContent += "</div>";
        }

        layer.bindPopup(popupContent);
      }
    });

    var map = L.mapbox.map(element, 'mitradstuttgart.l7l4l9ka', {
      minZoom: 10,
      maxZoom: 18,
      maxBounds: [[47.5,7.5],[50,10.5]]
    }).fitBounds(geojson.getBounds());

    geojson.addTo(map);

    // Add a legend
    var legend = "<strong>MitRadGelegenheit</strong>";
    if (route && route[0]) {
      legend += "<br>" + route[0]
      for (i = 1; i < route.length; i++) {
        legend += "<br>→ " + route[i];
      }
    }
    map.legendControl.addLegend(legend);
  });
}
