
        function calcular(){
            var altura = window.document.getElementById('altura')
            var peso = window.document.getElementById('peso')

            var alt = Number(altura.value)
            var pes = Number(peso.value)

            var res = window.document.getElementById('res')

            var imc = pes/(alt*alt)
            
            if (imc < 18.5){
                    res.innerHTML = `<strong>RESULTADO</strong><br/><br/><strong>IMC:</strong> ${imc.toFixed(2)} <br/> <br/><strong>Classificação: </strong>MAGREZA <br/><br/><strong>Obesidade:</strong> ZERO `
                    
            }if (imc > 18.5 && imc < 24.9){
                    res.innerHTML = `<strong>RESULTADO</strong><br/><br/><strong>IMC:</strong> ${imc.toFixed(2)} <br/> <br/><strong>Classificação: </strong> NORMAL <br/><br/><strong>Obesidade:</strong> ZERO `
                                       
                
            }if(imc > 25 && imc < 29.9 ){
                     res.innerHTML = `<strong>RESULTADO</strong><br/><br/><strong>IMC:</strong> ${imc.toFixed(2)} <br/> <br/><strong>Classificação: </strong> SOBREPESO <br/><br/><strong>Obesidade:</strong> UM `
                         

            } if (imc > 30.0 && imc < 39.9){
                    res.innerHTML = `<strong>RESULTADO</strong><br/><br/><strong>IMC:</strong> ${imc.toFixed(2)} <br/> <br/><strong>Classificação: </strong> OBESIDADE <br/><br/><strong>Obesidade:</strong> DOIS `
                    

            }if (imc > 40){
                    res.innerHTML = `<strong>RESULTADO</strong><br/><br/><strong>IMC:</strong> ${imc.toFixed(2)} <br/> <br/><strong>Classificação: </strong> OBESIDADE GRAVE<br/><br/><strong>Obesidade:</strong> TRÊS `
            }
                        
        }
