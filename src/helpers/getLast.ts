

export const getLast = async() => {

const resp = await fetch('http://localhost:3000/last');
const data = await resp.json();
console.log({data});

  return data.last;
    
  
}
