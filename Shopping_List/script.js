document.getElementById('new-item-btn').addEventListener('click', function(){
   const itemInput = document.getElementById('new-item');
   const itemText = itemInput.value;

   if (itemText === ''){
        alert('please enter an item!');
        return;
   };

   const itemSelf = document.createElement('li');
   const itemTextSpan = document.createElement('span');
   itemTextSpan.textContent = itemText;
   const itemButton = document.createElement('button');
   itemButton.textContent = 'mark as bought';
   itemButton.id = 'marked'

   itemSelf.appendChild(itemTextSpan);
   itemSelf.appendChild(itemButton);


   itemSelf.addEventListener('click', function (){
    this.remove();
   });

   itemButton.addEventListener('click', function(event){
    event.stopPropagation();
    itemTextSpan.classList.toggle('bought');
   });

   const itemList = document.getElementById('item-list');
   itemList.appendChild(itemSelf);

   itemInput.value = '';
});