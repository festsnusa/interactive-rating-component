let items = document.querySelectorAll('.content__item'),
 button = document.querySelector('.content__button')

items.forEach((item, i) => {
  item.addEventListener('click', addActiveClass.bind(null, i))
})

function addActiveClass(i) {

  items.forEach((item, j) => {

    if (j == i) {
      item.classList.add('content__item_active')
    } else {
      item.classList.remove('content__item_active')
    }
  })

  button.classList.add('content__button_active')
  localStorage.setItem("rating", i+1)

}

document.addEventListener('DOMContentLoaded', () => {

  let caption = document.querySelector('.thank-you__caption')

  if (caption != null)
    caption.innerText = `You selected ${localStorage.getItem("rating")} out of 5`
})