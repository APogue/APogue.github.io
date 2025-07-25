---
layout: single
title: Connect with me
permalink: /contact/
---

<div class="social-icons">
  <a href="mailto:alexie.pogue@gmail.com" title="Email"><i class="fas fa-envelope"></i></a>
  <a href="https://twitter.com/alexiepogue" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a>
  <a href="https://bsky.app/profile/alexiepogue.bsky.social" target="_blank" title="Bluesky">
    <img src="https://cdn.simpleicons.org/bluesky/000000" alt="Bluesky" style="width:28px; height:28px; vertical-align:middle;">
  </a>
  <a href="https://www.linkedin.com/in/alexie-pogue-38204b49/" target="_blank" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
  <a href="https://www.tiktok.com/@alexiepogue" target="_blank" title="TikTok"><i class="fab fa-tiktok"></i></a>
</div>

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.5.0/css/all.css" crossorigin="anonymous">

<style>
.social-icons {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin: 1.5rem auto;
  flex-wrap: wrap;
}

/* Left-align the feed button */
.page__footer-follow {
  text-align: left !important;
}

.page__footer-follow .social-icons {
  justify-content: flex-start !important;
}

/* More specific selectors to avoid affecting other page elements */
.social-icons > a {
  color: #000;
  font-size: 28px;
  text-decoration: none;
}

.social-icons > a > i {
  color: inherit !important;
}

/* Target only images within social-icons specifically */
.social-icons > a > img {
  filter: none !important;
  outline: none !important;
  box-shadow: none !important;
  -webkit-box-shadow: none !important;
  width: 28px;
  height: 28px;
  vertical-align: middle;
}

.social-icons > a:hover > img {
  filter: none !important;
  transform: none !important;
}
</style>