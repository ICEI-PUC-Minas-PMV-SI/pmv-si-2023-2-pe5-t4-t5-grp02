# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).


## Avaliação dos Testes de Software

Particularmente, gostamos muito do nosso primeiro projeto, tendo como forte o visual mais minimalista e intuitivo.

De pontos a serem melhorados, a falta de instrução do site, as limitações do localstorage e a grande quantidade de itens para atualizar informações do usuário e dos animais divuglgados.

# Testes de Usabilidade

<strong> Usuário 1: </strong> Cadastro e Login do usuário. (práticas de boas convivências). Tempo necessário para tal ação: 30 segundos. Tempo necessário por um especialista: 3 segundos. 
Comentário: "Aplicação bem intuitiva, não precisou que fizesse login para acessar o conteúdo. Conteúdo muito bom, porém ainda são poucos". Nota: 4/5

<strong> Usuário 2: </strong> Busca por algum animal perdido. Tempo necessário para tal ação: 37 segundos. Tempo necessário por um especialista: 27.4 segundos. 
Comentário: "Funciona direitinho, porém a página do fórum contém bastante informação. Não contém opções de like/deslike e denunciar". Nota: 3.8/5

<strong> Usuário 3: </strong> Gostaria de anexar um anúncio de animal pertido. Tempo necessário para tal ação: 43 segundos. Tempo necessário por um especialista: 26.3 segundos. 
Comentário: "Funcionou perfeitamente. Consigo remover e editar. Senti falta de uma explicação de como posicionar os marcadores. Sugiro alguns gifs fazendo tais ações". Nota: 4.3/5


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja se cadastrar. Encontre no site a sessão de Login e realize seu cadastro. |
| 2             | Você é uma pessoa que deseja navegar no site e procurar pela postagem de seu pet perdido. |
| 3             | Você é uma pessoa que deseja fazer uma postagem de um pet que perdeu. Encontre no site o fórum e faça uma postagem. |
| 4             | Você é uma pessoa que deseja Achar o seu melhor amigo que se perdeu. |


## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja se cadastrar. Encontre no site a sessão de Cadastre-se e realize seu cadastro.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1   | SIM             | 5                    | 33.60 segundos                  |
| 2 | SIM             | 5                    | 19.31 segundos                  |
| 3| SIM             | 5                    | 37.57 segundos                  |
| 4  | SIM             | 5                    | 25.45 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 5                | 28.98 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 26.03 segundos |


    Comentários dos usuários: 
    1: Muito claro e intuitivo.
    2r: Tranquilo e objetivo, ele criaria no banner princpal uma chamada mais fácil
    3: utilizar o Autocomplete do nome, o cadastro foi tranquilo
    4: Fácil e prático.



Cenário 2: Você é uma pessoa que deseja navegar no site e procurar pela postagem de seu pet perdido.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1   | SIM             | 4.5                  | 35.32 segundos                          |
| 2 | SIM             | 5                    | 18.36 segundos                          |
| 3  | SIM             | 4.5                    | 54.90 segundos                          |
| 4 | SIM             | 4                    | 51.20 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.66               | 39,94 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 27.43 segundos |


    Comentários dos usuários: 
    1: Não ficou claro no icone do buraco se era pra apertar em cima ou ao lado.
    2: No painel do mapa ele achou que o botão de mapear fosse em cima.
    3: Colocar um tooltip, mensagem que ao passar o mouse em cima mostrar o que o botão faz, sugeriu colcoar no cartão do mapa: "Acompanhe e contribue com o mapa do seu bairro".
    4: Ficou um pouco confuso mas entendeu o objetivo do mapa.

Cenário 3: Você é uma pessoa que deseja fazer uma postagem de um pet que perdeu. Encontre no site o fórum e faça uma postagem.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1   | SIM             | 5                    | 22.11 segundos                          |
| 2 | SIM             | 3                    | 32.43 segundos                          |
| 3  | SIM             | 5                    | 26.71 segundos                          |
| 4  | SIM             | 4.5                    | 32.23 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 5                | 28,37 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 15.07 segundos |


    Comentários dos usuários: 
    1: Claro e intuitivo
    2: Colocar texto indicando o que é, recomendou utilizar o sweetalert para qualquer coisa de Popup e alerta https://sweetalert2.github.io/v10.html#examples.
    3: Foi fácil e intuitivo
    4: Apesar de ser leigo em tecnologia, achou interessante a abordagem dos problemas através de coments.


Cenário 4: Você é uma pessoa que deseja Achar o seu melhor amigo que se perdeu.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1   | SIM             | 5                    | 07.21 segundos                          |
| 2 | SIM             | 5                    | 31.42 segundos                          |
| 3  | SIM             | 5                    | 11.73 segundos                          |
| 4  | SIM             | 4                    | 10.52 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 5                | 15,22 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 3 segundos |


    Comentários dos usuários:
    1: Achou legal e bacana;
    2: Colocar texto na barra dos Ícones;
    3: Bem rápido;
    4: Elogiou a iniciativa das boas práticas.


## Avaliação dos Testes de Usabilidade

A partir dos dados recebidos e analisados, a aplicação atinge um grau de usabilidade satisfatório, especialmente pelo fato de todos os usuários terem conseguido fazer os cenários propostos. É também o caso dos testes de usabilidade subjetivos baseados na LGPD, onde foi possível medir notas entre 3.8 à 4.3 de um total de 5. 

Paralelamente, foi registrado uma descrepância (em alguns casos mais notáveis do que outros) acerca do tempo gasto entre especialista e "clientes", sendo o maior o cenário 4: "Ache o conteúdo de boas práticas de convivências". 




