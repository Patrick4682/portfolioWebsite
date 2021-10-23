// define the object for the question entity
let question = {
    title: 'gato',
    alternatives: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 1
};
  
// function for showing the question
function showQuestion(q) {
    // 1. select dom element
    let titleDiv = document.getElementById("title");
  
    // 2. modify it
    titleDiv.textContent = q.title;
    
    // selecting by a query
    let alts = document.querySelectorAll('.alternative');
    console.log(alts);
    
    // show each alternative
    alts.forEach(function(element, index){
      element.textContent = q.alternatives[index];
    });
}
  
// call the function
showQuestion(question);