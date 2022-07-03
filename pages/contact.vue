<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})

useHead(() => ({
  title: 'Contact',
  meta: [
    {
      name: 'description',
      content: 'Information pour me contacter',
    },
  ],
}))
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle text="Contact" class="capitalize" />
    </PageHeader>
    <PageBody>
      <div class="flex flex-col items-center">
        <p class="text-xl mb-4">
          Une envie de participer ou d'indiquer une erreur ou simplement poser
          une question ? Vous êtes les bienvenues
        </p>
        <img
          src="~assets\images\elrohir.webp"
          class="inline-block rounded-full"
          alt="viandwi24"
          width="100"
          height="100"
        />
        <Button
          size="xs"
          type="opposite"
          text="Discord (Elrohir#8420)"
          class="font-extrabold mt-4"
          href="https://laterredumilieu.fr/Discord"
        />
        <Button
          size="xs"
          type="opposite"
          text="@Elrohir_BFME"
          class="font-extrabold mt-4"
          href="https://twitter.com/Elrohir_BFME"
        />
      </div>
    </PageBody>
  </PageWrapper>
</template>
