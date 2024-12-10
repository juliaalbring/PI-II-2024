<template>
  <header>
    <nav>
      <a href="#" class="logo">
        <img src="../../public/assets/nave-logo.png" alt="Logo do site" />
      </a>
      <ul>
        <li><a href="index">Página Principal</a></li>
        <li><a href="linha" class="active">Linha do Tempo</a></li>
        <li><a href="historia">História</a></li>
        <li><a href="forum">Fórum</a></li>
        <li><a href="artigo">Artigo</a></li>
        <li><a href="jogo">Jogo</a></li>
      </ul>
      <a href="#" class="profile">
        <img src="../../public/assets/profile.png" alt="Ícone de um perfil" />
      </a>
    </nav>
    <section class="hero">
      <h1>Beyond<span>Galaxy</span></h1>
      <p>Descubra um dos maiores<br> projetos humanos para a <br>exploração espacial</p>
      <button>↓</button>
    </section>
  </header>

  <div class="seta"></div>

    <footer>
    <div>
      <h1>Sobre a Beyond<span>Galaxy</span></h1>
      <hr>
      <p>Descubra um dos maiores projetos humanos para exploração espacial.
      </p>
      <img src="../../public/assets/IFC.png" alt="Logo IFC Concórdia">
  </div>
  <div class="footer-left">
    <h1>Links</h1>
    <hr>
    <ol>
      <li>Contato</li>
      <li>Contato</li>
      <li>Contato</li>
    </ol>
  </div>
  </footer>
</template>

<script>

export default {
  name: 'linhaTempo',
  components: {
    
  }
}
</script>

<style scoped>

/*.linha {
    position: absolute;
    width: 2px; /* Espessura da linha 
    height: 100vh; /* Altura total da tela
    background-color: black;
    top: 0;
    left: 50%; /* Centraliza horizontalmente 
    transform-origin: top; /* Define o ponto de origem da transformação 
}*/

</style>
