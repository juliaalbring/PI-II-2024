<template>
  <header>
    <nav>
      <a href="#" class="logo">
        <img src="../../public/assets/nave-logo.png" alt="Logo do site" />
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

  <div class="intro" id="intro">
    <div class="txt">
      <h3>BEM-VINDO AO <span><br> NOSSO SITE</span></h3>
      <p>Aqui, você encontrará tudo sobre as missões Voyager 1 e Voyager 2, lançadas na década de 1970 com o objetivo de explorar os confins do nosso sistema solar e além. 
        Essas sondas pioneiras, que continuam suas jornadas por bilhões de quilômetros, são responsáveis por algumas das descobertas mais incríveis da ciência espacial. 
        Ao longo das décadas, elas forneceram dados valiosos sobre os planetas, luas e o ambiente espacial, revolucionando nosso entendimento do universo. 
        Descubra também o legado do disco de ouro que as Voyager carregam consigo, um "mensageiro" da Terra com sons, imagens e informações sobre nossa civilização, destinado a possíveis formas de vida extraterrestre. 
      </p>
    </div>
    <img src="../../public/assets/Voyager1.jpg">
  </div>

  <div class="topics">
    <h1>VOYAGERS: MISSÃO AO<span><br> DESCONHECIDO</span></h1>
    <p>As sondas Voyager têm a missão de explorar os confins do sistema solar e além, coletando dados sobre os planetas e suas luas. 
      Elas também buscam entender o ambiente interplanetário e interstelar. 
      Com suas mensagens para possíveis civilizações, representam o esforço humano de comunicação cósmica. 
      Suas viagens são um marco na busca pelo desconhecido e pelo entendimento do universo.
    </p>

    <div class="allimagesdiv">
      <div class="singlediv">
        <img class='image' src="../../public/assets/Jupiter.jpg"/>
      </div>
      <div class="singlediv">
        <img class="image" src="../../public/assets/voyager2.png"/>
      </div>
      <div class="singlediv">
        <img class="image" src="../../public/assets/DiscoOuro.jpg"/>
      </div>
    </div>

    <div class="topic-txt">
      <hr>
      <div>
      <div id="text-container" class="hidden">
          <h3 id="titulo">A Grande Conjunção</h3>
          <div class="divtext1">
              <p id="texto"></p>
          </div>
      </div>

      <div class="buttons-container">
          <div class="singlediv" onclick="changeContent(1)">Botão 1</div>
          <div class="singlediv" onclick="changeContent(2)">Botão 2</div>
          <div class="singlediv" onclick="changeContent(3)">Botão 3</div>
      </div>
      </div>

      
      </div>
      <button><a href="historia">Veja mais</a></button>
    </div>
  <div class="hub">
    <div class="sub">
      <h1>Nosso jogo</h1>
      <p> O nosso jogo é uma forma interativa e lúdica de representar o trajeto das Sondas Voyagers ao longo do vasto espaço, destacando as descobertas e marcos importantes dessa jornada científica incrível. Ao longo do jogo, os jogadores podem explorar o percurso das sondas, aprender sobre os planetas e os fenômenos espaciais que elas encontraram, e vivenciar de perto as aventuras dessas missões históricas. Ele torna o aprendizado mais dinâmico, permitindo que os usuários sintam-se parte dessa exploração interplanetária, tornando o conteúdo não apenas informativo, mas também envolvente. A cada etapa, o jogador adquire conhecimento sobre o universo e a importância das sondas na expansão da nossa compreensão do cosmos. Ao jogar, você poderá se aprofundar nos detalhes da missão, ao mesmo tempo em que se diverte e descobre novos aspectos dessa grande jornada!
</p>
      <a href="jogo"><button>Saiba mais</button></a>
    </div>
    <div class="sub">
      <h1>Galactic Hub</h1>
      <p> O fórum do nosso site é o espaço ideal para todos os entusiastas das sondas Voyager se reunirem e trocarem ideias sobre as incríveis missões dessas naves. Aqui, os membros podem discutir os avanços científicos, as descobertas mais recentes e as teorias sobre o que essas sondas ainda podem nos revelar. Além disso, o fórum oferece um ambiente para compartilhar curiosidades, análises técnicas e até mesmo histórias pessoais relacionadas a esse marco da exploração espacial. Seja você um cientista, um estudante ou apenas um curioso, aqui é possível interagir com outros apaixonados pelo tema. O espaço é aberto para todos os tipos de contribuições, desde debates profundos até dicas e recursos sobre as Voyagers. Não importa o nível de conhecimento, o importante é a troca de informações e a celebração da exploração do desconhecido.</p>
      <a href="forum"><button>Saiba mais</button></a>
    </div>
  </div>

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
  name: 'App',
  components: {}
};
</script>

<style scoped>
.divtext1{
  width: 170rem;
  overflow: visible;
}

.image{
    width: 30rem;
    transition: 1s;
    transform: scale(1.3, 1.3);
}

.imageclicked {
    transform: scale(1, 1);
    transition: 1s; 
}


.allimagesdiv{
    display: flex;
    flex-direction: row;
}

.singlediv {
    height: 27rem;
    width: 23rem;
    margin-left: 3rem;
    overflow: hidden;
    transition: width 0.4s, margin-left 1s, border 1s; /* Transição para largura e margem */
}

.singlediv:hover {
    width: 23rem;
    border: 0.1rem solid rgb(255, 255, 255);
}

.singlediv.active {
    margin-left: 2rem;
    width: 30rem;
    border: 0.3rem solid rgb(255, 255, 255);
}

.hidden {
    display: none;
}

  .intro {
    margin-top: -32rem;
    padding-top: 13rem;
    padding-bottom: 90px;
    clip-path: polygon(50% 22%, 100% 0, 100% 35%, 100% 100%, 100% 100%, 50% 100%, 0 100%, 0 0, 0 0);
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
    flex-direction:row;
  }

  .topics .topic-txt{
    display: flex;
    margin: 5%
  }

  .topics .topic-txt div{
    width: 65%;
  }

  .topics h1 {
    color: #F0F0FA;
    font-size: 3rem;
    margin: 35px auto;
    max-width: 800px;
    line-height: 1.2; 
    text-align: center;
    overflow: hidden; 
    font-weight: normal;
  }

  .topics h3 {
    color:#F0F0FA;
    font-size: 40px;
    margin-left: 6%;
    margin-top: 5%;
  }   

  .topics p {
    color: #F0F0FA;
    font-size: 1.3125rem;
    line-height: 1.5;
    margin: 0 6%;
    padding: 0;
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
    background-color: #2552EA;
    width: 250px;
    height: 75px;
    padding: 10px 20px;
    border: none; 
    border-radius: 50px;
    font-size: 22px;
    cursor: pointer; 
    font-family: Arial, sans-serif;
    margin: 10%;
  }

  .topics a{
    color: white;
  }

  .topics hr{
    width: 0.5625rem;
    background-color: #870EE1;
    margin: 0.5rem 0.2rem 0 0;
    height: 22.625rem;
    border: none;
    border-radius: 10px;

  }

.singlediv{
  width: 28%;
  height:40rem;
  overflow:hidden;
}

.imagem3 {
  margin-left: 7rem;
  width: 100%;
  height: 100%;
  transition: 0.1s
}

.imagem3:hover {
  transform: scale(1.3, 1.2);
}
.imagem2 {
  margin-left: 7rem;
  width: 80%;
  height: 100%;
  transition: 0.1s
}

.imagem2:hover {
  transform: scale(1.2, 1.2);
}
.imagem1 {
  margin-left: 7rem;
  width: 65%;
  height: 100%;
  transition: 0.1s
}

.imagem1:hover {
  transform: scale(1.1, 1.2);
}

.singlediv:hover{
  width: 30%;
  height:40rem;
  overflow:hidden;
  transition: 0.2s
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
    text-align: center;
    justify-content: center;
    gap: 10%;
    margin-bottom: -2rem;
  }

  .hub h1 {
    color: #2552EA;
    font-size: 3rem;
    margin-bottom: 3rem;
    text-align: center;
  }

  .hub p {
    color: #F0F0FA;
    font-size: 1rem;
    margin-bottom: 3rem;
  }

  .sub button{
    background-color: #2552EA;
    color: white;
    width: 250px;
    height: 75px;
    padding: 10px 20px;
    border: none; 
    border-radius: 50px;
    font-size: 22px;
    cursor: pointer; 
    font-family: Arial, sans-serif;
    margin: 8%;
  }

  .sub {
    width: 35%;
    margin-bottom: 7%;
  }

</style>
