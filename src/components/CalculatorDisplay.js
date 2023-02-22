export default function CalculatorDisplay(parentNode) {
  const display = document.createElement("div");
  const resultText = document.createElement("span");
  resultText.innerHTML = 0
  display.appendChild(resultText)

  const operatorText = document.createElement("span");
  operatorText.innerHTML = ""
  display.appendChild(operatorText)

  display.classList.add(
    "bg-gray-800",
    "text-green-300",
    "font-bold",
    "py-2",
    "px-4",
    "rounded",
    "shadow",
    "mb-4",
    "flex",
    "justify-between"
  );

  const onResult = (value, operator) => {
    resultText.innerHTML = value
    operatorText.innerHTML = operator
  }

  parentNode.appendChild(display)

  return {
    onResult
  }
}