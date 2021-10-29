import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
    const topicsEl = document.createElement('div');
  
    //add classes for CSS
    topicsEl.classList.add('topics')

    // //insert data to elements
    topics.forEach(element => {
      const newEl = document.createElement('div');
      newEl.classList.add('tab');
      newEl.textContent = element;
      topicsEl.appendChild(newEl);
    });

  return topicsEl;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('http://localhost:5000/api/topics')
  .then( resp => {
    const newTopics = resp.data.topics;
    const NewTabs = Tabs(newTopics);
    const tabAppend = document.querySelector(`${selector}`);
  //apend to the given selector
  tabAppend.appendChild(NewTabs);
  
  })


}

export { Tabs, tabsAppender }
