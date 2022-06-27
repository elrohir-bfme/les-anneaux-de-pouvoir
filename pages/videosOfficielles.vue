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
        <div class="flex flex-wrap -m-4">
          <div class="md:w-1/2 p-4 w-full">
            <div class="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/I7tshJbHV7A"
                title="Meet the team behind #LOTRonPrime."
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div class="md:w-1/2 p-4 w-full">
            <div class="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/QhqGCPMfkNM"
                title="The Lord of the Rings: The Rings of Power - Title Announcement | Prime Video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div class="md:w-1/2 p-4 w-full">
            <div class="aspect-w-16 aspect-h-9">
              <!-- <iframe src="https://s3-iad-ww.cf.videorolls.row.aiv-cdn.net/4929/b9ba/48ca/494d-9209-2b0e4c93d660/c99bf340-fa0e-414a-b98c-78bf18d9031c_video_1080p_10Mbps_audio_aaclc_128kbps.mp4" title="TEASER LOTR" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
              <iframe
                src="https://www.youtube.com/embed/e9NPBROVcBI"
                title="Le Seigneur des Anneaux : Les Anneaux de Pouvoir - Teaser Officiel | Prime Video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div class="md:w-1/2 p-4 w-full">
            <div class="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/Rcd0fsYahrA"
                title="The Earth Needs More Elf Fans - Prime Video - See Where It Takes You"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
