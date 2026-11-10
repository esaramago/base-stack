<script lang="ts">
  import Grid from '@/components/Grid.svelte'
  import { WEBSITE_TITLE } from '@/lib/config'
</script>

<div class="l-container">
  <Grid tag="footer" direction="column" align="center">
    <p>© {new Date().getFullYear()} {WEBSITE_TITLE}.</p>
  </Grid>
</div>
