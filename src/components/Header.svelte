<script lang="ts">
  import Grid from '@/components/Grid.svelte'
  import { WEBSITE_TITLE } from '@/lib/config'
</script>

<header class="l-container">
  <Grid align="center" gap="s">
    <wa-icon name="cubes-stacked" variant="solid"></wa-icon>
    <strong>{WEBSITE_TITLE}</strong>
  </Grid>
</header>

<style>
  header {
    padding-block: var(--wa-space-l);
  }
</style>