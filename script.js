const dadosJogadores = {
    brasil: {
        titulo: "Brasil",
        lista: [
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
        ]
    },
    argentina: {
        titulo: "Argentina",
        lista: [
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
        ]
    },
    franca: {
        titulo: "França",
        lista: [
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
        ]
    },
    alemanha: {
        titulo: "Alemanha",
        lista: [
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
    }
};

const mainApp = document.querySelector("#app");

function gerarHTMLCard(jogador, selKey) {
    return `
        <div class="card-container">
            <div class="card-inner">
                <div class="card-front ${selKey}">
                    <img src="./assets/${selKey}.jpg" class="bandeira-card">
                    <div class="numero">#${jogador.num}</div>
                    <div class="foto-container">
                        <img src="./assets/${jogador.img}" alt="${jogador.n}" onerror="this.src='https://api.dicebear.com/7.x/avataaars/svg?seed=${jogador.n}'">
                    </div>
                    <div class="info">
                        <h1>${jogador.n}</h1>
                        <p>${jogador.p}</p>
                        <span class="gols-label">⚽ ${jogador.g} Gols</span>
                    </div>
                </div>
                <div class="card-back">
                    <h3>Status</h3>
                    <button onclick="abrirModal('${jogador.n}', ${jogador.g})">Detalhes</button>
                </div>
            </div>
        </div>
    `;
}

function criarCards() {
    mainApp.innerHTML = "";
    Object.keys(dadosJogadores).forEach(key => {
        const selecao = dadosJogadores[key];
        const section = document.createElement("section");
        section.className = "selection-section";
        section.innerHTML = `<h2>${selecao.titulo}</h2>`;
        const wrapper = document.createElement("div");
        wrapper.className = "cards-wrapper";
        selecao.lista.forEach(jogador => {
            wrapper.innerHTML += gerarHTMLCard(jogador, key);
        });
        section.appendChild(wrapper);
        mainApp.appendChild(section);
    });
}

function embaralharCards() {
    let todos = [];
    Object.keys(dadosJogadores).forEach(key => {
        dadosJogadores[key].lista.forEach(j => todos.push({ ...j, selKey: key }));
    });
    for (let i = todos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [todos[i], todos[j]] = [todos[j], todos[i]];
    }
    mainApp.innerHTML = `<h2>🎲 Mercado da Bola</h2>`;
    const wrapper = document.createElement("div");
    wrapper.className = "cards-wrapper";
    todos.forEach(j => wrapper.innerHTML += gerarHTMLCard(j, j.selKey));
    mainApp.appendChild(wrapper);
}

function abrirModal(nome, gols) {
    const modal = document.querySelector("#modal");
    document.querySelector("#modal-nome").innerText = nome;
    document.querySelector("#modal-info").innerText = `Total de gols: ${gols}`;
    modal.style.display = "flex";
    setTimeout(() => {
        document.querySelector("#modal-bar").style.width = Math.min(gols, 100) + "%";
    }, 100);
}

function fecharModal() {
    document.querySelector("#modal-bar").style.width = "0";
    document.querySelector("#modal").style.display = "none";
}

criarCards();