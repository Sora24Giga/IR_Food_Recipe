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
            <br>

            <article class="flex bg-white transition hover:shadow-xl">

                <div class="flex flex-1 flex-col justify-between">
                    <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                        <a href="#">
                            <h3 class="font-bold uppercase text-gray-900">
                                Folder 1
                            </h3>
                        </a>

                        <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                            pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                            quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
                            atque dignissimos. Molestias explicabo corporis voluptatem?
                        </p>
                        <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                            pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                            quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
                            atque dignissimos. Molestias explicabo corporis voluptatem?
                        </p>
                        <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                            pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                            quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
                            atque dignissimos. Molestias explicabo corporis voluptatem?
                        </p>
                    </div>

                </div>
            </article>
        </div>


    </section>
</template>