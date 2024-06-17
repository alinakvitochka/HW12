function summarize(num){
    return function(value = 1) {
        return num + value
    }
}
const valueFive = summarize(5) 

console.log(valueFive(3))
console.log(valueFive())



function counter(startValue, step) {
    let counterValue = startValue
    const counterFunc = function() {
        counterValue += step
        return counterValue
    }

    counterFunc.reset = () => {
        counterValue = startValue
    }
    counterFunc.increment = () => {
        counterValue += step
    }
    counterFunc.decrement = () => {
        counterValue -= step
    }

    return counterFunc
}
const counterValue=counter(1, 2)

console.log(counterValue())
counterValue.reset()
console.log(counterValue())
console.log(counterValue())


function sequence(...args) {
    let lastResult = null
    let functions = args.reverse()
    
    return () => {
        lastResult = functions.pop().call(this, lastResult)
        return lastResult
    }
}

function add(a) {
    return a + 1
}

const s = sequence(() => 1, add, add, add)

console.log(s())
console.log(s())
console.log(s())
console.log(s())