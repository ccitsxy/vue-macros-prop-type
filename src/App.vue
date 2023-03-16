<script setup lang="ts">
import Item from './components/Item.vue';
import ItemContent from './components/ItemContent.vue';
</script>

<template>
  <item content="h1">Hello World!</item>
  <item :content="ItemContent"></item>
</template>
