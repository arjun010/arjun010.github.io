---
layout: page
permalink: /publications
title: Publications
---

<div class="publications-list">
{% assign publications_by_year = site.data.publications | group_by_exp: "pub", "pub.date | split: '-' | first" %}
{% for group in publications_by_year %}
    <div class="year-section">
        <div class="flex items-center space-x-4">
            <hr class="flex-grow border-gray-200">
            <h2 class="text-2xl font-thin text-gray-300">{{ group.name }}</h2>
        </div>

        <!-- Publications occur in the order they appear in the yml file. Not sorting by date to allow prioritizing publications within a year -->
        {% assign ordered_publications = group.items %}

        <!-- Show conference and journal publications first -->
        {% for publication in ordered_publications %}
            {% if publication.type == "conference" or publication.type == "journal" %}
                {% include publication-card.html %}
            {% endif %}
        {% endfor %}

        <!-- Show other publications after -->
        {% for publication in ordered_publications %}
            {% if publication.type != "conference" and publication.type != "journal" %}
                {% include publication-card.html %}
            {% endif %}
        {% endfor %}
    </div>
{% endfor %}
</div>