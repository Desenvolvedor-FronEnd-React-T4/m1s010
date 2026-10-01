// Dados de exemplo: 14 produtos da Bikcraft
const produtos = [
  'Sport 1', 'Sport 2', 'Sport 3', 'Urban 1', 'Urban 2', 'Urban 3', 'Cargo 1',
  'Cargo 2', 'Cargo 3', 'Kids 1', 'Kids 2', 'Eletrica 1', 'Eletrica 2', 'Eletrica 3'
]

const porPagina = 6
const totalPaginas = Math.ceil(produtos.length / porPagina) // 14 / 6 = 2,33 → 3 páginas
const lista = document.getElementById('lista-produtos')
const links = document.querySelectorAll('#paginacao a')

function mostrarPagina(pagina) {
  // COMPLETE AQUI: calcule o índice de início e o de fim da página atual
  // dica: início = (pagina - 1) * porPagina; fim = início + porPagina
  const inicio = 0
  const fim = porPagina
  const itens = produtos.slice(inicio, fim)

  lista.innerHTML = ''
  itens.forEach((nome) => {
    const li = document.createElement('li')
    li.textContent = nome
    lista.appendChild(li)
  })

  links.forEach((link) => {
    if (Number(link.dataset.pagina) === pagina) {
      link.setAttribute('aria-current', 'page')
    } else {
      link.removeAttribute('aria-current')
    }
  })
}

links.forEach((link) => {
  link.addEventListener('click', (evento) => {
    evento.preventDefault()
    mostrarPagina(Number(link.dataset.pagina))
  })
})

mostrarPagina(1)
