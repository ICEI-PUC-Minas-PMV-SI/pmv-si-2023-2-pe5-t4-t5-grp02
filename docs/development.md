# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável | Artefato |
|------|-----------------------------------------|----| ----| --------- |
|RF-001| A aplicação Web permitirá o usuário se cadastrar | ALTA | João, Tais, Marcelo, Luigi, Caio | login.html |
|RF-002| A aplicação Web permitirá o usuário se logar   | ALTA | João, Tais, Marcelo, Luigi, Caio | login.html | 
|RF-003| A aplicação Web permitirá Inserir anúncio de PET desaparecido do usuário.   | ALTA  | João, Tais, Marcelo, Luigi, Caio | forum.html |
|RF-004| A aplicação Web permitirá o usuário Editar e excluir anúncio de PET desaparecido do usuário.   | ALTA  | João, Tais, Marcelo, Luigi, Caio | forum.html |
|RF-005| A aplicação Web permitirá o usuário Realizar busca por anúncios de PETs desaparecidos. | ALTA  | João, Tais, Marcelo, Luigi, Caio | mapa.html |
|RF-006| A aplicação Web permitirá apenas aos usuários cadastradados criarem/alterarem/atualizarem anotações do mapa   | ALTA  | João, Tais, Marcelo, Luigi, Caio | mapa.html |
|RF-009| A aplicação Web conterá uma aba sobre os criadores   | ALTA  |João, Tais, Marcelo, Luigi, Caio | quemsomos.html |

## Descrição das estruturas:

## Login/Cadastro
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id do usuário  | Numero (Inteiro)  | Identificador de usuário                  | 001                                            |
| Nome           | Texto             | Nome do usuário                           | Roberto                                        |
| E-mail         | Texto             | Email do usuário                          | exemplo@sga.pucminas.br                        |
| Senha          | Número e (ou) texto   | Senha do usuário                      | ******* (é segredo!)                           |

## Divulgue
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id do usuário  | Numero (Inteiro)  | Identificador de usuário                  | 001                                            |
| Nome           | Texto             | Nome do usuário                           | Roberto                                        |
| Data/Hora      | Texto ou Date     | Data de envio do PIN                      | 31/05/2023                                     |
| Descrição      | Texto             | Informações do animal                     | Raça, Chow-Chow, 3 anos, nome: Thor            |

