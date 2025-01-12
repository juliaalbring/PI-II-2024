<template>
    <v-card title="Entrar / Registrar Conta" subtitle="Para entrar é necessário que a conta já tenha sido criada">
      <!-- Alternar entre Login e Register -->
      <v-tabs v-model="activeTab">
        <v-tab>Login</v-tab>
        <v-tab>Registrar</v-tab>
      </v-tabs>
    </v-card> <!-- v-if="activeTab === 1" -->
    <v-row>
        <v-col v-if="activeTab === 1"><v-sheet
            height="100%"
            class="mx-auto pa-6 rounded-lg elevation-2" 
            tile>
            <h1 class="text-h5 font-weight-bold mb-4">Criar Conta</h1>
            <v-form fast-fail @submit.prevent="createUser">
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

                <v-text-field
                v-model="password_"
                :rules="PasswordRules"
                label="Password"
                type="password"
                outlined
                dense
                ></v-text-field>

                <v-text-field
                v-model="passwordConf_"
                :rules="PasswordConfRules"
                label="Confirm Password"
                type="password"
                outlined
                dense
                ></v-text-field>
                
                <v-btn class="mt-4 mb-10" type="submit" block color="primary">Submit</v-btn>
            </v-form>
        </v-sheet>
    </v-col>

    <v-col v-if="activeTab === 0">
        <v-sheet
      height="100%"
      class="mx-auto pa-6 rounded-lg elevation-2" 
      tile
    >
      <h1 class="text-h5 font-weight-bold mb-4">Entrar na Conta</h1>
      <v-form fast-fail @submit.prevent="loginUser">
        <v-text-field
          v-model="Username"
          :rules="UsernameRules"
          label="Username"
          outlined
          dense
        ></v-text-field>

        <v-text-field
          v-model="Password"
          :rules="PasswordRules"
          label="Password"
          type="password"
          outlined
          dense
        ></v-text-field>
        
        <v-btn class="mt-4 mb-10" type="submit" block color="primary">Submit</v-btn>
      </v-form>
    </v-sheet>
    </v-col>
    </v-row>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    name: 'v-regis-login-page',
    data(){
      return{
        username_: '',
        password_: '',
        email_: '',
        passwordConf_: '',
        Username: '',
        Password: '',
        PasswordConfRules: {
          v 
        }
      }
    },

    methods: {
      createUser(){
          axios.post('/User/CreateUser', {
            "username_": this.username_,
            "password_": this.password_,
            "email_" : this.email_
          })
          .then(response =>{
            alert('Foi')
          })
          .catch(error =>{
            alert('Não foi')
          })
      },

      loginUser() {
        axios.post('/User/UserLogin', {
            "username_": this.Username, 
            "password_": this.Password 
        })
        .then(response => {
            alert(response.data.webtoken);
            localStorage.setItem('id', response.data.webtoken);
            alert(localStorage.getItem('id'));
        })
        .catch(error => {
            alert("Não foi");
        });
    } 
    },
    data() {
      return {
        activeTab: 0
      };
    }
  }
  </script>
  