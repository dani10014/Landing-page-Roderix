document.addEventListener('DOMContentLoaded', function() {
    
    let btnVoltarInicial = document.getElementById("botao-voltar");

    if (btnVoltarInicial) {
        btnVoltarInicial.addEventListener("click", function(){
            document.body.style.transform = "translateX(100%)";
    
            setTimeout(function(){
                window.location.href = "index.html";
            }, 600);
        });
    }
});