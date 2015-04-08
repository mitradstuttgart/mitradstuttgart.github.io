---
layout: mitradgelegenheit
title:  "Radaktionstag Landkreis Böblingen"
date:   2015-04-19 11:00:00
categories: mitradgelegenheit
facebook-event: 
---

Am 19.&nbsp;April geht es aus Stuttgart-Vaihingen per MitRadGelegenheit zum [Radaktionstag des Landkreises Böblingen][Radaktionstag-Boeblingen]{:target="_blank"}.

### Zustiegsmöglichkeiten

<div class="row">
  <div class="col-xs-12">
    <div class="panel-group" id="accordionOne" role="tablist" aria-multiselectable="true">
      <!-- S-Vaihingen -->
      <div class="panel panel-default">
        <div class="panel-heading" role="tab" id="headingVaihingen">
          <h4 class="panel-title">
            <a class="collapsed" data-toggle="collapse" data-parent="#accordionOne" href="#collapseVaihingen"
               aria-expanded="false" aria-controls="collapseVaihingen">
              <strong>S-Vaihingen</strong>, Reisezentrum Bahnhof
              <span class="label label-primary" style="float:right;"><span class="fa fa-clock-o"></span> 11:00 Uhr</span>
            </a>
          </h4>
        </div>
        <div id="collapseVaihingen" class="panel-collapse collapse" role="tabpanel"
             aria-labelledby="headingVaihingen">
          <div class="panel-body" markdown="block">
Der Treffpunkt liegt auf der Seite des Busbahnhofs.

Es besteht die Möglichkeit aus Filderstadt oder der Stuttgarter
Innenstadt per S-Bahn dazuzustoßen.

<img src="{{ "/images/vaihingen-bahnhof.jpg" | prepend: site.baseurl }}"
     alt="Treffpunkt Reisezentrum Bahnhof in Stuttgart-Vaihingen"
     class="img-rounded" style="width:100%;">
</div>
        </div>
      </div>

      <!-- Rohrer Höhe -->
      <div class="panel panel-default">
        <div class="panel-heading" role="tab" id="headingRHoehe">
          <h4 class="panel-title">
            <a class="collapsed" data-toggle="collapse" data-parent="#accordionOne" href="#collapseRHoehe"
               aria-expanded="false" aria-controls="collapseRHoehe">
              <strong>S-Vaihingen</strong>, Rohrer Höhe
              <span class="label label-default" style="float:right;"><span class="fa fa-clock-o"></span> bei Bedarf</span>
            </a>
          </h4>
        </div>
        <div id="collapseRHoehe" class="panel-collapse collapse" role="tabpanel"
             aria-labelledby="headingRHoehe">
          <div class="panel-body" markdown="span">
Wer möchte, kann sich hier der MitRadGelegenheit anschließen.  Wann
wir dort eintreffen hängt von unseren Kräften ab.
          </div>
        </div>
      </div>

      <!-- Böblingen -->
      <div class="panel panel-default">
        <div class="panel-heading" role="tab" id="headingBoeblingen">
          <h4 class="panel-title">
            <a class="collapsed" data-toggle="collapse" data-parent="#accordionOne" href="#collapseBoeblingen"
               aria-expanded="false" aria-controls="collapseBoeblingen">
              <strong>Böblingen</strong>, Elbenplatz
              <span class="label label-primary" style="float:right;"><span class="fa fa-clock-o"></span> 12:00 Uhr</span>
            </a>
          </h4>
        </div>
        <div id="collapseBoeblingen" class="panel-collapse collapse" role="tabpanel"
             aria-labelledby="headingBoeblingen">
          <div class="panel-body" markdown="span">
Hier liegt das Ziel der MitRadGelegenheit.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


### Karte

{% include map.html %}

<div id="mitradmap" style="width:100%; height: 100px;"></div>

<script>
  $(document).ready(function(){
    makeMap(
      "/maps/verkehr/radaktionstag-boeblingen-2015-04-19.geojson",
      "mitradmap",
      ["S-Vaihingen", "Radaktionstag Böblingen"]
    );
  });
</script>




[Radaktionstag-Boeblingen]: http://lrabb.de/,Lde/start/Aktuelles/Neue+Seite.html
