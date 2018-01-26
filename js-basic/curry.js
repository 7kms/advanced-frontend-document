/**
 *  函数柯里化就是创建已经设置单个参数或者多个参数的函数,函数变为接受一个参数,返回一个值
 * 
 *  柯里化的应用: 
 *  1. 参数复用
 *  2. 延迟计算
 */


 /**
  * 参数复用
  */
  var curry = function(fn){
    // 保存初始化参数
    var initialArgs = Array.prototype.slice.call(arguments,1);
    return function(){
        // 每次传入的新参数
        var newArgs = Array.prototype.slice.call(arguments);
        // 合并传入的参数和初始换参数
        var finallArgs = initialArgs.concat(newArgs);
        return fn.apply(null,finallArgs)
    }
}

/**
 * 延迟计算
 */
var curry2 = function(fn){
    // 保存初始化参数
    var args = Array.prototype.slice.call(arguments,1);
    var _core = function(){
        // 每次传入的新参数
        var newArgs = Array.prototype.slice.call(arguments);
        // 合并传入的参数和初始换参数
        args = args.concat(newArgs);
        // 当传入参数为空,这时候需要输出调用结果
        if(arguments.length == 0){
            return fn.apply(null,args);
        }
        return _core;
    }
    return _core;
}

var add = function(){
    var args = Array.prototype.slice.call(arguments);
    var sum = 0;
    for(let i = 0; i< args.length ; i++){
        sum += args[i];
    }
    return sum;
}

var curryAdd = curry(add,3,4,5);
console.log(curryAdd(6,7));

var curryAdd2 = curry2(add,3,4,5);
console.log(curryAdd2(6,7)(8)());



var curryAdd3 = curry2(add,3,4,5);
console.log(curryAdd3(1)(2)());