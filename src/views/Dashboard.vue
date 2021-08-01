<template>
  <div class="nav-header">
            <div class="logo">
                <h1>UFCFood</h1>
            </div>
            <div class="nav-bar">
            </div>
        </div>
        <div class="container">
            <div class="sidebar-menu">
                <div class="bar-block">
                    <a href="/dashboard" class="button">
                        <p>Início</p>
                    </a>
                    <a href="/rating" class="button">
                        <p>Avaliações</p>
                    </a>
                    <a href="#" class="button">
                        <p>Cadastros</p>
                    </a>
                    <a href="#" class="button">
                        <p>Configurações</p>
                    </a>
                </div>
            </div>
            <div class="content">
                <div class="top-content">
                   <div class="heading-card">
                   <h1> Cardápio do Dia!</h1>
                   </div>
                   <div class="card-container">
                       
                    <div class="card">
                        <img class="ilustrator-food" :src="img" alt="Avatar" style="width:100%">
                        <div class="container-card">
                            <h4><b>Opção vegetariana</b></h4>
                            <p>hamburguer-de-lentilha</p>
                        </div>
                    </div>

                    <div class="card">
                        <img class="ilustrator-food" :src="img" alt="Avatar" style="width:100%">
                        <div class="container-card">
                            <h4><b>Opção Onívoro</b></h4>
                            <p>Frango a passarinho</p>
                        </div>
                    </div>

                    <div class="card">
                        <img class="ilustrator-food" :src="img" alt="Avatar" style="width:100%">
                        <div class="container-card">
                            <h4><b>Opção Onívoro</b></h4>
                            <p>Picadinho de carne</p>
                        </div>
                    </div>

                    <div class="card">
                        <img class="ilustrator-food" :src="img" alt="Avatar" style="width:100%">
                        <div class="container-card">
                            <h4><b>Acompanhamento</b></h4>
                            <p>Arroz branco</p>
                        </div>
                    </div>

                    <div class="card">
                        <img class="ilustrator-food" :src="img" alt="Avatar" style="width:100%">
                        <div class="container-card">
                            <h4><b>Acompanhamento</b></h4>
                            <p>Feijão mulatinho</p>
                        </div>
                    </div>

                    <div class="card">
                        <img class="ilustrator-food" :src="img" alt="Avatar" style="width:100%">
                        <div class="container-card">
                            <h4><b>salada</b></h4>
                            <p>Salada crua</p>
                        </div>
                    </div>

                    <div class="card">
                        <img class="ilustrator-food" :src="img" alt="Avatar" style="width:100%">
                        <div class="container-card">
                            <h4><b>Fruta</b></h4>
                            <p>Banana</p>
                        </div>
                    </div>
                   </div>
                </div>
                <div class="down-content"></div>
            </div>
        </div>

        <footer class="container-fluid text-center">
            <p>Plataforma desenvolvida para disciplina de WEB</p>
            <p>Direitos reservados</p>
        </footer>
</template>

<script>
const hamb = require('../assets/hamburguer-de-lentilha.jpg')
export default {
  name: 'Dashboard',
  data(){
      return{
          img: hamb
      }
  }
}
</script>

<style scoped>
 .main {
            width: 100%;
            height: 100vh;

        }

        .nav-header {
            background-color: #cf5799;
            height: 7%;
        }

        .container {
            display: flex;
            flex-direction: row;
            height: 88%;
            width: 100%;
        }

        .sidebar-menu {
            background-color: #f1f1f1;
            width: 15%;
            padding: 5px;

        }

        .content {
            background-color: #ffffff;
            width: 85%;
            padding: 15px;
            display: flex;
            flex-direction: column;


        }

        .sidebar-menu .bar-block {
            display: flex;
            flex-direction: column;

        }

        .sidebar-menu .bar-block .button {
            text-decoration: none;
            background-color: #EEEEEE;
            display: block;
            height: 30px;
            width: 100%;
            display: flex;
            align-items: center;

        }

        .sidebar-menu .bar-block .button:hover{
            box-shadow: 0 8px 16px 0 #c7c3c3;
        }

        .sidebar-menu .bar-block .button p {
            margin-left: 5px;
        }

        .logo {
            width: 15%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            font-size: 15px;
            height: 100%;
        }

        .nav-bar {
            width: 85%;
            height: 100%;
        }

        footer {
            background-color: #cf5799;
            height: 5%;
        }

        .top-content{
            height: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

        }
        .down-content{
            height: 50%;
        }

        .card-container{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }

        .card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            transition: 0.3s;
            width: 12%;
            margin-right: 2%;
        }

        .heading-card{
            padding: 10px;
            margin: 10px 0;
        }

        .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        }

        .ilustrator-food{
            height: 300px;
        }

        .container-card {
            padding: 2px 16px;
        }
</style>