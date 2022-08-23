<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})

useHead(() => ({
  title: 'Vidéos des membres de la Terre du Milieu',
  meta: [
    {
      name: 'description',
      content:
        'Découvre les nouvelles vidéos des vidéates de la Terre du Milieu',
    },
  ],
}))

const videos = computed<string[]>(() => [
  'C0Ygmmx3N-Q',
  'v_t67hm4r2g',
  'jWP1O424HW4',
  'GV2ESOyzR1E',
  'SnEik5rfY7Q',
  'toYaws9I_bI',
  'yaWVhFyl2yo',
  'ooODxmpeZBk',
  'CEEOvPc_DTA',
  'CEfpmdbpBHw',
  'OqvE1SR0amY',
  'YRsswIW0Bx8',
  'G9WuONRY9Fc',
  'fHNHf-uYELg',
  'jFQ70m7ulRY',
  'C6z64iJeXTo',
  'O_FysMIhE7Y',
  '3LM0QBkFUOo',
  'nNDZTGjWSxg',
  'CBI3yoVr05Q',
  'reeMd_hQV-I',
  'z8tV9TYuDWA',
  'WBERBw3VjmY',
  'UdOrHKSfq4w',
  'ZDGlysi_U78',
  'lFf_YqIxND0',
  'Z5iiio2ql6g',
])
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle
        text="Vidéos de différents vidéastes de la Terre du Milieu"
        class="capitalize"
      />
    </PageHeader>
    <PageBody>
      <PageSection>
        <div class="flex flex-wrap -m-4">
          <div
            v-for="(link, i) in videos"
            :key="i"
            class="lg:w-1/4 md:w-1/2 p-4 w-full"
          >
            <a
              :href="`https://www.youtube.com/watch?v=${link}`"
              target="_blank"
              class="block relative h-48"
            >
              <!-- <div class="aspect-w-16 aspect-h-9">
            <iframe :src="link" title="Meet the team behind #LOTRonPrime." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div> -->
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block hover:border-blue-600 border-2 border-blue-200 rounded-2xl"
                :src="`https://i.ytimg.com/vi/${link}/maxresdefault.jpg`"
              />
            </a>
            <!-- <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p class="mt-1">$16.00</p>
        </div> -->
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
