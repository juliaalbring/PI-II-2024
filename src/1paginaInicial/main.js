import { createApp } from 'vue'
import paginaInicial from './App.vue'

createApp(paginaInicial).mount('#app')

document.querySelectorAll('.singlediv').forEach(div => {
    div.addEventListener('click', function () {
        document.querySelectorAll('.singlediv').forEach(d => d.classList.remove('clicked')); // Pra não parecer ter dois selecionsdas

        document.querySelectorAll('.image').forEach(img => img.classList.remove('imageclicked'));

        this.classList.add('clicked');

        const img = this.querySelector('.image');
        img.classList.add('imageclicked');

        document.getElementById('texto').textContent = this.getAttribute('data-text');
    });
});