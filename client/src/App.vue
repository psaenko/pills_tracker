<link rel="stylesheet" href="assets/fonts/stylesheet.css">
<template>
  <router-view/>

    <v-layout class="overflow-visible" style="height: 56px;">
        <v-bottom-navigation
                v-model="value"
                color="primary"
                horizontal
        >
            <v-btn>
                <v-icon>mdi-history</v-icon>

                Recents
            </v-btn>

            <v-btn>
                <v-icon>mdi-heart</v-icon>

                Favorites
            </v-btn>

            <v-btn>
                <v-icon>mdi-map-marker</v-icon>

                Nearby
            </v-btn>
        </v-bottom-navigation>
    </v-layout>
</template>

<style lang="scss">
@import '@/assets/fonts/stylesheet.css';

* {
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  font-family: SF Pro Display, sans-serif;
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  outline: none;
  padding: 0;
  color: #1f2835;
}

#app {
  height: 100vh;
}
</style>
