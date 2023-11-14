# Especificações do Projeto

Desenvolver uma plataforma web para registro e busca de pets perdidos e encontrados, atendendo a voluntários, pet shops e amantes de animais. Inclui registro detalhado, criação de alertas, busca por critérios, compartilhamento em redes sociais e notificações por e-mail. Prioridade na segurança, usabilidade, desempenho, compatibilidade móvel e escalabilidade. Com público-alvo de pessoas de todas as faixas etárias e níveis de ensino, com desktops ou telefones com acesso à internet. Prazo máximo de 6 meses para criação e 12 meses de divulgação, com meta de 200 mil acessos ou downloads em 2 anos.

## Personas

01. Persona Pedro Pedro tem 42 anos, é gerente de marketing, se interessa por esportes, culinária e estratégia de negócios. É morador do bairro Moema, em São Paulo - SP e possui certa familiaridade com redes sociais por ter um perfil ativo na rede LinkedIn. 
02. Persona Maria Maria tem 68 anos, atualmente está aposentada mas fez sua carreira como analista de sistemas, residindo no bairro Betânia em Belo Horizonte. Tem interesse em jardinagem, leitura e voluntariado, compartilhando suas experiências no Facebook e Pinterest. 
03. Persona Lucas Lucas, é arquiteto recém-formado, com 26 anos,e está trabalhando de forma autônoma atualmente. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar e acompanha os próximos destinos pelo Instagram e YouTube. É solteiro e sempre quis fazer um intercâmbio,está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros, mas ainda está morando no Rio de Janeiro, Botafogo.


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

01. Pedro Eu Pedro, como Gerente de Marketing, quero ajudar a comunidade de Moema, São Paulo a encontrar seus animais de estimação desaparecidos para ter ação em algum projeto social.
02. Maria Eu Maria, como Aposentada e ex Analista de sistemas, quero ajudar as pessoas de Belo Horizonte, na busca de seus pets para que eu possa realizar mais ações voluntárias que é um hobbie meu.
03. Lucas Eu Lucas, como estudante de engenharia civil, quero a ajuda de pessoas que possam encontrar meu cachorrinho, para que eu possa ter ele novamente comigo.


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|   ID  |                                                    Descrição do Requisito                                               |      Prioridade         |
|-------|-------------------------------------------------------------------------------------------------------------------------|-------------------------|
|RF-001| Realizar cadastro de um novo usuário. | O sistema deve permitir o cadastro de novos usuários com os seguintes dados mínimos: nome completo, CPF, e-mail, CEP e senha. |ALTA|
|RF-002| Realizar Login de usuário. | O sistema deve permitir o cadastro de novos usuários com os seguintes dados mínimos: nome completo, CPF, e-mail, CEP e senha. |ALTA|
|RF-003| Realizar Logout de usuário. | O sistema deve permitir o cadastro de novos usuários com os seguintes dados mínimos: nome completo, CPF, e-mail, CEP e senha. |ALTA|
|RF-004| Inserir anúncio de PET desaparecido do usuário. | O sistema deve permitir a inserção de anúncio de PET desaparecido do usuário com nome do PET, tipo de animal, raça, cor, porte, até 5 fotos e contato. |ALTA|
|RF-005| Editar e excluir anúncio de PET desaparecido do usuário. | O sistema deve permitir a edição e exclusão de anúncio de PET desaparecido do usuário. |ALTA|
|RF-006| Inserir, editar e excluir proposta de pagamento de recompensa em anúncio cadastrado de PET desaparecido. | O sistema deve permitir a inserção, edição e exclusão de proposta de pagamento de recompensa em anúncio cadastrado de PET 
desaparecido do usuário. |ALTA|
|RF-007| Possuir chat no site. | O sistema deve possuir chat para troca de informações entre usuários a respeito de PETs desaparecidos. |ALTA|
|RF-008| Realizar postagem de anúncio de PETs desaparecidos em redes sociais como Instagram e Facebook. | O sistema deve permitir a postagem de anúncio de PETs desaparecidos no Instagram e Facebook. |ALTA|
|RF-009| Realizar busca por anúncios de PETs desaparecidos. | O sistema deve permitir a busca por anúncios de PETs desaparecidos com os seguintes campos: nome do PET, tipo de animal, raça e cor. |ALTA|
|RF-010| Inserir anúncio de PET identificado com suspeita de estar perdido. | O sistema deve permitir a inserção de anúncio de PET que foi identificado por terceiro, na rua por exemplo, em que há suspeita de estar perdido do seu dono. As informações a serem cadastradas são: até 5 fotos do PET, local em que foi identificado e contato da pessoa que identificou. |MÉDIA|



### Requisitos não Funcionais

|   ID  |                                                    Descrição do Requisito                                               |      Prioridade         |
|-------|-------------------------------------------------------------------------------------------------------------------------|-------------------------|
| RNF-001 | O aplicativo deve ter um tempo de carregamento da página inicial de no máximo 2 segundos, para garantir uma boa experiência do usuário. | BAIXA |
| RNF-002 | A pesquisa por animais perdidos deve retornar resultados em menos de 1 segundo, mesmo com um grande volume de dados. | BAIXA |
| RNF-003 | Todos os dados pessoais dos usuários, como informações de contato e localização, devem ser armazenados de forma segura e criptografada. | MÉDIA |
| RNF-004 | O sistema deve ter medidas de autenticação e autorização robustas para proteger os dados do usuário e impedir o acesso não autorizado. | MÉDIA |
| RNF-005 | A interface do usuário deve ser intuitiva e de fácil utilização, com um design responsivo para atender a dispositivos móveis e desktop. | MÉDIA |
| RNF-006 | Os formulários de entrada de dados devem incluir validações para garantir a entrada correta e evitar erros. | MÉDIA |
| RNF-007 | Deve ser possível implantar atualizações e correções de bugs de forma rápida e eficiente, minimizando o tempo de inatividade. | MÉDIA |
| RNF-008 | Deve ser implementado um sistema de backup de dados para evitar a perda de informações importantes. | ALTA |
| RNF-009 | O aplicativo deve ser compatível com uma ampla variedade de navegadores da web, como Chrome, Firefox, Edge e Safari. | MÉDIA |
| RNF-010 | Deve ser testado em diferentes dispositivos e resoluções de tela para garantir uma experiência consistente. | MÉDIA |
| RNF-011 | O aplicativo deve cumprir todas as regulamentações de privacidade de dados, como o Regulamento Geral de Proteção de Dados (GDPR), se aplicável. | BAIXA |
| RNF-012 | O aplicativo deve otimizar o uso de recursos do servidor para garantir que ele seja escalável e econômico de operar. | BAIXA |
| RNF-013 | Deve ser feito o uso eficiente de largura de banda para minimizar o consumo de dados do usuário. | BAIXA |
| RNF-014 | O aplicativo deve permitir que os usuários compartilhem informações sobre animais perdidos em redes sociais populares, como Facebook e Twitter. | BAIXA |
| RNF-015 | Deve ser possível integrar o aplicativo com sistemas de geolocalização para fornecer informações precisas sobre a localização dos animais perdidos. | MÉDIA|


## Restrições

O projeto está restrito aos itens apresentados a seguir:

1- Orçamento Limitado: Restrição financeira pode limitar os recursos disponíveis para desenvolver e manter o site. Isso pode afetar a escolha de tecnologias, a capacidade de contratar desenvolvedores e a escalabilidade da solução. 

2- Tempo Limitado: Um prazo específico para a conclusão do projeto pode ser uma restrição. Isso pode impactar o escopo do site, a quantidade de recursos que podem ser alocados e a capacidade de realizar testes abrangentes.

3- Recursos Humanos Limitados: Se você tiver uma equipe pequena ou recursos humanos limitados, isso pode afetar a complexidade da solução e a velocidade de desenvolvimento.

4- Conectividade à Internet: A disponibilidade de conexões de Internet confiáveis para os usuários pode ser uma restrição. Isso afeta a acessibilidade do site, especialmente em áreas com acesso à Internet limitado.

5- Segurança Cibernética: A segurança é uma consideração crítica, e a falta de recursos para implementar medidas adequadas de segurança pode ser uma restrição.

6- Experiência do Usuário: A necessidade de uma interface de usuário intuitiva e amigável é importante, mas pode ser difícil de alcançar sem recursos adequados.

7- Escalabilidade: Se o site se tornar popular, a capacidade de dimensionar e lidar com um grande volume de dados e tráfego pode ser uma restrição.

8- Manutenção e Atualizações: Garantir que o site continue funcionando de maneira eficaz após o lançamento requer recursos para manutenção contínua e atualizações periódicas.

