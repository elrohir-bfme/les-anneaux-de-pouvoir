<script lang="ts" setup>
definePageMeta({
  layout: 'news',
})
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="$t('pages.dashboard.index.title')" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <main>
          <!-- <ContentDoc path="/" /> -->
          <ContentList
            v-slot="{ list }"
            path="/news"
            :query="{ sort: { date: -1 } }"
          >
            <div class="flex flex-wrap">
              <div
                v-for="article in list"
                :key="article._path"
                class="w-full md:w-1/2 px-2 xs:mb-6 md:mb-12"
              >
                <NuxtLink :to="article._path">
                  <div
                    class="max-w-2xl mx-auto overflow-hidden rounded-lg shadow-sm hover:shadow-md bg-white/[0.5] dark:bg-gray-900"
                  >
                    <img
                      v-if="article.img"
                      class="object-cover w-full h-64 filter"
                      :class="article.flou ? 'blur' : 'saturate-150'"
                      :src="article.img"
                      :alt="article.title"
                    />

                    <div class="p-6 border-l-4 border-blue-400">
                      <div>
                        <div class="flex">
                          <h3
                            class="mt-2 text-2xl font-semibold text-good dark:text-white hover:underline"
                          >
                            {{ article.title }}
                          </h3>
                          <!-- <div v-for="tags of terredumilieu.tags" :key="tags">
                    <span
                      class="m-4 px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700"
                      >{{ tags }}
                    </span>
                  </div> -->
                        </div>
                        <p class="mt-2 text-good dark:text-gray-300">
                          {{ article.description }}
                        </p>
                      </div>

                      <div class="mt-4">
                        <div class="flex items-center">
                          <div class="flex items-center">
                            <!-- <img
                      v-if="article.author.img"
                      class="object-cover h-10 rounded-full"
                      :src="article.author.img"
                      :alt="article.author.name"
                    /> -->
                            <!-- <NuxtLink
                      class="mx-2 font-semibold text-blue-200 leading-relaxed text-xl tracking-wider hover:text-gray-300 dark:text-gray-200 cursor-pointer"
                      :to="`/terredumilieu/author/${terredumilieu.author.name}`"
                      >{{ terredumilieu.author.name }}
                    </NuxtLink> -->
                          </div>
                          <span
                            class="mx-1 text-black dark:text-gray-200 underline"
                            >{{ formatDate(article.date) }}</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- <h2>{{ article.title }}</h2>
              <p>{{ article.description }}</p> -->
                </NuxtLink>
              </div>
            </div>
          </ContentList>
        </main>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<script lang="ts">
export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    increment() {
      this.count++
    },
    /**
     * @param {string} date
     */
    formatDate(date: string) {
      return new Date(date).toLocaleDateString('fr')
    },
  },
}
</script>
