//For loop in JS

const nemo= ["nemo"];

function findNemo(array) {
   let t0=performance.now();
  for (let i = 0; i < array.length; i++) {
   
    if(array[i]== "nemo")
    {
      console.log("Nemo found");
    }
  }
  let t1=performance.now();
  console.log("call to find nemo took " + (t1-t0) + " miliseconds");
}
findNemo(nemo);