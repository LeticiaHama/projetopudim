function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  //console.log(campoPesquisa);

  //se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
    section.innerHTML = "<p>Nenhum pudim foi encontrado. Digite o nome do pudim ou ingrediente que deseja encontrar.</p>"
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  //inicializar uma string vazia
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  //para cada dentro da lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()

    //se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      //cria um novo elemento
      resultados += `
      <div class="item-resultado">
           <h2>
             <a href=${dado.link}target="_blank">${dado.titulo}</a>
           </h2>
           <p class="descricao-meta">${dado.descricao}<img
               src=${dado.imagem} alt="Foto deliciosa de um pudim"></p>
           <a href=${dado.link} target="_blank">Acesse a
             receita</a>
       </div>
 `
    }

  }

  if (!resultados) {
    resultados = "<p>Nenhum pudim foi encontrado</p>"
  }

  section.innerHTML = resultados
}












