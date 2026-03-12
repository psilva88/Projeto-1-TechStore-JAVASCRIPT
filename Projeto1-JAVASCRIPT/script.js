const form = document.querySelector("#form");
const nomeProduto = document.querySelector("#nomeProduto");
const categoria = document.querySelector("#categoria");
const marca = document.querySelector("#marca");
const modelo = document.querySelector("#modelo");
const especificacao = document.querySelector("#especificacao");
const preco = document.querySelector("#preco");
const estoque = document.querySelector("#estoque");
const sku = document.querySelector("#sku");
const dataCadastro = document.querySelector("#dataCadastro");
const descricao = document.querySelector("#descricao");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // 1. Valida Nome do Produto
    if(nomeProduto.value === "") {
        alert("Por favor, preencha o nome do produto.");
        return;
    }

    // 2. Valida Categoria
    if(categoria.value === "") {
        alert("Por favor, selecione uma categoria.");
        return;
    }

    // 3. Valida Marca
    if(marca.value === "") {
        alert("Por favor, informe a marca/fabricante.");
        return;
    }

    // 4. Valida Modelo
    if(modelo.value === "") {
        alert("Por favor, informe o modelo.");
        return;
    }

    // 5. Valida Especificação
    if(especificacao.value === "") {
        alert("Por favor, informe a especificação.");
        return;
    }

    // 6. Valida Preço
    if(preco.value === "" || preco.value <= 0) {
        alert("Por favor, informe um preço válido maior que zero.");
        return;
    }

    // 7. Valida Estoque
    if(estoque.value === "" || estoque.value < 0) {
        alert("Por favor, informe a quantidade em estoque.");
        return;
    }

    // 8. Valida SKU
    if(sku.value === "") {
        alert("Por favor, preencha o código do produto (SKU).");
        return;
    }

    // 9. Valida Data de Cadastro
    if(dataCadastro.value === "") {
        alert("Por favor, informe a data de cadastro.");
        return;
    }

    // 10. Valida Descrição
    if(descricao.value === "") {
        alert("Por favor, preencha a descrição detalhada.");
        return;
    }

    alert("Peça cadastrada com sucesso! Tudo pronto para montar o PC.");
    form.submit();
});