<script lang="ts" setup>
// meta
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <PageWrapper class="flex justify-center items-center">
    <div>
      <!-- <div class="">
        <img src="https://pbs.twimg.com/media/E7zdJNXVkAIPchb?format=jpg&name=4096x4096" alt="Orque les Anneaux de Pouvoir" />
      </div> -->
      <div
        class="absolute top-0 left-1/3 lg:left-0 transform translate-x-0 lg:translate-x-64 translate-y-0 lg:translate-y-4 h-42 w-42 rounded-full"
      >
        <img
          width="156"
          height="156"
          loading="lazy"
          src="~/assets/images/orc.png"
          alt="Orque les Anneaux de Pouvoir"
        />
        <!-- <nuxt-img src="/orc.png" /> -->
      </div>
      <div
        class="absolute hidden md:block top-0 right-0 transform -translate-x-18 translate-y-20 h-28 w-28 rounded-full linear-wipe"
      >
        <img
          width="126"
          height="126"
          loading="lazy"
          src="~/assets/images/trollneige.png"
          alt="Troll des Neiges"
        />
        <!-- <nuxt-img src="/troll.png" /> -->
      </div>
      <div
        class="absolute hidden md:block bottom-0 left-0 transform translate-x-4 -translate-y-40 h-30 w-30 rounded-full linear-wipe"
      >
        <img
          width="156"
          height="156"
          loading="lazy"
          src="~/assets/images/elfe.png"
          alt="Les elfes"
        />
        <!-- <nuxt-img src="/elfe.png" /> -->
      </div>
      <div
        class="absolute bottom-4 right-1/3 lg:right-4 h-40 w-40 rounded-full linear-wipe"
      >
        <img
          width="126"
          height="126"
          loading="lazy"
          src="~/assets/images/nains.png"
          alt="Les nains"
        />
        <!-- <nuxt-img src="/nains.png" /> -->
      </div>
    </div>
    <div class="flex flex-col z-10">
      <h1
        class="text-lotr text-center drop-shadow-xl text-5xl xl:text-8xl 2xl:text-7xl block uppercase"
      >
        Le Seigneur des anneaux <br />Les Anneaux de pouvoir
        <!-- <span
          v-for="(item, i) in leadingsText"
          :key="i"
          :style="`--content: '${item.text}'; --start-color: ${item.startColor}; --end-color: ${item.endColor}; --delay: ${item.delay}s`"
          class="animated-text-bg drop-shadow-xl text-5xl xl:text-8xl 2xl:text-9xl block font-black uppercase"
        >
          <span class="animated-text-fg">{{ item.text }}</span>
        </span> -->
      </h1>
      <div
        class="flex flex-col self-center lg:self-auto lg:w-auto w-sm lg:flex-row space-x-0 lg:space-x-4 justify-center mt-10"
      >
        <Button
          size="lg"
          text="La Terre du Milieu (Discord)"
          class="font-extrabold"
          href="https://laterredumilieu.fr/Discord"
        />
        <div class="mt-10 lg:mt-0"></div>
        <Button
          size="lg"
          text="Les nouveautés"
          type="secondary"
          class="font-extrabold"
          to="/news"
        />
      </div>
    </div>
  </PageWrapper>
</template>

<style lang="scss">
@import '../assets/sass/variables';

@keyframes anim-fg-1 {
  0%,
  16.667%,
  100% {
    opacity: 1;
  }
  33.333%,
  83.333% {
    opacity: 0;
  }
}
@keyframes anim-fg-2 {
  0%,
  16.667%,
  66.667%,
  100% {
    opacity: 0;
  }
  33.333%,
  50% {
    opacity: 1;
  }
}
@keyframes anim-fg-3 {
  0%,
  50%,
  100% {
    opacity: 0;
  }
  66.667%,
  83.333% {
    opacity: 1;
  }
}

.animated-text-bg {
  position: relative;
  display: block;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  content: var(--content);
  display: block;
  width: 100%;
  text-align: center;
  color: theme('colors.slate.800');
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  padding-left: $padding;
  padding-right: $padding;
  &:before {
    content: var(--content);
    position: absolute;
    display: block;
    width: 100%;
    text-align: center;
    color: theme('colors.slate.800');
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    padding-left: $padding;
    padding-right: $padding;
  }
}
.animated-text-fg {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-left: $padding;
  padding-right: $padding;
  background-image: linear-gradient(
    90deg,
    var(--start-color),
    var(--end-color)
  );
  position: relative;
  opacity: 0;
  z-index: 1;
  animation: var(--animation-name) 8s infinite;
}
html.dark {
  .animated-text-bg {
    color: theme('colors.gray.100');
    &:before {
      color: theme('colors.gray.100');
    }
  }
}

.triangle-shape {
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 40px solid theme('colors.green.600');
  transform: translate(-15rem, -6rem) rotate(45deg);
}

.background-overlay {
  background-color: red;
  background-image: url('https://pbs.twimg.com/media/E7zdJNXVkAIPchb?format=jpg&name=4096x4096') !important;
  background-size: cover;
}

.text-lotr {
  letter-spacing: -1.5px;
  text-shadow: 3px 3px 3px #002823, -1px 0 3px #002823;
  color: gold;
}
</style>
