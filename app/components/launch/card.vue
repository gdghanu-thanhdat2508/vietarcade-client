<template>
    <div class="w-full">
        <UCard :ui="{
            body: '!p-4'
        }">
            <div class="flex justify-between items-center">
                <div class="flex gap-2 items-center">
                    <NuxtImg src="demo-icon.png" width="40" height="40" draggable="false" />
                    <div>
                        <div class="flex items-center gap-2 hover:cursor-pointer group">
                            <h2 class="text-md font-semibold">Launch Title</h2>
                            <Icon name="hugeicons:link-square-02"
                                class="opacity-0 group-hover:opacity-100 transition-opacity text-xs" />
                        </div>
                        <p class="text-sm">Short description of the launch.</p>
                    </div>
                </div>

                <UButton icon="jam:triangle" square variant="outline" color="neutral" label="10"
                    class="hover:cursor-pointer px-4" :ui="{
                        base: 'flex flex-col gap-0',
                    }" />
            </div>
        </UCard>
    </div>
</template>

<script setup lang="ts">

</script>