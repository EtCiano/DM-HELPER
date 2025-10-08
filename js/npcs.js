const limparnpcs = document.getElementById('limparnpcs');
const botaoAdicionarNPC = document.getElementById('buttoniniciativa');
const containerNPC = document.getElementById('npcinimigosection');
const deleteficha = document.getElementById('deleteficha');
const adicionarhabilidade = document.getElementById('adicionarhabilidade');

const inputstr = document.getElementById('inputstr');
const inputdex = document.getElementById('inputdex');
const inputcon = document.getElementById('inputcon');
const inputint = document.getElementById('inputint');
const inputwis = document.getElementById('inputwis');
const inputcha = document.getElementById('inputcha');

const inputsatributos = [inputstr, inputdex, inputcon, inputint, inputwis, inputcha];

inputsatributos.forEach(input => {
    input.addEventListener('input', () => {
        const valor = parseInt(input.value);
        const mod = isNaN(valor) ? '' : (Math.floor((valor - 10) / 2) >= 0 ? `+${Math.floor((valor - 10) / 2)}` : Math.floor((valor - 10) / 2));
        const modId = `modificador${input.id.slice(5)}`;
        const modElement = document.getElementById(modId);
        if (modElement) {
            modElement.textContent = mod;
        }
    });
});

adicionarhabilidade.addEventListener('click', () => {
    const novaHabilidade = document.createElement('input');
    novaHabilidade.type = 'text';
    novaHabilidade.className = 'inputfichagrande';
    novaHabilidade.placeholder = '.....';
    adicionarhabilidade.parentElement.parentElement.appendChild(novaHabilidade);
});

deleteficha.addEventListener('click', () => {
    deleteficha.parentElement.parentElement.remove();
});

limparnpcs.addEventListener('click', () => {
    containerNPC.innerHTML = '';
});

if (botaoAdicionarNPC && containerNPC) {
    botaoAdicionarNPC.addEventListener('click', () => {
        const novoNPC = document.createElement('div');
        novoNPC.className = 'npcinimigo';
        novoNPC.innerHTML = `
                <section>
        <input type="text" class="inputficha" id="nome" placeholder="Nome">
        <select name="condicoes" class="condicoes">
            <option value="Normal">Normal</option>
            <option value="Surdo">Surdo</option>
            <option value="Rastreado">Rastreado</option>
            <option value="Possuído">Possuído</option>
            <option value="Petrificado">Petrificado</option>
            <option value="Paralisado">Paralisado</option>
            <option value="Marcado">Marcado</option>
            <option value="Invisível">Invisível</option>
            <option value="Inconsciente">Inconsciente</option>
            <option value="Incapacitado">Incapacitado</option>
            <option value="Exaustão">Exaustão</option>
            <option value="Escondido">Escondido</option>
            <option value="Envenenado">Envenenado</option>
            <option value="Enfeitiçado">Enfeitiçado</option>
            <option value="Dominado">Dominado</option>
            <option value="Desafiado">Desafiado</option>
            <option value="Contido">Contido</option>
            <option value="Confuso">Confuso</option>
            <option value="Cego">Cego</option>
            <option value="Caído">Caído</option>
            <option value="Atordoado">Atordoado</option>
            <option value="Amedrontado">Amedrontado</option>
            <option value="Agarrado">Agarrado</option>
        </select>
        <img class="deleteficha" src="https://images.icon-icons.com/37/PNG/512/delete_4219.png">
        </section>
        <section id="gridficha">
            <p id="pficha">Raça:</p>
            <p id="pficha">Classe:</p>
            <p id="pficha">Nível:</p>
        </section>
        <section id="gridficha">
            <input type="text" class="inputfichasubclasse" placeholder=".....">
            <input type="text" class="inputfichasubclasse" placeholder=".....">
            <input type="text" class="inputfichasubclasse" placeholder=".....">
        </section>
        <section id="gridficha">
            <p id="pficha">HP:</p>
            <p id="pficha">CA:</p>
            <p id="pficha">Deslocamento:</p>
        </section>
            <section id="gridficha">
            <input type="text" class="inputfichasubclasse" placeholder=".....">
            <input type="text" class="inputfichasubclasse" placeholder=".....">
            <input type="text" class="inputfichasubclasse" placeholder=".....">
        </section>
        <hr id="hrnpc">
        <section id="gridficha">
            <p id="pficha">Str:</p>
            <p id="pficha">Dex:</p>
            <p id="pficha">Con:</p>
        </section>
        <section id="gridficha2">
            <section>
            <input type="text" class="inputfichasubclasse1" id="inputstr" placeholder="..." >
            <p id="modificadorstr1" class="modificadorficha"></p></section>
            <section>
            <input type="text" class="inputfichasubclasse1" id="inputdex" placeholder="..." >
            <p id="modificadordex1" class="modificadorficha"></p></section>
            <section>
            <input type="text" class="inputfichasubclasse1" id="inputcon" placeholder="..." >
            <p id="modificadorcon1" class="modificadorficha"></p></section>
        </section>
        <section id="gridficha">
            <p id="pficha">Int:</p>
            <p id="pficha">Wis:</p>
            <p id="pficha">Cha:</p>
        </section>
        <section id="gridficha2">
            <section>
            <input type="text" class="inputfichasubclasse1" id="inputint" placeholder="..." >
            <p id="modificadorint1" class="modificadorficha"></p></section>
            <section>
            <input type="text" class="inputfichasubclasse1" id="inputwis" placeholder="..." >
            <p id="modificadorwis1" class="modificadorficha"></p></section>
            <section>
            <input type="text" class="inputfichasubclasse1" id="inputcha" placeholder="..." >
            <p id="modificadorcha1" class="modificadorficha"></p></section>
        </section>
        <section id="gridficha1">
            <p id="pficha">Desafio (XP):</p>
            <p id="pficha">Linguagens:</p>
        </section>
        <section id="gridficha1">
            <input type="text" class="inputficha1" placeholder=".....">
            <input type="text" class="inputficha1" placeholder=".....">
        </section>
        <section class="sectionvertical">
            <section>
            <p id="pficha">Perícias, Proeficiencias e Habilidades</p>
            <button id="adicionarhabilidade">+</button>
            </section>
            <input type="text" class="inputfichagrande" placeholder=".....">
        </section>
            `;
        
        const deleteBtn = novoNPC.querySelector('.deleteficha');
        deleteBtn.addEventListener('click', () => {
            novoNPC.remove();
        });
        
        const addHabilidadeBtn = novoNPC.querySelector('#adicionarhabilidade');
        addHabilidadeBtn.addEventListener('click', () => {
            const novaHabilidade = document.createElement('input');
            novaHabilidade.type = 'text';
            novaHabilidade.className = 'inputfichagrande';
            novaHabilidade.placeholder = '.....';
            addHabilidadeBtn.parentElement.parentElement.appendChild(novaHabilidade);
        });

        const inputstr = novoNPC.querySelector('#inputstr');
        const inputdex = novoNPC.querySelector('#inputdex');
        const inputcon = novoNPC.querySelector('#inputcon');
        const inputint = novoNPC.querySelector('#inputint');
        const inputwis = novoNPC.querySelector('#inputwis');
        const inputcha = novoNPC.querySelector('#inputcha');
        
        const inputsatributos2 = [inputstr, inputdex, inputcon, inputint, inputwis, inputcha];

        inputsatributos2.forEach(input => {
            input.addEventListener('input', () => {
                const valor = parseInt(input.value);
                const mod = isNaN(valor) ? '' : (Math.floor((valor - 10) / 2) >= 0 ? `+${Math.floor((valor - 10) / 2)}` : Math.floor((valor - 10) / 2));
                const modId = `modificador${input.id.slice(5)}`;
                const modElement = document.querySelector('#' + modId + '1');
                if (modElement) {
                    modElement.textContent = mod;
                }
            });
        });

        containerNPC.appendChild(novoNPC);
    });
}