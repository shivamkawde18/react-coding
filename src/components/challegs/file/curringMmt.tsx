const mutiply=(...args)=>{
    return args.reduce((a,current)=>a*current,1)
}

const curring=(fn)=>{
    const fun =(a)=>{
        
        return (b)=>{
            
            if(b){
                const ans=fn(a,b)
               return fun(ans)
            }
            else{
                return fn(a)
            }
            // return b?fn(a,b):fn(a)
        }
    }
    
  return fun
    

}







const corriedFun=curring(mutiply)

console.log(corriedFun(1)(2)(3)(4)())