<template>
  <header>
    <nav>
      <a href="#" class="logo">
        <img src="../../public/assets/nave-logo.png" alt="Logo do site" />
      </a>
      <ul>
        <li><a href="index">Página Principal</a></li>
        <li><a href="linha">Linha do Tempo</a></li>
        <li><a href="historia" class="active">História</a></li>
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
      <button><a href="#intro">↓</a></button>
    </section>
  </header>

  <div class="seta"></div>

<body>
<section  class="intro" id="intro">
<div class="div-esq">
  <div>
  <h1 class="title1">ORIGENS</h1>
  <h2 class="title2">GUERRA FRIA</h2>
  </div>
  <center><hr></center>
</div>
  <p class="text1">ALorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis, arcu nec pretium lacinia, dolor dui lobortis nunc, sed condimentum libero orci ut odio. In hac habitasse platea dictumst. Suspendisse eget orci elementum, porttitor turpis sed, ultrices dui. Vestibulum consequat augue ac mi feugiat dictum. Cras ac efficitur lorem, in ultricies tellus. Duis accumsan nulla eu pretium mattis. Vestibulum ac sem bibendum dui ornare cursus ut nec tortor. Curabitur vel erat quis diam semper</p>
  <img src="../../public/assets/guerrafria.png" class="imagem1">

<div class="div-dir">
  <center><hr></center>
  <div>
  <h1 class="title3">CARL SAGAN</h1>
  <h2 class="title4">A FIGURA PRINCIPAL</h2>
  </div>
</div>
  <p class="text2">ALorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis, arcu nec pretium lacinia, dolor dui lobortis nunc, sed condimentum libero orci ut odio. In hac habitasse platea dictumst. Suspendisse eget orci elementum, porttitor turpis sed, ultrices dui. Vestibulum consequat augue ac mi feugiat dictum. Cras ac efficitur lorem, in ultricies tellus. Duis accumsan nulla eu pretium mattis. Vestibulum ac sem bibendum dui ornare cursus ut nec tortor. Curabitur vel erat quis diam semper</p>
  <img src="../../public/assets/carlsagan.png" class="imagem2">
</section>

  <img src="../../public/assets/DiscoOuro2.png" class="imagem3">
  <div class="div1">
    <center class="centro-disco">
    <h1 class="title5">DISCO DE OURO</h1>
    <h1 class="title6">UMA MENSAGEM PARA O UNIVERSO</h1>
    </center>
  </div>
  <div class="div2"><p class="text3">
    ALorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis, arcu nec pretium lacinia, dolor dui lobortis nunc, sed condimentum libero orci ut odio. In hac habitasse platea dictumst. Suspendisse eget orci elementum, porttitor turpis sed, ultrices dui. Vestibulum consequat augue ac mi feugiat dictum. Cras ac efficitur lorem, in ultricies tellus. Duis accumsan nulla eu pretium mattis. Vestibulum ac sem bibendum dui ornare cursus ut nec tortor. Curabitur vel erat quis diam semper</p>
    <img src="../../public/assets/cosmos.png" class="imagem4">
  </div>

<section class="grandtour">
  <div>
  <h1>GRAND TOUR</h1>
  <h2>OBJETIVOS INICIAIS</h2>
  <p>ALorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis, arcu nec pretium lacinia, dolor dui lobortis nunc, sed condimentum libero orci ut odio. In hac habitasse platea dictumst. Suspendisse eget orci elementum, porttitor turpis sed, ultrices dui. Vestibulum consequat augue ac mi feugiat dictum. Cras ac efficitur lorem, in ultricies tellus. Duis accumsan nulla eu pretium mattis. Vestibulum ac sem bibendum dui ornare cursus ut nec tortor. Curabitur vel erat quis diam semper</p>
  </div>
  <hr>
  <img src="../../public/assets/cosmos2.png">
</section>

<section class="grandtour">
  <img src="../../public/assets/voyagerhistoria.png">
  <hr>
  <div>
  <h1>SONDA VOYAGER</h1>
  <h2>EXTENSÃO DA MISSÃO</h2>
  <p>ALorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis, arcu nec pretium lacinia, dolor dui lobortis nunc, sed condimentum libero orci ut odio. In hac habitasse platea dictumst. Suspendisse eget orci elementum, porttitor turpis sed, ultrices dui. Vestibulum consequat augue ac mi feugiat dictum. Cras ac efficitur lorem, in ultricies tellus. Duis accumsan nulla eu pretium mattis. Vestibulum ac sem bibendum dui ornare cursus ut nec tortor. Curabitur vel erat quis diam semper</p>
  </div>
</section>


</body>
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
  name: 'historiaSondas',
  components: {

  }
}
</script>

<style scoped>
.seta{
  margin-bottom: -20%;
}

body *{
    background-color: #111C41;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Onest", sans-serif;
    font-weight: 100;
}

.intro{
  margin-left: 10%;
}

.title1{
    color: white;
    font-size: 2.9rem;
    margin-left: 5.5rem;
    margin-top: 10rem;
    font-weight: 235;
}
.title2{
    color: #C898EC;
    font-size: 1.8rem;
    margin-left: 6rem;
    margin-top: -0.4rem;
    font-weight: 175;
}
.text1{
    color: white;
    font-size: 1.2rem;
    margin-left: 5.5rem;
    margin-top: 2rem;
    width: 32rem;
}
.imagem1{
    margin-left: 43.5rem;
    margin-top: -28rem;
    width: 35.5rem;
    height: auto;
}

.title3{
    color: white;
    font-size: 2.9rem;
    margin-left: 0.5rem;
    margin-top: 5rem;
    font-weight: 235;
}
.title4{
    color: #C898EC;
    font-size: 1.85rem;
    margin-left: 0.9rem;
    margin-top: -0.4rem;
    font-weight: 175;
}
.text2{
    color: white;
    font-size: 1.2rem;
    margin-left: 48.5rem;
    margin-top: 2rem;
    width: 32rem;
}
.imagem2{
    margin-left: 5.5rem;
    margin-top: -28rem;
    width: 35.5rem;
    height: auto;
}

.imagem3{
    margin-top: 5rem;
    width: 100%;
    height: auto;
}

.div1{
    background-color: #080E22;
    height: 17rem;
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: -0.3rem;
}

.centro-disco{
  background-color: #080E22;
}

.title5{
    background-color: #080E22;
    color: white;
    margin-top: 5rem;
    font-size: 2.9rem;
    text-align: center;
    font-weight: 235;
}
.title6{
  background-color: #080E22;
    color: #2552EA;
    font-size: 2rem;
    text-align: center;
    font-weight: 235;
}
.text3{
    background-color: #080E22;
    color: white;
    font-size: 1.4rem;
    margin: 4% 5% 5% 0;
    width: 32rem;
}
.div2{
    display: flex;
    background-color: #080E22;
    justify-content: center;
    margin-top: -2.3rem;
    height: 25rem;
}

.imagem4{
  margin-bottom: 5%
}

.div-esq hr{ 
    height: 0.5625rem;
    background-color: #C898EC;
    margin: 90% 0 0 10%;
    width: 13.125rem;
    border: none;
    border-radius: 10px;
}

.div-dir hr{ 
    height: 0.5625rem;
    background-color: #C898EC;
    margin: 55% 0 0 335%;
    width: 13.125rem;
    border: none;
    border-radius: 10px;
}

.div-dir div{
  margin-left: 45rem;
}

.div-esq, .div-dir{
  display: flex;
}

.grandtour{
  text-align: center;
  margin: 7% 2% 10% 4.2%;
  display: flex;
  align-items: center;
}

.grandtour img{
  scale: 95%;
}

.grandtour p{
  text-align: justify;
  margin: 5% 5% 0 0;
  color: white;
  font-size: 1.5rem;
  width: 90%;
}

.grandtour hr{
    width: 0.5625rem;
    background-color: #C898EC;
    margin: 1rem 0.8rem 0 0.8rem;
    height: 23.9rem;
    border: none;
    border-radius: 10px;

}

.grandtour h1{
  color: white;
  font-size: 3.4rem;
  font-weight: 235;
  margin: 5% 0 0 0;
}
.grandtour h2{
    margin: 0;
    color: #C898EC;
    font-size: 2.1rem;
    font-weight: 175;
}

.grandtour div{
  width: 45%;
  margin-left: 2%;
}
</style>
