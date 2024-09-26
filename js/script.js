function calcular() {
    var nome = document.getElementById("cxnome").value;
    var placa = document.getElementById("cxplaca").value;
    var modelo = document.getElementById("cxmodelo").value;
    var dias = parseInt(document.getElementById("cxdias").value);
    var valorDiaria = parseFloat(document.getElementById("cxvalor").value);
    var totalSemDesconto = dias * valorDiaria;
    var totalComDesconto = totalSemDesconto;

    if (totalSemDesconto > 150) {
        totalComDesconto = totalSemDesconto - (totalSemDesconto * 0.10); 
    }

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 
    var infoNome = document.createElement("p");
    infoNome.textContent = "Nome: " + nome;
    resultado.appendChild(infoNome);
    var infoPlaca = document.createElement("p");
    infoPlaca.textContent = "Placa: " + placa;
    resultado.appendChild(infoPlaca);
    var infoModelo = document.createElement("p");
    infoModelo.textContent = "Modelo: " + modelo;
    resultado.appendChild(infoModelo);

    document.getElementById("totalSemDesconto").textContent = "Total sem desconto: R$ " + totalSemDesconto.toFixed(2);
    document.getElementById("totalComDesconto").textContent = "Total com desconto: R$ " + totalComDesconto.toFixed(2);
}

function limpar() {
    document.getElementById("cxnome").value = "";
    document.getElementById("cxplaca").value = "";
    document.getElementById("cxmodelo").value = "";
    document.getElementById("cxdias").value = "";
    document.getElementById("cxvalor").value = "";
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    document.getElementById("totalSemDesconto").textContent = ""; 
    document.getElementById("totalComDesconto").textContent = ""; 
}

function sair() {
    alert("Obrigado! Volte sempre!");
    window.close();
}