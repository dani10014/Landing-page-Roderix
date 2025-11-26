$(document).ready(function(){

    let btnMenuLateral = document.getElementById("botao-menu-amburguer")
    let menuLateral = document.querySelector(".menu-lateral")
    let btnFecharMenu = document.getElementById("botao-fechar-menu")
    let botoesSecoes = document.querySelectorAll(".botao-secao");
    let produtosCamisas = document.querySelector(".container.conteudo-camisas")
    let produtosCalcas = document.querySelector(".container.conteudo-calcas")
    let produtosAcessorios = document.querySelector(".container.conteudo-acessorios")
    let produtosCalcados= document.querySelector(".container.conteudo-calcados")
    console.log(produtosCamisas);
    
    btnMenuLateral.addEventListener("click", function(){
        menuLateral.classList.toggle("ativo")
    })
    btnFecharMenu.addEventListener("click", function(){
        menuLateral.classList.remove("ativo")
    })
    
    produtosCamisas.classList.toggle("ativo-produtos")
    document.getElementById("botao-camisas").style.borderBottom ="2px solid #b10000ff";

    Array.from(botoesSecoes).forEach(function(button){
        button.addEventListener("click",function(){

            let categoriaEscolhida = button.dataset.categoria;
            console.log(categoriaEscolhida);
            
            if(categoriaEscolhida == "camisas"){
                produtosCamisas.classList.add("ativo-produtos")
                produtosCalcas.classList.remove("ativo-produtos")
                produtosAcessorios.classList.remove("ativo-produtos")
                produtosCalcados.classList.remove("ativo-produtos")

                document.getElementById("botao-camisas").style.borderBottom ="2px solid #b10000ff";
                document.getElementById("botao-calcas").style.borderBottom ="none";
                document.getElementById("botao-acessorios").style.borderBottom ="none";
                document.getElementById("botao-calcados").style.borderBottom ="none";
            }
            else if(categoriaEscolhida == "calcas"){
                produtosCamisas.classList.remove("ativo-produtos")
                produtosCalcas.classList.add("ativo-produtos")
                produtosAcessorios.classList.remove("ativo-produtos")
                produtosCalcados.classList.remove("ativo-produtos")

                document.getElementById("botao-camisas").style.borderBottom ="none";
                document.getElementById("botao-calcas").style.borderBottom ="2px solid #b10000ff";
                document.getElementById("botao-acessorios").style.borderBottom ="none";
                document.getElementById("botao-calcados").style.borderBottom ="none";
            }
            else if(categoriaEscolhida == "acessorios"){
                produtosCamisas.classList.remove("ativo-produtos")
                produtosCalcas.classList.remove("ativo-produtos")
                produtosAcessorios.classList.add("ativo-produtos")
                produtosCalcados.classList.remove("ativo-produtos")

                document.getElementById("botao-camisas").style.borderBottom ="none";
                document.getElementById("botao-calcas").style.borderBottom ="none";
                document.getElementById("botao-acessorios").style.borderBottom ="2px solid #b10000ff";
                document.getElementById("botao-calcados").style.borderBottom ="none";
            }
            
            else if(categoriaEscolhida == "calcados"){
                produtosCamisas.classList.remove("ativo-produtos")
                produtosCalcas.classList.remove("ativo-produtos")
                produtosAcessorios.classList.remove("ativo-produtos")
                produtosCalcados.classList.add("ativo-produtos")

                document.getElementById("botao-camisas").style.borderBottom ="none";
                document.getElementById("botao-calcas").style.borderBottom ="none";
                document.getElementById("botao-acessorios").style.borderBottom ="none";
                document.getElementById("botao-calcados").style.borderBottom ="2px solid #b10000ff";
            }

        })  
    })

    $(".carrosel-img-sobre").slick({
        autoplay:true,
        dots:false,
        arrows:false,
        slidesToShow:1,
        slidesToScroll:1,
    })
});