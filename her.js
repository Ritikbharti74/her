// Move the "No" button randomly
function moveButton() {
    const noBtn = document.getElementById('noBtn');

    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 40) + 20;
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 40) + 20;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    noBtn.style.position = 'fixed';
}

// Show video when she clicks Yes
function celebrate() {
    const container = document.getElementById('question-container');

    container.innerHTML = `
        <div class="flex flex-col items-center">
            <video
                class="love-video"
                autoplay
                controls
                playsinline
            >
                <source src="faltu.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

            <h2 class="text-4xl font-romantic text-rose-600 mt-6">
                ❤️ I Love You ❤️
            </h2>
        </div>
    `;
}
