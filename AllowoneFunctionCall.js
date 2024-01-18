/**
 * @param {Function} fn
 * @return {Function}
 */
//let i=0;



var once = function(fn) {
    let hasCalled=false;
    return function(...args){
       if(!hasCalled){
            hasCalled=true;
          
           return fn(...args);
       }
        else
            return undefined;
        
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
