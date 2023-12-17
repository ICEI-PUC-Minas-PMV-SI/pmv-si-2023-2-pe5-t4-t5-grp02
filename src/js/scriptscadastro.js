// 1 - Validação para o Formulário de Cadastro - Página de Cadastro de Novo Usuário

// Selecionar elementos - Declaração de Variáveis

const formCadastroUsuario = document.querySelector("#form-cadastro");
const nameInputCadastro = document.querySelector("#nome-usuario");
const emailInputCadastro = document.querySelector("#e-mail-cadastro");
const enderecoInputUsuario = document.querySelector("#endereco-usuario");
const senhaInputUsuario = document.querySelector("#password-cadastro");
const senhaInputUsuarioRepetir = document.querySelector("#password-cadastro-repetir");
const msgSucesso = document.querySelector("#welcome-text");
let listaUsuarios = [];

// Função que Valida o e-mail

function isEmailValid (email) {
    // Cria um Regex para validar o e-mail
    const emailRegex = new RegExp(
        // usuario123@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,}$/
    )
    
    if(emailRegex.test(email)) {
        return true;
    } 

    return false;
};

// Função que Valida a senha

function isPassowrdValid (password, miniDigits) {
    if(password.length >= miniDigits) {
        // Senha Válida
        return true;
    }
    // Senha inválida
    return false;
};


// Função para Cadastro de Usuário salvando dados no LocalStorage

function cadastrarUsuario() {

        const usuario = {
            name: nameInputCadastro.value,
            email: emailInputCadastro.value,
            endereco: enderecoInputUsuario.value,
            senha: senhaInputUsuario.value,
        };
 
        localStorage.setItem(`${nameInputCadastro.value}`, JSON.stringify(usuario));

    };


    // Função para checar se usuário foi salvo

    function checkUser() {
        const user = localStorage.getItem(nameInputCadastro.value);

        if(user) {
            alert(`Cadastro Realizado com Sucesso!`);
            return;
        }
    }


// Validação para o Formulário de Cadastro de novo usuário

formCadastroUsuario.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verifica se o nome está vazio
    if(nameInputCadastro.value === "") {
        alert("Por favor preencha o seu nome!");
        return;
    }

    // Verica se o e-mail está preenchido e se é válido
     if(emailInputCadastro.value === "" || !isEmailValid(emailInputCadastro.value)) {
        alert("Por favor preencha o seu e-mail!");
        return;
    }

    // Verifica se o endereço está preenchido
    if(enderecoInputUsuario.value === "") {
        alert("Por favor preencha o seu endereço!");
        return;
    }

    // Verifica se a senha está preenchida
    if(!isPassowrdValid(senhaInputUsuario.value, 8)) {
        alert("A senha deve conter, no mínimo, 8 dígitos!");
        return;
    }

    if(!(senhaInputUsuario.value === senhaInputUsuarioRepetir.value)) {
        alert("A senha deve ser igual!");
        return;
    }

    // Se todos os dados estiverem preenchidos
    formCadastroUsuario.submit();
    cadastrarUsuario();
    checkUser();
});

console.log(typeof isUserRegistered());
console.log(typeof emailInputCadastro.value)
console.log(localStorage.key(emailInputCadastro.value))
console.log(typeof localStorage.key(emailInputCadastro.value))





