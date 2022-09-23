<template>
  <h1>Jobs</h1>
  <div class="columns-3">
    <div class="card w-90 mb-6 mr-2 bg-primary text-primary-content" v-for="job in jobs" :key="job.id">
      <div class="card-body">
        <h2 class="card-title">{{ job.title }}</h2>
        <p>{{ job.description }}</p>
        <div class="card-actions justify-end">
          <button class="btn">Apply</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      jobs: [
        {
          id: 1,
          title: "Web Developer",
          description: "We are looking for a web developer who is motivated to combine the art of design with the art of programming.",
        },
        {
          id: 2,
          title: "Web Designer",
          description: "We are looking for a web designer who is motivated to combine the art of design with the art of programming.",
        },
        {
          id: 3,
          title: "Web Developer",
          description: "We are looking for a web developer who is motivated to combine the art of design with the art of programming.",
        },
        {
          id: 4,
          title: "Web Designer",
          description: "We are looking for a web designer who is motivated to combine the art of design with the art of programming.",
        },
        {
          id: 5,
          title: "Web Developer",
          description: "We are looking for a web developer who is motivated to combine the art of design with the art of programming.",
        },
        {
          id: 6,
          title: "Web Designer",
          description: "We are looking for a web designer who is motivated to combine the art of design with the art of programming.",
        },
        {
          id: 7,
          title: "Web Developer",
          description: "We are looking for a web developer who is motivated to combine the art of design with the art of programming.",
        },
        {
          id: 8,
          title: "Web Designer",
          description: "We are looking for a web designer who is motivated to combine the art of design with the art of programming.",
        },
        {
          id: 9,
          title: "Web Developer",
          description: "We are looking for a web developer who is motivated to combine the art of design with the art of programming.",
        },
        {
          id: 10,
          title: "Web Designer",
          description: "We are looking for a web designer who is motivated to combine the art of design with the art of programming.",
        },
        {
          id: 11,
          title: "Web Developer",
          description: "We are looking for a web developer who is motivated to combine the art of design with the art of programming.",
        },
        {
          id: 12,
          title: "Web Designer",
          description: "We are looking for a web designer who is motivated to combine the art of design with the art of programming.",
        },
        {
          id: 13,
          title: "Web Developer",
          description: "We are looking for a web developer who is",
        }
      ],
    }
  },
}
</script>

<style scoped>

</style>