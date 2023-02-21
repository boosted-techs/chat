<template>
  <div class="form-wrapper">

    <!-- logo -->
    <div class="logo my-5">
      <img src="dist/media/img/logo-full-2x.png" alt="logo">
    </div>
    <!-- ./ logo -->

    <h5>Create account</h5>

    <!-- form -->
    <form>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Firstname" required autofocus>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Lastname" required>
      </div>
      <div class="form-group">
        <input type="email" class="form-control" placeholder="Email" required>
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="Password" required>
      </div>
      <button class="btn btn-primary">Sign Up</button>
      <div class="my-5">
        Already have an account? <a href="login.html">Sign in now!</a>
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
  name: "registerView",
  mounted() {
    import("../../assets/vendor/bundle.js")
    import("../../assets/js/landing-page.min.js")
    import("../../assets/js/theme-customizer.min.js")
  },
  created() {
    document.body.classList.add('auth');
    document.body.style.backgroundImage = "url('/media/img/auth.jpg')";
  }
}
</script>

<style scoped>

</style>
