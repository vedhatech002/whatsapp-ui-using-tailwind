// profile menu toggle
const dotButton = document.getElementById("three-dot");
console.log(dotButton);
let dropDown = document.getElementById("dropdown-menu");
console.log(dropDown)

dotButton.addEventListener("click", () => {
    let dropdownClassList = dropDown.classList;
    let containInvisible = dropdownClassList.contains("invisible")
    if (containInvisible === true) {
        dropDown.classList.remove("invisible");
    }
    else {
        dropDown.classList.add("invisible");
    }

});


// tab system
let tabsContainer = document.querySelector("#tabs");

let tabTogglers = tabsContainer.querySelectorAll("#tabs a");

let tabSelect = tabsContainer.nextElementSibling

// console.log(tabSelect);

console.log(tabTogglers);

tabTogglers.forEach(function (toggler) {
    toggler.addEventListener("click", function (e) {
        e.preventDefault();


        let tabName = this.getAttribute("href");

        let tabContents = document.querySelector("#tab-contents");

        for (let i = 0; i < tabContents.children.length; i++) {
            console.log(tabTogglers[i].nextElementSibling);
            tabTogglers[i].nextElementSibling.classList.remove("bg-white", "w-full", "h-1", "absolute", "bottom-0", "top-6");
            tabContents.children[i].classList.remove("hidden");
            if ("#" + tabContents.children[i].id === tabName) {
                continue;
            }
            tabContents.children[i].classList.add("hidden");

        }

        e.target.nextElementSibling.classList.add("bg-white", "w-full", "h-1", "absolute", "bottom-0", "top-6");
    });
});
