---
layout: mitradgelegenheit
title:  "Future Mobility Camp"
date:   2015-04-10 08:30:00
categories: mitradgelegenheit
facebook-event: https://www.facebook.com/events/960752343936994/
redirect_from: "/mitradgelegenheit/2015/04/10/i-mobility.html"
---

Am Freitag, den 10.&nbsp;April, geht es per MitRadGelegenheit vom Stuttgarter Marienplatz zum [Future Mobility Camp][FMC-Stuttgart]{:target="_blank"} bei der [Messe i-Mobility][I-Mobility]{:target="_blank"}.


### Zustiegsmöglichkeiten

<div class="row">
  <div class="col-xs-12">
    <div class="panel-group" id="accordionOne" role="tablist" aria-multiselectable="true">

{% include meeting-point-open.html group="One" id="Marienplatz" place="Stuttgart-Süd" point="Marienplatz" time="07:40 Uhr" expanded="true" %}
Der Treffpunkt liegt auf dem Marienplatz zwischen Tübinger und
Böblinger Straße.

{% include meeting-point-image.html url="/images/marienplatz-small.jpg" alt="Treffpunkt Marienplatz" %}
{% include meeting-point-close.html %}

{% include meeting-point-open.html group="One" id="Vaihingen" place="S-Vaihingen" point="Reisezentrum Bahnhof" time="08:40 Uhr" %}
Der Treffpunkt liegt auf der dem Busbahnhof zugewandten Seite des
Reisezentrums.

<table class="table table-striped table-condensed">
  <thead>
    <tr>
      <th>Aschluss aus</th>
      <th>S-/U-Bahn</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Herrenberg/Böblingen</td>
      <td><span class="fa fa-train"></span> S&nbsp;1</td>
    </tr>
    <tr>
      <td>Innenstadt</td>
      <td><span class="fa fa-train"></span> S&nbsp;1, S&nbsp;2, S&nbsp;3, U&nbsp;1</td>
    </tr>
  </tbody>
</table>
{% include meeting-point-image.html url="/images/vaihingen-bahnhof-small.jpg" alt="Treffpunkt Reisezentrum Bahnhof in Stuttgart-Vaihingen" %}
{% include meeting-point-close.html %}

{% include meeting-point-open.html group="One" id="Moehringen" place="S-Möhringen" point="Lidl bei U-Vaihinger-Straße" time="08:50 Uhr" %}
Der Treffpunkt liegt in der Vaihinger Straße auf Höhe des Lidls bei
der U-Bahnhaltestelle Vaihinger Straße.  Nach Möglichkeit fahren wir
direkt weiter.

<table class="table table-striped table-condensed">
  <thead>
    <tr>
      <th>Aschluss aus</th>
      <th>U-Bahn</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Innenstadt/Degerloch</td>
      <td><span class="fa fa-train"></span> U&nbsp;5, U&nbsp;6, U&nbsp;8, U&nbsp;12</td>
    </tr>
    <tr>
      <td>Plieningen</td>
      <td><span class="fa fa-train"></span> U&nbsp;3</td>
    </tr>
  </tbody>
</table>
{% include meeting-point-close.html %}

{% include meeting-point-open.html group="One" id="Leinfelden" place="Leinfelden-Echterdingen" point="U-Unteraichen" time="09:05 Uhr" %}
Der Treffpunkt liegt auf der Ostseite der U-Bahnhaltestelle, in der
Max-Lang-Straße.
{% include meeting-point-close.html %}

{% include meeting-point-open.html group="One" id="Messe" place="Stuttgart/Leinfelden-Echterdingen" point="Messe" time="09:30 Uhr" %}
Hier liegt das Ziel der MitRadGelegenheiten.  Wir planen um halb zehn
hier einzutreffen.
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
      "/maps/verkehr/future-mobility-camp-2015-04-10.geojson",
      "mitradmap",
      ["Marienplatz", "S-Vaihingen", "Möhringen", "Leinfelden-Echterdingen", "Future Mobility Camp"]
    );
  });
</script>




[FMC-Stuttgart]: http://future-mobility-camp.de/stuttgart15/
[I-Mobility]:    http://www.messe-stuttgart.de/besucher/veranstaltungsdetails/termin/1257/a/showevent/c/Fair/
