---
layout: page
title: Blog
permalink: /blog/
---

<div class="row">
  {% for post in site.categories.blog | sort: 'date' | reverse %}
    <div class="col-xs-12 col-md-6">
      <div class="media">
	<div class="media-left">
	  {% if post.teaser-image %}
            <a href="{{ post.url | prepend: site.baseurl }}">
              <img src="{{ post.teaser-image | prepend: site.baseurl }}" alt="Vorschaubild" width="100px" max-width="100px">
            </a>
	  {% endif %}
	</div>
	<div class="media-body">
      <h4 class="media-heading">
        <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        <small>{{ post.date | date: "%d.%m.%Y" }}</small>
      </h4>
          {{ post.content | strip_html | truncatewords:25}}
          <a href="{{ post.url | prepend: site.baseurl }}">mehr</a>
          <p>&nbsp;</p>
        </div>
      </div>
    </div>
  {% endfor %}
</div>
