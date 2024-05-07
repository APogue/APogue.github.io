---
layout: default
title: Blog
---

# Blog Posts

This page will be the most active, and will contain a mix of casual and technical blog posts until I have time to parse the "personal" from "professional" and offload to a personal webpage.

<div class="blog-list">
    <ul>
        {% for post in site.posts %}
        <li>
            <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
            <p>Posted on {{ post.date | date: "%B %d, %Y" }}</p>
        </li>
        {% endfor %}
    </ul>
</div>
