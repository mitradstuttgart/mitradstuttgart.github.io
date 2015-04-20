---
layout: mitradgelegenheit
title:  "Critical Mass Böblingen"
date:   2015-04-24 16:00:00
categories: mitradgelegenheit
facebook-event: https://www.facebook.com/events/973501756016576/
---

Am 24.&nbsp;April gibt es wieder eine MitRadGelegenheit aus Stuttgart-Vaihingen und möglicherweise auch aus Herrenberg zur [Critical Mass Böblingen][CM-Boeblingen]{:target="_blank"}.  Nachdem im März die erste Critical Mass in diesem Jahr auf 22&nbsp;Teilnehmende kam, gilt es jetzt sich weiter in Richtung des bisherigen Rekords von 57&nbsp;Radfahrenden zu vergrößern.  Der Radaktionstag des Landkreises Böblingen am 19.&nbsp;April und das sonnige Wetter bieten die optimalen Voraussetzungen dafür.

### Zustiegsmöglichkeiten

<div class="row">
  <div class="col-xs-12">
  <h4>Aus Stuttgart</h4>
    <div class="panel-group" id="accordionOne" role="tablist" aria-multiselectable="true">

{% include meeting-point-open.html group="One" id="Uni" place="Universität S-Vaihingen" point="S-Bahnhof <small>(Südausgang)</small>" time="15:45 Uhr" expanded="true" %}
Der Treffpunkt liegt auf der Südseite der Universitätsstraße, bei der
Fahrradabstellanlage.  Es wird pünktlich losgefahren.

Aus der Innenstadt besteht die Möglichkeit mit der S-Bahn per
Kurzstreckenticket (1,20&nbsp;€) von der Schwabstraße zur Universität
zu fahren.
{% include meeting-point-close.html %}

{% include meeting-point-open.html group="One" id="Vaihingen" place="S-Vaihingen" point="Reisezentrum Bahnhof" time="16:00 Uhr" %}
Der Treffpunkt liegt auf der Seite des Busbahnhofs.

Es besteht die Möglichkeit aus Filderstadt oder der Stuttgarter
Innenstadt per S-Bahn dazuzustoßen.

{% include meeting-point-image.html url="/images/vaihingen-bahnhof-small.jpg" alt="Treffpunkt Reisezentrum Bahnhof in Stuttgart-Vaihingen" %}
{% include meeting-point-close.html %}

{% include meeting-point-open.html group="One" id="RHoehe" place="S-Vaihingen" point="Rohrer Höhe" time="bei Bedarf" %}
Wer möchte, kann sich hier der MitRadGelegenheit anschließen.  Wann
wir dort eintreffen hängt von unseren Kräften ab.
{% include meeting-point-close.html %}

{% include meeting-point-open.html group="One" id="Boeblingen" place="Böblingen" point="Elbenplatz" time="17:00 Uhr" %}
Hier startet die CM Böblingen.
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
      "/maps/critical-mass/boeblingen-2015-04-24.geojson",
      "mitradmap",
      ["S-Vaihingen", "Critical Mass Böblingen"]
    );
  });
</script>




[CM-Boeblingen]: http://www.radeln-in-bb.de/criticalmass/
