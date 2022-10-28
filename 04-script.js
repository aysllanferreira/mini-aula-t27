// find. filter. map. reduce. ||

const objeto = {
  pessoas: [
    {
      nome: 'Mike',
      sobrenome: 'Perez',
    },
    {
      nome: 'Luciana',
      sobrenome: 'Garcia',
    },
  ]
};

const { pessoas } = objeto;

// Se passado um nome ou sobrenome por parametro, retorne a pessoa encontrada.
// Se o parametro for vazio, retorne um array vazio.
// Nome: Mike Perez.

const findMike = (nomes) => {
  if(!nomes) return [];
  
  const pessoa = pessoas.find(({ nome, sobrenome }) => nome === nomes || sobrenome === nomes);
  return `Nome: ${pessoa.nome} ${pessoa.sobrenome}`;
 
};

console.log(findMike('Garcia'));