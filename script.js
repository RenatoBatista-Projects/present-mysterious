
function capturarValor(event) {

  var valorDoBotao = event.target.value;
  
  fetch('https://api.sheetmonkey.io/form/fgFtTxKQq85PMbN9ECTYh1', {
    method: 'POST',
    headers: {
      'Accept' : 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({valorDoBotao}), 
  }).then(() => {

    const urlParams = new URLSearchParams(window.location.search);
    const pagina = urlParams.get("pag") //
    console.log(pagina);
    
    var escolhaCodigo = event.target.getAttribute('data-valuePersonalizado')

    if(!pagina){
      window.localStorage.setItem("escolha1", escolhaCodigo);
      window.location.href = 'file:///C:/Users/renat/OneDrive/%C3%81rea%20de%20Trabalho/transformar/paginas/presente02.html' + '?pag=02'
      
    }  

    if(pagina == '02'){
      window.localStorage.setItem("escolha2", escolhaCodigo);
      window.location.href = 'file:///C:/Users/renat/OneDrive/%C3%81rea%20de%20Trabalho/transformar/paginas/presente03.html' + '?pag=03'
    }
    
    if(pagina == '03'){
      window.localStorage.setItem("escolha3", escolhaCodigo);
      window.location.href = 'file:///C:/Users/renat/OneDrive/%C3%81rea%20de%20Trabalho/transformar/paginas/presente04.html' + '?pag=04'
    }

    if(pagina == '04'){
      window.localStorage.setItem("escolha4", escolhaCodigo);
      window.location.href = 'file:///C:/Users/renat/OneDrive/%C3%81rea%20de%20Trabalho/transformar/paginas/final.html' + '?pag=final'
    }
 
  });
  
}



  

  





  
