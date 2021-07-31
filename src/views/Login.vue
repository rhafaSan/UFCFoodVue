<template>
  <div class="center-div">
            <p>Bem vindo (a) ao UFC Food</p>
            <form action="" name="login_form">
                <div class="form-div">
                    <label for="username">Nome de usuário:</label>
                    <input type="text" name="username" id="username" required>

                    <label for="password">Senha:</label>
                    <input type="password" name="password" id="password" required>
                </div>
                <div class="button-div">
                    <button type="submit" class="login-btn" @click="validateLogin">Entrar</button>
                    <button class="register-btn" @click="goToRegister ">Cadastrar</button>
                    
                </div>
            </form>
        </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    goToRegister(){
      this.$router.push('/register')
    },
    validateLogin(){
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style scoped>

</style>