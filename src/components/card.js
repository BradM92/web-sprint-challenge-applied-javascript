import axios from "axios";
import { headerAppender } from "./header";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  for(let i= 0; i< article.length; i++){
 // create elements for html
  const cardEl= document.createElement('div');
  const headlineEl = document.createElement('div');
  const authorEl = document.createElement('div');
  const imgDiv = document.createElement('div');
  const imgEl = document.createElement('img');
  const span = document.createElement('span');

  //assign CSS classes
  cardEl.classList.add('card');
  headlineEl.classList.add('headline');
  authorEl.classList.add('author');
  imgDiv.classList.add('img-container');

  // create hierarchy
  cardEl.appendChild(headlineEl);
  cardEl.appendChild(authorEl);
  authorEl.appendChild(imgDiv);
  imgDiv.appendChild(imgEl);
  authorEl.appendChild(span);

  // assign data to elements
  // console.log(article);
  // article.forEach(element => {
  //   headlineEl.textContent = element.headline;
  // imgEl.src = element.authorPhoto;
  // span.textContent = element.authorName;
  // });
  
  headlineEl.textContent = article[i].headline;
  imgEl.src = article[i].authorPhoto;
  span.textContent = article[i].authorName;
  

  console.log(article[1].headline);
  cardEl.addEventListener('click', onclick => {
    console.log(headlineEl.textContent);
  })


return cardEl;
}
}


const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(`http://localhost:5000/api/articles`)
  .then( resp =>{
    console.log(resp);
    console.log(resp.data.articles.javascript[1].headline);
    const newJavaScriptobj = resp.data.articles.javascript;
    console.log(newJavaScriptobj);
    const NewCardJavaScript = Card(newJavaScriptobj);
    const NewBootStrapObj = resp.data.articles.bootstrap;
    const newBootstrapCard = Card(NewBootStrapObj);
    const NewTechnologyObj = resp.data.articles.technology;
    const newTechnologyCard = Card(NewTechnologyObj);
    const NewJQueryObj = resp.data.articles.jquery;
    const newjQueryCard = Card(NewJQueryObj);
    const NewNodeObj = resp.data.articles.node;
    const newNodeCard = Card(NewNodeObj);

    
    const CardAppend = document.querySelector(`${selector}`);
  //apend to the given selector
  CardAppend.appendChild(NewCardJavaScript);
  CardAppend.appendChild(newBootstrapCard);
  CardAppend.appendChild(newTechnologyCard);
  CardAppend.appendChild(newjQueryCard);
  CardAppend.appendChild(newNodeCard);

  })
}

export { Card, cardAppender }
