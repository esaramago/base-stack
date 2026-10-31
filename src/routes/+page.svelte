<script lang="ts">
  import Grid from '@/components/Grid.svelte'
</script>

<svelte:head>
  <title>Base Stack</title>
</svelte:head>

<Grid direction="column" gap="xl">
  <Grid direction="column">
    <Grid align="center" gap="s">
      <wa-badge variant="brand">Base Stack</wa-badge>
      <wa-badge variant="neutral">v0.0.1</wa-badge>
    </Grid>

    <h1>Base Stack for new projects</h1>
    <p>
      Modern, opinionated starter template for rapid development with SvelteKit,
      PocketBase, Docker, and WebAwesome, ready for production on Coolify.
    </p>

    <Grid wrap={true}>
      <wa-button variant="brand" href="https://github.com/esaramago/base-stack" target="_blank">
        <wa-icon slot="start" name="star" variant="solid"></wa-icon>
        View on GitHub
      </wa-button>
      <wa-button variant="neutral" href="/development">
        <wa-icon slot="start" name="book-open" variant="solid"></wa-icon>
        Development Guide
      </wa-button>
    </Grid>
  </Grid>

  <Grid direction="column">
    <h2>Tech Stack</h2>

    <Grid wrap={true} break="small">
      <wa-card>
        <Grid direction="column" gap="s">
          <Grid align="center" gap="s">
            <wa-icon name="bolt" variant="solid"></wa-icon>
            <strong>SvelteKit</strong>
          </Grid>
          <p>Modern framework for fast, reactive web applications with SSR and API routes.</p>
        </Grid>
      </wa-card>

      <wa-card>
        <Grid direction="column" gap="s">
          <Grid align="center" gap="s">
            <wa-icon name="database" variant="solid"></wa-icon>
            <strong>PocketBase</strong>
          </Grid>
          <p>Complete open-source backend with SQLite database, authentication, and realtime subscriptions.</p>
        </Grid>
      </wa-card>

      <wa-card>
        <Grid direction="column" gap="s">
          <Grid align="center" gap="s">
            <wa-icon name="palette" variant="solid"></wa-icon>
            <strong>WebAwesome</strong>
          </Grid>
          <p>Customizable, accessible UI components built on Web Components.</p>
        </Grid>
      </wa-card>

      <wa-card>
        <Grid direction="column" gap="s">
          <Grid align="center" gap="s">
            <wa-icon name="docker" family="brands"></wa-icon>
            <strong>Docker & Coolify</strong>
          </Grid>
          <p>Production containerization with multi-stage Dockerfile and seamless Coolify deployment.</p>
        </Grid>
      </wa-card>

      <wa-card>
        <Grid direction="column" gap="s">
          <Grid align="center" gap="s">
            <wa-icon name="code"></wa-icon>
            <strong>Prettier</strong>
          </Grid>
          <p>Code formatting powered by Prettier.</p>
        </Grid>
      </wa-card>

      <wa-card>
        <Grid direction="column" gap="s">
          <Grid align="center" gap="s">
            <wa-icon name="robot"></wa-icon>
            <strong>Agents.md</strong>
          </Grid>
          <p>Documentation and instructions for agentic pair programming workflows.</p>
        </Grid>
      </wa-card>

      <wa-card>
        <Grid direction="column" gap="s">
          <Grid align="center" gap="s">
            <wa-icon name="robot"></wa-icon>
            <strong>Grid component</strong>
          </Grid>
          <p>Reusable grid component for flexible, clean layout structuring.</p>
        </Grid>
      </wa-card>
    </Grid>
  </Grid>
</Grid>
