<template>
  <v-container class="py-5" fluid>
    <!-- Título e Descrição -->
    <v-row justify="center" class="mb-4">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="font-weight-bold mb-3">Tópicos do Fórum</h1>
        <p class="text-body-1">
          Bem-vindo ao fórum! Aqui você pode discutir ideias, compartilhar conhecimentos e participar de debates construtivos. Explore os tópicos abaixo ou crie o seu próprio. Lembre-se de manter o tema sobre espaço ou sobre ciência.
        </p>
      </v-col>
    </v-row>

    <!-- Botão para Criar Tópico -->
    <v-row justify="center" class="mt-4">
      <v-col cols="12" md="8" class="text-center">
        <v-btn
          large
          color="green"
          class="text-white rounded-0"
          to="/createTopic"
          elevation="2"
        >
          Criar Novo Tópico
        </v-btn>
      </v-col>
    </v-row>

    <!-- Lista de Tópicos -->
    <v-row justify="center" class="mt-4">
      <v-col cols="12" md="8">
        <v-list>
          <v-list-item
            v-for="topic in topics"
            :key="topic.id"
            class="mb-4"
            two-line
            tile
            elevation="1"
            hover
            @click="viewTopic(topic.id)"
          >
            <v-list-item-content>
              <v-list-item-title class="font-weight-medium mb-1">{{ topic.topicname }}</v-list-item-title>
              <v-list-item-subtitle class="text-body-2">{{ topic.description }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn small color="primary" class="rounded-0">Ver</v-btn>
              <v-list-item-subtitle class="text-body-2 ml-2">Autor: {{ topic.user.username }}</v-list-item-subtitle>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "v-topics",
  data() {
    return {
      topics: [], // Inicializa com um array vazio
      topic: [],
      username: ''
    };
  },
  methods: {
    viewTopic(topicId) {
      this.$router.push(`/acessTopic/${topicId}`);
    },
    getAllTopics() {
      axios
        .get("Topic/AllTopics")
        .then((response) => {
          this.topics = response.data;
        })
        .catch((error) => {
          console.error("Erro ao carregar tópicos:", error);
        });
    },
  },
  mounted() {
    this.getAllTopics(); // Chama a função ao montar o componente

  },
};
</script>

<style scoped>
h1, p, .v-list-item-title, .v-list-item-subtitle {
  color: #333 !important;
}

.v-btn {
  text-transform: none;
}

.v-list-item {
  background-color: #fafafa;
  border-radius: 8px;
}

.v-list-item:hover {
  background-color: #f5f5f5;
}

.v-btn:hover {
  background-color: #4caf50;
  color: white;
}

.custom-margin-left {
  margin-left: 16px;
}

.text-primary {
  color: #1976D2 !important;
}

.text-body-1 {
  color: #555;
}

.text-body-2 {
  color: #777;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem; 
  }

  p {
    font-size: 1rem; 
  }

  .v-list-item-title, .v-list-item-subtitle {
    font-size: 0.9rem;
  }

  .v-btn {
    font-size: 0.875rem;
  }

  .v-list-item {
    margin: 8px 0;
  }

  .v-btn {
    width: 100%;
    padding: 12px;
  }

  .custom-margin-left {
    margin-left: 8px;
  }

  .text-primary, .text-body-1, .text-body-2 {
    font-size: 0.875rem;
  }
}
</style>
