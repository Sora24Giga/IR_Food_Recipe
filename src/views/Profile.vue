<script setup lang="ts">
</script>

<template>
    <section class="bg-gray-50">
        <div class="mx-auto max-w-xl text-center">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
                Profile page
            </h1>

            <p class="mt-4 sm:text-xl/relaxed">
                This is your profile page.
            </p>
            <br>
            <label for="Folder"
                class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <span class="text-xs font-medium text-gray-700"> Folder </span>

                <input type="folder" id="Folder" placeholder="name"
                    class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />
            </label>
            <br>
            <button
                class="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400">
                Create
            </button>
        </div>


    </section>
</template>