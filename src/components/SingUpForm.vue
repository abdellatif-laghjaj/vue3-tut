<template>
  <form action="">
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <h1>Registration Form</h1>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" class="input input-bordered" v-model="email" required/>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" class="input input-bordered" v-model="password" required/>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Gender</span>
          </label>
          <select class="select select-bordered w-full max-w-xs" v-model="gender">
            <option disabled selected>Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="none">Prefer not to say</option>
          </select>
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
    <div class="alert alert-warning shadow-lg flex flex-col">
      <span v-if="remember_me">I'll remember you</span>
      <span v-else>I'll forget you</span>
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
    }
  }
}
</script>

<style scoped>
</style>