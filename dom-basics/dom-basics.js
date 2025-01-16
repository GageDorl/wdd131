const newParagraph = document.createElement('p');
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement('img');
newImage.setAttribute('src',"https://picsum.photos/200");
newImage.setAttribute('alt','placeholder image');
document.body.appendChild(newImage);

const newDiv = document.createElement('div');
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement('section');
newSection.innerHTML = '<h2>DOM Basics</h2><p>This was added through JavaScript</p>';
document.body.appendChild(newSection);

const ingredientData = ['Pinto Beans','Corn','Spiders','Tortillas'];
const portionData = ['1 15oz can','1 15oz can',' 1 Tbsp','8'];

const listTitle = document.createElement('h2');
listTitle.textContent = 'Ingredient List';
document.body.append(listTitle);

const newList = document.createElement('ul');
ingredientData.forEach((item,i)=>{
    let listElement = document.createElement('li');
    listElement.textContent = `${portionData[i]} ${ingredientData[i]}`;
    newList.append(listElement); 
})

document.body.append(newList);