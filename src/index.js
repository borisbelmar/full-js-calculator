import './styles.css'
import CalculatorBrand from './components/CalculatorBrand'
import CalculatorButtonGrid from './components/CalculatorButtonGrid'
import CalculatorDisplay from './components/CalculatorDisplay'
import getCalculator from './utils/getCalculator'
import Credits from './components/Credits'

const body = document.querySelector('body')
body.classList.add('bg-gray-900', 'h-screen', 'flex', 'flex-col', 'items-center', 'justify-center')

const calculator = document.createElement('div')
calculator.classList.add(
  'bg-gray-200',
  'w-full',
  'max-w-xs',
  'mx-auto',
  'rounded',
  'shadow',
  'p-4',
  'flex',
  'flex-col',
  'justify-between'
)


CalculatorBrand(calculator)

const { onResult } = CalculatorDisplay(calculator)

const calculatorModule = getCalculator(onResult)

CalculatorButtonGrid(calculator, {
  buttons: [
    { text: '7', value: '7' },
    { text: '8', value: '8' },
    { text: '9', value: '9' },
    { text: '÷', value: '/' },
    { text: '4', value: '4' },
    { text: '5', value: '5' },
    { text: '6', value: '6' },
    { text: '×', value: '*' },
    { text: '1', value: '1' },
    { text: '2', value: '2' },
    { text: '3', value: '3' },
    { text: '-', value: '-' },
    { text: 'C', value: 'C' },
    { text: '0', value: '0' },
    { text: '=', value: '=' },
    { text: '+', value: '+' },
  ],
  onClick: calculatorModule.onValue,
})

body.appendChild(calculator)

Credits(body)
