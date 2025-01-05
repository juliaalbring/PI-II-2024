<template>
  <header>
    <nav>
      <a href="#" class="logo">
        <img src="../../public/assets/nave-logo.png" alt="Logo do site" />
      </a>
      <ul>
        <li><a href="index">Página Principal</a></li>
        <li><a href="linha">Linha do Tempo</a></li>
        <li><a href="historia">História</a></li>
        <li><a href="forum">Fórum</a></li>
        <li><a href="artigo">Artigo</a></li>
        <li><a href="jogo" class="active">Jogo</a></li>
      </ul>
      <a href="#" class="profile">
        <img src="../../public/assets/profile.png" alt="Ícone de um perfil" />
      </a>

      <a class="button" href="#popup1"><img src="../../public/assets/Menu.png"></a>

        <div id="popup1" class="overlay">
          <div class="popup">
            <h2>Menu</h2>
            <a class="close" href="#">×</a>
            <div class="content">
              <a href="index">Página Principal<br><br></a>
              <a href="linha">Linha do tempo<br><br></a>
              <a href="historia">História das sondas<br><br></a>
              <a href="forum">Fórum<br><br></a>
              <a href="artigo">Artigo<br><br></a>
              <a href="jogo" class="active">Jogo<br><br></a>
              <a href="#">Perfil do usuário</a>
            </div>
            <div class="redes">
              <h2>Nossas redes Sociais</h2>
              <a href="https://instagram.com/beyond.glx" target="_blank">Instagram</a>
              <br>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpdtccrQmBqXgfxfDsVClphnZFVqJtVRDRlQpDvrhPqvfRzKSbxFStQbzbkkQmwTBNjrVb" target="_blank">E-mail</a>
              <br>
              <a href="https://google.com" target="_blank">Contato</a>
            </div>
          </div>
        </div>
    </nav>
    <section class="hero">
      <h1>Beyond<span>Galaxy</span></h1>
      <p>Descubra um dos maiores<br> projetos humanos para a <br>exploração espacial</p>
      <button><a href="#intro">↓</a></button>
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
      <a href="https://instagram.com/beyond.glx" target="_blank"><li>Instagram</li></a>
      <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpdtccrQmBqXgfxfDsVClphnZFVqJtVRDRlQpDvrhPqvfRzKSbxFStQbzbkkQmwTBNjrVb" target="_blank"><li>E-mail</li></a>
      <a href="https://google.com" target="_blank"><li>Contato</li></a>
    </ol>
  </div>
  </footer>
</template>

<script>

export default {
  name: 'jogoSondas',
  components: {

  }
}
</script>

<style scoped>

</style>
