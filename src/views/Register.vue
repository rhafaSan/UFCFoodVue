<template>
<main class="main-body">
  <div class="center-div">
            <p>Bem vindo (a) ao UFC Food</p>
            <span>Cadastre-se gratuitamente</span>
            <form action="" name="register_form">
                <div class="form-div">
                    <label for="username">Nome de usuário:</label>
                    <input type="text" name="username" id="username" minlength="4" required oninvalid="this.setCustomValidity('Nome de usuário menor que o permitido')">

                    <label for="password">Senha:</label>
                    <div class="input-div">
                        <input :type="pswd" name="password" id="password" minlength="6" maxlength="12" required> 
                        <button class="show-btn" @click="showPassword" type="button" >Mostrar senha</button>
                    </div>
                    
                    <label for="password">Confirme a senha:</label>
                    <div class="input-div">
                        <input :type="confirmPswd" name="confirm_password" id="confirm_password" minlength="6" maxlength="12" required>
                        <button class="show-btn" @click="showConfirmePassword" type="button" >Mostrar senha</button>
                    </div>

                </div>
                <div class="button-div">
                   <!-- <button type="submit" class="login-btn" @click="watchRegister">Finalizar cadastro</button> -->
                    <SecundaryButton placeholder="Finalizar cadastro" type="submit" />
                </div>
            </form>
    </div>
</main>
</template>

<script>
import SecundaryButton from '@/components/SecundaryButton.vue';

export default {
  name: 'Register',
  data(){
      return{
          pswd: 'password',
          confirmPswd :'password'
      }
  },
  components:{
      SecundaryButton
  },
  methods: {
    watchRegister(){
      this.$router.push('/login');
    },
    showPassword(){
        this.pswd == 'password' ? this.pswd = 'text' : this.pswd = 'password'
    },
    showConfirmePassword(){
        this.confirmPswd == 'password' ? this.confirmPswd = 'text' : this.confirmPswd = 'password'
    }

  }
}
</script>

<style scoped>
.main-body{
    background-color: #0da3e93b;
    height: 100vh;
    padding-top: 10%;
}

.center-div{
    border: 1px solid #000;
    text-align: center;
    display: flex;
    flex-direction: column;
    background-color: #F7F7F7;
    border-radius: 10px;
    width: 70%;
    height: 70vh;
    margin-top: 1%;
    margin-right: auto;
    margin-left: auto;
    padding: 2%;
    color: #333;
}

.center-div p{
    font-size: 20px;
    font-weight: 600;
}

.center-div span{
    font-size: 17px;
    font-weight: 500;
    margin-top: 2%;
    margin-bottom: 2%;
}

.center-div .form-div{
    display: flex;
    flex-direction: column;
}

.center-div .form-div input{
    width: 50%;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 2%;
}

.center-div .form-div label{
    font-weight: 500;
    font-size: 14px;
    color: #32264D;
}

 .input-div input{
    margin-left: auto;
    margin-right: auto;
    width: 100%;
}

.input-div{
    display: grid;
    grid-template-rows: auto;
}

.form-div .show-btn{
    width: 14%;
    height: 30px;
    font-size: 11px;
    background-color: #10a580;
    font-weight: 500;
    color: #fff;
    border: none;
    margin-right: auto;
    margin-left: 80%;
    margin-top: -6%;
    transition: background-color 0.2s;
}

.form-div .show-btn:hover{
    background-color: #39cca0;
    color: #000;
    cursor: pointer;
}
</style>