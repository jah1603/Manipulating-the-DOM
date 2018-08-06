document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-tea-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();



    const  teaName = event.target.name.value;
    const  teaType = event.target.type.value;
    const  quantity = event.target.quantity.value;
    const teasPurchased = document.querySelector('#teas-list');
    const newTeaListItem = document.createElement('p');
    newTealistItem.textContent = `Purchased ${quantity} of ${teaType} (${teaName}).`;

    teasPurchased.appendChild(newTeaListItem);
  form.reset();
  });

  const button = document.querySelector('#button')
  button.addEventListener('click', () => {
    const teasPurchased = document.querySelector('#teas-list');
    while (teasPurchased.hasChildNodes()) {
     teasPurchased.removeChild(teasPurchased.firstChild)
    }
  });
})
