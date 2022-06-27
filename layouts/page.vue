<template>
  <div>
    <slot name="app-before" />
    <div id="app-before"></div>
    <div class="flex flex-col min-h-screen">
      <slot name="header">
        <PageNavbar />
      </slot>
      <div
        class="flex-1 w-full flex flex-col"
        :class="$route.path == '/' && 'background-lotr'"
      >
        <div
          class="relative flex-1 flex flex-col mx-auto max-w-8xl w-full h-full"
        >
          <slot />
        </div>
      </div>
      <slot name="footer">
        <PageFooter />
      </slot>
    </div>
    <slot name="app-after" />
    <div id="app-after"></div>
  </div>
</template>

<style scoped>
.background-lotr {
  background-image: url('https://res.cloudinary.com/laterredumilieu-fr/image/upload/c_scale,e_blur:70,q_auto,w_1957/v1656236219/valinor-bg_bkrcep.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
