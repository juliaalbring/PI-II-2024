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
          <li><a href="forum" class="active">Fórum</a></li>
          <li><a href="artigo">Artigo</a></li>
          <li><a href="jogo">Jogo</a></li>
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
                <a href="forum" class="active">Fórum<br><br></a>
                <a href="artigo">Artigo<br><br></a>
                <a href="jogo">Jogo<br><br></a>
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
  
  <section class="destaques" id="intro">
        <h2>Destaques</h2>
        <div class="destaques-container">
            <div class="destaque">
                <img src="../../public/assets/cosmos2.png" alt="The Road Ahead">
                <div class="texto">
                    <h3>The Road Ahead</h3>
                    <p>William Wong - Outubro 8, 2023</p>
                </div>
            </div>
            <div class="destaque">
                <img src="../../public/assets/cosmos2.png" alt="From Top Down">
                <div class="texto">
                    <h3>From Top Down</h3>
                    <p>Mark Rogers - Outubro 8, 2023</p>
                </div>
            </div>
        </div>
    </section>

    <section class="topicos">
        <h2>Tópicos</h2>
        <div class="topicos-container">
            <div class="topico">
                <img src="../../public/assets/cosmos2.png" alt="Forum Topic">
                <h4>Forum Topic</h4>
                <p>William Wong - 01/10/2023</p>
            </div>
            <div class="topico">
                <img src="../../public/assets/cosmos2.png" alt="Topic1">
                <h4>Topic1</h4>
                <p>Mark Rogers - 01/10/2023</p>
            </div>
            <div class="topico">
                <img src="../../public/assets/cosmos2.png" alt="Topic2">
                <h4>Topic2</h4>
                <p>Mark Rogers - 01/10/2023</p>
            </div>
            <div class="topico">
                <img src="../../public/assets/cosmos2.png" alt="Topic3">
                <h4>Topic3</h4>
                <p>William Wong - 01/10/2023</p>
            </div>
            <div class="topico">
                <img src="../../public/assets/cosmos2.png" alt="Topic4">
                <h4>Topic4</h4>
                <p>Mark Rogers - 01/10/2023</p>
            </div>
            <div class="topico">
                <img src="../../public/assets/cosmos2.png" alt="Topic5">
                <h4>Topic5</h4>
                <p>Mark Rogers - 01/10/2023</p>
            </div>
        </div>
    </section>


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
  name: 'forumSondas',
  components: {

  }
}
</script>

<style scoped>

.destaques h2,
.topicos h2 {
    display: inline-block;
    font-size: 2rem;
    margin-bottom: 1rem;
    position: relative;
    padding-bottom: 0.5rem;
    border-bottom: 3px solid #ffffff;
    color: white;
}
.destaques {
    text-align: center;
    margin: 2rem 0;
}

.destaques h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.destaques-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 0 2rem;
}

.destaque {
    position: relative;
    flex: 1;
}

.destaque img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    filter: brightness(0.7);
}

.texto {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    color: #ffffff;
}

.topicos {
    text-align: center;
    margin-top: 2rem;
}

.topicos h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.topicos-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin: 0 2rem;
}

.topico {
    background: #ffffff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
}

.topico img {
    width: 100%;
    height: 150px;
    object-fit: cover;
}

.topico h4 {
    margin: 1rem 0;
    font-size: 1.2rem;
}

.topico p {
    margin-bottom: 1rem;
    font-size: 0.9rem;
    color: #000000;
}



</style>
