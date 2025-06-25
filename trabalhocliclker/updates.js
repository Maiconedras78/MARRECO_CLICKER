let pontos = 0;
let valorClique = 1;
let upgradesComprados = 0;

function clicar() {
    pontos += valorClique;
    atualizarTela();
}

function comprarUpgrade(id) {
    let custo = 0;
    let bonus = 0;

    if (id === 1) {
        custo = 10;
        bonus = 1;
    } else if (id === 2) {
        custo = 50;
        bonus = 8;
    } else if (id === 3) {
        custo = 100;
        bonus = 32;
    }

    if (pontos >= custo) {
        pontos -= custo;
        valorClique += bonus;
        upgradesComprados++;
        atualizarTela();
    } else {
        alert("Você não tem pontos suficientes para este upgrade.");
    }
}

function atualizarTela() {
    document.getElementById("pontos").textContent = "Pontuação Atual: " + pontos;
    document.getElementById("valor").textContent = "Valor do Clique: " + valorClique;
    document.getElementById("upgrades").textContent = "Upgrades Comprados: " + upgradesComprados;
}