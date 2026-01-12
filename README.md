# ecommerce-dummy-crud
### Sistema de Catálogo e Gestão de Produtos

Esta é uma aplicação interativa desenvolvida em React para gerenciar um catálogo de produtos de e-commerce. Ela permite visualizar, adicionar, editar e excluir produtos através de uma interface administrativa intuitiva.

O projeto foca na gestão de dados de produtos, oferecendo uma base sólida para um painel administrativo de e-commerce.

---

## Demonstração
Visualize o projeto no CodeSandbox:  

<a href="https://codesandbox.io/p/github/luishmerlo/ecommerce-dummy-crud">Clique aqui para acessar</a>

---

## Funcionalidades

-   **Listagem de Produtos:** Visualização de todos os produtos cadastrados com informações essenciais.
-   **Detalhes do Produto:** Exibição de informações completas de um produto específico, incluindo imagens, descrição, preço, dimensões e avaliações.
-   **Adição de Novo Produto:** Formulário para cadastrar novos produtos no catálogo.
-   **Edição de Produto:** Funcionalidade para modificar os detalhes de produtos existentes.
-   **Exclusão de Produto:** Opção para remover produtos do catálogo.
-   **Navegação:** Menu de navegação entre as diferentes seções do sistema.

---

## Tecnologias e Bibliotecas Utilizadas

### Core
-   **React 19:** Biblioteca JavaScript para construção de interfaces de usuário.
-   **HTML5**
-   **CSS Modules:** Para escopo de estilos a nível de componente.

### Gerenciamento de Estado e Formulários
-   **React Hook Form:** Para gerenciamento de formulários e validação.

### Roteamento
-   **React Router DOM 7:** Para navegação entre as páginas da aplicação.

### Requisições HTTP
-   **Axios:** Cliente HTTP baseado em Promises para fazer requisições às APIs externas.

### Notificações
-   **React Toastify:** Para exibir notificações de sucesso ou erro de forma amigável ao usuário.

---

## Estrutura do Projeto

```
meu-projeto-react/
├── public/                  # Arquivos estáticos (index.html)
├── src/                     # Código-fonte
    ├── components/          # Componentes reutilizáveis (Header)
    ├── pages/               # Páginas da aplicação (ProductList, ProductDetail, ProductForm)
    ├── App.js               # Componente principal da aplicação
    ├── index.js             # Ponto de entrada da aplicação
    └── styles.css           # Estilos globais ou variáveis CSS
```

---

## Decisões Técnicas

O projeto foi desenvolvido com as seguintes decisões em mente:

-   **Componentização:** Utilização de componentes React para modularidade e reuso de código.
-   **CSS Modules:** Para evitar conflitos de estilo e manter os estilos encapsulados a cada componente.
-   **Gerenciamento de Estado:** Utilização de `useState` e `useEffect` do React para gerenciamento de estado local e efeitos colaterais.
-   **Roteamento Declarativo:** Uso do `react-router-dom` para uma navegação clara e intuitiva entre as diferentes partes da aplicação.
-   **Validação de Formulários:** Implementação do `react-hook-form` para validação de formulários eficiente e com boa experiência de usuário.
-   **Consumo de API:** Utilização do `axios` para interagir com a API, facilitando a gestão de dados de produtos.
-   **Feedback ao Usuário:** Implementação de `react-toastify` para fornecer feedback visual sobre as operações (sucesso, erro).

---

## Como rodar o projeto localmente

Clone o repositório:
```bash
git clone https://github.com/luishmerlo/ecommerce-dummy-crud.git
```

Entre no diretório do projeto:
```bash
cd ecommerce-dummy-crud
```

Instale as dependências:
```bash
npm install

# Se encontrar erro de dependência, use:

npm install --legacy-peer-deps
```

Inicie o servidor de desenvolvimento:
```bash
npm start
```

---

## Licença
Projeto desenvolvido para fins acadêmicos e de portfólio.

