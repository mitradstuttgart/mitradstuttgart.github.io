---
layout: mitradgelegenheit
title:  "Fahrradbörse Vaihingen"
date:   2015-04-18 08:00:00
categories: mitradgelegenheit
facebook-event: 
---

Am 18.&nbsp;April fahren wir gemeinsam vom Stuttgarter Marienplatz zur [Fahrradbörse][Fahrradboerse-Vaihingen]{:target="_blank"} des RSV Stuttgart-Vaihingen.

### Zustiegsmöglichkeiten

<div class="row">
  <div class="col-xs-12">
    <div class="panel-group" id="accordionOne" role="tablist" aria-multiselectable="true">

{% include meeting-point-open.html group="One" id="Marienplatz" place="Stuttgart-Süd" point="Marienplatz" time="08:00 Uhr" expanded="true" %}
Der Treffpunkt befindet sich im Bereich des Beginns der Tübinger Straße.

{% include meeting-point-image.html url="/images/marienplatz-small.jpg" alt="Treffpunkt Marienplatz" %}
{% include meeting-point-close.html %}


{% include meeting-point-open.html group="One" id="Oesterfeldschule" place="S-Vaihingen" point="Österfeldschule" time="09:00 Uhr" %}
Hier liegt das Ziel der MitRadGelegenheit.
<p>Test</p>
{% include meeting-point-close.html %}

    </div>
  </div>
</div>


### Karte

{% include map.html %}

<div id="mitradmap" style="width:100%; height: 100px;"></div>

<script>
  $(document).ready(function(){
    makeMap(
      "/maps/verkehr/fahrradboerse-vaihingen-2015-04-18.geojson",
      "mitradmap",
      ["Marienplatz Stuttgart", "Fahrradbörse S-Vaihingen"]
    );
  });
</script>




[Fahrradboerse-Vaihingen]: http://www.rsv-vaihingen.de/index.php?id=526
