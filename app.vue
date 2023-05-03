<template>
  <div>
    <SiteHeader />
    <div class="page-section prose prose-config">
      <NuxtPage />
    </div>
    <SiteFooter />
  </div>
</template>

<!-- ./app.vue -->
<script setup>
useHead({
  title: "Nuxt 3 + Content v2 Starter",
  meta: [
    { name: 'description', content: 'Nuxt 3 + Content v2 Starter built by Miracleio' }
  ],
})
</script>

<style scoped>
.prose-config {
  @apply prose-headings:my-[0.75rem] prose-h1:my-[1.5rem] first-of-type:prose-h1:mt-0 

}
</style>
