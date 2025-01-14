<template>
  <v-container class="py-5" fluid>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card class="pa-4" outlined>
          <v-card-title class="text-h5 text-center">Criar Tópico</v-card-title>

          <v-form @submit.prevent="submitForm" v-model="formValid">
            <v-text-field
              v-model="TopicTitle"
              :rules="TopicTitleRules"
              label="Título do Tópico"
              outlined
              dense
              color="primary"
            ></v-text-field>

            <v-textarea
              v-model="TopicDescription"
              :rules="TopicDescriptionRules"
              label="Descrição / Pergunta do Tópico"
              rows="4"
              outlined
              dense
              color="primary"
            ></v-textarea>

            <v-btn 
              class="mt-4" 
              type="submit" 
              block
              :disabled="!formValid"
              color="success"
              >Criar Tópico</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  name: 'v-create-topic',
  data() {
    return {
      token: localStorage.getItem('id'),
      TopicTitle: '',
      TopicDescription: '',
      formValid: false,
      TopicTitleRules: [
        v => !!v || 'O título do tópico é obrigatório',
        v => v.length <= 30 || 'O título do tópico é muito longo',
        v => v.length >= 5 || 'O título do tópico é muito curto',
      ],
      TopicDescriptionRules: [
        v => v.length <= 100 || 'A descrição do tópico é muito longa',
      ],
    };
  },
  methods: {
  submitForm() {
    alert(this.token)
    axios.post(`/Topic/CreateTopic`, 
    {
        title_: this.TopicTitle,
        text_: this.TopicDescription
        }, {
          headers: {
            Authorization: this.token
        }
      })
      }
  }
}
</script>

<style scoped>
.v-btn {
  font-weight: bold;
}
.v-card {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .v-btn {
    font-weight: normal; /* Ajusta a espessura da fonte para telas pequenas */
  }

  .v-card {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Reduz a sombra para telas pequenas */
  }
}
</style>
