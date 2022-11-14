<template>
  <h1 class="text-lg w-full mb-2">{{'QALY-Tech Systems' }}</h1>
</template>

<script setup>
defineProps({
  darkColor: {
    type: String,
    default: 'rgba(var(--color-primary-500), var(--tw-text-opacity))',
  },
  lightColor: {
    type: String,
    default: 'rgba(var(--color-primary-400), var(--tw-text-opacity))',
  },
})
</script>
