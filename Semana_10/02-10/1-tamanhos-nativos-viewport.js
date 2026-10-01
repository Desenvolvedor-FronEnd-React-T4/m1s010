const medida = document.getElementById('medida')
const faixa = document.getElementById('faixa')
const dpr = document.getElementById('dpr')

function atualizar() {
  const largura = window.innerWidth
  const altura = window.innerHeight

  medida.textContent = `${largura} × ${altura} px CSS`
  dpr.textContent = `DPR (pixels físicos por pixel CSS): ${window.devicePixelRatio}`

  // As faixas repetem as media queries do CSS: 768px e 1024px
  if (largura >= 1024) {
    faixa.textContent = 'Faixa: desktop (a partir de 1024px)'
  } else if (largura >= 768) {
    faixa.textContent = 'Faixa: tablet (768px a 1023px)'
  } else {
    faixa.textContent = 'Faixa: celular (até 767px)'
  }
}

window.addEventListener('resize', atualizar)
atualizar()
