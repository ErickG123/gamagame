const content = document.getElementById("questions");

async function mostrarPergunta() {
    const response = await fetch("questions.json");
    const data = await response.json();

    console.log(data);

    const pergResp = [];

    data.forEach((perguntaAtual, order) => {
        const options = [];

        for (resposta in perguntaAtual.options) {
            options.push(
                `
                    <div class="options">
                        <label>
                            <input type="radio" name="${order}" value="${resposta}"></input>
                            ${resposta} - ${perguntaAtual.options[resposta]}
                        </label>
                        </br> 
                    </div>
                `
            );
        }

        pergResp.push(
            `
                <div class="quiz">
                    <div class="questions">${perguntaAtual.question}</div>
                    <div class="answer">${options.join('')}</div>
                </div>
            `
        );
    });

    content.innerHTML = pergResp.join('');
}
mostrarPergunta()