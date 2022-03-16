function criaCalculadora() {
    return {
        //seleciona o display para passar os números para o mesmo
        tela: document.querySelector(".tela"),

        //seleciona o botão de clear
        btnLimpar: document.querySelector(".delete"),

        
        
        
        
        
        inicia(){
            this.cliqueBotoes();
            this.pressionarEnter();
        },
        cliqueBotoes(){
            //this -> calculadora
            document.addEventListener('click', e => {
               const el = e.target; 
               console.log(el);

               if (el.classList.contains('num')) {
                   this.btnParaTela(el.innerText);
               }

               if (el.classList.contains('delete')) {
                   this.limparTela();
               }

               if(el.classList.contains('c')){
                    this.limpaUm();
               }

               if(el.classList.contains("igual")){
                    this.realizaConta();
               }

               this.tela.focus();
            });
        },
        pressionarEnter(){
           this.tela.addEventListener("keypress", e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },
        btnParaTela(valor){
            this.tela.value += valor;
        },
        realizaConta(){
            let conta = this.tela.value;
            
            try {
                conta = eval(conta);

                if (!conta) {
                    alert("Conta incorreta");
                    return;
                }
                this.tela.value = conta;
            } catch (e) {
                alert("Conta incorreta");
                return;
            }
        },

        limparTela(){
            this.tela.value = " ";
        },
        limpaUm(){
            this.tela.value = this.tela.value.slice(0, -1);
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();