---
layout: page
permalink: /publications
title: Publications
---

<div class="publications-list space-y-4">
{% assign grouped_publications = site.data.publications | group_by: "year" %}
{% for group in grouped_publications %}
    <div class="year-section space-y-2">
        <div class="flex items-center space-x-4">
            <hr class="flex-grow border-gray-200">
            <h2 class="text-2xl font-thin text-gray-300">{{ group.name }}</h2>
        </div>

        <!-- Sort publications within the year by date -->
        {% assign sorted_publications = group.items | sort: "date" | reverse %}

        <!-- Show conference and journal publications first -->
        {% for publication in sorted_publications %}
            {% if publication.type == "conference" or publication.type == "journal" %}
                {% include publication.html %}
            {% endif %}
        {% endfor %}

        <!-- Show other publications -->
        {% for publication in sorted_publications %}
            {% if publication.type != "conference" and publication.type != "journal" %}
                {% include publication.html %}
            {% endif %}
        {% endfor %}
    </div>
{% endfor %}
</div>