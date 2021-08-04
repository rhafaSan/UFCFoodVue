<template>
<div class="all-body">

        <header class="nav-header">
            <Header />
        </header>
        <main class="container">
            <div class="sidebar-menu">
                <div class="bar-block">
                    <router-link to="/dashboard" class="link">Ínicio</router-link>
                    <router-link to="/rating" class="link">Avaliações</router-link>
                    <router-link to="#" class="link">Cadastrar</router-link>
                </div>
            </div>
            <div class="content">
                <div class="top-content">
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

                    <div class="card" >
                        <img class="ilustrator-food" :src="img" alt="Avatar"  style="width:100%">
                        <div class="container-card">
                            <h4><b>salada</b></h4>
                            <p>Salada crua</p>
                        </div>
                    </div>

                    <div class="card">
                        <img class="ilustrator-food" src="../assets/Arroz.jpg" alt="Avatar" style="width:100%">
                        <div class="container-card">
                            <h4><b>Fruta</b></h4>
                            <p>Banana</p>
                        </div>
                    </div>
                   </div>
                </div>
                <div class="down-content"></div>
            </div>
        </main>
        <Footer />
</div>
</template>

<script>
const hamb = require('../assets/hamburguer-de-lentilha.jpg')
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue'
export default {
  name: 'Dashboard',
  components: {
      Footer,
      Header
  },
  data(){
      return{
          img: hamb,
          
      }
  },
  methods:{
      
  }
}
</script>

<style scoped>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .all-body {
            width: 100%;
            height: 100vh;

        }

        .nav-header {
            background-color: #d42121ee;
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

        .link{
            text-decoration: none;
            background-color:#ffffff;
            border-radius: 3px;
            margin-bottom: 3%;
            color: rgb(19, 34, 170);
        }
        .link:hover{
            color: rgb(19, 34, 170);
            background-color: rgba(149, 161, 168, 0);
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
            width: 100%;
        }

        .card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            transition: 0.3s;
            width: 12%;
            margin-right: 2%;
            text-overflow: ellipsis;
        }

        .card h4{
            font-size: 1vw;
            font-family: Roboto;
            font-weight: 700;
        }

        .card p{
            font-size: 1vw;
            font-family: Roboto;
            font-weight: 500;
        }

        .heading-card{
            padding: 10px;
            margin: 10px 0;
        }

        .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        }

        .ilustrator-food{
            height: 150px;
        }

        .container-card {
            padding: 2px 16px;
        }
</style>