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
              <a href="index" class="active">Página Principal<br><br></a>
              <a href="linha">Linha do tempo<br><br></a>
              <a href="historia">História das sondas<br><br></a>
              <a href="forum">Fórum<br><br></a>
              <a href="artigo">Artigo<br><br></a>
              <a href="#">Perfil do usuário</a>
            </div>
            <div class="redes">
              <h2>Nossas redes Sociais</h2>
              <a href="https://instagram.com/beyond.glx" target="_blank">Instagram</a>
              <br>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpdtccrQmBqXgfxfDsVClphnZFVqJtVRDRlQpDvrhPqvfRzKSbxFStQbzbkkQmwTBNjrVb" target="_blank">E-mail</a>
              <br>
            </div>
          </div>
        </div>
    </nav>
    <div class="div-hero">
    <section class="hero">
      <h1>Beyond<span>Galaxy</span></h1>
      <p>Descubra um dos maiores<br> projetos humanos para a <br>exploração espacial</p>
      <button><a href="#intro">↓</a></button>
    </section>
    </div>
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
      <a class="singlediv" id="img-jupiter" href="#titulo">
        <img class='image' src="../../public/assets/Jupiter.jpg"/>
      </a>
      <a class="singlediv" id="img-voyager" href="#titulo">
        <img class="image" src="../../public/assets/voyager2.png"/>
      </a>
      <a class="singlediv" id="img-disco" href="#titulo">
        <img class="image" src="../../public/assets/DiscoOuro.jpg"/>
      </a>
    </div>

    <div class="topic-txt">
      <hr>
      <div id="text-container">
          <h3 id="titulo">Selecione uma imagem para ver seu tópico</h3>
          <div class="divtext1">
              <p id="texto"></p>
          </div>
      </div>
      <button><a href="historia">Veja mais</a></button>

      
      </div>
    </div>
  <div class="hub">
      <h1>Fórum</h1>
      <p> O fórum do nosso site é o espaço ideal para todos os entusiastas das sondas Voyager se reunirem e trocarem ideias sobre as incríveis missões dessas naves. Aqui, os membros podem discutir os avanços científicos, as descobertas mais recentes e as teorias sobre o que essas sondas ainda podem nos revelar. Além disso, o fórum oferece um ambiente para compartilhar curiosidades, análises técnicas e até mesmo histórias pessoais relacionadas a esse marco da exploração espacial. Seja você um cientista, um estudante ou apenas um curioso, aqui é possível interagir com outros apaixonados pelo tema. O espaço é aberto para todos os tipos de contribuições, desde debates profundos até dicas e recursos sobre as Voyagers. Não importa o nível de conhecimento, o importante é a troca de informações e a celebração da exploração do desconhecido.</p>
      <a href="forum"><button>Saiba mais</button></a>
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
      <a href="https://instagram.com/beyond.glx" target="_blank"><li>Instagram</li></a>
      <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpdtccrQmBqXgfxfDsVClphnZFVqJtVRDRlQpDvrhPqvfRzKSbxFStQbzbkkQmwTBNjrVb" target="_blank"><li>E-mail</li></a>
    </ol>
  </div>
  </footer>
</template>

<script>
window.onload=function(){
    function imgjupiter(){
    title.innerHTML = 'A Grande Conjunção'
    text.innerHTML = 'A grande conjunção é um fenômeno astronômico raro e fascinante, marcado pelo alinhamento dos planetas Júpiter e Saturno em suas órbitas ao redor do Sol. Esse evento ocorre aproximadamente a cada 20 anos, quando os dois maiores planetas do Sistema Solar se aproximam visualmente no céu noturno, chegando a parecer quase um único ponto luminoso para observadores da Terra. Essa proximidade aparente se dá devido à diferença de tempo que cada planeta leva para completar uma volta ao redor do Sol: Júpiter, cerca de 12 anos, e Saturno, aproximadamente 30 anos.'
  }

  function imgvoyager(){
    text.innerHTML = 'A Voyager 1, lançada em 1977, é a sonda espacial mais distante da Terra. Após explorar Júpiter e Saturno, revelou detalhes importantes, como a composição dos anéis de Saturno e a complexidade das luas Titã e Io. Em 2012, tornou-se o primeiro objeto humano a alcançar o espaço interestelar, atravessando a heliopausa. Carrega o Golden Record, um disco com sons, imagens e mensagens da Terra, destinado a possíveis civilizações extraterrestres. Continuando sua jornada, a Voyager 1 envia dados sobre o ambiente interestelar, contribuindo para a compreensão das fronteiras do Sistema Solar e da interação com o meio interestelar.'
    title.innerHTML = 'Além do Sistema Solar'
  }

  function imgdisco(){
    title.innerHTML = 'O Disco de Ouro'
    text.innerHTML = 'O Disco de Ouro é um artefato cultural e científico levado pelas sondas Voyager 1 e 2, lançadas em 1977. Projetado por Carl Sagan e sua equipe, o disco é uma cápsula do tempo destinada a comunicar a diversidade da vida e da cultura na Terra a possíveis civilizações extraterrestres. Ele contém 116 imagens, saudações em 55 idiomas, sons da natureza, como o canto de pássaros e ondas do mar, além de uma seleção musical que inclui obras de Bach, Beethoven e músicas tradicionais de diversas culturas. O disco, feito de cobre banhado a ouro, está protegido por uma capa que traz instruções para sua reprodução e a localização da Terra no cosmos. Essa mensagem interestelar é um testemunho do desejo humano de conexão e exploração, representando nossa curiosidade e esperança de transcender as fronteiras do Sistema Solar.'
  }

  const title = document.getElementById('titulo');
  const text = document.getElementById('texto');
    
  const img1 = document.getElementById('img-jupiter');  
  const img2 = document.getElementById('img-voyager');  
  const img3 = document.getElementById('img-disco');  
  
  img1.addEventListener("click", imgjupiter)
  img2.addEventListener("click", imgvoyager)
  img3.addEventListener("click", imgdisco)
}

export default {
  name: 'App',
  methods: {
  }
}
</script>

<style scoped>

@media (max-width: 768px) {
  header nav ul {
    display: none;
  }

  header nav .button {
    display: block;
  }

  .intro {
    flex-direction: column;
    text-align: center;
  }

  .topics .allimagesdiv {
    flex-direction: column;
    align-items: center;
  }

  .hub {
    flex-direction: column;
  }
}

.hidden {
  display: none;
}

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
  transition: width 0.4s, margin-left 1s, border 1s;
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
  width: 95%;
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
    text-align: center;
    justify-content: center;
    gap: 10%;
    margin-bottom: -2rem;
  }

  .hub h1 {
    color: #2552EA;
    font-size: 3rem;
    margin: 10% 0 3rem 0;
    text-align: center;
  }

  .hub p {
    color: #F0F0FA;
    font-size: 1.5rem;
    margin-bottom: 3rem;
    width: 80%;
    margin: 5% 0 0 10%;
  }

  .hub button{
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
