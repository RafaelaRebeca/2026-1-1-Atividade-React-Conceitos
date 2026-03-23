# 2026 - POS - Atividade avaliativa do 1o bimestre no. 1

## Informações gerais
- **Objetivo**: atividade avaliativa com conceitos básicos de react (jsx, props, state e eventos)
- **Público alvo**: alunos da disciplina de [POS](https://github.com/infoweb-pos/) do curso de [Infoweb](https://diatinf.ifrn.edu.br/cursos/tecnico-em-informatica-para-internet/) na [DIATINF](https://diatinf.ifrn.edu.br/) no [CNAT-IFRN](https://portal.ifrn.edu.br/campus/natalcentral/)
- **Professor**: [L A Minora](https://github.com/leonardo-minora/)
- **Aluno**: Rafaela Lima

## Checklist
- [x] 1. Fork desse repositório
- [x] 2. Colocar o nome nesse arquivo `README.md`
- [ ] 3. Clonar o repositório remoto na máquina local ou criar um _codespace_
- [ ] 4. Criar um projeto nextjs
- [ ] 5. Importar bibliotecas e lançar aplicação web
- [ ] 6. Montar uma página de pesquisa de produtos
- [ ] 7. Publicar o resultado no Github

---

## Atividades

---
### 1. Fork desse repositório

---
### 2. Colocar o nome nesse arquivo `README.md`

---
### 3. Clonar o repositório remoto na máquina local ou criar um _codespace_

---
### 4. Criar um projeto nextjs

site de documentação do [nextjs](https://nextjs.org/)

```bash
npx create-next-app@latest app-produtos-front --typescript --tailwind --react-compiler --biome --app --src-dir --import-alias "@/*" --disable-git --agents-md
```

acesse a pasta da aplicação.

```bash
cd app-produtos-front

```
---
### 5. Importar bibliotecas e lançar aplicação web

para adicionar as bibliotecas, execute o comando abaixo.

```bash
yarn add axios

```

**observação** se for necessário adicionar o `yarn`, execute `npm install -g yarn`.

para lançar a aplicação web, execute o comando abaixo.

```bash
yarn dev

```

deverá ter como resposta uma saída parecida com o terminal abaixo.

```shell
yarn run v1.22.22
$ next dev
▲ Next.js 16.2.1 (Turbopack)
- Local:         http://localhost:3000
- Network:       http://10.0.14.28:3000
✓ Ready in 493ms

```

---
### 6. Montar uma página de pesquisa de produtos

para configurar incialmente sua aplicação, deve fazer as seguintes tarefas:

1. limpe o jsx do arquivo `/src/app/page.tsx/`
2. crie o arquivo `/src/services/api.ts` conforme código abaixo
3. inicialize a lista de produtos conforme código abaixo em `/src/app/page.tsx/`

arquivo `/src/services/api.ts`
```ts
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL ? process.env.API_URL : "https://dummyjson.com/", 
  headers: {
    'Content-Type': 'application/json',
  },
});

const getProdutosTodos = () => {
    return api.get("/products/");
}

export { getProdutosTodos };
export default api;

```

arquivo `/src/app/page.tsx/`
```jsx
"use client";

import { useEffect, useState } from "react";
import { getProdutosTodos } from "@/services/api"

export default function Home() {
  const [produtos, atualizarProdutos] = useState();

  useEffect(() => {
    getProdutosTodos().then((resultado) => {
      atualizarProdutos(resultado.data.products);
    })
  }, []);

  return (
    <div>
      <header>
        <h1>Pesquisa de produtos</h1>
      </header>
      <main>
        <h1>Pesquisa de produtos</h1>       
      </main>
    </div>
  );
}

```

Tarefas mínimas a serem realizadas:
1. no `<header>` monte pelo menos 1 `input` do tipo texto para entrada do título do produto a pesquisar.
2. no `<main>` monte cartões (1 para cada produto) que é atualizado conforme o usuário digita no `input` de pesquisa.


exemplo de código para pegar dados dos produtos.
```ts
produtos[0].id;
produtos[0].title;
produtos[0].description
produtos[0].price
produtos[0].rating
produtos[0].tags // é um vetor
produtos[0].reviews // é um vetor
produtos[0].images[0] // uma string com a imagem do produto
```

maires informações sobre o json com os dados recebidos, pode acessar o exemplo `https://dummyjson.com/products/1`.

---
### 7. Publicar o resultado no Github

Lembre de fazer os `commit` (a cada avanço guarde com um texto explicativo) e 1 `push` ao final de tudo.
---
