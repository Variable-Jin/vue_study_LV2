<template>
  {{ $route.params.id }}

  <div>
    <h4>상세페이지</h4>
    <h5>{{ 블로그글[$route.params.id].date }}</h5>
    <p>{{ 블로그글[$route.params.id].date }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "DetailComponent",
  props: {
    블로그글: Array,
  },
};
</script>

<style></style>
