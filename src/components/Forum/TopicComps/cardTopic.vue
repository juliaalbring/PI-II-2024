<template>
    <v-card class="ma-3" outlined>
      <v-card-title>{{ topic.topicname }}</v-card-title>
      <v-card-text>
        <p>{{ topic.description }}</p>
        <small>Created at: {{ new Date(topic.createdAt).toLocaleString() }}</small>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    name: "V-TopicCard",
    props: {
      topic: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  