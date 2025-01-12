<template>
  <v-app>
    <v-container class="pa-4 updiv">
      <!-- Boas-vindas -->
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <h2>Bem-vindo ao Fórum!</h2>
          <p class="mb-10">Explore tópicos, participe de discussões e gerencie sua conta.</p>
        </v-col>
      </v-row>

      <!-- Cards com botões -->
      <v-row justify="center" align="center">
        <v-col cols="12" md="4">
          <v-card height="300px">
            <v-card-title>
              <h3>Ver Tópicos</h3>
            </v-card-title>
            <v-card-text>
              Aqui você pode ver os tópicos disponíveis no fórum e explorar as discussões. Além de claro, conseguir criar seus próprios tópicos para abrir novas discussões.
            </v-card-text>
            <v-card-actions>
              <v-btn block color="green-darken-3"
        size="x-large"
        variant="flat" @click="goToTopics">Acessar Tópicos</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card height="300px">
            <v-card-title>
              <h3>Gerenciar Conta</h3>
            </v-card-title>
            <v-card-text>
              Gerencie suas configurações de conta, como alterar informações ou configurar preferências. Aqui você vai ter também a permissão de remover usuário ou alterar o nome da conta (Username), por exemplo.
            </v-card-text>
            <v-card-actions>
              <v-btn block color="teal-darken-3"
        size="x-large"
        variant="flat" @click="manageAccount">Gerenciar Conta</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card height="300px">
            <v-card-title>
              <h3>Meus Tópicos</h3>
            </v-card-title>
            <v-card-text>
              Aqui você pode visualizar os tópicos que iniciou. Numa lista simples, somente com os tópicos que você mesmo criou, e ver o resultado das discussões iniciadas ou continuar a discussão você mesmo.
            </v-card-text>
            <v-card-actions>
              <v-btn block color="indigo-darken-3"
        size="x-large"
        variant="flat" @click="myTopics">Meus Tópicos</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import vSidebar from '../sidebar.vue';

export default {
  name: 'v-home',
  components: {
    vSidebar, 
  },
};
</script>

<style scoped>
    .updiv{
    margin-top: -15rem;
  }
</style>