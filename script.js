const content = document.getElementById("questions");
const buttons = document.getElementById("buttons");

async function mostrarPergunta(queryString) {
    const response = await fetch("questions.json");
    const data = await response.json();
    const params = new URLSearchParams(queryString);

    const currentQuestion = params.get("currentQuestion");

    const pergResp = [];

    if (currentQuestion > data.length) {
        /*TODO: Mostrar resultado do questionário*/
    } else {
        const perguntaEscolhida = data[currentQuestion - 1];

        const options = perguntaEscolhida.options;
        Object.entries(options).forEach(([order, resposta]) => {
            const printedOption =    
                `
                    <div class="options">
                        <label>
                            <input type="radio" name="${order}" value="${resposta}"></input>
                            ${order} - ${resposta}
                        </label>
                        </br>
                    </div>
                `
            content.innerHTML += printedOption;
            console.log(printedOption);
        });


    }

    /*
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
    */
}

const queryString = window.location.search;

mostrarPergunta(queryString)