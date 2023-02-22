export default function CalculatorBrand(parentNode) {
  const brand = document.createElement("div");
  brand.innerHTML = "Calculator dobleB.3000"
  brand.classList.add(
    "text-gray-800",
    "font-bold",
    "mb-2"
  );
  parentNode.appendChild(brand)
}