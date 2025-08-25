<template>
  <div>
    <SpeedInsights />
    <Header />
    <main class="p-4">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>
