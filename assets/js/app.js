// const tabsContainer = document.getElementById("tabs");
// console.log(tabsContainer);
// const tabTogglers = document.querySelectorAll("#tabs a");
// console.log(tabTogglers);

// tabTogglers.forEach(function (toggler) {
//     toggler.addEventListener("click", function (e) {
//         e.preventDefault;

//         let tabName = this.getAttribute("href");
//         console.log(tabName);
//         let tabContents = document.querySelector("#tab-contents");

//         for (let i = 0; i < tabContents.children.length; i++) {
//             tabTogglers[i].parentElement.classList.remove("border-b-4");
//             tabContents.children[i].classList.remove("hidden");
//             if ("#" + tabContents.children[i].id === tabName) {
//                 continue;
//             }
//             tabContents.children[i].classList.add("hidden");

//         }
//         e.target.parentElement.classList.add("border-b-4");
//     });

// });

let tabsContainer = document.querySelector("#tabs");

let tabTogglers = tabsContainer.querySelectorAll("#tabs a");

console.log(tabTogglers);

tabTogglers.forEach(function (toggler) {
    toggler.addEventListener("click", function (e) {
        e.preventDefault();

        let tabName = this.getAttribute("href");

        let tabContents = document.querySelector("#tab-contents");

        for (let i = 0; i < tabContents.children.length; i++) {

            tabTogglers[i].parentElement.classList.remove("border-b-4");
            tabContents.children[i].classList.remove("hidden");
            if ("#" + tabContents.children[i].id === tabName) {
                continue;
            }
            tabContents.children[i].classList.add("hidden");

        }
        e.target.parentElement.classList.add("border-b-4");
    });
});
