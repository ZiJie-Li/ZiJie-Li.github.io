<template>
  <div class="body">
    <my-main></my-main>
    <my-footer></my-footer>
  </div>
</template>

<script>
import '../assets/scss/app';
import MyMain from './layouts/main';
import MyFooter from './layouts/footer';

export default {
  name: 'App',
  components: {
    MyMain,
    MyFooter
  }
};
</script>
