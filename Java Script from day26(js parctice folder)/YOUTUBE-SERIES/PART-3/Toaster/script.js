function createToaster(config) {
    // THEME MAP
    const themes = {
        dark: "bg-gray-800 text-white",
        light: "bg-white text-black border border-gray-300",
        success: "bg-green-600 text-white",
        error: "bg-red-600 text-white",
        warning: "bg-yellow-500 text-black"
    };

    const parent = document.querySelector(".parent");

    return function (message) {
        let div = document.createElement("div");

        div.className = `
            px-4 py-3 rounded-lg shadow-lg mb-3
            top-5
            left-5
            opacity-0 transition-all duration-500
            ${themes[config.theme] || themes.dark}
            w-auto max-w-sm
        `;

        div.textContent = message;
        parent.appendChild(div);

        // Fade In
        setTimeout(() => {
            div.classList.remove("opacity-0");
            div.classList.add("opacity-100");
        }, 10);

        // Fade Out after duration
        setTimeout(() => {
            div.classList.remove("opacity-100");
            div.classList.add("opacity-0");

            setTimeout(() => div.remove(), 500);
        }, config.duration * 1000);
    };
}

// Example usage
let toaster = createToaster({
    theme: "dark",
    duration: 3
});

toaster("First toast!");
toaster("Second toast!");
toaster("Third toast!");