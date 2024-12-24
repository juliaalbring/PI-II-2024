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
      <button><a href="#intro">↓</a></button>
    </section>
  </header>

  <div class="seta" id="intro"></div>

  <h1 class="intro">Linha do tempo</h1>

<center>
<section class="linha-esq">
<div class="texto">
  <h1 class="titulo">Lançamento</h1>
  <p>Dai um texto explicatório falando um pouco sobre quando elas foram lançadas e pá, uns negócio bem básico mesmo, mas que dê pelo menos 1 parágrafo de 4 linhas pq precisa ficar bonito aqui, e assim dá um tamanho bom.</p>
</div>
  <hr>
  <div class="esq"></div>
  <hr>
  <h2>1977</h2>
  <img src="../../public/assets/linhasonda.png">
</section>

<section class="linha-dir">
  <img src="../../public/assets/jupiter.png">
  <h2>1979</h2>
  <hr>
  <div class="dir"></div>
  <hr>
  <div class="texto">
  <h1 class="titulo">Passando por Júpiter</h1>
  <p>Dai um texto explicatório falando um pouco sobre quando elas foram lançadas e pá, uns negócio bem básico mesmo, mas que dê pelo menos 1 parágrafo de 4 linhas pq precisa ficar bonito aqui, e assim dá um tamanho bom.</p>
</div>  

</section>

</center>
<center class="center2">
<section class="linha-esq">
<div class="texto">
  <h1 class="titulo">Passando por Saturno</h1>
  <p>Dai um texto explicatório falando um pouco sobre quando elas foram lançadas e pá, uns negócio bem básico mesmo, mas que dê pelo menos 1 parágrafo de 4 linhas pq precisa ficar bonito aqui, e assim dá um tamanho bom.</p>
</div>
  <hr>
  <div class="esq"></div>
  <hr>
  <h2>1980</h2>
  <img src="../../public/assets/saturno.png">
</section>

<section class="linha-dir">
  <img src="../../public/assets/urano.png">
  <h2>1986</h2>
  <hr>
  <div class="dir"></div>
  <hr>
  <div class="texto">
  <h1 class="titulo">Passando por Urano</h1>
  <p>Dai um texto explicatório falando um pouco sobre quando elas foram lançadas e pá, uns negócio bem básico mesmo, mas que dê pelo menos 1 parágrafo de 4 linhas pq precisa ficar bonito aqui, e assim dá um tamanho bom.</p>
</div>  

</section>

</center>

<center class="center2">
<section class="linha-esq">
<div class="texto">
  <h1 class="titulo">Passando por Netuno</h1>
  <p>Dai um texto explicatório falando um pouco sobre quando elas foram lançadas e pá, uns negócio bem básico mesmo, mas que dê pelo menos 1 parágrafo de 4 linhas pq precisa ficar bonito aqui, e assim dá um tamanho bom.</p>
</div>
  <hr>
  <div class="cima"></div>
  <hr>
  <h2>1989</h2>
  <img src="../../public/assets/netuno.png">
</section>

<h2 class="titulo-centro">1990</h2>

<article>
<div class="cima"></div>
</article>

</center>
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
.intro{
  margin-top: -10rem;
  color: white;
  text-align: center;
  font-size: 3.125rem;
}

.center2{
  margin: -30.65rem 0 0 -2.5rem;
}

.linha-esq{
  margin-left: -5%;
}

.linha-dir{
  margin-left: 17%;
}

.esq{
  margin: 10.5rem 0 0 -19rem;
  border: none;
  width:28rem;
  height:20rem;
  position:relative;
}

.esq:after{
  content:"";
  position:absolute;
  border-top:0.5rem solid white;
  width: 30rem;
  transform: rotate(70deg);
  transform-origin: 0% 0%;
}

.dir{
  margin: 36.25rem -11.2rem 0 -30%;
  border: none;
  width:28rem;
  height:20rem;
  position:relative;
}

.dir:after{
  content:"";
  position:absolute;
  border-top:0.5rem solid white;
  width: 30rem;
  transform: rotate(-70deg);
  transform-origin: 0% 0%;
}

.cima{
  margin: 10.5rem 0 0 -20.25rem;
  border: none;
  width:28rem;
  height:20rem;
  position:relative;
}

.cima:after{
  content:"";
  position:absolute;
  border-top:0.5rem solid white;
  width: 30rem;
  transform: rotate(90deg);
  transform-origin: 0% 0%;
}

article .cima{
  margin: 2rem 0 0 5rem;
  height: 30rem;
}

center h1{
  margin: 15% 0 0 0;
  color: white;
  text-align: center;
  font-size: 2.8rem;
}

center p{
  color: white;
  font-size: 1.2rem;
}

.linha-esq .texto{
  width: 40%;
  margin-right: 15%;
}

.linha-dir .texto{
  width: 30%;
}

center section{
  justify-content: space-evenly;
  display: flex;
}

center h2{
  margin: 10% 0 0 -1%;
  color: #C898EC;
  text-align: center;
  font-size: 2.8rem;
}

center img{
  margin-top: 10%;
  height: 12.125rem;
}

.linha-dir img{
  margin: 5% 0 0 0;
}

.linha-esq hr{
  height: 0.25rem;
  background-color: white;
  margin: 11% 0 0 -20%;
  width: 4rem;
  border: none;
  border-radius: 10px;
}

.linha-dir hr{ 
  height: 0.25rem;
  background-color: white;
  margin: 10% 0% 0 10%;
  width: 4rem;
  border: none;
  border-radius: 10px;
}

.titulo-centro{
  margin: 12% 0 0 5%;
}
</style>
