<script lang="ts" setup>
const { t } = useLang()

// meta
definePageMeta({
  layout: 'page',
})

// vars
const titlesText = computed<string[]>(() => t('pages.index.title').split(','))
const leadingsText = computed(() => [
  {
    text: titlesText.value[0],
    startColor: '#007CF0',
    endColor: '#00DFD8',
    delay: 0,
  },
  {
    text: titlesText.value[1],
    startColor: '#0096c7',
    endColor: '#457b9d',
    delay: 2,
  },
  {
    text: titlesText.value[2],
    startColor: '#0077b6',
    endColor: '#03045e',
    delay: 4,
  },
])
</script>

<template>
  <PageWrapper class="flex justify-center items-center">
    <div>
      <!-- <div class="">
        <img src="https://pbs.twimg.com/media/E7zdJNXVkAIPchb?format=jpg&name=4096x4096" alt="Orque les Anneaux de Pouvoir" />
      </div> -->
      <div
        class="absolute top-0 left-0 transform translate-x-64 translate-y-4 h-42 w-42 rounded-full bg-gray-900 dark:bg-white"
      >
        <img src="~/assets/images/orc.png" alt="Orque les Anneaux de Pouvoir" />
      </div>
      <div
        class="absolute hidden md:block top-0 right-0 transform -translate-x-18 translate-y-20 h-28 w-28 rounded-full bg-blue-600 linear-wipe"
      >
        <img src="~/assets/images/trollneige.png" alt="Troll des Neiges" />
      </div>
      <div
        class="absolute hidden md:block bottom-0 left-0 transform translate-x-4 -translate-y-40 h-30 w-30 rounded-full bg-purple-600 linear-wipe"
      >
        <img src="~/assets/images/elfe.png" alt="Les elfes" />
      </div>
      <div class="absolute bottom-4 right-4 h-40 w-40 rounded-full bg-red-600 linear-wipe">
        <img src="~/assets/images/nains.png" alt="Les nains" />
      </div>
    </div>
    <div class="flex flex-col z-10">
      <h1 class="text-lotr text-center drop-shadow-xl text-5xl xl:text-8xl 2xl:text-7xl block font-black uppercase">
        Le Seigneur des anneaux <br/>Les Anneaux de pouvoir
        <!-- <span
          v-for="(item, i) in leadingsText"
          :key="i"
          :style="`--content: '${item.text}'; --start-color: ${item.startColor}; --end-color: ${item.endColor}; --delay: ${item.delay}s`"
          class="animated-text-bg drop-shadow-xl text-5xl xl:text-8xl 2xl:text-9xl block font-black uppercase"
        >
          <span class="animated-text-fg">{{ item.text }}</span>
        </span> -->
      </h1>
      <div class="flex space-x-4 justify-center mt-10">
        <Button
          size="lg"
          text="La Terre du Milieu (Discord)"
          class="font-extrabold"
          href="https://laterredumilieu.fr/Discord"
        />
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
$padding: 0.05em;
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
  animation: anim-fg 8s infinite;
  animation-delay: var(--delay);
  @keyframes anim-fg {
    0% {
      opacity: 1;
    }
    16% {
      opacity: 1;
    }
    33% {
      opacity: 0;
    }
    83% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
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
  background-image: url("https://pbs.twimg.com/media/E7zdJNXVkAIPchb?format=jpg&name=4096x4096") !important;
  background-size:cover;
}

.text-lotr {
  letter-spacing: -1.5px;
  text-shadow: 3px 3px 3px #002823, -1px 0 3px #002823;
  color: gold;
}
</style>
