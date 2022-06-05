function* range(start, end, step) {
    while (start < end) {
      yield start;
      start += step;
    }
  }
  let horizontal = Array.from(range(-300,300,1));
  let vertical = Array.from(range(-400,300,1));
  
  const randomHorizontal=Math.floor(getRandomHorizontal());
  const randomVertical=Math.floor(getRandomVertical());

  function getRandomHorizontal(){
      return Math.random()*horizontal.length;
  }
  function getRandomVertical(){
    return Math.random()*vertical.length;
}


//   console.log(horizontal.length)
//   console.log(vertical.length)

 


