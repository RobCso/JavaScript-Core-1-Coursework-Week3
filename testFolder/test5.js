function titleWithFewestWords(allArticleTitles) {
     let arrLength = [];
     let smallestNumPosition;
     let index;
    for (const element of allArticleTitles) {
         arrLength.push(element.split(" ").length);        
    }
    smallestNumPosition = Math.min(...arrLength);
    index = arrLength.indexOf(smallestNumPosition)
    console.log(allArticleTitles[index]);
}

let arr = ["Streaming wars drive media groups to spend more than $100bn on new content",
    "Amazon Prime Video India country head: streaming is driving a TV revolution",
    "Aerospace chiefs prepare for bumpy ride in recovery of long-haul flights",
    "British companies look to muscle in on US retail investing boom",
    "Libor to take firm step towards oblivion on New Year's Day aa aa aa aa aa aa aa aa aa aa aa",
    "Audit profession unattractive to new recruits, says PwC boss",
    "Chinese social media users blast Elon Musk over near miss in space",
    "Companies raise over $12tn in 'blockbuster' year for global capital markets",
    "The three questions that dominate investment",
    "Brussels urges Chile's incoming president to endorse EU trade deal",]

    titleWithFewestWords(arr)