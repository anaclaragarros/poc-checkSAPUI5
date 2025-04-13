# 📋 poc-checkSAPUI5

Este projeto foi realizado utilizando **SAPUI5**. O objetivo foi adaptar um exemplo de listagem de notas fiscais a partir de um arquivo JSON local, para consumir uma **API online** real de tarefas (todos), com funcionalidades de busca, visualização de detalhes e controle de conclusão, seguindo boas práticas de desenvolvimento frontend com SAPUI5.

---

## 📺 Preparando o ambiente

Antes de iniciar o projeto, o ambiente foi configurado com base nas orientações do vídeo abaixo:

🔗 [Preparando ambiente SAPUI5 com VS Code](https://www.youtube.com/watch?v=sdnpmgfbYAk)

---

## 📚 Base do Projeto

O exemplo original, disponível na documentação oficial do SAPUI5:

🔗 [Documentação SAPUI5 - List Report usando JSON](https://sapui5.hana.ondemand.com/#/topic/3da5f4be63264db99f2e5b04c5e853db)

Foi adaptado para consumir dados diretamente do endpoint:

🔗 [https://jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos)

---

## ✅ Funcionalidades implementadas

✔️ **Listagem de Tarefas (Todos)**  
- Consumo da API pública `jsonplaceholder` usando `ODataModel` com `JSON`.

✔️ **Pesquisa por Título da Tarefa**  
- Campo de busca filtra dinamicamente os itens na tabela.

✔️ **Visualização de Detalhes em Outra View**  
- Ao clicar em um item da listagem, o usuário é redirecionado para uma segunda view com os detalhes da tarefa selecionada.

✔️ **Campo “completed” com Bind a Controle Visual**  
- O campo `completed` está ligado a um `CheckBox` com **data binding bidirecional**, refletindo o status atual da tarefa.


---

## 🛠️ Tecnologias utilizadas

- **SAPUI5** (JavaScript framework para aplicações empresariais)
- **MVC Pattern** (Model-View-Controller)
- **JSONModel** para consumo da API
- **Data Binding** com controles de interface (`Table`, `SearchField`, `CheckBox`)
- **VS Code** como ambiente de desenvolvimento

---

## 🚀 Como executar

1. Clone este repositório:

```bash
git clone https://github.com/anaclaragarros/poc-checkSAPUI5.git
cd poc-checkSAPUI5

📄 Licença
Este projeto é de uso livre para fins de estudo.

