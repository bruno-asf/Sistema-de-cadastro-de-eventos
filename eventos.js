let participante = 19;

if (participante >= 18){
    console.log(`Participante possui ${participante} anos. É maior de 18 anos. Cadastro realizado com sucesso!`);
} else{
    console.log(`Partipante possui ${participante} anos, cadastro NÃO permitido para menores de 18 anos.`);
}

let listaParticipantes = ["Bruno", "Stefany", "Joao", "Marai", "Carlos", "Rute", "Matusalem", "Alice", "Danilo", "Wenne"];

if (listaParticipantes.length < 100) {
    console.log(`A lista tem ${listaParticipantes.length} participantes, ainda possui espaço para cadastramento!`);
} else {
    console.log(`A lista tem ${listaParticipantes.length} participantes, 
    NÃO há mais espaço disponível para cadastramento!`);
}

let dataAtual = 8;
let dataEvento = 9;

if (dataEvento > dataAtual) {
    console.log(`A data do evento que será realizado dia 0${dataEvento} é posterior a data atual 0${dataAtual}, 
    Evento liberado.`);
} else {
    console.log(`A data do evento que será realizado dia 0${dataEvento} é anterior a data atual 0${dataAtual}, 
data inválida.`);
}
