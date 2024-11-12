<template> 
    <header>
      <nav>
        <a class="logo">
          <img url="../assets/nave-logo.png" alt="Ícone de um foguete" />
        </a>
        <ul>
          <li><a href="index" >Página Principal</a></li>
          <li><a href="linha" class="active">Linha do Tempo</a></li>
          <li><a href="historia">História</a></li>
          <li><a href="forum">Fórum</a></li>
          <li><a href="artigo">Artigo</a></li>
          <li><a href="jogo">Jogo</a></li>
        </ul>
        <a href="#" class="profile">
          <img src="" alt="Ícone de um perfil" />
        </a>
      </nav>
      <section class="hero">
        <h1>Beyond<span>Galaxy</span></h1>
        <p>Descubra um dos maiores projetos humanos para a exploração espacial</p>
        <button>Saiba Mais</button>
      </section>
      <div class="linha" ></div>
    </header>

    <footer>
    <div>
      <h1>Sobre a Beyond<span>Galaxy</span></h1>
      <hr>
      <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
      </p>
      <img src="../assets/IFC.png" alt="Logo IFC Concórdia">
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
