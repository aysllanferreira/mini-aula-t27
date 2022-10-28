// reduce. ||

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
  
  const pessoa = pessoas.filter(({ nome, sobrenome }) => nome === nomes || sobrenome === nomes)
    .map(({ nome, sobrenome }) => `Nome: ${nome} ${sobrenome}.`)
  return pessoa;
};

console.log(findMike('Garcia'));