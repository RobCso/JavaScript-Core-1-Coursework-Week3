/*
    Imagine you are working on the Financial Times web site! They have a list of article titles stored in an array.

    The home page of the web site has a headline section, which only has space for article titles which are 65 characters or less.
    Implement the function below, which will return a new array containing only article titles which will fit.
*/
function potentialHeadlines(allArticleTitles) {
    let arr = [];
    for (const element of allArticleTitles) {
        if (element.length <= 65) {
            arr.push(element);
        }
    }return arr;
    
}

/*
    The editor of the FT likes short headlines with only a few words!
    Implement the function below, which returns the title with the fewest words.
    (you can assume words will always be seperated by a space)
*/
function titleWithFewestWords(allArticleTitles) {
     let arrLength = [];
     let smallestNumValue;
     let index;
    for (const element of allArticleTitles) {      //my first step was to itirate through the array and create an other array with indexes of lenght of each string
         arrLength.push(element.split(" ").length);        
    }
    smallestNumValue = Math.min(...arrLength); //once i had the array of indexes of lenght I went on to find the position of the smallest index in the array in 2 steps, first finding the value of the smallest number 
    index = arrLength.indexOf(smallestNumValue)//this is the second step of finding the position of the smallest index in an array, this steps finds the position of the smallest number that we identified in the previous step
    return allArticleTitles[index]; //finally i return the position of the smallest number of the original array
}

/*
    The editor of the FT has realised that headlines which have numbers in them get more clicks!
    Implement the function below to return a new array containing all the headlines which contain a number.
    (Hint: remember that you can also loop through the characters of a string if you need to)
*/
function headlinesWithNumbers(allArticleTitles) {
    let array = []
    for (const element of allArticleTitles){
        if ( /\d/.test(element)) {
            array.push(element);
        }
    } return array;
}

/*
    The Financial Times wants to understand what the average number of characters in an article title is.
    Implement the function below to return this number - rounded to the nearest integer.
*/
function averageNumberOfCharacters(allArticleTitles) {
    let arrNumOfCharacters = [];
    let total = 0;
    let average = 0;
    for (const element of allArticleTitles) {
        arrNumOfCharacters.push(element.trim().length);
    }
    for (const element of arrNumOfCharacters) {
         total = total + element;
    }
     average = total / arrNumOfCharacters.length;
     return Math.round(average);
}




/* ======= List of Articles - DO NOT MODIFY ===== */
const ARTICLE_TITLES = [
    "Streaming wars drive media groups to spend more than $100bn on new content",
    "Amazon Prime Video India country head: streaming is driving a TV revolution",
    "Aerospace chiefs prepare for bumpy ride in recovery of long-haul flights",
    "British companies look to muscle in on US retail investing boom",
    "Libor to take firm step towards oblivion on New Year's Day",
    "Audit profession unattractive to new recruits, says PwC boss",
    "Chinese social media users blast Elon Musk over near miss in space",
    "Companies raise over $12tn in 'blockbuster' year for global capital markets",
    "The three questions that dominate investment",
    "Brussels urges Chile's incoming president to endorse EU trade deal",
];

/* ======= TESTS - DO NOT MODIFY ===== */

test("should only return potential headlines", () => {
    expect(new Set(potentialHeadlines(ARTICLE_TITLES))).toEqual(new Set([
        "British companies look to muscle in on US retail investing boom",
        "Libor to take firm step towards oblivion on New Year's Day",
        "Audit profession unattractive to new recruits, says PwC boss",
        "The three questions that dominate investment"
    ]));
});

test("should return an empty array for empty input", () => {
    expect(potentialHeadlines([])).toEqual([]);
});

test("should return the title with the fewest words", () => {
    expect(titleWithFewestWords(ARTICLE_TITLES)).toEqual("The three questions that dominate investment");
});

test("should only return headlines containing numbers", () => {
    expect(new Set(headlinesWithNumbers(ARTICLE_TITLES))).toEqual(new Set([
        "Streaming wars drive media groups to spend more than $100bn on new content",
        "Companies raise over $12tn in 'blockbuster' year for global capital markets"
    ]));
});

test("should return the average number of characters in a headline", () => {
    expect(averageNumberOfCharacters(ARTICLE_TITLES)).toEqual(65);
});
