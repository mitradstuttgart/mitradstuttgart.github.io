---
layout: mitradgelegenheit
title:  "i-Mobility"
date:   2015-04-11 10:00:00
categories: mitradgelegenheit
facebook-event: 
---

Am Samstag, den 11.&nbsp;April, geht es per MitRadGelegenheit vom Stuttgarter Marienplatz zur [Messe i-Mobility][I-Mobility]{:target="_blank"} (Ausstellung für intelligente Mobilität).

Parallel finden [weitere Messen][Weitere-Messen]{:target="_blank"} statt:

- [Fair Handeln][Fair]{:target="_blank"} – Internationale Messe für Fair Trade und global verantwortungsvolles Handeln
- [Markt des guten Geschmacks][MdgG]{:target="_blank"} – die Slow Food Messe
- [Garten][Garten]{:target="_blank"}
- [Kreativ][Kreativ]{:target="_blank"} – Die Messe für kreatives Gestalten
- [Yogaworld][Yoga]{:target="_blank"} – Messe für Yoga, Ayurveda & Co.
- [Haus\|Holz\|Energie][Haus]{:target="_blank"} – Die Messe für Hausbesitzer, Bauherren, Modernisierer
- [Mineralien, Fossilien, Schmuck][Mineralien]{:target="_blank"}


<div class="panel panel-info">
  <div class="panel-heading">
    <h3 class="panel-title">Hinweis</h3>
  </div>
  <div class="panel-body">
    <p>Wir haben ca. 30 Freikarten zur Verteilung an die
    MitradlerInnen bekommen.</p>
  </div>
</div>


### Zustiegsmöglichkeiten

<div class="row">
  <div class="col-xs-12">
    <div class="panel-group" id="accordionOne" role="tablist" aria-multiselectable="true">

{% include meeting-point-open.html group="One" id="Marienplatz" place="Stuttgart-Süd" point="Marienplatz" time="10:00 Uhr" expanded="true" %}
Der Treffpunkt liegt auf dem Marienplatz zwischen Tübinger und
Böblinger Straße.

{% include meeting-point-image.html url="/images/marienplatz-small.jpg" alt="Treffpunkt Marienplatz" %}
{% include meeting-point-close.html %}

{% include meeting-point-open.html group="One" id="Vaihingen" place="S-Vaihingen" point="Reisezentrum Bahnhof" time="11:00 Uhr" %}
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

{% include meeting-point-open.html group="One" id="Moehringen" place="S-Möhringen" point="Lidl bei U-Vaihinger-Straße" time="11:10 Uhr" %}
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

{% include meeting-point-open.html group="One" id="Leinfelden" place="Leinfelden-Echterdingen" point="U-Unteraichen" time="11:25 Uhr" %}
Der Treffpunkt liegt auf der Ostseite der U-Bahnhaltestelle, in der
Max-Lang-Straße.
{% include meeting-point-close.html %}

{% include meeting-point-open.html group="One" id="Messe" place="Stuttgart/Leinfelden-Echterdingen" point="Messe" time="11:50 Uhr" %}
Hier liegt das Ziel der MitRadGelegenheiten.  Wir planen um kurz vor
zwölf hier einzutreffen.
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
      "/maps/verkehr/i-mobility-2015-04-11.geojson",
      "mitradmap",
      ["Marienplatz", "S-Vaihingen", "Möhringen", "Leinfelden-Echterdingen", "Messe I-Mobility"]
    );
  });
</script>




[I-Mobility]:     http://www.messe-stuttgart.de/i-mobility/
[Weitere-Messen]: http://www.messe-stuttgart.de/pages/fruehjahrsmessen/
[Fair]:           http://www.messe-stuttgart.de/fairhandeln
[MdgG]:           http://www.messe-stuttgart.de/marktdesgutengeschmacks
[Garten]:         http://www.messe-stuttgart.de/garten
[Kreativ]:        http://www.messe-stuttgart.de/kreativ
[Yoga]:           http://www.worldofyoga.com/
[Haus]:           http://www.hausholzenergie.de/
[Mineralien]:     http://www.messe-stuttgart.de/mineralien
