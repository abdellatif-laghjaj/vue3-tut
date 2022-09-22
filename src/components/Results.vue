<template>
  <div class="stat" style="width: 100px">
    <div class="stat-title">Your result</div>
    <div class="stat-value text-secondary">{{ result }} ms</div>
    <div class="stat-desc">{{ this.rank }}</div>
  </div>
</template>

<script>
export default {
  props: ['result'],
  name: "Block",
  data() {
    return {
      rank: '',
    }
  },
  mounted() {
    if (this.result < 200) {
      this.rank = '🔥 You are a ninja';
    } else if (this.result < 400) {
      this.rank = '👍 You are a pro';
    } else if (this.result < 600) {
      this.rank = '👌 You are a good';
    } else if (this.result < 800) {
      this.rank = '👎 You are a bad';
    } else {
      this.rank = '🤮 You are a noob';
    }
  }
}
</script>

<style scoped>

</style>