<template>
  <footer>
    <div class="container">
      <div class="social-media">
        <ul class="icon-ul">
          <li v-for="(social, k) in socials" :key="k">
            <a :href="social.url" target="_blank">
              <i class="icon fa" :class="social.icon" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="copyright">copyright © Royalmar. All Rights Reserved.</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      socials: [
        {
          url: 'https://www.facebook.com/royalmar1943',
          icon: 'fa-facebook-official'
        },
        {
          url: 'https://github.com/ZiJie-Li',
          icon: 'fa-github'
        },
        {
          url: 'https://codepen.io/royalmar',
          icon: 'fa-codepen'
        },
        {
          url: 'mailto:royal-mar@hotmail.com',
          icon: 'fa-envelope'
        }
      ]
    };
  }
};
</script>
