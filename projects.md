---
layout: page
title: Projects
permalink: /projects
---

<div class="grid grid-cols-3 gap-4">
  {% for project in site.data.projects %}
      {% include project.html %}  
  {% endfor %}
</div>