# Bikcraft — gabarito do projeto condutor (Semanas 07 a 10)

Este é o gabarito completo e funcional do site Bikcraft, o projeto que
acompanha a turma desde a Semana 07. Cada semana adicionou uma camada nova
sobre o que já existia — abra qualquer arquivo (`style.css`, `script.js`,
`index.html`, `bicicletas.html`, `contato.html`) e procure pelos comentários
`SEMANA 07`, `SEMANA 08`, `SEMANA 09` e `SEMANA 10 · DIA 1/2/3` para ver
exatamente o que foi construído em cada etapa.

## Como abrir

Não precisa instalar nada: abra `index.html` no navegador (ideal com a
extensão **Live Server** do VS Code, para os links entre páginas
funcionarem). As bibliotecas (Google Fonts, Font Awesome, Bootstrap) entram
via CDN, direto no `<head>` de cada página.

## O que cada semana entregou

| Semana | Página(s) | O que foi adicionado |
|---|---|---|
| 07 | `index.html`, `bicicletas.html` | Estrutura das páginas, cabeçalho, hero da home, grade de bicicletas, variáveis de cor/fonte, botão de destaque |
| 08 | `bicicletas.html` + `script.js` | `id` em cada card de bicicleta e classe compartilhada `card-bicicleta`; captura via `console.log` do nome/preço de todas as bikes e nome/preço/imagem da Bicicleta 1 |
| 09 | `contato.html` + `script.js` | Formulário de contato (nome, telefone, e-mail, mensagem), captura no `submit` com `preventDefault()`, confirmação na página e aviso de campo vazio em vermelho |
| 10 · Dia 1 (29/09) | todas | Responsividade: `meta viewport`, `clamp()` no título, `media query` mobile-first no cabeçalho, imagem fluida |
| 10 · Dia 2 (01/10) | `contato.html` | As duas colunas do contato em Flexbox (`flex: 5` / `flex: 7`), formulário com `flex-wrap` (Nome/Telefone), seção das lojas (RJ/SP) com `flex-wrap` + `flex-basis` |
| 10 · Dia 3 (02/10) | `contato.html`, `bicicletas.html` | Bootstrap via CDN (botão `.btn` customizado sem `!important`), ícones do Font Awesome, rodapé com redes sociais, transições e `:hover` |

## Estrutura de arquivos

```
Bikcraft_Gabarito/
├── index.html        (home)
├── bicicletas.html    ("escolha a sua")
├── contato.html       (formulário de contato — projeto da Semana 10)
├── style.css          (folha de estilos única, comentada por semana)
├── script.js          (script único, comentado por semana)
├── assets/
│   ├── bike-1.svg      (Magic Might)
│   ├── bike-2.svg      (Nimbus Stark)
│   └── bike-3.svg      (Nebula Cosmic)
└── Material_do_Aluno/
    ├── Documento_Funcional_Bikcraft.html/.pdf
    └── Refinamento_Tecnico_Bikcraft.html/.pdf
```

> As imagens das bicicletas são SVGs simples (sem dependência externa) só
> para o gabarito ficar completo e navegável offline — troque pelas fotos
> reais do produto quando o projeto virar um site de verdade.
