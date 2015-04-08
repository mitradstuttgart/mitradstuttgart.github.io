---
layout: mitradgelegenheit
title:  "Ostermarsch Stuttgart"
date:   2015-04-04 10:30:00
categories: mitradgelegenheit
facebook-event: https://www.facebook.com/events/629452510489651/
---

Am 04.&nbsp;April findet der Ostermarsch Stuttgart statt.  Die Demonstration findet anlässlich *70 Jahre Kriegsende* statt und steht unter dem Motto *„Unsere Verantwortung heißt: Frieden!“*.

Mehr Informationen dazu findet man unter anderem beim [Friedensnetz Baden-Württemberg][Friedensnetz]{:target="_blank"} und bei [Die AnStifter – InterCulturelle Initiativen e.&nbsp;V.][Anstifter]{:target="_blank"}.


### Zustiegsmöglichkeiten

<div class="row">
  <div class="col-md-6">
    <h4>Zu den Patch Barracks</h4>
    <div class="panel-group" id="accordionOne" role="tablist" aria-multiselectable="true">

{% include meeting-point-open.html group="One" id="MarienplatzOne" place="Stuttgart-Süd" point="Marienplatz" time="10:30 Uhr" expanded="true" %}
Der Treffpunkt liegt an der Ecke Tübinger Straße.

{% include meeting-point-image.html url="/images/marienplatz-small.jpg" alt="Treffpunkt Marienplatz" %}
{% include meeting-point-close.html %}

{% include meeting-point-open.html group="One" id="Vaihingen" place="S-Vaihingen" point="Vaihinger Markt" time="11:20 Uhr" %}
Der Treffpunkt liegt bei der Fußgängerampel vor der Schwabengalerie.
{% include meeting-point-close.html %}

{% include meeting-point-open.html group="One" id="PatchBarracks" place="S-Vaihingen" point="Patch Barracks" time="11:30 Uhr" %}
Wir werden gegen 11:30&nbsp;Uhr hier eintreffen.  Um 12:00&nbsp;Uhr
findet die Auftaktkundgebung statt.
{% include meeting-point-close.html %}

    </div>
  </div>

  <div class="col-md-6">
  <h4>Zu den Innenstadt-Kundgebungen</h4>
    <div class="panel-group" id="accordionTwo" role="tablist" aria-multiselectable="true">

{% include meeting-point-open.html group="Two" id="VaihingenBhf" place="S-Vaihingen" point="Reisezentrum Bahnhof" time="ca. 13:00 Uhr" expanded="true" %}
Nachdem der Demozug am Bahnhof S-Vaihingen eingetroffen ist, treffen
wir uns an der Litfaßsäule am Reisezentrum und radeln anschließend
gemeinsam zur Kundgebung in der Innenstadt.

{% include meeting-point-image.html url="/images/vaihingen-bahnhof-small.jpg" alt="Treffpunkt Reisezentrum Bahnhof in Stuttgart-Vaihingen" %}
{% include meeting-point-close.html %}

{% include meeting-point-open.html group="Two" id="MarienplatzTwo" place="Stuttgart-Süd" point="Marienplatz" time="13:30 Uhr" %}
Der Treffpunkt liegt an der Ecke Tübinger Straße.

{% include meeting-point-image.html url="/images/marienplatz-small.jpg" alt="Treffpunkt Marienplatz" %}
{% include meeting-point-close.html %}

{% include meeting-point-open.html group="Two" id="Lautenschlagerstrasse" place="Stuttgart-Mitte" point="Lautenschlagerstraße" time="13:45 Uhr" %}
Wir werden gegen 13:45&nbsp;Uhr hier eintreffen.  Die Kundgebung
beginnt um 14:00&nbsp;Uhr.
{% include meeting-point-close.html %}

    </div>
  </div>
</div>


### Karte

{% include map.html %}

#### Zum Ostermarsch bei den Patch Barracks
<div id="mitradmapOne" style="width:100%; height: 100px;"></div>

#### In die Innenstadt zu den Kundgebungen
<div id="mitradmapTwo" style="width:100%; height: 100px;"></div>


<script>
  $(document).ready(function(){
    makeMap(
      "/maps/frieden/ostermarsch-2015-04-04.1.geojson",
      "mitradmapOne",
      ["Marienplatz Stuttgart", "Ostermarsch Patch Barracks"]
    );
    makeMap(
      "/maps/frieden/ostermarsch-2015-04-04.2.geojson",
      "mitradmapTwo",
      ["S-Vaihingen", "Kundgebungen Innenstadt"]
    );
  });
</script>




[Friedensnetz]: http://www.friedensnetz.de/termine/2015/20150404.shtml
[Anstifter]:    http://www.die-anstifter.de/veranstaltungen/ostermarsch-am-eucomvaihingen-unsere-verantwortung-heisst-frieden/
