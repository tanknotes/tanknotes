<template>
  <main>
    <section class="card">
      <h1 class="center">{{ raid.name }}</h1>
    </section>
    <section>
      <div class="boss-links">
        <router-link 
          v-for="boss in bosses"
          :key="boss.id"
          :to="{ name: 'Boss', params: { raidUrl: raidUrl, bossUrl: boss.url }}"
          class="boss-card"
          :style="{ 'background-image': `url(${boss.img})`}"
        >
          <div>
            {{ boss.name }}
          </div>
        </router-link>
      </div>
    </section>
  </main>
</template>

<script>
import RAIDS from '@/data/RAIDS'
import SPECS from '@/data/SPECS'

export default {
  name: 'raid',
  data () {
    return {
      raid: RAIDS.find(e => e.url === this.$route.params.raidUrl),
      bosses: RAIDS.find(e => e.url === this.$route.params.raidUrl).bosses,
    }
  },
  created: function() {
    this.$vuex.commit('setBannerImage', this.raid.img)
    this.$vuex.commit('setBannerPos', 50)
  },
  computed: {
    raidUrl: function() {
      return this.$route.params.raidUrl
    }
  }
}
</script>