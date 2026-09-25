<script lang="ts">
  import Grid from '@/components/Grid.svelte'
</script>

<div class="l-container">
  <Grid tag="header" justify="space-between" align="center">
    <Grid align="center" gap="s">
      <wa-icon name="cubes-stacked" variant="solid"></wa-icon>
      <strong>Base Stack</strong>
    </Grid>

    <Grid tag="nav" align="center" gap="s">
      <wa-button href="/" variant="neutral" appearance="text">Início</wa-button>
      <wa-button href="https://github.com" target="_blank" variant="neutral" appearance="text">GitHub</wa-button>
      <wa-button variant="brand">Começar</wa-button>
    </Grid>
  </Grid>
</div>
