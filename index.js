function getFirstSelector(selector) {
  let element = selector.toString();
  let matchingElement = document.querySelector(element);
  return matchingElement;
}

function nestedTarget () {
  // pull .target out of #nested
let nestedTargetElement = document.querySelector('#nested .target');
// return element
  return nestedTargetElement;
  }
  
  function increaseRankBy(n) {
    let number = parseInt(n);
    let rankedLists = document.getElementById('app').querySelectorAll('ul.ranked-list')
    //for loop to retrive children of ranked-list
    for (let i = 0; i < rankedLists.length; i++) {
    let children = rankedLists[i].children;
    
    for (let j = 0; j < children.length; i++) {
      children[j].innerHTML += parseInt(children[j].innerHTML) + number; 
    }
  }
}
  
  function deepestChild() {
    let node = document.getElementById('grand-node');
    let nextNode = node.children[0];
    while (nextNode) {
      nextNode = node;
      nextNode = node.children[0];
    }
    console.log(node);
    return node;
  }
