<script lang="ts" setup>
import { IApp } from '~/utils/app'

export interface IMenuItem {
  type: 'link' | 'button'
  text: string
  href?: any
  route?: any
  target?: boolean
}

const { t } = useLang()
const app = useState<IApp>('app')
const menus = computed((): IMenuItem[] => [
  { type: 'link', text: 'Images', route: { name: 'images' } },
  { type: 'link', text: 'Affiches', route: { name: 'affiches' } },
  { type: 'link', text: 'Cartes', route: { name: 'cartes' } },
  { type: 'link', text: 'Vidéos', route: { name: 'videos' } },
  {
    type: 'link',
    text: 'Vidéos officielles',
    route: { name: 'videosOfficielles' },
  },
  {
    type: 'button',
    text: t('pages.news.nav'),
    route: { name: 'news' },
  },
  {
    type: 'button',
    text: 'Histoire Univers (Tolkiendil)',
    href: 'https://www.tolkiendil.com/bienvenue',
    target: true,
    // route: { name: 'news' },
  },
])
</script>

<template>
  <BuilderNavbar>
    <template #banner>
      <div
        class="text-white text-xs text-center py-1 px-4 lg:px-8 bg-primary-500 capitalize"
      >
        <span class="mr-1">
          {{ $t('banners.welcome', { app_name: app.name }) }}
        </span>

        <Anchor
          class="underline font-bold"
          :text="$t('others.learn_more')"
          to="/news"
        />
      </div>
    </template>
    <template #menu>
      <div class="relative hidden lg:flex items-center ml-auto">
        <nav
          class="text-sm leading-6 font-semibold text-gray-600 dark:text-gray-300"
          role="navigation"
        >
          <ul class="flex items-center space-x-8">
            <li v-for="(item, i) in menus" :key="i">
              <Anchor
                v-if="item.type === 'link'"
                :to="item.route ? item.route : undefined"
                :href="item.href ? item.href : undefined"
                class="hover:no-underline hover:text-slate-900 hover:dark:text-white capitalize"
                >{{ item.text }}</Anchor
              >
              <Button
                v-else-if="item.type === 'button'"
                :text="item.text"
                size="xs"
                class="font-extrabold capitalize"
                :to="item.route ? item.route : undefined"
                :href="item.href ? item.href : undefined"
                :target="item.target ? item.target : false"
              />
            </li>
          </ul>
        </nav>
        <div
          class="flex space-x-4 border-l ml-6 pl-6 border-gray-900/10 dark:border-gray-50/[0.2]"
        >
          <!-- <LanguageSwitcher /> -->
          <ThemeSwitcher />
          <Anchor
            class="hover:no-underline hover:text-slate-900 hover:dark:text-white text-lg flex self-center items-center"
            href="https://twitter.com/Elrohir_BFME"
            title="Twitter"
          >
            <IconMdi:twitter />
          </Anchor>
          <Anchor
            class="hover:no-underline hover:text-slate-900 hover:dark:text-white text-lg flex self-center items-center"
            href="https://laterredumilieu.fr/Discord"
            title="Discord"
          >
            <IconSimpleIcons:discord />
          </Anchor>
          <Anchor
            class="hover:no-underline hover:text-slate-900 hover:dark:text-white text-lg flex self-center items-center"
            href="https://www.twitch.tv/elrohir_bfme"
            title="Twitch"
          >
            <IconMdi:twitch />
          </Anchor>
          <Anchor
            class="hover:no-underline hover:text-slate-900 hover:dark:text-white text-lg flex self-center items-center"
            href="https://www.instagram.com/elrohir_bfme/"
            title="Instagram"
          >
            <IconMdi:instagram />
          </Anchor>
        </div>
      </div>
    </template>
    <template #options="{ toggleOptions }">
      <ActionSheet @onClose="toggleOptions(false)">
        <ActionSheetBody>
          <ActionSheetHeader text="Menu" />
          <nav class="leading-6 font-semibold text-gray-600 dark:text-gray-300">
            <ul class="flex flex-col">
              <li
                v-for="(item, i) in menus"
                :key="i"
                class="flex w-full"
                :class="{
                  'pb-2 mb-2 border-b border-gray-900/10 dark:border-gray-50/[0.2]':
                    item.type === 'link',
                }"
              >
                <Anchor
                  v-if="item.type === 'link'"
                  :to="item.route ? item.route : undefined"
                  :href="item.href ? item.href : undefined"
                  class="flex-1 hover:no-underline capitalize"
                  >{{ item.text }}</Anchor
                >
                <Button
                  v-else-if="item.type === 'button'"
                  :text="item.text"
                  size="xs"
                  class="flex-1 font-extrabold capitalize mb-2"
                  :to="item.route ? item.route : undefined"
                  :href="item.href ? item.href : undefined"
                />
              </li>
            </ul>
          </nav>
          <div class="mt-6 text-sm font-bold capitalize">
            {{ $t('components.theme_switcher.change_theme') }}
          </div>
          <div class="mt-2">
            <ThemeSwitcher type="select-box" />
          </div>
          <!-- <div class="mt-6 text-sm font-bold capitalize">
            {{ $t('components.language_switcher.change_language') }}
          </div> -->
          <!-- <div class="mt-2">
            <LanguageSwitcher type="select-box" />
          </div> -->
        </ActionSheetBody>
        <!-- <Button
          type="secondary"
          title="Github"
          href="https://github.com/viandwi24/nuxt3-awesome-starter"
        >
          <IconMdi:github-face />
          <span class="ml-1">Github</span>
        </Button> -->
        <Button
          text="Close"
          type="secondary"
          @click.prevent="toggleOptions(false)"
        />
      </ActionSheet>
    </template>
  </BuilderNavbar>
</template>
