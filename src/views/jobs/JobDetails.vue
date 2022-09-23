<template>
  <h1>Job Details</h1>
  <p>Job id is #{{ id }}</p>
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
      job: null,
      id: this.$route.params.id,
    }
  },
  methods: {
    getJob(id) {
    }
  },
  created() {
  }
}
</script>

<style scoped>

</style>