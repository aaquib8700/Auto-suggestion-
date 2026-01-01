const fetchItems=async (url)=>{
    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
      setList(data);
    } catch (error) {
      console.log("Error", error);
    }
}

const debounce=(fun,delay)=>{
    if(typeof fun !=='function'){
        throw new Error(`Not a valid func ${fun}`);
    }
    if(typeof delay !='number' || delay<0){
        throw new Error(`Not a valid delay ${delay}`);
    }

    return (...args)=>{
        return new Promise((resolve,rej))
    }
}