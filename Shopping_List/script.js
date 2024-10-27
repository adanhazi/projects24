function renderItem(itemText, isBought = false){
   const itemSelf = document.createElement('li');
   const itemTextSpan = document.createElement('span');
   itemTextSpan.textContent = itemText;

   if(isBought){
    itemTextSpan.classList.add('bought');
   }
   const itemButton = document.createElement('button');
   itemButton.textContent = 'mark as bought';
   itemButton.id = 'marked'

   itemSelf.appendChild(itemTextSpan);
   itemSelf.appendChild(itemButton);


   itemSelf.addEventListener('click', function (){
    this.remove();
    saveList();
   });

   itemButton.addEventListener('click', function(event){
    event.stopPropagation();
    itemTextSpan.classList.toggle('bought');
    saveList();
   });

   const itemList = document.getElementById('item-list');
   itemList.appendChild(itemSelf);

}

function saveList() {
    const items = [];
    document.querySelectorAll('#item-list li').forEach((li) => {
        const text = li.querySelector('span').textContent;
        const isBought = li.querySelector('span').classList.contains('bought');
        items.push({text, isBought});
    });
    localStorage.setItem('shoppingList', JSON.stringify(items));
}

function loadList() {
    const savedItems = JSON.parse(localStorage.getItem('shoppingList'))||[];
    savedItems.forEach((item) => {
        renderItem(item.text, item.isBought);
    });
}

function addItem(itemText) {
    renderItem(itemText);
    saveList();
}

document.addEventListener('DOMContentLoaded', loadList);

document.getElementById('new-item-btn').addEventListener('click', function(){
    const itemInput = document.getElementById('new-item');
    const itemText = itemInput.value;
 
    if (itemText === ''){
         alert('please enter an item!');
         return;
    };

    addItem(itemText);
    itemInput.value = '';
});