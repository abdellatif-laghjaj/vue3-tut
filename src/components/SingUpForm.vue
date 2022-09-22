<template>
  <form action="">
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <h1>Registration Form</h1>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" class="input input-bordered" required/>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" class="input input-bordered" required/>
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
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
  name: "Form"
}
</script>

<style scoped>
</style>