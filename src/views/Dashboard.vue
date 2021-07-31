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
                        <img class="ilustrator-food" :src="'@/assets/cardápio/hamburguer-de-lentilha.jpg'" alt="Avatar" style="width:100%">
                        <div class="container-card">
                            <h4><b>Opção vegetariana</b></h4>
                            <p>hamburguer-de-lentilha</p>
                        </div>
                    </div>

                    <div class="card">
                        <img class="ilustrator-food" :src="'@/assets/cardápio/Frango Empanado.jpg'" alt="Avatar" style="width:100%">
                        <div class="container-card">
                            <h4><b>Opção Onívoro</b></h4>
                            <p>Frango a passarinho</p>
                        </div>
                    </div>

                    <div class="card">
                        <img class="ilustrator-food" :src="'@/assets/cardápio/carne vermelha.jpg'" alt="Avatar" style="width:100%">
                        <div class="container-card">
                            <h4><b>Opção Onívoro</b></h4>
                            <p>Picadinho de carne</p>
                        </div>
                    </div>

                    <div class="card">
                        <img class="ilustrator-food" @src="'@/assets/cardápio/Arroz.jpg'" alt="Avatar" style="width:100%">
                        <div class="container-card">
                            <h4><b>Acompanhamento</b></h4>
                            <p>Arroz branco</p>
                        </div>
                    </div>

                    <div class="card">
                        <img class="ilustrator-food" :src="'@/assets/cardápio/Feijao.jpg'" alt="Avatar" style="width:100%">
                        <div class="container-card">
                            <h4><b>Acompanhamento</b></h4>
                            <p>Feijão mulatinho</p>
                        </div>
                    </div>

                    <div class="card">
                        <img class="ilustrator-food" :src="'@/assets/cardápio/salada.jpg'" alt="Avatar" style="width:100%">
                        <div class="container-card">
                            <h4><b>salada</b></h4>
                            <p>Salada crua</p>
                        </div>
                    </div>

                    <div class="card">
                        <img class="ilustrator-food" :src="'@/assets/cardápio/fruta.jpg'" alt="Avatar" style="width:100%">
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
export default {
  name: 'Dashboard',
  method: {
    
  }
}
</script>

<style>

</style>