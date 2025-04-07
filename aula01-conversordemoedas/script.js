function converter() {
    let valorReais = document.getElementById("valorReais").value;
    
    if (valorReais <= 0 || isNaN(valorReais)) {
        alert("Por favor, digite um valor válido em reais.");
        return;
    }

    const taxaDolar = 0.1754;
    const taxaEuro = 0.1615;
    const taxaWon = 257.07;

    const valorDolar = valorReais * taxaDolar;
    const valorEuro = valorReais * taxaEuro;
    const valorWon = valorReais * taxaWon;

    const dolarFormatado = valorDolar.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    const euroFormatado = valorEuro.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
    const wonFormatado = valorWon.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW', maximumFractionDigits: 0 });
    const reaisFormatado = parseFloat(valorReais).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    const resultadosDiv = document.getElementById("resultados");

    resultadosDiv.classList.remove("show");

    resultadosDiv.innerHTML = `
        <p>Valor convertido de <span class="currency-value">${reaisFormatado}</span>:</p>
        <div class="result-item">
            <span><span class="currency-flag">🇺🇸</span> Dólar Americano:</span>
            <span class="currency-value">${dolarFormatado}</span>
        </div>
        <div class="result-item">
            <span><span class="currency-flag">🇪🇺</span> Euro:</span>
            <span class="currency-value">${euroFormatado}</span>
        </div>
        <div class="result-item">
            <span><span class="currency-flag">🇰🇷</span> Won Sul-Coreano:</span>
            <span class="currency-value">${wonFormatado}</span>
        </div>
    `;

    setTimeout(() => {
        resultadosDiv.classList.add("show");
    }, 50);
}
