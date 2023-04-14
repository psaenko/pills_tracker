<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
            cols="12"
            lg="4"
            md="6"
        >
          <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
          ></v-text-field>
        </v-col>

        <v-col
            cols="12"
            lg="4"
            md="6"
        >
          <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Last name"
              required
          ></v-text-field>
        </v-col>

        <v-col
            cols="12"
            lg="4"
            md="6"
        >
          <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
  }),
  components: {
    HelloWorld
  },
}
</script>
