<template>
  <div class="flex flex-col">
      <Toc :links="toc.links" />
      <p> </p>
      <slot />
  </div>
</template>

<script setup>
const {toc} = useContent()
</script>
