<template>
  <div class="feature">
    <h3 class="feature__subject">{{ subject }}</h3>
    <ul class="feature__list" v-if="list.length > 0">
      <li class="feature__item" v-for="(item, k) in list" :key="k">
        <div class="item__title">{{ item.title }}</div>
        <div class="item__desc">- {{ item.desc }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FeatureBox",
  props: {
    subject: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => {
        return [];
      }
    }
  }
};
</script>
