// Make the "No" button run away when hovered
document.getElementById('noButton').addEventListener('mouseover', function () {
    const button = this;
    const container = button.parentElement;
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    // Calculate random positions within the container
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Move the button to the random position
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});

// Add a sweet message when "Yes" is clicked
document.getElementById('yesButton').addEventListener('click', function () {
    alert('Dapat lang!!! I love you❤️');
});

document.getElementById('noButton').addEventListener('click', function () {
    alert('Hindi mo na talaga ako love :(((');
});