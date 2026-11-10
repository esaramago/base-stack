<script lang="ts">
  import Grid from '@/components/Grid.svelte'
  import HeadMeta from '@/components/HeadMeta.svelte'

  interface TechItem {
    name: string
    description: string
    icon: string
    iconVariant?: 'solid'
    iconFamily?: 'brands'
  }

  const techStack: TechItem[] = [
    {
      name: 'SvelteKit',
      description: 'Modern framework for fast, reactive web applications with SSR and API routes.',
      icon: 'bolt',
      iconVariant: 'solid'
    },
    {
      name: 'PocketBase',
      description: 'Complete open-source backend with SQLite database, authentication, and realtime subscriptions.',
      icon: 'database',
      iconVariant: 'solid'
    },
    {
      name: 'WebAwesome',
      description: 'Customizable, accessible UI components built on Web Components.',
      icon: 'palette',
      iconVariant: 'solid'
    },
    {
      name: 'Docker & Coolify',
      description: 'Production containerization with multi-stage Dockerfile and seamless Coolify deployment.',
      icon: 'docker',
      iconFamily: 'brands'
    },
    {
      name: 'Prettier',
      description: 'Code formatting powered by Prettier.',
      icon: 'code'
    },
    {
      name: 'Agents.md',
      description: 'Documentation and instructions for agentic pair programming workflows.',
      icon: 'robot'
    },
    {
      name: 'Grid component',
      description: 'Reusable grid component for flexible, clean layout structuring.',
      icon: 'table-cells-large'
    }
  ]
</script>

<HeadMeta
  description="Modern, opinionated starter template for rapid development with SvelteKit, PocketBase, Docker, and WebAwesome, ready for production on Coolify."
/>

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
      {#each techStack as item (item.name)}
        <wa-card>
          <Grid direction="column" gap="s">
            <Grid align="center" gap="s">
              <wa-icon name={item.icon} variant={item.iconVariant} family={item.iconFamily}></wa-icon>
              <strong>{item.name}</strong>
            </Grid>
            <p>{item.description}</p>
          </Grid>
        </wa-card>
      {/each}
    </Grid>
  </Grid>
</Grid>
