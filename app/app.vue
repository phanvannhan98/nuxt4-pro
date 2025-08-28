<template>
  <button @click="execute()" @touchstart="execute()">Load post</button>
  <ul>
    <li v-for="item in data?.posts">{{ item?.id }} - {{ item?.content }}</li>
  </ul>
</template>
<script setup lang="ts">
const { execute, data } = await useAsyncGql("posts", {}, { immediate: false });
</script>
