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
            path="/" 
            v-slot="{ list }"
          >
            <div v-for="article in list" :key="article._path">
              <h2>{{ article.title }}</h2>
              <p>{{ article.description }}</p>
            </div>
          </ContentList>
        </main>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
