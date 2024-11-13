<template>
  <header>
    <nav>
      <a href="nave-logo.png" class="logo">
        <img src="../../public/nave-logo.png" alt="Logo do site" />
      </a>
      <ul>
        <li><a href="index">Página Principal</a></li>
        <li><a href="linha">Linha do Tempo</a></li>
        <li><a href="historia">História</a></li>
        <li><a href="forum">Fórum</a></li>
        <li><a href="artigo" class="active">Artigo</a></li>
        <li><a href="jogo">Jogo</a></li>
      </ul>
      <a href="#" class="profile">
        <img src="../../public/profile.png" alt="Ícone de um perfil" />
      </a>
    </nav>
    <section class="hero">
      <h1>Beyond<span>Galaxy</span></h1>
      <p>Descubra um dos maiores<br> projetos humanos para a <br>exploração espacial</p>
      <button>↓</button>
    </section>
  </header>

  <div class="seta"></div>

  <center><section class="article">
    <div>
      <h1>NOSSO ARTIGO</h1>
      <h4>A MISSÃO MAIS LONGA DE TODOS OS TEMPOS: AS SONDAS VOYAGER</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis, arcu nec pretium lacinia, dolor dui lobortis nunc, sed condimentum libero orci ut odio. In hac habitasse platea dictumst. Suspendisse eget orci elementum, porttitor turpis sed, ultrices dui. Vestibulum consequat augue ac mi feugiat dictum. Cras ac efficitur lorem, in ultricies tellus. Duis accumsan nulla eu pretium mattis. Vestibulum ac sem bibendum dui ornare cursus ut nec tortor. Curabitur vel erat quis diam semper</p>
    </div>
    <button><a href="/public/A_missão_mais_longa_de_todos_os_tempos__Sonda_Voyager.pdf" download="Artigo.pdf">Download PDF</a></button>
  </section></center>

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
  name: 'artigoSondas',
  components: {

  }
}
</script>

<style scoped>

.article{
  display: flex;
  width: 66rem;
  margin: -12rem 0 6rem 0;
}

.article p{
  font-size: 1.4rem;
}

.article div{
  color: white;
  text-align: justify;
  width: 31.8rem;
  margin: 0 9rem 0 0;
}

.article button{
  margin-top: 10%;
  background-color: #2552EA;
  width: 24.8rem;
  height: 7rem;
  border-radius: 60px;
}

.article button a{
  color: white;
  font-size: 1.4rem;
}

.article h1{
  font-size: 3.12rem;
  text-align: center;
  font-weight: normal;
}

.article h4{
  font-size: 1.3rem;
  text-align: center;
  color:#2552EA;
  font-weight: normal;
  margin-bottom: 2rem;
}

</style>
