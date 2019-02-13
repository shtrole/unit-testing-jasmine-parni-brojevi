
const niz =[2,15,66,44,65,99,88,4578];
let parni = [];
function vracaParne(niz){


    for(let i=0; i<niz.length; i++){
        if(niz[i] % 2 == 0)
        parni.push(niz[i]);

    }
//   console.log(niz);
return parni;
}

vracaParne(niz);
document.write("Niz parnih brojeva je sledeci: " + parni);
