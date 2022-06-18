<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle text="Les Cartes de la Série" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
          <!-- <h2 class="p-2">Les Cartes de la Série</h2> -->
          <div class="flex text-center justify-center  items-center gap-2 pb-4">
          <a
            href="https://www.amazon.com/adlp/lotronprime"
            target="_blank"
            class="flex text-center mx-auto- text-orange-400 bg-gray-900
              border-2 py-2 px-8 focus:outline-none hover:bg-gray-800
              rounded text-lg transform transition duration-500
              hover:scale-110 border-orange-400">
              Voir les cartes
          </a>
          </div>


          <div class="w-full p-4">
            <div class="flex">
              <img alt="gallery" class="w-full h-full object-cover object-center" src="https://m.media-amazon.com/images/G/01/primevideo/lotr/5/maps/6-eu5kv9gd5wq8eiog5qjevre53wq0xm24.jpg">
            </div>
          </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
