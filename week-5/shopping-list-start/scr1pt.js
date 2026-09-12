const clearBtn = document.querySelector('#clear')

onClear = () => alert("Clear All Items");
// Using JavaScript Event Listener
// clearBtn.onclick = function clearItems () {
//     alert("Clear All Items");
// }

// clearBtn.onclick = function clearItems () {
//     console.log("Clear All Items");
// }

// addEventListener()
// clearBtn.addEventListener('click', () => console.log("Clear All Items"))

clearBtn.addEventListener('click', onClear)

// removeEventListener()
setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000)

