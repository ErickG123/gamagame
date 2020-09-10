const content = document.getElementById("questions");

async function mostrarPergunta() {
    const response = await fetch("questions.json");
    const data = await response.json();

    console.log(data);

    const pergResp = [];

    data.forEach((perguntaAtual, order) => {
        const options = [];

        for(resposta in perguntaAtual.options) {
            options.push(
                `
                    <label>
                        <input type="radio" name="${order}" value="${resposta}"></input>
                        ${resposta} - ${perguntaAtual.options[resposta]}
                    </label>
                    </br>
                `
            );
        }

        pergResp.push(
            `
                <div class="questions">${perguntaAtual.question}</div>
                <div class="answer">${options.join('')}</div>
            `
        );
    });
    
    content.innerHTML = pergResp.join('');
}
mostrarPergunta()