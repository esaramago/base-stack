<script lang="ts">
  import Grid from '@/components/Grid.svelte'
</script>

<div class="l-container">
  <Grid tag="footer" direction="column" align="center">
    <Grid tag="nav" justify="center" wrap={true}>
      <wa-button href="#" variant="neutral" appearance="text">Início</wa-button>
      <wa-button href="#" variant="neutral" appearance="text">Termos</wa-button>
      <wa-button href="#" variant="neutral" appearance="text">Privacidade</wa-button>
    </Grid>

    <p>© {new Date().getFullYear()} Base Stack.</p>
  </Grid>
</div>
