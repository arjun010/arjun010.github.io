---
layout: home
title: Home
permalink: /
---

<div class="max-w-4xl mx-auto px-4 py-16 text-left space-y-12 text-lg">
  <section class="intro grid grid-cols-1 md:grid-cols-[auto_auto] gap-8">
    <!-- left side -->
    <div class="space-y-5 text-center">
      <img src="/assets/images/arjun-Jan2021.png" alt="Arjun Srinivasan" class="h-70 object-cover mx-auto">
      <div class="space-y-5">
        <p class="text-sm text-gray-700 hover:text-blue-900">
          <a href="mailto:arjun.srinivasan.10@gmail.com" class="bg-blue-50 rounded-md p-2 hover:bg-blue-100 group">
            <i class='fas fa-envelope'></i> 
            <span class='group-hover:underline'>arjun.srinivasan.10@gmail.com</span>
          </a>
        </p>
        <div class="flex justify-center space-x-4 text-2xl">
          <a href="https://scholar.google.com/citations?user=your-google-scholar-id" target="_blank" class="text-gray-500 hover:text-blue-600">
            <i class="fas fa-graduation-cap"></i>
          </a>
          <a href="https://github.com/your-profile" target="_blank" class="text-gray-500 hover:text-black">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" class="text-gray-500 hover:text-blue-800">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://x.com/your-profile" target="_blank" class="text-gray-500 hover:text-blue-400">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
    <!-- right side -->
    <div class="space-y-4 text-gray-600 text-base text-justify">
      <div class='text-3xl font-medium text-gray-700'>
          <span class="group relative">
            <span class="cursor-default group-hover:hidden group-click:hidden" title="hello">👋</span>
            <span class="hidden cursor-default group-hover:inline-block group-click:inline-block" title="namaste">🙏</span>
          </span>
          I'm Arjun Srinivasan
      </div>        
      <div class='space-y-4'>
          <p>
          I'm a Lead Research Scientist at <span class="flex items-center inline-flex align-top"><img src="assets/images/salesforce-logo.png" alt="" class="h-6 mr-1 w-5 h-auto"> Salesforce</span> working on <b class="text-gray-800">intelligent and expressive tools for human-data interaction</b>. I develop systems that guide visual data analysis through proactive recommendations and multimodal interfaces allow people to freely query and interact with data.
          </p>
          <p>
          Previously, I was a part of the visualization team at <span class="flex items-center inline-flex align-top"> <img src="assets/images/databricks-logo.png" alt="" class="h-6 mr-1 w-4 h-auto"> Databricks AI/BI</span>, where I worked on interactive data querying and conversational interfaces for chart authoring.
          I have also built multimodal data visualization and photo editing tools during internships at <span class="flex items-center inline-flex align-top "><img src="assets/images/microsoft-logo.png" alt="Microsoft Logo" class="h-6 mr-1 w-4 h-auto"> Microsoft Research</span> and <span class="flex items-center inline-flex align-top"><img src="assets/images/adobe-logo.png" alt="Adobe Logo" class="h-6 mr-1 w-4 h-auto"> Adobe Research</span>.
      </p>
      <p>
          I received my PhD from <span class="flex items-center inline-flex align-top"><img src="assets/images/gatech-logo.png" alt="Georgia Tech Logo" class="h-6 pr-1"> Georgia Tech</span> where I worked with <a href="https://faculty.cc.gatech.edu/~john.stasko/" target="_blank" class="text-blue-400 hover:underline">John Stasko</a>.
          My dissertation focused on <a href="https://repository.gatech.edu/entities/publication/c95f50d3-72a0-4b35-9421-f8689616edf1" target="_blank" class="text-blue-400 hover:underline">multimodal human-data interaction</a> interfaces and received the <a href="https://ieeevis.b-cdn.net/vis_2021/pdfs/vgtc-dissertation.pdf" target="_blank" class='hover:text-yellow-500 hover:underline'><i class='fa fa-trophy text-yellow-500'></i> IEEE VGTC Visualization Best Dissertation Award</a>.
      </p>
      <!-- Resume/CV -->
      <p>
          Here's my <a href="/path-to-cv.pdf" target="_blank" class="text-blue-400 hover:bg-blue-100 rounded-md p-1 group hover:text-blue-900"><i class="fas fa-file-pdf"></i> <span class="group-hover:underline">CV</span></a> for more details.
      </p>
    </div>
    </div>
  </section>

  <section class="select-projects space-y-4">
    <div class="flex items-center space-x-2">            
              <!-- <hr class="flex-grow border-gray-200"> -->
              <h1 class="text-4xl font-medium"><span class="font-thin">Select</span> <a href="/projects" class="text-blue-900 hover:bg-blue-100 p-1 rounded-sm hover:underline">Projects</a></h1>
              <hr class="flex-grow border-gray-200">
              <a href="/projects" class="text-sm font-light text-blue-900 hover:underline">(View all)</a>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {% assign featured_projects = site.data.projects | where: "feature-on-home", true %}
      {% for project in featured_projects %}
          {% include project-card.html %}  
      {% endfor %}
    </div>
  </section>

  <section class="select-publications space-y-4">
    <div class="flex items-center space-x-2">            
                <!-- <hr class="flex-grow border-gray-200"> -->
                <h1 class="text-4xl font-medium"><span class="font-thin">Select</span> <a href="/publications" class="text-blue-900 hover:bg-blue-100 p-1 rounded-sm hover:underline">Publications</a></h1>
                <hr class="flex-grow border-gray-200">
                <a href="/publications" class="text-sm font-light text-blue-900 hover:underline">(View all)</a>
    </div>  

    {% assign featured_publications = site.data.publications | where: "feature-on-home", true %}
    {% for publication in featured_publications %}
      {% include publication-card.html %}
    {% endfor %}
  </section>
</div>