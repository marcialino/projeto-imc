
        function calcular(){
            var altura = window.document.getElementById('altura')
            var peso = window.document.getElementById('peso')

            var alt = Number(altura.value)
            var pes = Number(peso.value)

            var res = window.document.getElementById('res')

            var imc = pes/(alt*alt)
            
            if (imc < 18.5){
                    res.innerHTML = `O seu IMC é de ${imc.toFixed(2)} <br/> Classificação: MAGREZA <br/>Obesidade: zero `
                    
            }if (imc > 18.5 && imc < 24.9){
                    res.innerHTML = `O seu IMC é de ${imc.toFixed(2)}<br/> Classificação: NORMAL <br/> Obesidade: zero `
                
            }if(imc > 25 && imc < 29.9 ){
                     res.innerHTML = `O seu IMC é de ${imc.toFixed(2)}<br/> Classificação: SOBREPESO <br/>
                     Obesidade: um `
            } if (imc > 30.0 && imc < 39.9){
                    res.innerHTML = `O seu IMC é de ${imc.toFixed(2)} <br/> Classificação: OBESIDADE <br/> Obesidade: dois `
            }if (imc > 40){
                    res.innerHTML = `O seu IMC é de ${imc.toFixed(2)} <br/> Classificação: OBESIDADE GRAVE <br/> Obesidade: três `
            }
                        
        }
