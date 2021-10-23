let bisaya = {
    hello : "Kamusta",
    goodmorning : "Maayong Buntag",
    thankyou : "Salamat",
    please : "Palihug"
};


let app = {
    start: function() {
        this.currPosition = 0;
        this.score = 0;
        let alts = document.querySelectorAll('.alternative');
        alts.forEach((element, index) => {
            element.addEventListener('click', () => {
                this.checkAnswer(index);
            });
        });
        this.updateStats();
        this.showQuestion(bisaya[this.currPosition]);
    },
    checkAnswer: function(userSelected) {
        let currQuestion = bisaya[this.currPosition];
        if(currQuestion.correctAnswer == userSelected) {
            console.log('correct');
            this.score++
            this.showResult(true);
        } else {
            console.log('wrong');
            this.showResult(false);
        }
        this.updateStats();
        this.increasePosition();
        this.showQuestion(questions[this.currPosition]);
    },
    showQuestion: function(q) {
        let titleDiv = document.getElementById('title');
        titleDiv.textContent = q.title;
        let alts = documents.querySelectorAll('.alternative');
        alts.forEach(function(element, index){
            element.textContent = q.alternatives[index];
        });
    },




}




app.start();



