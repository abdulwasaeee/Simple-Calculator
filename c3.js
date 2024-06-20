let dis=document.getElementById("display");
function displayfn(input){
    dis.value+=input;
}

function clearfn(){
    dis.value='';
}

function calculatefn(){
    try{
        dis.value=eval(dis.value);
    }
    catch(error){
        dis.value='error';
    }
    
}

