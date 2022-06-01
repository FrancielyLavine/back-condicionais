let jogada1 = "papel"
let jogada2 = "pedra"



if (jogada1 === jogada2){
    console.log("empate")
}else if ((jogada1 ==="pedra" && jogada2 ==="tesoura") || (jogada1 ==="tesoura" && jogada2 === "pedra") ){
    console.log("pedra")
}else if ((jogada1 ==="papel" && jogada2 ==="tesoura") || (jogada1 ==="tesoura" && jogada2 === "papel")){
    console.log("tesoura")
}else{
    console.log("papel")
}