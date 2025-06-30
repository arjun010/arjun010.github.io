---
layout: home
title: Home
permalink: /
---

<div class="max-w-4xl mx-auto px-4 py-16 text-justify space-y-12 text-lg">
<section class="intro space-y-4 font-extralight">
  <div><span class="cursor-default text-3xl" title="namaste">🙏</span>
  
  I'm a Lead Research Scientist at <a href="https://www.salesforce.com/" target="_blank">Salesforce</a> working on <b>intelligent and expressive tools for human-data interaction</b>. Specifically, I develop interactive systems that guide visual data analysis through proactive recommendations and allow people to freely engage with their data using different modalities.</div>
  
  <div>Previously, I was a part of the visualization team at <a href="https://www.databricks.com/" target="_blank" class='url'>Databricks</a> where I worked on the <a href="https://www.databricks.com/product/ai-bi" target="_blank" class='url'>AI/BI</a> product. I received my PhD from Georgia Tech where I worked with <a href="https://faculty.cc.gatech.edu/~john.stasko/" target="_blank" class='url'>John Stasko</a> on <a href="https://repository.gatech.edu/entities/publication/c95f50d3-72a0-4b35-9421-f8689616edf1" target="_blank" class='url'>multimodal human-data interaction</a>.</div>
</section>

<section class="select-projects space-y-4">
  <div class="flex items-center space-x-4">            
            <!-- <hr class="flex-grow border-gray-200"> -->
            <h1 class="text-4xl font-medium"><span class="font-thin">Select</span> <a href="/projects" class="url !text-blue-900">Projects</a></h1>
            <hr class="flex-grow border-gray-200">
            <a href="/projects" class="url text-sm font-light !text-blue-900">(View all)</a>
  </div>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {% assign featured_projects = site.data.projects | where: "feature-on-home", true %}
    {% for project in featured_projects %}
        {% include project-card.html %}  
    {% endfor %}
  </div>
</section>

<section class="select-publications space-y-4">
  <div class="flex items-center space-x-4">            
              <!-- <hr class="flex-grow border-gray-200"> -->
              <h1 class="text-4xl font-medium"><span class="font-thin">Select</span> <a href="/publications" class="url !text-blue-900">Publications</a></h1>
              <hr class="flex-grow border-gray-200">
              <a href="/publications" class="url text-sm font-light !text-blue-900">(View all)</a>
  </div>  

  {% assign featured_publications = site.data.publications | where: "feature-on-home", true %}
  {% for publication in featured_publications %}
    {% include publication-card.html %}
  {% endfor %}
</section>

</div>