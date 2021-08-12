var inputBox= document.getElementById('inputBox');
inputBox.value="0";
var boxButtons= document.querySelectorAll('.boxButtons')
const one=1

var InputValue=0;
var newInputValue=0;
var bucket=false;

const handleButtonCLick=(e) =>{
    
    const classLists=e.target.classList;
    const location=classLists [1];
   if (inputBox.value==0) inputBox.value="";
    inputBox.value +=parseInt(location);

}

for(const Btn of boxButtons){
    Btn.addEventListener('click' ,handleButtonCLick)
}


//Handle Back space

const backspace =()=>{
    console.log(inputBox.value=Math.floor(parseInt(inputBox.value)/10));
    
}


//plus Handle

let plus =()=>{

    if (!bucket){
    InputValue =parseInt(inputBox.value);
    inputBox.placeholder=InputValue;
    inputBox.value="";
    bucket=true;
    }else{
        newInputValue= parseInt(inputBox.value);
        inputBox.value= newInputValue+InputValue;
        inputBox.placeholder=inputBox.value;
        bucket=false;
        newInputValue=0;
    }
   
   
}

//handle equals

let equals =()=>{
if (newInputValue!=""){
    newInputValue= parseInt(inputBox.value);
    inputBox.value= newInputValue+InputValue;
    inputBox.placeholder=inputBox.value;
    bucket=false;
    newInputValue=0;
}


}

const clear1 =()=>{
    console.log('clea1 button pressed');
    inputBox.value="0";
    InputValue=0; 
    newInputValue=0;
    bucket=false;
}

const clear2 =()=>{
    console.log('clea2r button pressed');
    inputBox.value="0";
    
}