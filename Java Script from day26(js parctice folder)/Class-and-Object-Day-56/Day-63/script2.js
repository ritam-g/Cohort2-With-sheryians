//! TASK 2 (CORRECTED CODE)

let emails = [
    "k1@gmail.com",
    "k2@gmail.com",
    "k3@gmail.com",
    "k4@gmail.com",
    "k5@gmail.com"
];

// Helper function: Logic is correct, and it correctly returns a Promise.
function emailSendingFun(email) {
    // Note: It's better to use a simple probability (e.g., Math.random() < 0.8) 
    // for success/failure simulation, but your random logic is valid.
    let expectation = Math.floor(Math.random() * 2)
    let random = Math.floor(Math.random() * 10)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (expectation < random) {
                // SUCCESS path
                resolve("✅ The email was sent successfully to: " + email)
            } else {
                // FAILURE path
                reject("❌ Failure: Could not send email to: " + email)
            }
        }, 1000);
    })
}

async function allEmailSendingProess(emails) {
    console.log("Email process is starting...");

    // 🌟 FIX: Use .map() to transform the array of emails into an array of Promises.
    let allEmailPromieses = emails.map( email => {
        return  emailSendingFun(email)
    });

    try {
        // Await the array of Promises. If any rejects, execution jumps to catch.
        let result = await Promise.all(allEmailPromieses)

        // ✅ Success Block (Runs only if ALL emails are sent)
        console.log("\n✅ ALL emails were sent successfully!");
        result.forEach(log => {
            console.log(log);
        })

    } catch (error) {
        // ❌ Failure Block (Runs if ANY email fails)
        console.log("\n❌ Email process FAILED due to a critical error.");
        console.error(`Error details: ${error}`); // logs the rejection message
    } finally {
        // 🎉 FINAL REQUIREMENT MET
        console.log("\n🎉 Email process is complete.");
    }
}

// Execute the main function
allEmailSendingProess(emails)