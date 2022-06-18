<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle text="Vidéos" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <div class="aspect-w-16 aspect-h-9">
          <iframe src="https://www.youtube.com/embed/I7tshJbHV7A" title="Meet the team behind #LOTRonPrime." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div class="py-4"></div>

        <div class="aspect-w-16 aspect-h-9">
          <iframe src="https://www.youtube.com/embed/QhqGCPMfkNM" title="The Lord of the Rings: The Rings of Power - Title Announcement | Prime Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
