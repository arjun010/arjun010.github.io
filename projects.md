---
layout: page
title: Projects
permalink: /projects
---

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {% assign ordered_projects = site.data.projects | sort: "date" | reverse %}
  {% for project in ordered_projects %}
      {% include project-card.html %}  
  {% endfor %}
</div>