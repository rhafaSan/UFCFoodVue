<template>
<main class="main-body">
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
                    <!-- <button type="submit" class="login-btn" @click="validateLogin">Entrar</button>
                    <button class="register-btn" @click="goToRegister ">Cadastrar</button>-->
                    <PrimaryButton placeholder="Entrar"  />

                    <SecundaryButton placeholder="Cadastrar" />
                </div>
            </form>
        </div>
     </main>
</template>

<script >
import PrimaryButton from '@/components/PrimaryButton.vue';
import SecundaryButton from '@/components/SecundaryButton.vue';

export default {
  name: 'Login',
  components: {
      PrimaryButton,
      SecundaryButton
  },
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

.main-body{
    background-color: #0da3e93b;
    height: 100vh;
    padding-top: 10%;
    
}
.center-div{
    background-color: #F7F7F7;
    border: 1px solid rgba(117, 112, 112, 0.39); 
    border-radius: 10px;
    width: 70%;
    height: 50vh;
    margin-top: 1%;
    margin-right: auto;
    margin-left: auto;
    padding: 2%;
    color: #333;
}

.center-div p{
    text-align: center;
    font-weight: 600;
    font-size: 27px;
}

.center-div .form-div{
    /* border: 1px solid #000; */
    /* background-color: #EDF2F4; */
    display: flex;
    flex-direction: column;
    padding: 1%;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
}

.center-div .form-div input{
    width: 90%;
    height: 20px;
}

.center-div .form-div input, label{
    margin-left: 3% ;
}

.center-div .button-div{
    /* border: 1px solid #000; */
    margin-top: 1%;
    width: 70%;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.button-div .login-btn {
    background-color: #04D361;
    color: #fff;
    font-weight: 700;
    border: none;
    transition: background-color 0.2s;
}

.button-div .login-btn:hover{
    background-color: #04BF58;
    cursor: pointer;
}

.button-div .register-btn{
    background-color: #d1e751;
    color: #fff;
    font-weight: 700;
    border: none;
    transition: background-color 0.2s;
}

.button-div .register-btn:hover{
    background-color: #a6b64e;
    color: #f7f7f7;
    cursor: pointer;
}
</style>