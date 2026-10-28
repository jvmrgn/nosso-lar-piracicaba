# Nosso Lar

Site institucional responsivo em português, com HTML, CSS e JavaScript, servido pelo Vite.

## Executar

```sh
npm install
npm run dev
```

Abra o endereço informado pelo Vite. Neste ambiente a prévia usa http://127.0.0.1:5173 (localhost pode resolver para outro serviço IPv6).

## Produção

```sh
npm run build
npm run preview
```

A pasta `dist/` contém o site estático para hospedagem. Publicação pelo GitHub Pages: https://jvmrgn.github.io/nosso-lar-piracicaba/. Alterações enviadas à branch `main` disparam o build e a publicação automática.

## Conteúdo e manutenção

- `index.html`: textos, seções, fotografias e metadados.
- `style.css`: identidade visual e adaptação para celular.
- `main.js`: ícones, menu, filtros, galeria ampliável e links de WhatsApp.
- `public/img/`: imagens fornecidas no repositório https://github.com/jvmrgn/NossoLar/tree/main/img.
- A logo foi mantida intacta sobre uma base clara.
- Número de contato: `5519994931313`, obtido do HTML do repositório fornecido, com código do Brasil acrescentado. Para alterar, edite `whatsappNumber` em `main.js`.
- Cidade e Instagram também vieram do repositório fornecido.
- Confirmar com a clínica o número atual, endereço completo, horários, serviços e políticas de admissão/visitação antes de publicar. As perguntas frequentes orientam o contato com a equipe, sem presumir regras específicas.
- História, 13 anos de atuação, equipe, estrutura, serviços e frequências foram fornecidos pelo usuário na revisão de conteúdo. Não foram incluídos depoimentos fictícios.

## Verificação

Build de produção concluído. Verificação no navegador em 1440 × 1000 e 390 × 844: menu mobile, filtro de jardim, abertura/fechamento da galeria e expansão do FAQ. Sem imagens quebradas, âncoras inválidas, transbordamento horizontal no celular ou erros de console. Links de WhatsApp verificados sem envio de mensagens.
