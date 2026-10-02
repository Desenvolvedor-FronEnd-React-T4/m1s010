// Mede, em pixels, o que cada unidade virou na tela. Serve só para VER o resultado:
// nenhuma regra de layout depende deste arquivo.
const medidas = document.getElementById('medidas')

function px(valor) {
  return Math.round(parseFloat(valor) * 10) / 10 + 'px'
}

function medir() {
  const raiz = parseFloat(getComputedStyle(document.documentElement).fontSize)
  const largura = window.innerWidth
  const altura = window.innerHeight

  const caixaPx = getComputedStyle(document.querySelector('.caixa-px')).width
  const caixaRem = getComputedStyle(document.querySelector('.caixa-rem')).width
  const caixaEm = getComputedStyle(document.querySelector('.caixa-em')).width
  const caixaPct = getComputedStyle(document.querySelector('.caixa-pct')).width
  const caixaVh = getComputedStyle(document.querySelector('.caixa-vh')).height
  const container = getComputedStyle(document.querySelector('.container')).width

  medidas.innerHTML = [
    `janela: ${largura} × ${altura}px   |   1rem = ${px(raiz)}   |   container = ${px(container)}`,
    `.caixa-px  (width: 100px)    → ${px(caixaPx)}`,
    `.caixa-rem (width: 8rem)     → ${px(caixaRem)}`,
    `.caixa-em  (width: 6em)      → ${px(caixaEm)}`,
    `.caixa-pct (width: 50%)      → ${px(caixaPct)}`,
    `.caixa-vh  (height: 20vh)    → ${px(caixaVh)}   (20% de ${altura}px)`
  ].join('\n')
}

window.addEventListener('resize', medir)
medir()
