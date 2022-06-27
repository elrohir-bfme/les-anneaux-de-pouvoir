<script lang="ts" setup>
//   const { path } = useRoute()
//   const { data } = useAsyncData(path, () => queryContent(path).findOne())

//   console.log(data._rawValue)

definePageMeta({
  layout: 'news',
})

// useHead({
//   title: data._rawValue.title ? data._rawValue.title : "de" ,
//   // or, instead:
//   // titleTemplate: (title) => `My App - ${title}`,
//   viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
//   charset: 'utf-8',
//   meta: [
//     { name: 'description', content: data._rawValue.description ? data._rawValue.title : "dejdeji" }
//   ]
// })
</script>

<template>
  <PageWrapper>
    <!-- <PageHeader>
      <PageTitle :text="$t('pages.dashboard.index.title')" class="capitalize" />
    </PageHeader> -->
    <PageBody>
      <PageSection>
        <main>
          <ContentDoc :path="$route.path" />
        </main>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
