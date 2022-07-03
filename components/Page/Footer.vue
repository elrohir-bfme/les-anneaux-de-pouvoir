<script lang="ts" setup>
import { IApp } from '~/utils/app'
const app = useState<IApp>('app')
</script>

<template>
  <footer class="border-t lg:border-gray-900/10 dark:border-gray-50/[0.2]">
    <section
      class="max-w-8xl mx-auto px-4 lg:px-8 flex-1 flex w-full space-x-20"
    >
      <div class="w-full py-4 text-center md:text-left">
        <div class="mb-1">
          {{ app.name }}
        </div>
        <div class="text-xs text-gray-600 dark:text-gray-400">
          <!-- Copyright © 2022. All rights reserved.  -->
          <span class="bg-primary-500 rounded px-1 py-0.5 text-white text-xs">
            Début de l'aventure le 2 Septembre 2022
          </span>
          <div
            class="flex flex-col md:flex-row space-x-2 items-center md:float-right"
          >
            <p class="text-center md:text-right">
              Créé avec <span class="text-blue-500">❤</span>
            </p>
            <Anchor
              class="underline font-bold"
              text="Envie de participer ?"
              to="/contact"
            />
            <!-- <span
              class="block bg-primary-500 rounded px-1 py-0.5 text-white text-xs"
            >
              
            </span> -->
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>
