// Select all heading elements inside <main>
let h1 = document.querySelector("main > h1");
let h2 = document.querySelector("main > h2");
let h3 = document.querySelector("main > h3");
let h4 = document.querySelector("main > h4");
let h5 = document.querySelector("main > h5");
let h6 = document.querySelector("main > h6");

// Store the normal (original) text from the first heading
let realdata = h1.textContent;

// String of random characters for the scramble effect
let string = 'ABCDEFGHIJKLMNOPhijklmnopqrstwxyz';


// -------------------- H1 EVENT --------------------
h1.addEventListener("mouseenter", () => {

    let move = 0;  // move controls how many letters are revealed

    // Start interval that runs every 100ms
    let intval = setInterval(() => {

        // Create new text by mapping each character
        let val = realdata.split("").map((char, idx) => {

            // if index is less than move, reveal real character
            if (idx < move) return char;

            // otherwise return a random letter
            return string.split("")[Math.floor(Math.random() * string.length)];

        }).join("");

        move += 0.25;       // Reveal a little more each time (slow reveal)
        h1.textContent = val; // Update the <h1> text with scrambled output

    }, 100);

    // This condition executes immediately, not inside the interval.
    // It does NOT work correctly but you kept it so I am explaining it:
    if (move > realdata.length) {
        setTimeout(() => {
            clearInterval(intval); // tries to clear interval immediately (ineffective)
        }, 0);
    }

});


// -------------------- H2 EVENT --------------------
h2.addEventListener("mouseenter", () => {

    let move = 0;

    let intval = setInterval(() => {

        let val = realdata.split("").map((char, idx) => {

            if (idx < move) return char;
            return string.split("")[Math.floor(Math.random() * string.length)];

        }).join("");

        move += 0.25;
        h2.textContent = val;

    }, 100);

    if (move > realdata.length) {
        setTimeout(() => {
            clearInterval(intval);
        }, 0);
    }

});


// -------------------- H3 EVENT --------------------
h3.addEventListener("mouseenter", () => {

    let move = 0;

    let intval = setInterval(() => {

        let val = realdata.split("").map((char, idx) => {

            if (idx < move) return char;
            return string.split("")[Math.floor(Math.random() * string.length)];

        }).join("");

        move += 0.25;
        h3.textContent = val;

    }, 100);

    if (move > realdata.length) {
        setTimeout(() => {
            clearInterval(intval);
        }, 0);
    }

});


// -------------------- H4 EVENT --------------------
h4.addEventListener("mouseenter", () => {

    let move = 0;

    let intval = setInterval(() => {

        let val = realdata.split("").map((char, idx) => {

            if (idx < move) return char;
            return string.split("")[Math.floor(Math.random() * string.length)];

        }).join("");

        move += 0.25;
        h4.textContent = val;

    }, 100);

    if (move > realdata.length) {
        setTimeout(() => {
            clearInterval(intval);
        }, 0);
    }

});


// -------------------- H5 EVENT --------------------
h5.addEventListener("mouseenter", () => {

    let move = 0;

    let intval = setInterval(() => {

        let val = realdata.split("").map((char, idx) => {

            if (idx < move) return char;
            return string.split("")[Math.floor(Math.random() * string.length)];

        }).join("");

        move += 0.25;
        h5.textContent = val;

    }, 100);

    if (move > realdata.length) {
        setTimeout(() => {
            clearInterval(intval);
        }, 0);
    }

});


// -------------------- H6 EVENT --------------------
h6.addEventListener("mouseenter", () => {

    let move = 0;

    let intval = setInterval(() => {

        let val = realdata.split("").map((char, idx) => {

            if (idx < move) return char;
            return string.split("")[Math.floor(Math.random() * string.length)];

        }).join("");

        move += 0.25;
        h6.textContent = val;

    }, 100);

    if (move > realdata.length) {
        setTimeout(() => {
            clearInterval(intval);
        }, 0);
    }

});
