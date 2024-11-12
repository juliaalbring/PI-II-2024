<template>
  <header>
    <nav>
      <a href="nave-logo.png" class="logo">
        <img scr="../assets/nave-logo.png" alt="Ícone de um foguete" />
      </a>
      <ul>
        <li><a href="index" class="active">Página Principal</a></li>
        <li><a href="linha">Linha do Tempo</a></li>
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
      <p>Descubra um dos maiores<br> projetos humanos para a <br>exploração espacial</p>
      <button>↓</button>
    </section>
  </header>

  <div class="seta"></div>

  <div class="intro">
    <div class="txt">
      <h3>BEM-VINDO AO <span><br> NOSSO SITE</span></h3>
      <p>Aqui, você encontrará tudo sobre as missões Voyager 1 e Voyager 2, lançadas na década de 1970 com o objetivo de explorar os confins do nosso sistema solar e além. 
        Essas sondas pioneiras, que continuam suas jornadas por bilhões de quilômetros, são responsáveis por algumas das descobertas mais incríveis da ciência espacial. 
        Ao longo das décadas, elas forneceram dados valiosos sobre os planetas, luas e o ambiente espacial, revolucionando nosso entendimento do universo. 
        Descubra também o legado do disco de ouro que as Voyager carregam consigo, um "mensageiro" da Terra com sons, imagens e informações sobre nossa civilização, destinado a possíveis formas de vida extraterrestre. 
</p>
    </div>
    <img src="../assets/Voyager1.jpg">
  </div>

  <div class="topics">
    <h1>VOYAGERS: MISSÃO AO<span><br> DESCONHECIDO</span></h1>
    <p>As sondas Voyager têm a missão de explorar os confins do sistema solar e além, coletando dados sobre os planetas e suas luas. 
      Elas também buscam entender o ambiente interplanetário e interstelar. 
      Com suas mensagens para possíveis civilizações, representam o esforço humano de comunicação cósmica. 
      Suas viagens são um marco na busca pelo desconhecido e pelo entendimento do universo.
</p>

    <div class="imagens">
      <img class='imagem1' src="../assets/Jupiter.jpg"/>
      <img class="imagem2" src="../assets/voyager2.png"/>
      <img class="imagem3" src="../assets/DiscoOuro.jpg"/>
    </div>

    <h3>A Grande Conjunção</h3>
    <p>A Grande Conjunção é um fenômeno astronômico que ocorre quando os planetas Júpiter e Saturno se alinham no céu, vistos da Terra. 
      Esse evento é raro e acontece, em média, a cada 20 anos. Durante a conjunção, os dois planetas parecem estar muito próximos um do outro, criando uma imagem impressionante no céu noturno. 
      A última grande conjunção ocorreu em dezembro de 2020, marcando a proximidade mais visível em quase 400 anos. 
      A observação desse fenômeno é uma oportunidade única de admirar a dança dos gigantes gasosos. A Grande Conjunção simboliza também a harmonia cósmica e a beleza dos movimentos planetários.</p>

    <button><a>Veja mais</a></button>
  </div>

  <div class="hub">
    <div class="sub">
      <h1>Nosso jogo</h1>
      <p>ALorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis, arcu nec pretium lacinia, dolor dui lobortis nunc, sed condimentum libero orci ut odio. In hac habitasse platea dictumst. Suspendisse eget orci elementum, porttitor turpis sed, ultrices dui. Vestibulum consequat augue ac mi feugiat dictum. Cras ac efficitur lorem, in ultricies tellus. Duis accumsan nulla eu pretium mattis. Vestibulum ac sem bibendum dui ornare cursus ut nec tortor. Curabitur vel erat quis diam semper</p>
      <button><a href="#">Saiba mais</a></button>
    </div>
    <div class="sub">
      <h1>Galactic Hub</h1>
      <p>ALorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis, arcu nec pretium lacinia, dolor dui lobortis nunc, sed condimentum libero orci ut odio. In hac habitasse platea dictumst. Suspendisse eget orci elementum, porttitor turpis sed, ultrices dui. Vestibulum consequat augue ac mi feugiat dictum. Cras ac efficitur lorem, in ultricies tellus. Duis accumsan nulla eu pretium mattis. Vestibulum ac sem bibendum dui ornare cursus ut nec tortor. Curabitur vel erat quis diam semper</p>
      <button><a href="#">Saiba mais</a></button>
    </div>
  </div>

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
  name: 'App',
  components: {}
};

</script>

<style scoped>

  .intro {
    background-color: #080E22;
    width: 100%;
    padding-bottom: 90px;
    display: flex;
  }

  .txt {
    width: 60%;
  }

  .intro p {
    color: #F0F0FA;
    font-size: 21px;
    margin-top: 2%;
    margin-left: 10%;
    max-width: 600px;
    font-weight: 300;
  }

  .intro h3 {
    color: #F0F0FA;
    font-size: 47px;
    margin-top: 6%;
    margin-left: 10%;
  }

  .intro span {
    color: #2552EA;
  }

  .intro img {
    width: 35%;
    height: auto;
    border-radius: 15px;
    object-fit: contain;
  }

  .seta {
    z-index: 1;
    position: relative;
    bottom: 4rem;
    width: 100%;
    height: 400px;
    clip-path: polygon(50% 25%, 100% 0, 100% 25%, 100% 25%, 50% 50%, 50% 50%, 50% 50%, 0 25%, 0 0);
    background-color: #1f2d67;
  }

  .topics {
    background-color: #111C41;
    width: 100%;
    padding-bottom: 90px;
    display: flex; 
    flex-direction: column; 
    text-align: flex-start; 
  }

  .imagens {
    display: flex;
    justify-content: center;
  }

  .topics h1 {
    color: #F0F0FA;
    font-size: 3rem;
    margin: 35px auto;
    max-width: 800px;
    line-height: 1.2; 
    text-align: center;
    overflow: hidden; 
  }

  .topics h3 {
    color:#F0F0FA;
    font-size: 40px;
    margin-left: 10%;
    margin-top: 5%;
  }   

  .topics p {
    color: #F0F0FA;
    font-size: 1.3125rem;
    line-height: 1.5;
    margin: 0 10%;
    padding: 0;
    max-width: auto;
    overflow: hidden;
    text-align: justify;
  }

  .topics span {
    text-decoration: underline;
    text-decoration-color: #C898EC;
    text-decoration-thickness: 6px;
    border-radius: 15%;
    text-align: center;
    font-weight: bold;
    color: #C898EC;
  }

  .topics button{
    background-color: #A32CC4;
    color: white;
    width: 250px;
    height: auto;
    padding: 10px 20px;
    border: none; 
    border-radius: 25px;
    font-size: 16px;
    cursor: pointer; 
    font-family: Arial, sans-serif;
  }
  .imagem1{
    margin-top: 40px;
    margin-left: 70px;
    width: 450px;
    height: 600px;
  }

  .imagem2, .imagem3{
    margin-top: 40px;
    margin-left: 100px;
    width: 270px;
    height: 600px;
  }

  .triangulo {
    width: 100%;
    height: 100px;
    background-color: #080e22;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }

  .hub {
    padding-top: 13rem;
    clip-path: polygon(50% 22%, 100% 0, 100% 35%, 100% 100%, 100% 100%, 50% 100%, 0 100%, 0 100%, 0 0, 0 0);
    background-color: #080e22; 
    display: flex;
    justify-content: center;
    gap: 10%;
  }

  .hub h1 {
    color: #2552ea;
    font-size: 3rem;
    margin-bottom: 3rem;
    text-align: center;
  }

  .hub p {
    color: #F0F0FA;
    font-size: 1rem;
    margin-bottom: 3rem;
  }

  .sub button {
    text-align: center;
    align-items: center;
  }

  .sub {
    align-content: center;
    width: 35%;
  }

</style>
