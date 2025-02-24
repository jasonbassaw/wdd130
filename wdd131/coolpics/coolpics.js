document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector("button");
    const navMenu = document.querySelector("nav ul");

    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("hide");
    });

    function handleResize() {
        if (window.innerWidth > 1000) {
            navMenu.classList.remove("hide");
            menuButton.style.display = "none";
        } else {
            navMenu.classList.add("hide");
            menuButton.style.display = "";
        }
    }

    window.addEventListener("resize", handleResize);
    handleResize();
});

document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const images = document.querySelectorAll(".focusable");
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");
    const content = document.getElementById("content");

    images.forEach((image) => {
        image.addEventListener("click", function (event) {
            modal.style.display = "flex";
            modalImage.src = event.target.src;
            content.classList.add("blur-background");
        });
    });

    // Close modal on close button click
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
        content.classList.remove("blur-background");
    });

    // Close modal on outside click
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            content.classList.remove("blur-background");
        }
    });
});

// Image Viewer Functionality
function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}

function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove();
    }
}

function viewHandler(event) {
    const clickedElement = event.target;
    if (!clickedElement.src) return; 

    const sourceInfo = clickedElement.src.split("-");
    const newImageSource = sourceInfo[0] + "-full.jpeg";
    const newImageAlt = clickedElement.alt;

    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(newImageSource, newImageAlt));

    const viewerButton = document.querySelector(".close-viewer");
    if (viewerButton) {
        viewerButton.addEventListener("click", closeViewer);
    }
}

// Attach event listener to images
document.querySelectorAll(".focusable").forEach((picture) => {
    picture.addEventListener("click", viewHandler);
});

