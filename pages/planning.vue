<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle text="Mon planning de septembre" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <div class="w-full p-4">
          <div class="flex">
            <img
              alt="gallery"
              class="w-full h-full object-cover object-center"
              loading="lazy"
              src="~/assets/images/planning_septembre.jpg"
            />
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
