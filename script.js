const dadosJogadores = {
    brasil: [
        { n: "Arrascaeta", p: "Meia", num: "14", img: "arrascaeta.jpg", g: 85, sel: "brasil" },
        { n: "Neymar Jr", p: "Atacante", num: "10", img: "neymar.jpg", g: 77, sel: "brasil" },
        { n: "Vinícius Jr", p: "Atacante", num: "7", img: "vini.jpg", g: 90, sel: "brasil" },
        { n: "Bruno", p: "Goleiro", num: "1", img: "bruno.jpg", g: 0, sel: "brasil" },
        { n: "Robinho", p: "Atacante", num: "11", img: "robinho.jpg", g: 28, sel: "brasil" },
        { n: "Ronaldinho", p: "Meia", num: "10", img: "ronaldinho.jpg", g: 33, sel: "brasil" },
        { n: "Vampeta", p: "Volante", num: "8", img: "vampeta.jpg", g: 2, sel: "brasil" },
        { n: "Paqueta", p: "Meia", num: "8", img: "paqueta.jpg", g: 9, sel: "brasil" },
        { n: "Zico", p: "Meia", num: "10", img: "zico.jpg", g: 48, sel: "brasil" },
        { n: "Daniel", p: "Lateral", num: "12", img: "daniel.jpg", g: 1, sel: "brasil" }
    ],
    argentina: [
        { n: "Messi", p: "Atacante", num: "10", img: "messi.jpg", g: 106, sel: "argentina" },
        { n: "Di María", p: "Meia", num: "11", img: "maria.jpg", g: 29, sel: "argentina" },
        { n: "Agüero", p: "Atacante", num: "19", img: "aguero.jpg", g: 41, sel: "argentina" },
        { n: "Dybala", p: "Atacante", num: "21", img: "dybala.jpg", g: 3, sel: "argentina" },
        { n: "L. Martínez", p: "Atacante", num: "22", img: "lautaro.jpg", g: 21, sel: "argentina" },
        { n: "Maradona", p: "Meia", num: "10", img: "maradona.jpg", g: 34, sel: "argentina" },
        { n: "Riquelme", p: "Meia", num: "10", img: "riquelme.jpg", g: 17, sel: "argentina" },
        { n: "Mascherano", p: "Volante", num: "14", img: "mascherano.jpg", g: 3, sel: "argentina" },
        { n: "Batistuta", p: "Atacante", num: "9", img: "batistuta.jpg", g: 54, sel: "argentina" },
        { n: "Zanetti", p: "Lateral", num: "4", img: "zanetti.jpg", g: 5, sel: "argentina" }
    ],
    franca: [
        { n: "Mbappé", p: "Atacante", num: "7", img: "mbappe.jpg", g: 46, sel: "franca" },
        { n: "Griezmann", p: "Atacante", num: "7", img: "griezmann.jpg", g: 44, sel: "franca" },
        { n: "Kanté", p: "Volante", num: "13", img: "kante.jpg", g: 2, sel: "franca" },
        { n: "Benzema", p: "Atacante", num: "9", img: "benzema.jpg", g: 37, sel: "franca" },
        { n: "Pogba", p: "Meia", num: "6", img: "pogba.jpg", g: 11, sel: "franca" },
        { n: "Zidane", p: "Meia", num: "10", img: "zidane.jpg", g: 31, sel: "franca" },
        { n: "Henry", p: "Atacante", num: "12", img: "henry.jpg", g: 51, sel: "franca" },
        { n: "Ribéry", p: "Meia", num: "7", img: "ribery.jpg", g: 16, sel: "franca" },
        { n: "Vieira", p: "Volante", num: "4", img: "vieira.jpg", g: 6, sel: "franca" },
        { n: "Thuram", p: "Zagueiro", num: "15", img: "thuram.jpg", g: 2, sel: "franca" }
    ],
    alemanha: [
        { n: "Müller", p: "Atacante", num: "25", img: "muller.jpg", g: 45, sel: "alemanha" },
        { n: "Neuer", p: "Goleiro", num: "1", img: "neuer.jpg", g: 0, sel: "alemanha" },
        { n: "Kroos", p: "Meia", num: "8", img: "kroos.jpg", g: 17, sel: "alemanha" },
        { n: "Kimmich", p: "Meia", num: "6", img: "kimmich.jpg", g: 6, sel: "alemanha" },
        { n: "Rüdiger", p: "Zagueiro", num: "2", img: "rudiger.jpg", g: 3, sel: "alemanha" },
        { n: "Özil", p: "Meia", num: "10", img: "ozil.jpg", g: 23, sel: "alemanha" },
        { n: "Schweinsteiger", p: "Meia", num: "7", img: "schweinsteiger.jpg", g: 24, sel: "alemanha" },
        { n: "Lahm", p: "Lateral", num: "16", img: "lahm.jpg", g: 5, sel: "alemanha" },
        { n: "Klose", p: "Atacante", num: "11", img: "klose.jpg", g: 71, sel: "alemanha" },
        { n: "Matthäus", p: "Meia", num: "10", img: "matthaus.jpg", g: 23, sel: "alemanha" }
    ]
};

let cartasEscolhidas = [];
let scores = [0, 0];
let jogadorAtual = 0;
let bloqueioBoard = false;
let selecaoAtiva = "";

function mudarSelecao(pais) {
    selecaoAtiva = pais;
    
    // UI: Marcar bandeira ativa
    document.querySelectorAll('.seletores-pais img').forEach(img => img.classList.remove('active'));
    event.target.classList.add('active');
    
    document.getElementById('status-jogo').innerText = `Jogando com: ${pais.toUpperCase()}`;
    
    carregarTabuleiro(pais);
}

function carregarTabuleiro(pais) {
    const mainApp = document.querySelector("#app");
    mainApp.innerHTML = '<div class="cards-wrapper"></div>';
    const wrapper = mainApp.querySelector(".cards-wrapper");
    
    // Reset de variáveis de jogo (pontos continuam acumulando entre seleções se desejar, ou resetam)
    cartasEscolhidas = [];
    bloqueioBoard = false;

    // Criar pares apenas da seleção escolhida
    let listaFinal = [];
    dadosJogadores[pais].forEach(j => {
        listaFinal.push({...j}); 
        listaFinal.push({...j}); 
    });

    // Embaralhar
    listaFinal.sort(() => Math.random() - 0.5);

    // Renderizar 20 cards
    listaFinal.forEach(j => {
        wrapper.innerHTML += `
            <div class="card-container" data-nome="${j.n}" onclick="virarCard(this)">
                <div class="card-inner">
                    <div class="card-front"></div>
                    <div class="card-back ${j.sel}">
                        <div class="foto-container">
                            <img src="./assets/${j.img}" onerror="this.src='https://api.dicebear.com/7.x/bottts/svg?seed=${j.n}'">
                        </div>
                        <div class="info">
                            <h1>${j.n}</h1>
                            <span>⚽ ${j.g} Gols</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

function virarCard(elemento) {
    if (bloqueioBoard || elemento.classList.contains('flipped') || elemento.classList.contains('matched')) return;

    elemento.classList.add('flipped');
    cartasEscolhidas.push(elemento);

    if (cartasEscolhidas.length === 2) {
        bloqueioBoard = true;
        setTimeout(verificarPar, 700);
    }
}

function verificarPar() {
    const [c1, c2] = cartasEscolhidas;
    if (c1.dataset.nome === c2.dataset.nome) {
        scores[jogadorAtual]++;
        document.getElementById(`score${jogadorAtual + 1}`).innerText = scores[jogadorAtual];
        c1.classList.add('matched');
        c2.classList.add('matched');
    } else {
        c1.classList.remove('flipped');
        c2.classList.remove('flipped');
        jogadorAtual = jogadorAtual === 0 ? 1 : 0;
        document.getElementById('p1-area').classList.toggle('active');
        document.getElementById('p2-area').classList.toggle('active');
    }
    cartasEscolhidas = [];
    bloqueioBoard = false;
}