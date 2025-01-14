<template>
  <v-container class="pa-4">
    <v-card class="mx-auto mb-16" max-width="600">
      <v-card-title class="headline">{{ topic_title }}</v-card-title>
      <v-card-text>
        <p>{{ topic_description }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="voltar">Voltar</v-btn>
      </v-card-actions>
    </v-card>

    <v-card class="pa-4" outlined>
      <v-card-title class="text-h5 text-center">Criar Post</v-card-title>

      <v-form @submit.prevent="submitForm" v-model="formValid">
        <v-text-field
          v-model="posttitle"
          :rules="postTitleRules"
          label="Título do Post"
          outlined
          dense
          color="primary"
        ></v-text-field>

        <v-textarea
          v-model="posttext"
          :rules="postTextRules"
          label="Corpo do Post"
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
        >
          Criar Post
        </v-btn>
      </v-form>
    </v-card>

    <v-list>
      <v-list-item
        v-for="post in posts"
        :key="post.id"
        class="mb-4"
        two-line
        tile
        elevation="1"
        hover
      >
        <v-list-item-content>
          <v-list-item-title class="font-weight-medium mb-1">
            {{ post.posttitle }}
          </v-list-item-title>
          <v-list-item-text class="text-body-2">{{ post.text }}</v-list-item-text>
        </v-list-item-content>
        <v-list-item-subtitle class="text-body-2 ml-2">Autor: {{ post.user.username }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'v-topic-page',
  data() {
    return {
      posttitle: '',
      topic_title: '',
      topic_description: '',
      posts: [],
      posttext: '',
      formValid: false,
      postTitleRules: [(v) => !!v || 'Título é obrigatório.'],
      postTextRules: [(v) => !!v || 'Texto do post é obrigatório.'],
      token: localStorage.getItem('id')
    };
  },
  methods: {
    loadTopicPage() {
      axios.get(`/Topic/GetTopic/${this.$route.params.id}`)
        .then(response => {
          this.topic_title = response.data.topicname;
          this.topic_description = response.data.description;
        })
        .catch(error => {
          console.error('Erro ao carregar a página do tópico:', error);
        });
    },
    voltar() {
      this.$router.go(-1);
    },
    topicPosts() {
      axios.get(`/Topic/GetTopic/Posts/${this.$route.params.id}`)
        .then(response => {
          this.posts = response.data.posts;
        })
        .catch(error => {
          console.error('Erro ao carregar os posts:', error);
        });
    },
    submitForm() {
      axios.post(`/Posts/CreatePost`,
        {
          "title_" : this.posttitle,
          "text_" : this.posttext,
          "topicid" : this.$route.params.id
        }, 
      {
        headers:{
          Authorization: this.token
        }
      })
      .then(response =>{
        alert(response)
      })
      .catch(err=>{
        console.error(err)
        alert(err)
      })
    },
  },
  mounted() {
    this.loadTopicPage();
    this.topicPosts();
  },
};
</script>

<style scoped>
.v-card {
  border-radius: 12px;
}
.v-card-title {
  font-size: 24px;
  font-weight: bold;
}
.v-card-text {
  font-size: 16px;
  color: #555;
}

@media (max-width: 768px) {
  .v-card {
    border-radius: 8px;
  }

  .v-card-title {
    font-size: 20px;
  }

  .v-card-text {
    font-size: 14px;
  }
}
</style>
