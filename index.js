

 const btn = document.getElementById("btn")
 const birthdate = document.getElementById("birthday")
 const birthdatetext = document.getElementById("result")


 showEge = () => {
    birthdatevalue = birthdate.value
    if(birthdatevalue === ""){
    alert("choose a date")
    }
    else{
    const age = calEdge(birthdatevalue)
    birthdatetext.innerText = ` Your age is ${age} ${age > 1 ? "years" : "year"} old `
    }
 }

calEdge = (birthdatevalue) => {
 const currentdate = new Date();
 const birthdateyear = new Date(birthdatevalue)
 let personageyear = currentdate.getFullYear() - birthdateyear.getFullYear();
 const personagemonth = currentdate.getMonth() - birthdateyear.getMonth();
 if ( personagemonth<0 || (personagemonth===0 && currentdate.getDate() < birthdateyear.getDate()) ){
    personageyear-- ;
 }
 return personageyear;
}
 
 btn.addEventListener("click" ,  showEge)