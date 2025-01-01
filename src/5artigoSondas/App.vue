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
        <li><a href="artigo" class="active">Artigo</a></li>
        <li><a href="jogo">Jogo</a></li>
      </ul>
      <a href="#" class="profile">
        <img src="../../public/assets/profile.png" alt="Ícone de um perfil" />
      </a>
    </nav>
    <section class="hero">
      <h1>Beyond<span>Galaxy</span></h1>
      <p>Descubra um dos maiores<br> projetos humanos para a <br>exploração espacial</p>
      <button><a href="#intro">↓</a></button>
    </section>
  </header>

  <div class="seta" id="intro"></div>

  <center><section class="article">
    <div>
      <h1>NOSSO ARTIGO</h1>
      <h4>A MISSÃO MAIS LONGA DE TODOS OS TEMPOS: AS SONDAS VOYAGER</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis, arcu nec pretium lacinia, dolor dui lobortis nunc, sed condimentum libero orci ut odio. In hac habitasse platea dictumst. Suspendisse eget orci elementum, porttitor turpis sed, ultrices dui. Vestibulum consequat augue ac mi feugiat dictum. Cras ac efficitur lorem, in ultricies tellus. Duis accumsan nulla eu pretium mattis. Vestibulum ac sem bibendum dui ornare cursus ut nec tortor. Curabitur vel erat quis diam semper</p>
    </div>
    <button id="button" v-on:click="download">Download PDF</button>

  </section></center>

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
window.onload=function(){
function download(){
      const link = document.createElement("a")
      link.href = "/assets/A_missão_mais_longa_de_todos_os_tempos__Sonda_Voyager.pdf"
      link.setAttribute("download", "Artigo.pdf")
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      setTimeout(function() { URL.revokeObjectURL(link.href); },1500)
}

let btn = document.getElementById("button")
btn.addEventListener("click", download)
}

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
border: none;
  margin-top: 10%;
  background-color: #2552EA;
  width: 24.8rem;
  height: 7rem;
  border-radius: 60px;
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

@media screen and (max-width: 1200px) {
  .article{
    display: block;
    align-items: center;
  }

  .article div{
    width: 50rem;
    margin: 0;
  }

}
</style>
