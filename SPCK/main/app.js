const showHideButton = document.getElementById("showHideButton");
const hiddenDiv = document.getElementById("hiddenDiv");

showHideButton.addEventListener("click", function () {
    // Toggle the display property of the hiddenDiv
    if (hiddenDiv.style.display === "none") {
        hiddenDiv.style.display = "block";
    } else {
        hiddenDiv.style.display = "none";
    }
});
