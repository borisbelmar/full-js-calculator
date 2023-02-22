export default function Credits(parentNode) {
  const credits = document.createElement("div");
  const creditsText = document.createElement("span");
  creditsText.innerHTML = "Made with ❤️ by "

  const creditsLink = document.createElement("a");
  creditsLink.innerHTML = "dobleB."
  creditsLink.href = "https://dobleb.cl"
  creditsLink.target = "_blank"
  creditsLink.classList.add("text-green-500")

  credits.appendChild(creditsText)
  credits.appendChild(creditsLink)

  credits.classList.add(
    "text-gray-100",
    "text-center",
    "mt-8"
  )

  parentNode.appendChild(credits)
}