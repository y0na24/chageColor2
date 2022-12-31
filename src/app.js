import { getRandomColor } from "./utils"

export default function initApp() {
  const changeColorButton = document.createElement('button')
  changeColorButton.className = 'button'
  changeColorButton.textContent = 'Изменить цвет страницы'
  document.body.append(changeColorButton)

  changeColorButton.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor()
  })
}