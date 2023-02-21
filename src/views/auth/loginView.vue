<template>


  <div class="form-wrapper">

    <!-- logo -->
    <div class="logo my-5">
      <img src="/media/img/logo-full-2x.png" alt="logo">
    </div>
    <!-- ./ logo -->

    <h5>Sign in</h5>

    <!-- form -->
    <form>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Username or email" required autofocus>
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="Password" required>
      </div>
      <div class="form-group d-flex justify-content-between">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" checked="" id="customCheck1">
          <label class="custom-control-label" for="customCheck1">Remember me</label>
        </div>
        <router-link to="/reset-password.html">Reset password</router-link>
      </div>
      <button class="btn btn-primary">Sign in</button>
      <div class="my-5">
        <p>Don't have an account? <router-link to="/register.html">Sign up now!</router-link></p>
      </div>
    </form>
    <!-- ./ form -->

  </div>

</template>
<style>
@import "https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap";
@import "../../assets/icons/materialicons/css/materialdesignicons.min.css";
@import "../../assets/vendor/bundle.css";
@import "../../assets/css/landing-page.min.css";
</style>
<script>
export default {
  name: "loginView",
  mounted() {
    import("../../assets/vendor/bundle.js")
    import("../../assets/js/landing-page.min.js")
    import("../../assets/js/theme-customizer.min.js")
    $("body").attr("class", "auth")
    //style="background: url(/media/img/auth.jpg)
  },
  created() {
    document.body.classList.add('auth');
    document.body.style.backgroundImage = "url('/media/img/auth.jpg')";
  }
}
</script>

<style scoped>

</style>
