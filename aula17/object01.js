let amigo = {nome: 'Renan', 
idade: '29', 
peso: '85',
sexo: 'masculino', 
estadocivil: 'casado',
engordar(p=0){
    console.log(this.peso += p)
}}

amigo.engordar(Number(2))
console.log(`${amigo.nome} tem ${amigo.idade} anos, tem ${amigo.peso} Kg e é ${amigo.estadocivil}`)