let Dept=document.querySelector('.Dept');
let drop=document.querySelector('.Deptdrop');
let prev=document.querySelector('#prev');
let next=document.querySelector('#next');
let summersale=document.querySelector('.summersale')
let sectionimages=document.querySelector('.sectionimages')
let herosection=document.querySelector('.herosection')

function adminaccess(e){
  
    if(drop.style.display==='none'|| drop.style.display==='')
    {
        drop.style.display='block';
        drop.style.backgroundColor='white';
    }
    else{
        drop.style.display='none';
    }
}


Dept.addEventListener('click',adminaccess)


function movenex(e){
    
    if(summersale.style.display==='none'||summersale.style.display==='')
    {
          summersale.style.display='block'
      
       sectionimages.style.display='none'
       herosection.style.backgroundColor='lightblue' 
      
    }
    else{
        summersale.style.display='none'; 
        sectionimages.style.display='block'
         herosection.style.backgroundColor='lightgreen' 
    }

}



next.addEventListener('click',movenex)

function movepre(e) {
    if (window.getComputedStyle(sectionimages).display !== 'none') {
        summersale.style.display = 'block';
        sectionimages.style.display = 'none';
        herosection.style.backgroundColor = 'lightblue';
    } else {
        sectionimages.style.display = 'block'; // ensure it returns visible
        summersale.style.display = 'none';
        herosection.style.backgroundColor = 'lightgreen';
    }
}


prev.addEventListener('click',movepre)

