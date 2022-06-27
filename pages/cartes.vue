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
        <div class="flex items-center justify-center">
          <Button
            text="Voir les cartes"
            size="lg"
            class="font-extrabold capitalize"
            href="https://www.amazon.com/adlp/lotronprime"
          />
        </div>

        <div class="w-full p-4">
          <div class="flex">
            <img
              alt="gallery"
              class="w-full h-full object-cover object-center"
              src="https://m.media-amazon.com/images/G/01/primevideo/lotr/5/maps/6-eu5kv9gd5wq8eiog5qjevre53wq0xm24.jpg"
            />
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
