<script lang="ts">
  import { onMount } from 'svelte'
  import '@/css/main.css'
  import '@awesome.me/webawesome/dist/styles/webawesome.css'
  import Header from '@/components/Header.svelte'
  import Footer from '@/components/Footer.svelte'
  import Grid from '@/components/Grid.svelte'

  let { children } = $props()

  onMount(async () => {
    await import('@awesome.me/webawesome')
  })
</script>

<Grid direction="column" gap="2xl">
  <Header />
  <main class="l-container">
    {@render children?.()}
  </main>
  <Footer />
</Grid>
