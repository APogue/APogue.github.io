---
layout: default
title: Blog Posts
---

<div class="blog-list">
    <ul>
        {% for post in site.posts %}
        <li>
            <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
            <p class="post-date">Posted on {{ post.date | date: "%B %d, %Y" }}</p>
        </li>
        {% endfor %}
    </ul>
</div>
