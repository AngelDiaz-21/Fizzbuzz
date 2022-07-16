class FizzbuzzService{
    static applyValidationInExplorer(explorers){
        if(explorers.score % 5 === 0 && explorers.score % 3 === 0){
            explorers.trick = "FIZZBUZZ";
            return explorers;
            
        } else if(explorers.score % 3 === 0){
            explorers.trick = "FIZZ";
            return explorers;
            
        } else if(explorers.score % 5 === 0){
            explorers.trick = "BUZZ";
            return explorers;
            
        } else{
            explorers.trick = explorers.score;
            return explorers;
        }
    };

    static applyValidationInNumber(number){
        if(number % 5 === 0 && number % 3 === 0){
            return number = "FIZZBUZZ";

        } else if (number % 3 === 0){
            return number = "FIZZ";

        } else if (number % 5 === 0){
            return number = "BUZZ";

        } else{
            return number;
        }
    };
}

module.exports = FizzbuzzService;