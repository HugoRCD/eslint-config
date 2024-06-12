<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: 'md',
  }
})
console.log("test")
</script>

<template>
  <UIcon name="i-lucide-loader" class="animate-spin" :size />
</template>

<style scoped>

</style>
