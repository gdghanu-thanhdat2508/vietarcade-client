<template>
    <div class="w-full">
        <UCard>
            <template #header>
                <div class="flex items-center gap-1">
                    <NuxtImg src="demo-icon.png" width="40" height="40" draggable="false" />
                    <h2 class="text-lg font-semibold line-clamp-1">Nguyen Thanh Dat</h2>
                </div>
            </template>

            <div>
                <p class="line-clamp-3">
                    Hi Guys, I am Thanh Dat, a software engineer with a passion for building innovative solutions. I
                    love
                    coding and
                    exploring new technologies. In my free time, I enjoy reading books and playing video games.
                </p>
            </div>

            <template #footer>
                <div class="flex justify-between items-center">
                    <span class="text-sm">Joined: Aug 22, 05</span>
                    <UButton variant="link" color="secondary" label="Details" class="hover:cursor-pointer" />
                </div>
            </template>
        </UCard>
    </div>
</template>