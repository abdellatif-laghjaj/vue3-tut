<template>
  <h1>Job Details</h1>
  <div v-if="job">
    <div class="card w-96 glass mx-auto">
      <div class="card-body">
        <h2 class="card-title">{{ job.title }}</h2>
        <p class="text-left">{{ job.description }}</p>
        <div class="card-actions justify-end mt-3 mb-0">
          <button class="btn btn-primary">Apply</button>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <h3>Loading...</h3>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      job: null,
      id: this.$route.params.id,
      url: 'http://localhost:3000/',
    }
  },
  methods: {
    getJob(id) {
      fetch(`${this.url}jobs/${id}`)
          .then(res => res.json())
          .then(data => {
            console.log(data);
            this.job = data;
          })
    }
  },
  mounted() {
    this.getJob(this.id);
  }
}
</script>

<style scoped>

</style>