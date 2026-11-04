<script lang="ts">
  import '@/css/main.css'
  import '@awesome.me/webawesome/dist/styles/webawesome.css'
  import '@awesome.me/webawesome/dist/components/badge/badge.js'
  import '@awesome.me/webawesome/dist/components/button/button.js'
  import '@awesome.me/webawesome/dist/components/card/card.js'
  import '@awesome.me/webawesome/dist/components/icon/icon.js'
  import Header from '@/components/Header.svelte'
  import Footer from '@/components/Footer.svelte'
  import Grid from '@/components/Grid.svelte'
  import { dev } from '$app/environment'
  import { PUBLIC_UMAMI_URL, PUBLIC_UMAMI_WEBSITE_ID } from '$env/static/public'

  let { children } = $props()
</script>

<svelte:head>
  {#if !dev && PUBLIC_UMAMI_URL && PUBLIC_UMAMI_WEBSITE_ID}
    <script
      defer
      src="{PUBLIC_UMAMI_URL}/script.js"
      data-website-id={PUBLIC_UMAMI_WEBSITE_ID}
    ></script>
  {/if}
</svelte:head>

<Grid direction="column" gap="2xl">
  <Header />
  <main class="l-container">
    {@render children?.()}
  </main>
  <Footer />
</Grid>
