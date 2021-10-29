const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  // create header html elements
  const header =document.createElement('div');
  const dateSpan = document.createElement('span');
  const titleH1 = document.createElement('h1');
  const tempSpan = document.createElement('span');
//  append html header elements to make the hierarchy 
  header.appendChild(dateSpan);
  header.appendChild(titleH1);
  header.appendChild(tempSpan);
// add classes for CSS
  header.classList.add('header');
  dateSpan.classList.add('date');
  tempSpan.classList.add('temp');
// insert data to textcontent
  dateSpan.textContent = date;
  titleH1.textContent = title;
  tempSpan.textContent = temp;
//return result
  return header;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  
  //call the function to make header elements
  const headerEl = Header('Lambda Times','October 1st, 2021', 55);
//call the selector we want
  const headerAppend = document.querySelector(`${selector}`);
  //apend to the given selector
  headerAppend.appendChild(headerEl);
}

export { Header, headerAppender }
