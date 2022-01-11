

const myNotesArray = [
    {
        id: 1,             // number
        subject: "Math",   // string
        date: "01/11/22",  // string
        feeling: "lazy",   // string
        timeSpent: 7       // number (minutes spent)
    },

    {
        id: 2,                // number
        subject: "English",   // string
        date: "01/11/22",     // string
        feeling: "bored",     // string
        timeSpent: 29         // number (minutes spent)
    }
]

console.log(myNotesArray)

// create a new note object
// add the new note to the array using the .push() method
// display in the terminal all three notes

const newNoteForToday = {
        id: 3,                // number
        subject: "History",   // string
        date: "01/11/22",     // string
        feeling: "hungry",    // string
        timeSpent: 4          // number (minutes spent)
        }

myNotesArray.push(newNoteForToday)

console.log(myNotesArray)



// loop through each obj in the array
// for each obj, display a set of sentences using the values of the keys

for (const myNotesObject of myNotesArray) {
    console.log(`Note ${myNotesObject.id}
${myNotesObject.date}
I learned ${myNotesObject.subject}.
I spent ${myNotesObject.timeSpent} minutes on it.
I felt ${myNotesObject.feeling}.

`)
}


// define variable searchTerm for any property of an obj in the array
// use an IF statement to display only the obj matching the condition
// IF statement will be inside the iterative FOR loop


const searchTerm = "hungry"

for (const myNotesObject of myNotesArray) {

    if (myNotesObject.feeling === searchTerm) {
        console.log("#.#.#.# MATCHING WINNER --- MATCHING WINNER #.#.#.#")
    console.log(`Note ${myNotesObject.id}
${myNotesObject.date}
I learned ${myNotesObject.subject}.
I spent ${myNotesObject.timeSpent} minutes on it.
I felt ${myNotesObject.feeling}.

`)
}
}