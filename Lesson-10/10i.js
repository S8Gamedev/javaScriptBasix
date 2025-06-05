 let calculation='';
        function showCalculation(calculation){
            let output=document.querySelector('.output');
            output.innerHTML=`${calculation}`;
        }
        function updateCalculation(code){
            if(code==='='){
                calculation=localStorage.getItem('calculation');
                console.log(eval(calculation));
                showCalculation(eval(calculation));
                // localStorage.setItem('calcualtion',calculation);
                return
            }
            calculation =localStorage.getItem('calculation');
            calculation+=code
            // if(calculation !== '')
            localStorage.setItem('calculation',calculation);
            // calculation=localStorage.getItem('calculation');
            console.log(localStorage.getItem('calculation'));
            showCalculation(calculation);
        }
        // localStorage.setItem('calculation',calculation);