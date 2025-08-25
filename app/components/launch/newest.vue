<template>
  <div class="flex flex-col lg:flex-row gap-10">
    <div class="w-full flex flex-col gap-5">
      <div class="flex flex-col gap-2">
        <h1 class="text-2xl font-bold line-clamp-1">Newest Launching</h1>
        <p>Check out the latest features and improvements in our newest launch!</p>
      </div>
      <div v-for="i in 10">
        <LaunchCard />
      </div>
      <UButton label="See All" variant="outline" color="neutral"
        class="w-full flex items-center justify-center rounded-full px-2 py-3 hover:cursor-pointer" />
    </div>

    <div class="lg:w-1/3 w-full flex flex-col gap-14">
      <h1 class="text-lg font-bold">Top Launcher</h1>
      <div class="flex flex-col gap-4">
        <div v-for="i in 3">
          <LauncherCard />
        </div>
        <UButton label="See All" variant="outline" color="neutral"
          class="w-full flex items-center justify-center rounded-full px-2 py-3 hover:cursor-pointer" />
      </div>
      <div>
        <PromotionCard />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>