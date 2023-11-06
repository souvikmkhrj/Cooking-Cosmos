let addIngredientsBtn=document.getElementById('addIngredientsBtn');
let ingrediantList=document.querySelector('.ingredientList');
let ingredientDiv=document.querySelectorAll('.ingredientDiv')[0];

addIngredientsBtn.addEventListener('click',(e)=>{
    let newIngredients = ingredientDiv.cloneNode(true);
    let input =newIngredients.getElementsByTagName('input')[0];
    input.value='';
    ingrediantList.appendChild(newIngredients);
});
