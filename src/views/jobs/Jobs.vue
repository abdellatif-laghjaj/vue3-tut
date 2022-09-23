<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length">
    <div class="columns-3">
      <div class="card w-90 mb-6 mr-2 bg-primary text-primary-content" v-for="job in jobs" :key="job.id">
        <div class="card-body">
          <h2 class="card-title">{{ job.title }}</h2>
          <p class="text-left">{{ job.description }}</p>
          <div class="card-actions justify-end">
            <button class="btn" @click="applyJob(job)">Apply</button>
          </div>
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
      jobs: [],
      url: 'http://localhost:3000/',
    }
  },
  methods: {
    applyJob(job) {
      const id = job.id;
      this.$router.push(`/jobs/${id}`);
    },
    getJobs() {
      fetch(this.url + 'jobs')
          .then(res => res.json())
          .then(data => {
            this.jobs = data;
          })
    },
  },
  mounted() {
    this.getJobs();
  }
}
</script>

<style scoped>

</style>