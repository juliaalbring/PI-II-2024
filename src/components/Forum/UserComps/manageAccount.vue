<template>
  <v-container>
    <!-- Linha para alinhar o Formulário e o Card -->
    <v-row class="mb-10">
      <!-- Coluna para o Formulário -->
      <v-col cols="6">
        <v-sheet
      height="100%"
      class="mx-auto pa-6 rounded-lg elevation-2" 
      tile
    >
      <h1 class="text-h5 font-weight-bold mb-4">Novos Dados</h1>
      <v-form fast-fail @submit.prevent="updateUser">
        <v-text-field
          v-model="username_"
          :rules="UsernameRules"
          label="Username"
          outlined
          dense
        ></v-text-field>

        <v-text-field
          v-model="email_"
          :rules="EmailRules"
          label="Email"
          outlined
          dense
        ></v-text-field>
        
        <v-btn class="mt-4 mb-10" type="submit" block color="primary">Submit</v-btn>
      </v-form>
    </v-sheet>
      </v-col>

      <!-- Coluna para o Segundo Card -->
      <v-col cols="6">
        <v-card
          title="Meus Tópicos"
          class="mb-4"
          height="65%"
        >
          <template v-slot:subtitle>
              <span class="margin-lefter">{{ username }}</span>
          </template>
          <v-card-text>
            Neste espaço, você pode ajustar as informações da sua conta de forma rápida e prática. Explore todos os tópicos que você criou, verifique detalhes importantes ou até mesmo corrija algo que não ficou como desejado. Nosso objetivo é garantir que você tenha total controle sobre sua experiência e que gerenciar seus conteúdos seja algo simples e intuitivo. Sinta-se à vontade para personalizar e manter tudo do seu jeito!
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="handleAction">Editar/Ver Tópicos</v-btn>
          </v-card-actions>
        </v-card>
        <v-card
          class="mx-auto mb-16 elevation-3"
          prepend-icon="mdi-account"
          width="100%"
          height="35%"
        >
            <template v-slot:title>
              <span class="margin-lefter font-weight-black">Manage Account</span>
            </template>

            <template v-slot:subtitle>
              <span class="margin-lefter">{{ username }}</span>
            </template>

            <v-card-text class="bg-surface-light pt-4">
              Aqui você pode ajustar as informações da sua conta, explorar seus tópicos e gerenciá-los com facilidade — apague ou atualize-os do seu jeito.
            </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-btn color="red" block @click="removeUser">Remover Usuário</v-btn>
</template>


<script>
    import axios from 'axios';
    export default{
        name: 'v-manage',
        data() {
            return {
            token: localStorage.getItem('id'),
            user: null,
            username: '',
            username_: '',  
            email_: '',  
            UsernameRules: [
                v => !!v || 'Username is required', 
            ],
            EmailRules: [
                v => !!v || 'E-Mail is required', 
            ],
            }
        },
        methods: {
                removeUser() {
                  axios.delete(`/User/RemoveUser/${this.$route.params.id}`, {
                    headers: {
                      Authorization: `${this.token}`
                    }
                  })
                  .then(response => {
                  })
                  .catch(error => {
                    alert('Error removing user:', error);
                  });
                },
                updateUser(){
                  const request = axios.put(`/User/UpdateUser/${this.$route.params.id}`, {
                  username_: this.username_,
                  email_: this.email_
                  }, {
                    headers: {
                      Authorization: `${this.token}`
                  }
                  })
                  .then(response => {
                  })
                  .catch(error => {
                    alert('Error editing user:', error)
                  })
                },

                initializeUser(){
                  const token = localStorage.getItem('id');
                  const userId = this.$route.params.id;
                  if (!token) {
                    alert('Token de autenticação não encontrado.');
                    return;
                  }

                  axios.post(`User/AcessUser/${userId}`, {"id": userId},{
                    headers: {
                      Authorization: `${token}`, 
                    }
                 })
                 .then(response => {
                    this.user = response.data; 
                    this.username = this.user.username; 
                      })
                    .catch(error => {
                      alert('Erro ao obter os dados do usuário:', error);
                    });
                    },
                },
                mounted() {
                  this.initializeUser();
               
              }
        }
    
</script>

<style>
    .margin-lefter{
        margin-left: 1rem;
    }
</style>