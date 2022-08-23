<template>
  <div class="w-full pb-2 p-3">
    <img class="mx-auto float-none" :src="imgSrc()" :alt="alt" :title="title" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    asset: {
      type: Boolean,
    },
  },
  methods: {
    imgSrc() {
      try {
        if (this.asset) {
          return require(`~/assets/images/orques/${this.src}`)
        } else {
          return this.src
        }
      } catch (error) {}
    },
  },
}
</script>
