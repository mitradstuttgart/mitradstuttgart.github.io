---
layout: page
title: Archiv
permalink: /mitradgelegenheit/archive/
---


{% assign posts = site.categories.mitradgelegenheit | sort: 'date' | reverse  %}
<ul>
  {% for post in posts %}
      <li>
        <h4>
          <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
          <small>{{ post.date | date: "%d.%m.%Y" }}</small>
        </h4>
      </li>
  {% endfor %}
</ul>
