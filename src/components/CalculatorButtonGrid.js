import CalculatorButton from "./CalculatorButton";

export default function CalculatorButtonGrid(parentNode, props) {
  const { buttons, onClick } = props;

  const buttonGrid = document.createElement("div");
  buttonGrid.classList.add(
    "grid",
    "grid-cols-4",
    "gap-2",
    "w-full",
    "max-w-xs",
    "mx-auto"
  );

  buttons.forEach((button) => {
    CalculatorButton(buttonGrid, {
      text: button.text,
      onClick: () => onClick(button.value),
    });
  });

  parentNode.appendChild(buttonGrid);
}