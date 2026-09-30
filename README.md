# M1S010 — Desenvolvimento Front-End [React] T4

Material didático do **Módulo 1, Semana 10** do curso Desenvolvimento Front-End [React] T4 (SENAI/SC), sob responsabilidade do professor Lisandro Faria Pinheiro. Este repositório reúne slides, planos de aula, exercícios e o projeto condutor (**Bikcraft**) que evolui desde a Semana 07.

## Ementa da semana

**CSS Avançado: Flexbox, Especificidade e Responsividade**

| Data | Tema central | O que é trabalhado |
|---|---|---|
| 29/09 | Responsividade na prática | `meta viewport`, mobile-first, unidades (`px`/`%`/`rem`/`vw`), `clamp()`, media queries, imagens fluidas |
| 01/10 | Flexbox aprofundado + especificidade | `flex-wrap`, `gap`, propriedade `flex` (grow/shrink/basis), `flex-direction` responsivo, cálculo de especificidade, cascata, herança, por que evitar `!important` |
| 02/10 | Bibliotecas de componentes e ícones | Bootstrap 5 e Font Awesome via CDN, customização com especificidade (sem `!important`), transições e `:hover` |

A sequência didática da semana é **adaptar a tela → organizar o layout com Flexbox → equipar com bibliotecas prontas**, sempre em cima da mesma página: a página de contato do projeto Bikcraft, herdada pronta da Semana 09.

## Projeto condutor: Bikcraft

A **Bikcraft** é o e-commerce fictício de bicicletas elétricas usado como fio condutor desde a Semana 07. Cada semana acrescenta uma camada nova sobre o que já existia:

| Semana | O que a Bikcraft ganhou |
|---|---|
| 07 | Estrutura das páginas (home + catálogo), cabeçalho, hero, variáveis de cor/fonte, Flexbox básico, Box Model |
| 08 | `id`/`class` em cada bicicleta do catálogo + captura de dados via JavaScript (`console.log`) |
| 09 | Página de contato: formulário completo, captura no `submit`, confirmação na tela |
| 10 | A mesma página de contato ganha responsividade, layout em 2 colunas com Flexbox e acabamento com Bootstrap/Font Awesome |

O gabarito completo e funcional do projeto está em [`Bikcraft_Gabarito/`](Bikcraft_Gabarito/), com comentários no código marcando exatamente o que cada semana adicionou.

## Estrutura do repositório

```
m1s010/
├── Desenvolvedor Front-End [React] T4 - M1S07 - Aulas Técnicas...pptx   (slides da Semana 07)
├── Desenvolvedor Front-End [React] T4 - M1S10 - Aulas Técnicas.pptx/.pdf (slides da Semana 10)
├── Guia_Professor_M1S09_Formularios_JS_T4.html/.pdf     (material da Semana 09, referência de padrão)
├── Plano_de_Aula_M1S09_Formularios_JS_T4.html/.pdf
├── Perguntas_Kahoot_M1S09_Formularios_JS_T4.pdf
│
├── Guia_Tamanhos_Padrao_Responsivo.html                  (tamanhos de tela, breakpoints, fontes e espaçamentos padrão)
├── Guia_Media_Queries_e_Responsividade.html              (o que é responsividade/media query e como aplicar no CSS)
│
├── Semana_10/                                            ← material didático da Semana 10
│   ├── Guia_Professor_M1S10_CSS_Avancado_T4.html/.pdf     (roteiro completo dos 3 encontros)
│   ├── Plano_de_Aula_M1S10_CSS_Avancado_T4.html/.pdf      (cronograma detalhado por horário)
│   ├── Perguntas_Kahoot_M1S10_CSS_Avancado_T4.html/.pdf   (15 questões, 5 por encontro)
│   ├── Ponte_Semana07_para_Semana10.html/.pdf             (conecta os fundamentos da S07 ao CSS avançado)
│   ├── Ferramentas_de_Apoio_M1S10.html/.pdf               (extensões VS Code + vídeo-aulas recomendadas)
│   ├── 29-09/                                             (exercícios de responsividade)
│   ├── 01-10/                                             (exercícios de Flexbox + especificidade)
│   └── 02-10/                                             (exercícios de bibliotecas/ícones)
│
└── Bikcraft_Gabarito/                                     ← gabarito completo do projeto (Semanas 07 a 10)
    ├── index.html, bicicletas.html, contato.html
    ├── style.css, script.js
    ├── assets/                                            (imagens das bicicletas)
    ├── README.md                                          (proveniência por semana)
    └── Material_do_Aluno/                                 (guia funcional + técnico para o aluno construir o projeto)
```

## Materiais por perfil

### Para o professor
- **Guia do Professor** — roteiro fala a fala, slide a slide, dos 3 encontros, com analogias, perguntas de verificação e erros comuns a antecipar.
- **Plano de Aula** — cronograma detalhado por horário, objetivos, metodologia e critérios de avaliação de cada encontro.
- **Perguntas Kahoot** — banco de 15 questões (4 alternativas, gabarito e comentário docente), 5 por encontro.

### Para o aluno
- **Ponte Semana 07 → Semana 10** — mostra, com código comparado lado a lado, como cada fundamento já visto na Semana 07 (Flexbox básico, unidades de medida, seletores) evolui para o conteúdo desta semana.
- **Ferramentas de Apoio** — extensões do VS Code recomendadas e vídeo-aulas curtas (em português) organizadas pelos 3 encontros.
- **Exercícios diários** (`Semana_10/29-09`, `01-10`, `02-10`) — HTML + CSS externo, um exercício por arquivo, com comentários explicativos e gabarito comentado no próprio arquivo.
- **`Bikcraft_Gabarito/Material_do_Aluno/`** — Documento Funcional (o que cada página do site precisa ter) e Refinamento Técnico (estrutura de pastas, tags/recursos e passo a passo com modelos de código).

## Como abrir os exercícios e o projeto Bikcraft

Os arquivos `.html` não dependem de instalação: abra a pasta no VS Code e use a extensão **Live Server** (`ritwickdey.LiveServer`) para rodar com recarregamento automático — necessário para os links entre páginas do Bikcraft funcionarem corretamente. Os documentos `.html` de professor/aluno também têm uma versão `.pdf` pronta para impressão ou envio.
