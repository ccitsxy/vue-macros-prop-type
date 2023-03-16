<script setup lang="ts">
import type { Component } from 'vue';

const props = defineProps<{
  content: string | Component;
}>();
</script>

<template>
  <component :is="props.content">
    <slot></slot>
  </component>
</template>
