const apikey = 'CA3R8dzaXnTjitmnyjLwNFFmF0KQjdSif2C09a_FONU';

let inputel = document.querySelector('.form input');
let formel = document.querySelector('.form');
let imagesconta = document.querySelector('.images-container');
let showel = document.querySelector('.show');

let inputData = '';
let page = 1;



async function getimages(){
    inputData=inputel.value;
     const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apikey}`);
    const jsonData = await response.json();
    console.log(jsonData);
    if(page===1){
        imagesconta.innerHTML='';
    }
    
    for(let i=0 ;i<jsonData.results.length;i++){
        console.log(jsonData.results[i].id)
        let div = document.createElement('div');
        div.className = 'search-result';
        let img = document.createElement('img');
        img.src = `${jsonData.results[i].urls.small}`;
        div.appendChild(img);
        let ael = document.createElement('a');
        console.log(jsonData.results[i].alt_description)
        ael.appendChild(document.createTextNode(jsonData.results[i].alt_description))
        ael.href =jsonData.results[i].links.html;
        ael.target = '_blank';
        div.appendChild(ael);
        imagesconta.appendChild(div)
    }
   
    showel.classList.add('active');
    page++;
   
    
    

}

formel.addEventListener('submit',(e)=>{
    e.preventDefault()
    page=1;
    getimages();


    
    
    

});
showel.addEventListener('click',()=>{
    
    getimages();

})