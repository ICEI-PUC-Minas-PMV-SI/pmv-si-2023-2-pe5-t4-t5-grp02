// 2 - Validação para o Formulário de Publicação de Pet Desaparecido - Página de Cadastro de Pet Desaparecido

// Selecionar elementos - Declaração de Variáveis

const formCadastroPet = document.querySelector("#form-divulgacao-pet");
const nameInputPet = document.querySelector("#nome");
const racaInput = document.querySelector("#raca");
const localInput = document.querySelector("#local");
const dateInput = document.querySelector("#data");
const fotoInput = document.querySelector("#foto");

// Validação para o Formulário de Cadastro de novo usuário

formCadastroPet.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verifica se o nome está vazio
    if(nameInputPet.value === "") {
        alert("Por favor preencha o nome do seu Pet!");
        return;
    }

    // Verica se a raça está vazia
     if(racaInput.value === "") {
        alert("Por favor preencha a raça do seu Pet");
        return;
    }

    // Verifica o local está preenchido
    if(localInput.value === "") {
        alert("Por favor preencha o local onde o Pet foi visto pela última vez!");
        return;
    }



    // Se todos os dados estiverem preenchidos
    formCadastroPet.submit();

});
