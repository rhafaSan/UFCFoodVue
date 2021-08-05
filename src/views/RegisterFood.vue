<template>
     <main class="main-body">
        <div class="center-div">
                  <p>Vamos cadastrar o cardápio ? </p>
                  <form action="" name="cardapio_form">
                      <div class="form-div">
                          <label for="tipOpcao">Informe o tipo de opção:</label>
                          <input type="text" name="tipOpcao" id="tipOpcao" v-model="opcao" required>
                          
                        <br>
                          <label for="opcao">Informe a opção:</label>
                          <input type="text" name="opcao" id="opcao" v-model="opcao" required>

                          <br>
                          <label for="cardápio">Informe os acompanhamentos do cardápio:</label>
                          <input type="text" name="cardápio" id="cardápio" v-model="cardapio" required>
                          <br>
                          <label for="cardápio">Data do cardápio:</label>
                      </div>
                      <div class="button-div">
                         <button type="submit">Cadastrar</button>
                      </div>
                  </form>
              </div>
           </main>
</template>

<script>
export default {

}
</script>

<style>
  p, label{
    font-family: Roboto;
}

.main-body{
    background-color: #0da3e93b;
    height: 100vh;
    padding-top: 10%;
    
}
.center-div{
    background-color: #F7F7F7;
    border: 1px solid #c7c7c7; 
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
    border-radius: 8px;
    border: 1px solid #c7c7c7;
    padding-left: 1%;
}

input:focus{
    outline: none;
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

.button-div  {
    
    color: #fff;
    font-weight: 700;
    border: none;
    transition: background-color 0.2s;
}

.button-div :hover{
   
    cursor: pointer;
}

</style>