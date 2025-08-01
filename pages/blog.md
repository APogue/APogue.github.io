---
layout: archive
title: Blog
permalink: /blog/
author_profile: true
---
<!-- outdated, needs an update. minimal mistakes doesn't require liquid and should show the posts in reverse chronological order with dates, requires a _config change -->
---

<div class="blog-list">
    <ul>
        {% for post in site.posts %}
        <li>
            <a href="{{ post.url | prepend: site.baseurl }}">{{  post.title }}</a>
            <p class="post-date">Posted on {{ post.date | date: "%B %d, %Y" }}</p>
        </li>
        {% endfor %}
    </ul>
</div>
