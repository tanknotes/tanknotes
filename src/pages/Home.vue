<template>
  <main :style="{ 'margin-top': '-115px' }">
    <section class="card">
      <h1 class="center">Tanknotes</h1>
      <p class="center margin-top">
        random stuff<br><br>
        Choose your spec and we'll hide the unimportant stuff for you.<br>
        You can change your spec at any time by clicking in the top right corner.<br>
        <a href="www.wowhead.com/spell=49998/death-strike">Test</a>
      </p>

      <spec-selection class="margin-top"/>
    </section>
    <section class="center card margin-top">
      <h1>Raids</h1>

      <div class="boss-links">
        <router-link 
          v-for="raid in raids"
          :key="raid.id"
          :to="{ name: 'Raid', params: { raidUrl: raid.url }}"
          class="boss-card"
          :style="{ 'background-image': `url(${raid.img})`}"
        >
          <div>
            {{ raid.name }}
          </div>
        </router-link>
      </div>
    </section>
  </main>
</template>

<script>
import RAIDS from '@/data/RAIDS'

export default {
  name: 'Home',
  data () {
    return {
      raids: RAIDS,
    }
  },
  created: function() {
    this.$vuex.commit('setBannerImage', 'https://mmo-sankar.de/wp-content/uploads/2017/11/World_of_Warcraft_Battle_for_Azeroth_Anduin_vs_Sylvanas_Key_Art_Logo.jpg')
    this.$vuex.commit('setBannerPos', 0)
  },
}
</script>