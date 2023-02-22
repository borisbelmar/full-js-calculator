export default function CalculatorButton(parentNode, props) {
  const { text, onClick } = props;

  const button = document.createElement("button")
  button.innerHTML = text
  button.addEventListener("click", onClick)
  button.classList.add(
    "bg-gray-200",
    "hover:bg-gray-300",
    "text-gray-700",
    "font-bold",
    "py-2",
    "px-4",
    "rounded",
    "shadow",
    "block",
    "w-full"
  );

  parentNode.appendChild(button)
}