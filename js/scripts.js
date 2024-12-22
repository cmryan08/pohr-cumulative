// Existing function for card visibility
function showCard(cardId) {
    // Hide all hidden cards
    const cards = document.querySelectorAll('.hidden-card');
    cards.forEach(card => card.classList.remove('active'));

    // Show the selected card
    const selectedCard = document.getElementById(cardId);
    if (selectedCard) {
        selectedCard.classList.add('active');
    }

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.custom-btn');
    buttons.forEach(button => button.classList.remove('active'));

    // Add active class to the clicked button
    const activeButton = document.querySelector(`button[onclick="showCard('${cardId}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}