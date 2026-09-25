<script lang="ts">
  import Grid from '@/components/Grid.svelte'
</script>

<Grid direction="column" gap="xl">
  <Grid direction="column">
    <Grid align="center" gap="s">
      <wa-badge variant="brand">Base Stack</wa-badge>
      <wa-badge variant="neutral">v0.0.1</wa-badge>
    </Grid>

    <h1>Base Stack para novos projetos</h1>
    <p>
      Estrutura moderna e configurada para desenvolvimento rápido com SvelteKit,
      PocketBase, Docker e WebAwesome, pronta para produção no Coolify.
    </p>

    <Grid wrap={true}>
      <wa-button variant="brand" href="https://github.com" target="_blank">
        <wa-icon slot="prefix" name="star" variant="solid"></wa-icon>
        Ver no GitHub
      </wa-button>
      <wa-button variant="neutral" appearance="outlined" href="/docs">
        <wa-icon slot="prefix" name="book-open" variant="solid"></wa-icon>
        Documentação
      </wa-button>
    </Grid>
  </Grid>

  <Grid direction="column">
    <h2>Stack Tecnológica</h2>

    <Grid wrap={true} break="small">
      <wa-card data-grow="1">
        <Grid direction="column" gap="s">
          <Grid align="center" gap="s">
            <wa-icon name="bolt" variant="solid"></wa-icon>
            <strong>SvelteKit</strong>
          </Grid>
          <p>Framework moderno para aplicações web rápidas e reativas com SSR e API routes.</p>
        </Grid>
      </wa-card>

      <wa-card data-grow="1">
        <Grid direction="column" gap="s">
          <Grid align="center" gap="s">
            <wa-icon name="database" variant="solid"></wa-icon>
            <strong>PocketBase</strong>
          </Grid>
          <p>Backend open-source completo com base de dados SQLite, autenticação e realtime.</p>
        </Grid>
      </wa-card>

      <wa-card data-grow="1">
        <Grid direction="column" gap="s">
          <Grid align="center" gap="s">
            <wa-icon name="palette" variant="solid"></wa-icon>
            <strong>WebAwesome</strong>
          </Grid>
          <p>Componentes UI baseados em Web Components customizáveis e acessíveis.</p>
        </Grid>
      </wa-card>

      <wa-card data-grow="1">
        <Grid direction="column" gap="s">
          <Grid align="center" gap="s">
            <wa-icon name="docker" variant="brand"></wa-icon>
            <strong>Docker & Coolify</strong>
          </Grid>
          <p>Pronto para containerização com Dockerfile multi-stage e deploy direto no Coolify.</p>
        </Grid>
      </wa-card>
    </Grid>
  </Grid>
</Grid>
