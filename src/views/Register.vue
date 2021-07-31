<template>
  <div class="center-div">
            <p>Bem vindo (a) ao UFC Food</p>
            <span>Cadastre-se gratuitamente</span>
            <form action="" name="register_form">
                <div class="form-div">
                    <label for="username">Nome de usuário:</label>
                    <input type="text" name="username" id="username" minlength="4" required oninvalid="this.setCustomValidity('Nome de usuário menor que o permitido')">

                    <label for="password">Senha:</label>
                    <div class="input-div">
                        <input type="password" name="password" id="password" minlength="6" maxlength="12" required> 
                        <button class="show-btn" onclick="showPassword()" type="button" >Mostrar senha</button>
                    </div>
                    
                    <label for="password">Confirme a senha:</label>
                    <div class="input-div">
                        <input type="password" name="confirm_password" id="confirm_password" minlength="6" maxlength="12" required>
                        <button class="show-btn" onclick="showConfirmePassword()" type="button" >Mostrar senha</button>
                    </div>

                </div>
                <div class="button-div">
                    <button type="submit" class="login-btn" @click="watchRegister">Finalizar cadastro</button>
                    
                </div>
            </form>
        </div>
</template>

<script>
export default {
  name: 'Register',
  methods: {
    watchRegister(){
      this.$router.push('/');
    }
  }
}
</script>

<style>

</style>