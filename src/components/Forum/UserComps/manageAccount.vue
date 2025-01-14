<template>
  <v-container class="d-flex justify-center align-center">
    <v-row>
      <v-col class="text-center">
        <h1>Gerenciar Conta - {{ username_ }}</h1>
        <p class='mb-8'>Aqui você pode gerenciar sua conta. Pode sair do usuário ou editar informações do mesmo.</p>

        <p class="mb-8">Responda esse formulário para atualizar os dados do usuários.</p>
        <v-form ref="form">
          <v-text-field
            v-model="username_"
            :rules="UsernameRules"
            label="Username"
            outlined
            class="margin-lefter background-legal mb-5"
          ></v-text-field>
          <v-text-field
            v-model="email_"
            :rules="EmailRules"
            label="E-Mail"
            outlined
            class="margin-lefter background-legal"
          ></v-text-field>
        </v-form>
        <v-row class="mt-5">
          <v-col cols="12" md="4">
            <v-card outlined class="text-center small-text">
              <v-card-title>Atualizar Informações</v-card-title>
              <p class="card-text">
                Edite seus dados, como username e e-mail, para manter as informações atualizadas no sistema.
              </p>
              <v-card-actions>
                <v-btn @click="updateUser" color="primary" class="mx-auto">Atualizar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card outlined class="text-center small-text">
              <v-card-title>Remover Conta</v-card-title>
              <p class="card-text">
                Apague sua conta permanentemente. Esta ação é irreversível, então tenha certeza antes de prosseguir.
              </p>
              <v-card-actions>
                <v-btn @click="removeUser" color="error" class="mx-auto">Remover</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card outlined class="text-center small-text">
              <v-card-title>Sair</v-card-title>
              <p class="card-text">
                Faça logout para encerrar sua sessão e proteger suas informações contra acessos não autorizados.
              </p>
              <v-card-actions>
                <v-btn @click="logoutUser" color="secondary" class="mx-auto">Sair</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'v-manage',
  data() {
    return {
      token: localStorage.getItem('id'),
      user: null,
      username_: '',
      email_: '',
      UsernameRules: [v => !!v || 'Username é obrigatório'],
      EmailRules: [v => !!v || 'E-Mail é obrigatório'],
      id: null
    };
  },
  methods: {
    removeUser() {
      axios
        .delete(`/User/RemoveUser/${this.id}`, {
          headers: {
            Authorization: `${this.token}`,
          },
        })
        .then(() => {
          alert('Usuário removido com sucesso.');
          this.logoutUser();
        })
        .catch(error => {
          alert(`Erro ao remover o usuário: ${error.response?.data?.message || error.message}`);
        });
    },
    updateUser() {
      if (!this.$refs.form.validate()) {
        alert('Por favor, corrija os erros do formulário.');
        return;
      }

      axios
        .put(
          `/User/UpdateUser/${this.id}`,
          {
            username: this.username_,
            email: this.email_,
          },
          {
            headers: {
              Authorization: `${this.token}`,
            },
          }
        )
        .then(() => {
          alert('Informações atualizadas com sucesso.');
        })
        .catch(error => {
          alert(`Erro ao atualizar informações: ${error.response?.data?.message || error.message}`);
        });
    },
    initializeUser() {
      if (!this.token) {
        this.$router.push('/regslog');
        return;
      }

      axios
        .post(
          `User/AcessUser`,
          {},
          {
            headers: {
              Authorization: `${this.token}`,
            },
          }
        )
        .then(response => {
          this.user = response.data;
          this.username_ = this.user.username;
          this.email_ = this.user.email;
          this.id = this.user.id
        })
        .catch(() => {
          this.$router.push('/regslog');
        });
    },
    logoutUser() {
      localStorage.removeItem('id');
      this.$router.push('/regslog');
    },
  },
  mounted() {
    this.initializeUser();
  },
};
</script>

<style scoped>
.margin-lefter {
  margin-left: 1rem;
}

h1, p {
  color: white;
}

.background-legal {
  background-color: white;
  border-radius: 5px;
}

.v-card {
  background-color: #f4f4f4;
  padding: 16px;
}

.v-card-title {
  font-weight: bold;
  font-size: 1.25rem;
}

.card-text {
  font-size: 0.95rem;
  color: #141414;
  margin: 10px 0;
  line-height: 1.4;
}

.small-text {
  font-size: 0.875rem;
  color: #2a2a2a;
}
</style>
