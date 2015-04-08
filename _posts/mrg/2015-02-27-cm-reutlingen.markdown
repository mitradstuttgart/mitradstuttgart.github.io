---
layout: mitradgelegenheit
title:  "Critical Mass Reutlingen"
date:   2015-02-27 15:30:00
categories: mitradgelegenheit
facebook-event: https://www.facebook.com/events/1402271866750032
---

Wer die MitRadGelegenheit zur [Critical Mass Stuttgart][CM-Stuttgart]{:target="_blank"} am 06.&nbsp;März 2015 nicht mehr erwarten kann, für den gibt es schon eine Woche zuvor, am 27.&nbsp;Februar, eine kleine Kostprobe.

Es geht zur [Critical Mass Reutlingen][CM-Reutlingen]{:target="_blank"}.  Start der MitRadGelegnheit wird um 15:30&nbsp;Uhr in Stuttgart-Vaihingen sein.  Die Critical Mass beginnt um 18:00&nbsp;Uhr.

**Bitte kurz Bescheid geben, falls ihr mitfahren wollt, damit die Treffpunkte (inkl. S-Vaihingen) auch sicher angefahren werden!**


### Zustiegsmöglichkeiten

<div class="row">
  <div class="col-xs-12 col-md-6">
    <h4>Aus Stuttgart</h4>
    <div class="panel-group" id="accordionLeft" role="tablist" aria-multiselectable="true">

{% include meeting-point-open.html group="Left" id="Vaihingen" place="Stuttgart-Vaihingen" point="Reisezentrum Bahnhof" time="15:30 Uhr" expanded="true" %}
Bitte kurz Bescheid geben, falls Du ab hier mitfahren möchtest.
{% include meeting-point-image.html url="/images/vaihingen-bahnhof-small.jpg" alt="Treffpunkt Reisezentrum Bahnhof in Stuttgart-Vaihingen" %}
{% include meeting-point-close.html %}

{% include meeting-point-open.html group="Left" id="Burkhardtsmuehle" place="Burkhardtsmühle" point="Parkplatz" time="16:10 Uhr" %}
Bitte kurz Bescheid geben, falls Du ab hier mitfahren möchtest.
{% include meeting-point-close.html %}

{% include meeting-point-open.html group="Left" id="Neckartailfingen" place="Neckartailfingen" point="Tübinger Straße" time="16:40 Uhr" %}
Bitte kurz Bescheid geben, falls Du ab hier mitfahren möchtest.
{% include meeting-point-close.html %}

{% include meeting-point-open.html group="Left" id="Pliezhausen" place="Pliezhausen" point="Neckartal, L 378" time="17:20 Uhr" %}
Bitte kurz Bescheid geben, falls Du ab hier mitfahren möchtest.
{% include meeting-point-close.html %}

{% include meeting-point-open.html group="Left" id="Reutlingen" place="Reutlingen" point="Stadthalle" time="18:00 Uhr" %}
Viel Spaß bei der CM Reutlingen!
{% include meeting-point-close.html %}

    </div>
  </div><!-- /Aus Stuttgart -->

  <div class="col-xs-12 col-md-6">
    <h4>Aus Herrenberg</h4>
    <div class="panel-group" id="accordionRight" role="tablist" aria-multiselectable="true">

{% include meeting-point-open.html group="Right" id="Herrenberg" place="Herrenberg" point="Auf dem Graben" time="15:00 Uhr" expanded="true" %}
Bitte kurz Bescheid geben, falls Du ab hier mitfahren möchtest.

Mehr dazu leider nur bei <a href="https://www.facebook.com/events/380528542119050/" target="_blank">Facebook</a>.
{% include meeting-point-close.html %}

{% include meeting-point-open.html group="Right" id="Reutlingen2" place="Reutlingen" point="Stadthalle" time="18:00 Uhr" %}
Viel Spaß bei der CM Reutlingen!
{% include meeting-point-close.html %}

    </div>
  </div><!-- /Aus Herrenberg -->
</div>


### Karte

{% include map.html %}

<div id="mitradmap" style="width:100%; height: 100px;"></div>

<script>
  $(document).ready(function(){
    makeMap(
      "/maps/critical-mass/reutlingen-2015-02-27.geojson",
      "mitradmap",
      ["S-Vaihingen", "Burkhardtsmühle", "Neckartailfingen", "Pliezhausen", "Critical Mass Reutlingen"]
    );
  });
</script>




[CM-Stuttgart]:  https://criticalmassstuttgart.wordpress.com/
[CM-Reutlingen]: https://criticalmassreutlingen.wordpress.com/
