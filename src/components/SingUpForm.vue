<template>
  <form action="">
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <h1>Registration Form</h1>
        <div class="form-control">
          <input type="email" placeholder="email" class="input input-bordered" v-model="email" required/>
        </div>
        <div class="form-control">
          <input type="password" placeholder="password" class="input input-bordered" v-model="password" required/>
        </div>
        <div class="form-control">
          <select class="select select-bordered w-full max-w-xs" v-model="gender">
            <option disabled selected>Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="none">Prefer not to say</option>
          </select>
        </div>
        <div class="form-control">
          <input type="text" placeholder="skills (alt + ,)" class="input input-bordered"
                 v-model="tmp_skill" required @keyup.alt="addSkill"/>
        </div>
        <div class="form-control flex flex-row gap-2 flex-wrap">
          <div class="badge badge-accent flex items-center justify-between" v-for="skill in skills">
            <span>{{ skill }}</span>
            <button class="btn btn-ghost btn-sm" @click="removeSkill(skill)">x</button>
          </div>
        </div>
        <div class="form-control">
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">Remember me</span>
              <input type="checkbox" checked="checked" class="checkbox checkbox-primary" v-model="remember_me"/>
            </label>
          </div>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      email: '',
      password: '',
      gender: 'none',
      remember_me: false,
      tmp_skill: '',
      skills: ['html'],
    }
  },
  methods: {
    addSkill(e) {
      if (e.key === ',' && this.tmp_skill && this.tmp_skill !== ',') {
        if (this.skills.length >= 5) {
          alert('You can add only 5 skills')
          return;
        }
        if (!this.skills.includes(this.tmp_skill)) {
          this.skills.push(this.tmp_skill.trim());
        }
        this.tmp_skill = '';
      }
    },
    removeSkill(skill) {
      this.skills = this.skills.filter((s) => s !== skill);
    }
  }
}
</script>

<style scoped>
</style>