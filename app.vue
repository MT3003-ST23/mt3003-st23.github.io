<template>
    <SiteHeader />
    <div class="page-section prose prose-config">
      <NuxtPage />
    </div>
    <SiteFooter />
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
  @apply prose-headings:my-[0.75rem] prose-h1:my-[1.5rem]
  prose-pre:bg-zinc-100 prose-pre:md:whitespace-normal
  first-of-type:prose-h1:mt-0 prose-code:before:content-none
  prose-code:after:content-none prose-code:bg-zinc-100 prose-code:p-[3px] prose-code:rounded
}
</style>
