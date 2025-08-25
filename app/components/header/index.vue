<template>
    <div
        class="fixed border-b bg-white z-99 border-slate-100 dark:border-slate-700 w-full flex items-center justify-center">
        <div class="h-fit w-screen max-w-[1300px] bg-default flex items-center justify-between py-5 md:px-10 px-5">
            <div class="flex items-center justify-center gap-10">
                <div>
                    Logo
                </div>
                <UInput icon="i-lucide-search" size="xl" color="neutral" variant="soft" placeholder="Search" :ui="{
                    base: 'rounded-full'
                }" />
            </div>

            <div class="absolute left-1/2 transform -translate-x-1/2">
                <UNavigationMenu :unmount-on-hide="false" color="neutral" variant="link" :items="items"
                    class="w-full justify-center" :ui="{
                        list: 'gap-5'
                    }" />
            </div>

            <div class="flex items-center justify-center gap-5">
                <UButton color="neutral" variant="soft" class="hover:cursor-pointer rounded-full px-4 py-2" size="lg"
                    icon="i-lucide-mail">
                    Subscribe
                </UButton>
                <UButton color="secondary" variant="solid" class="hover:cursor-pointer rounded-full px-4 py-2" size="lg"
                    to="/login">
                    Sign In
                </UButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[][]>([
    [
        {
            label: 'Launches',
            to: '/',
            children: [
                {
                    label: 'Technology Launch',
                },
                {
                    label: 'Biology Launch',
                },
                {
                    label: 'Physics Launch',
                },
                {
                    label: 'Launches',
                },
            ]
        },
        {
            label: 'Discussion',
            to: '/discussion'
        },
        {
            label: 'Guides',
            to: '/'
        },
        {
            label: 'Advertise',
            to: '/',
        }
    ]
])
</script>