listdisplay=false;
function openlist(d,a){

  

    if(listdisplay==false){
        document.getElementsByClassName('side-bar-list')[d].style.maxHeight="500px";
        // document.getElementsByClassName('side-bar-list')[d].style.paddingBottom="15px";
        // document.getElementsByClassName('side-bar-list')[d].style.paddingTop="15px";
        document.getElementsByClassName("arrow")[d].style.transform="rotateZ(180deg)"
        a.style.backgroundColor="#000000";
        listdisplay=true;
    }
    else{
        document.getElementsByClassName('side-bar-list')[d].style.maxHeight="0"
        // document.getElementsByClassName('side-bar-list')[d].style.paddingBottom="0";
        // document.getElementsByClassName('side-bar-list')[d].style.paddingTop="0";
        document.getElementsByClassName("arrow")[d].style.transform="rotateZ(0deg)"
        a.style.backgroundColor="#1a1a1a";
        listdisplay=false;
    }
   
}


function opensid(){ 
       if(window.innerWidth>499.99){
        document.getElementsByClassName("sidebar")[0].style.width="320px";
        document.body.className+="active";
        document.body.style.overflow='hidden'
        // document.body.style.backgroundColor="rgba(0,0,0,.4)"
        document.getElementsByTagName('nav')[0].style.marginLeft="320px";
        document.getElementsByClassName("sidebar")[0].style.overflow="auto"
        setTimeout(function(){
            for(var i=0;i<6;i++){
                document.getElementsByClassName("sidebar-item")[i].style.opacity="1";
            }
           
        },400)
       }
       else{
        document.getElementsByClassName("sidebar")[0].style.width="100%";
        document.body.style.overflow='hidden'
        document.getElementsByClassName("sidebar")[0].style.overflow="auto"
        setTimeout(function(){
            for(var i=0;i<6;i++){
                document.getElementsByClassName("sidebar-item")[i].style.opacity="1";
            }
           
        },400)
       }

}

function closesid(){ 
    document.body.className="";
    document.getElementsByClassName("sidebar")[0].style.width="0";
    document.getElementsByTagName('nav')[0].style.marginLeft="0";
    document.body.style.overflow='auto'
    document.getElementsByClassName("sidebar")[0].style.overflow="hidden"
        for(var i=0;i<6;i++){
            document.getElementsByClassName("sidebar-item")[i].style.opacity="0";
        }
       
}

var numnav=0;
window.addEventListener('scroll',function(){
    if(this.document.documentElement.scrollTop>=36 && numnav==0){
        this.document.getElementsByClassName('nav')[0].className+=" active2";
        numnav=1;
    }
    else if(this.document.documentElement.scrollTop<36){
        this.document.getElementsByClassName('nav')[0].classList.remove("active2");
        numnav=0;
    }
})


window.addEventListener('load',function(){
    if(window.innerWidth<=669.99){

        var chid=this.document.getElementsByClassName('delivering-title')[0].getElementsByTagName('h1')[0].getElementsByTagName('br')[0]


        document.getElementsByClassName('delivering-title')[0].getElementsByTagName('h1')[0].removeChild(chid)
        resizeshow=true;
    }
})

var resizeshow=false;

window.addEventListener('resize',function(){
    if(window.innerWidth<=669.99){

        var chid=this.document.getElementsByClassName('delivering-title')[0].getElementsByTagName('h1')[0].getElementsByTagName('br')[0]


        document.getElementsByClassName('delivering-title')[0].getElementsByTagName('h1')[0].removeChild(chid)
        resizeshow=true;
    }
    else{
        if(resizeshow==true){
        
            var chid=this.document.getElementsByClassName('delivering-title')[0].getElementsByTagName('h1')[0]
            document.getElementsByClassName('delivering-title')[0].removeChild(chid)

            var h1=this.document.createElement('h1');



            document.getElementsByClassName('delivering-title')[0].insertBefore(h1, document.getElementsByClassName('delivering-title')[0].children[0])

            document.getElementsByClassName('delivering-title')[0].getElementsByTagName('h1')[0].innerHTML="Delivering Results, <br> Driving Change"

            document.getElementsByClassName('delivering-title')[0].getElementsByTagName('h1')[0].className+="text-title"

            resizeshow=false;

            console.log(1)
        }
     
    }
})


function helpbtn(d,a){
    

    if(document.getElementsByClassName("help-btn-text")[d].getElementsByTagName('p')[0].classList.contains('openli')){
       
        document.getElementsByClassName("help-btn-text")[d].getElementsByTagName('p')[0].classList.remove('openli');

        a.getElementsByTagName('i')[0].style.transform="rotateZ(0deg)";
    }
    else{
        document.getElementsByClassName("help-btn-text")[d].getElementsByTagName('p')[0].classList.add('openli');
    //    document.getElementsByClassName('help-btn')[d].getElementsByTagName('button')[0].getElementsByTagName('i')[0].style.transform="rotateZ(180deg)"
        a.getElementsByTagName('i')[0].style.transform="rotateZ(180deg)";
        console.log(a.getElementsByTagName('i'))
    }
   console.log(document.getElementsByClassName("help-btn-text")[0].getElementsByTagName('p')[0])
}

