<template>
  <header>
    <nav>
      <a href="#" class="logo">
        <img :src="require('@/assets/nave-logo.png')" alt="Logo do site" />
      </a>
      <div>
        <v-btn to="/home" class="emptybutton">Página Principal</v-btn>
        <v-btn to="/linha" class="emptybutton">Linha do Tempo</v-btn>
        <v-btn to="/historia" class="emptybutton">História</v-btn>
        <v-btn to="/forum" class="emptybutton">Fórum</v-btn>
        <v-btn to="/artigo" class="emptybutton">Artigo</v-btn>
      </div>
      <v-btn icon to="/regslog">
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <a class="button" href="#popup1"><img :src="require('@/assets/Menu.png')"></a>

        <div id="popup1" class="overlay">
          <div class="popup">
            <h2>Menu</h2>
            <a class="close" href="#">×</a>
            <div class="content">
              <v-btn to="/home" class="emptybutton">Página Principal</v-btn>
              <v-btn to="/linha" class="emptybutton">Linha do Tempo</v-btn>
              <v-btn to="/historia" class="emptybutton">História</v-btn>
              <v-btn to="/forum" class="emptybutton">Fórum</v-btn>
              <v-btn to="/artigo" class="emptybutton">Artigo</v-btn>
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
    <section class="hero">
      <h1>Beyond<span>Galaxy</span></h1>
      <p>Descubra um dos maiores<br> projetos humanos para a <br>exploração espacial</p>
      <button><a href="#intro">↓</a></button>
    </section>
  </header>
  <div class="seta"></div>
</template>


<script>
export default {
  name: 'v-header'
}
</script>

<style scoped>
.emptybutton {
    background-color: rgba(0, 0, 0, 0);
    color: white;
}

* {
    margin: 0;
    text-decoration: none;
    font-family: 'Onest', sans-serif;
}

html {
    background-color: #111C41;
    scroll-behavior: smooth;
}

header {
    height: 110vh;
    background: url('../assets/fundo-header.png') no-repeat center;
    background-size: cover;
}

.seta {
    z-index: 1;
    position: relative;
    bottom: 6.5rem;
    width: 100%;
    height: 400px;
    clip-path: polygon(50% 25%, 100% 0, 100% 25%, 100% 25%, 50% 50%, 50% 50%, 50% 50%, 0 25%, 0 0);
    background-color: #1f2d67;
}

.logo img,
.profile img {
    height: 40px;
}

.menu {
    display: none;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
}

ul li {
    margin: 0 15px;
}

ul li a {
    margin: 0;
    text-decoration: none;
    color: rgb(255, 255, 255);
    font-family: "Onest", sans-serif;
}

.active {
    border-bottom: 3px solid #C898EC;
    color: #C898EC;
}

nav ul li a:hover {
    color: #C898EC;
}

.hero {
    color: white;
    text-align: center;
    bottom: 10vh;
}

.hero h1 {
    color: #F0F0FA;
    font-size: 80px;
    margin-top: 10%;
    margin-right: 30%;
    font-family: "Onest", sans-serif;
    font-weight: 300;
}

.hero button {
    background-color: transparent;
    color: white;
    padding: 10px 20px;
    border: 2px solid white;
    border-radius: 25px;
    font-size: 36px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7.25rem;
    height: auto;
    margin-left: 46%;
    margin-top: 5%;
}

.hero a {
    color: white;
    height: auto;
}

.hero span {
    font-weight: 700;
    color: #FFFFFF;
    border-bottom: 4px solid #d8b4ff;
}

.hero p {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    color: #fff;
    font-family: "Onest", sans-serif;
    margin-right: 30%;
    line-height: 1.5;
    font-weight: 300;
}

.button {
    font-size: 1em;
    padding: 10px;
    color: #fff;
    border-radius: 20px / 50px;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease-out;
    display: none;
}

.button:hover {
    background: blue;
}

.overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    transition: opacity 500ms;
    visibility: hidden;
    opacity: 0;
}

.overlay:target {
    visibility: visible;
    opacity: 1;
}

.popup {
    margin: 70px auto;
    padding: 20px;
    background: #555;
    border-radius: 5px;
    width: 70%;
    position: relative;
    transition: all 5s ease-in-out;
}

.popup h2 {
    margin-top: 0;
    color: #fff;
    font-family: Tahoma, Arial, sans-serif;
}

.popup a {
    color: #fff;
}

.popup .close {
    position: absolute;
    top: 20px;
    right: 30px;
    transition: all 200ms;
    font-size: 30px;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
}

.popup .close:hover {
    color: orange;
}

.popup .content {
    max-height: 30%;
    overflow: auto;
    margin-top: 10%;
}

.popup .redes {
    margin-top: 10%;
}


@media (max-width: 768px) {
    header {
        height: 70vh;
    }

    .hero h1 {
        font-size: 50px;
    }

    .hero p {
        font-size: 1.2rem;
    }

    .hero button {
        font-size: 20px;
        padding: 8px 16px;
        width: auto;
    }
}

@media (max-width: 480px) {
    header {
        height: 60vh;
    }

    .hero h1 {
        font-size: 40px;
    }

    .hero p {
        font-size: 1rem;
    }

    .hero button {
        font-size: 18px;
        width: auto;
        padding: 8px 16px;
    }

    nav {
        flex-direction: column;
    }

    ul {
        flex-direction: column;
        gap: 10px;
    }

    ul li {
        margin: 5px 0;
    }
}

</style>

