export default function getCalculator(onResult) {
  const innerState = {
    result: 0,
    lastValue: 0,
    operator: null
  }

  const clear = () => {
    innerState.result = 0
    innerState.lastValue = 0
    innerState.operator = null
  }

  const calculate = () => {
    switch (innerState.operator) {
      case '+':
        innerState.result = innerState.result + innerState.lastValue
        break
      case '-':
        innerState.result = innerState.result - innerState.lastValue
        break
      case '*':
        innerState.result = innerState.result * innerState.lastValue
        break
      case '/':
        innerState.result = innerState.result / innerState.lastValue
        break
      default:
        break
    }
  }
  
  const onValue = (value) => {
    if (value === 'C') {
      clear()
    } else if (value === '=') {
      if (innerState.operator !== '=') {
        calculate()
        innerState.lastValue = 0
      } else {
        innerState.operator = '='
      }
    } else if (['+', '-', '*', '/'].includes(value)) {
      innerState.operator = value
    } else {
      if (innerState.operator) {
        if (innerState.lastValue === 0) {
          innerState.lastValue = Number(`${value}`)
        } else {
          innerState.lastValue = Number(`${innerState.lastValue}${value}`)
        }
      } else {
        if (innerState.result === 0) {
          innerState.result = Number(`${value}`)
        } else {
          innerState.result = Number(`${innerState.result}${value}`)
        }
      }
    }
    if (innerState.operator === '=') {
      onResult(innerState.result, innerState.operator)
    } else if (innerState.lastValue === 0) {
      onResult(innerState.result, innerState.operator)
    } else {
      onResult(innerState.lastValue, innerState.operator)
    }
  }

  return {
    onValue
  }
}