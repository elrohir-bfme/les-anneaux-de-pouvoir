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
          <ContentDoc :path="$route.params.slug" />
        </main>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
