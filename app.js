function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");
  
let campoPesquisa = document.getElementById
("campo-pesquisa").value

// se campoPesquisa for uma string sem nada 
if (!campoPesquisa){
  section.innerHTML = "<p>nenhuma informação encontrada. Você precisa digitar o nome de um jogador de brawl stars</p>"
  return
}

campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado da lista de resultados
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
            <a href="${dado.youtube}" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">mais informações</a>
        </div>
      `;
      }
    }

    if (!resultados) {
        resultados = "<p>nenhuma informação encontrada</p>"
    }
  
    // Atualiza o conteúdo HTML da seção com os resultados gerados
    section.innerHTML = resultados;
  }