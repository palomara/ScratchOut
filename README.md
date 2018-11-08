# ScratchOut
O **Scratch Out** é uma aplicação móvel em desenvolvimento com o propósito de aumentar produtividade dos seus usuários, indicando pontos de melhorias nas suas rotinas e tarefas.

## Diagramas
### - Casos de Uso
![Diagrama de Casos de Uso sOut](https://imgur.com/4vBKkBQ.png)

### - Atividades
#### - Login
![Efetuar Login](https://imgur.com/DD0HqA5.png)
#### - Manter Tarefa
![Manter Tarefa](https://imgur.com/QF0468j.png)
#### - Manter Influência
![Manter Influência](https://imgur.com/UFW7ZbR.png)
#### - Manter Perfil
![Manter Perfil](https://imgur.com/6WBHyIr.png)


### - Classes
![Diagrama de Classes](https://imgur.com/XmrheT1.png)

### - Sequência
#### - Cadastro
![Cadastro](https://imgur.com/piLXqV2.png)
#### - Indicador de Performance
![Indicador de Performance](https://imgur.com/wCgWZko.png)
#### - Influências
![Influências](https://imgur.com/yXUVAXv.png)
#### - Login
![Login](https://imgur.com/WnP6lJF.png)
#### - Tarefas
![Tarefas](https://imgur.com/WC3Izkm.png)

#### - DER&MER
![DER & MER](https://imgur.com/4r2E0sp.png)



## Linguagens & Framework

-   [![enter image description here](https://camo.githubusercontent.com/041fc9e57fb97a5cbc27a32f04447f9bdbf7d8f9/68747470733a2f2f692e696d6775722e636f6d2f6b505753574c742e706e67)](https://camo.githubusercontent.com/041fc9e57fb97a5cbc27a32f04447f9bdbf7d8f9/68747470733a2f2f692e696d6775722e636f6d2f6b505753574c742e706e67)  **[React Native](https://facebook.github.io/react-native/docs/getting-started.html)**
-   [![enter image description here](https://camo.githubusercontent.com/8b88a00c553f22fc77f4e4643f270464d116ec9e/68747470733a2f2f692e696d6775722e636f6d2f3732344b3538342e706e67)](https://camo.githubusercontent.com/8b88a00c553f22fc77f4e4643f270464d116ec9e/68747470733a2f2f692e696d6775722e636f6d2f3732344b3538342e706e67)  **[R](https://www.r-project.org/other-docs.html)**
-   [![](https://camo.githubusercontent.com/165d270e3c8eac069bf38e2c0764d70affa6f764/68747470733a2f2f692e696d6775722e636f6d2f7a386b536f48662e706e67)](https://camo.githubusercontent.com/165d270e3c8eac069bf38e2c0764d70affa6f764/68747470733a2f2f692e696d6775722e636f6d2f7a386b536f48662e706e67)  **[Python](https://www.python.org/doc/)**

|Atividades|Inicio|Término Previsto|Data de Conclusão
|--|--|--|--|
| Referencial Teórico ||08/08/2018|**08/08/2018**
| Diagrama de Casos de Uso ||08/08/2018|
| Diagrama de Atividades ||15/08/2018|
| Wireframe ||22/08/2018|**08/09/2018**
| DER & MER ||29/08/2018|
| Diagrama de Classes ||29/08/2018|
| Banco de Dados ||10/10/2018|
| Diagrama Sequência | 18/09/2018 |05/09/2018|
| Desenvolvimento Front-end ||17/10/2018|
| Desenvolvimento Back-end ||17/10/2018|
| Feira Tecnológica ||16/10/2018| **19/10/2018**
| Teste da Aplicação ||31/10/2018| **09/11/2018**
| Defesa ||23/11/2018| 


# Como usar o GitHub

Está parte é voltada para o método correto de usar o GitHub no projeto, onde será aplicado as regras das Branches e como as usar de maneira correta.

 ## O que são Branches?
 Ao trabalhar com um time de desenvolvimento em um sistema, é comum termos diversos membros trabalhando em uma mesma funcionalidade ou termos que alterar uma funcionalidade já dada como pronta - arrumar bugs, por exemplo. Para evitar **avacalhar** com algo que já está pronto, podemos criar um _branch_. Um _branch_ serve como uma caixa de areia, criando uma cópia do estado atual do repositório onde se pode alterar sem a preocupação de estragar uma parte importante do sistema. Uma vez que as alterações propostas em um branch estiverem testadas e funcionando, é possível realizar a operação _merge_ com o _branch_ "original", ou seja, inserir as alterações na versão estável da funcionalidade.

![](https://i.imgur.com/rQRhO2R.png)

### O Sistema de Branches para o nosso projeto
Para devs, testers e demais membros do time, segue algumas explicações sobre o esquema de branches e deste repositório em geral:

-   **O branch  _master_** 
**nunca**  deve ser alterado diretamente. Nele está/estará contido a versão estável do sistema, que ja foi aprovada
-   **O branch  _development_** 
deve ser o ambiente onde as alterações feitas nos demais branches sejam aplicadas para testes para serem aprovadas para ir a branch _'master'_ .
Uma vez que tais modificações sejam aprovados nos testes, poderá ser realizado um  _merge_  desse branch(_'development'_) com o _'master'_.
 -   **O branch  _feature/_**  
São _branches_ nas quais serão desenvolvidos e implementados novos recursos (Stories/Issues). Essas _branches_ têm o nome começando com feature/* (exemplo: feature/login) e são criadas a partir da _branch_ _development_. Ao término do desenvolvimento da feature em questão, esta _branch_ será mesclada com a _development_ e em seguida apagada.
-   **O branch  _hotfix/_**  
São _branches_ nas quais são realizadas correções de bugs críticos encontrados no código em nível de produção, e que por isso são criadas a partir da _branch master_, e após correções são juntadas diretamente com a _branch master_, para que a versão atual seja corrigida, e com a _branch_ _development_ e a _branch release/, para que essa correção persista para as próximas versões. Essas _branches_ têm o nome começando com hotfix/ e terminando com o próximo sub-número de versão (exemplo: hotfix/2.31.1); Seguindo a nomenclatura de versionamento, abaixo.
-   **O branch  _release/_**  
São _branches_ com um nível de confiança maior do que a _branch_ _development_e a última chance de identificar e corrigir algum bug antes de ir para a _branch master_. Estas se encontram em nível de preparação para ser juntada com a _branch_ master e com a _branch_ _development_(para caso tenha ocorrido alguma correção de bug na branch release/* em questão). Essas _branches_ têm o nome começando com release/ e terminando com o número da próxima versão do software (seguindo o exemplo do hotfix, dado acima, seria algo como release/2.32.0).

Basicamente, a hierarquia de branchs é a seguinte:
 
**master <-- release/ <-- development <-- feature/ feature2.
Tendo ainda a hotfix/ ligada diretamente a master, release e development.**      			

### **Nomenclatura de versionamento**

"Versão X.Y.Z", onde X,Y e Z são números positivos representando, respectivamente: Projeto, Features, Bugfix. Ou seja, esta >primeira versão do ScratchOut, Feature 12, correção do quarto bug achado ficaria: "Versão 1.12.4"

 ## Padrões de Commit
 
 Atualização de Conteúdo 1.12.4 -- ScratchOut
Eduardo - 18/09/2018

###### **--seguindo a regra de Nomenclatura de Versionamento acima.**
##### Conteúdo adicionado
- Lista de conteúdo adicionado sem termos muito técnicos, será a visualização para o usuário final.
##### Conteúdo técnico adicionado
  - Lista de conteúdo adicionado com termos técnicos,será usado para o entendimento da equipe
no que foi realmente alterado ou adicionado.
##### Bugs/Problemas corrigidos
- Relatar bugs e problemas que já foram encontrados e respectivamente corrigidos.
##### Bugs/Problemas encontrados
 - Relatar bugs encontrados que ainda não foram corrigidos,
 caso o bug seja critico é aconselhável que seja corrigido imediatamente.
