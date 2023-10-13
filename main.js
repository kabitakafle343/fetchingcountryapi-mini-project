 
        let name=document.getElementById('input');
        let err=document.getElementById('error');
        let btn=document.getElementById('button');
        let r=document.querySelector('.result');
        btn.addEventListener('click',()=>{
            err.innerHTML='';
            let cName=name.value;
            let fUrl=`https://restcountries.com/v3.1/name/${cName}?fullText=true`;
            fetch(fUrl).then(response=>response.json()).then((data)=>{
        r.innerHTML=`
        <div class="r">
            <img src="${data[0].flags.svg}" style="height:40vh;padding-bottom:40px">
        </div>
        
        
        <div class="fle" id="div4">
        <h6>Common name:</h6>
        <p>${data[0].name.common}</p>
    </div>
        <div  class="fle" id="div1">
            <h6>Capital:</h6>            <p>${data[0].capital}</p></div>
        
      </div>

      <div  class="fle" id="div2">
            <h6 style="">Population:</h6>
            <p>${data[0].population}</p></div>
        
      </div>
    
    
    
  </div>`;
  }).catch((error)=>{
err.innerHTML=`${error}`
err.style.color="red";

r.innerHTML='';
            

});
        });