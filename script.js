$(document).ready(function(){

    let btnMenuLateral = document.getElementById("botao-menu-amburguer")
    let menuLateral = document.querySelector(".menu-lateral")
    let btnFecharMenu = document.getElementById("botao-fechar-menu")
    const botoesSecoes = document.querySelectorAll(".botao-secao");
    let botaoEntrar = document.getElementById("botao-entrar")

    botaoEntrar.addEventListener("click", function(event){
        event.preventDefault();
        document.body.style.transform = "translateX(-100%)";

    setTimeout(function(){
        window.location.href = "login.html";
    }, 600)
    })

    $(".carrosel-img-sobre").slick({
        autoplay:true,
        dots:false,
        arrows:false,
        slidesToShow:1,
        slidesToScroll:1,
    })

    btnMenuLateral.addEventListener("click", function(){
        menuLateral.classList.toggle("ativo")
    })
    btnFecharMenu.addEventListener("click", function(){
        menuLateral.classList.remove("ativo")
    })
    
    // Mostra a seção de camisas por padrão e ativa o botão correspondente
    document.querySelector(".container.conteudo-camisas").classList.add("ativo-produtos");
    document.getElementById("botao-camisas").style.borderBottom ="2px solid #b10000ff";

    botoesSecoes.forEach(function(botaoClicado){
        botaoClicado.addEventListener("click", function(){
            const categoriaEscolhida = botaoClicado.dataset.categoria;

            // 1. Esconde todas as seções de produtos
            document.querySelectorAll(".container[class*='conteudo-']").forEach(function(secao) {
                secao.classList.remove("ativo-produtos");
            });

            // 2. Remove a borda de todos os botões
            botoesSecoes.forEach(function(botao) {
                botao.style.borderBottom = "none";
            });

            // 3. Mostra a seção correta e adiciona a borda no botão clicado
            document.querySelector(`.container.conteudo-${categoriaEscolhida}`).classList.add("ativo-produtos");
            botaoClicado.style.borderBottom = "2px solid #b10000ff";
        });
    });
});