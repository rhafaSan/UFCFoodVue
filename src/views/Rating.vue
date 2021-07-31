<template>
  <div class="center-div">
            <p>Cadastre uma avaliação</p>
            <br/>
            <form action="" name="rating_form">
                <div class="form-div">
                    <label for="evaluation_type">Tipo de avaliação:</label>
                    <select name="evaluation_type" id="evaluation_type" required>
                        <option value="praise">ELOGIO</option>
                        <option value="complaint">RECLAMAÇÂO</option>
                    </select>

                    <label for="evaluation_grade">Nota da avaliação:</label>
                    <select name="evaluation_grade" id="evaluation_grade" required>
                        <option value="excellent">OTIMO</option>
                        <option value="good">BOM</option>
                        <option value="reasonable">RAZOÁVEL</option>
                    </select>
                
                    <label for="menu_itens">Item do cardápio:</label>
                    <select name="menu_items" id="menu_items" required>
                        <option value="arroz">ARROZ</option>
                        <option value="salada">SALADA</option>
                        <option value="feijoada">FEIJOADA</option>
                        <option value="carne">CARNE VERMELHA</option>
                    </select>

                    <label for="commentary">Comentário:</label>
                    <select name="commentary" id="commentary" required>
                        <option value="bom_tempero">BOM TEMPERO</option>
                        <option value="muito_sal">MUITO SAL</option>
                        <option value="sem_sal">SEM SAL</option>
                    </select>

                    <label for="valuation date">Data da avaliação:</label>
                    <input type="date" name="valuation date" id="valuation date" required>
                </div>
                <div class="button-div">
                    <button type="submit" class="rating-btn" onclick="">Finalizar cadastro de avaliação</button>
                </div>
            </form>
        </div>
</template>

<script>
export default {
  name: 'Rating'
}
</script>

<style>

</style>