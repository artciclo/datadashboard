document.addEventListener('DOMContentLoaded', () => {
    const usersInput = document.getElementById('users');
    const signupsInput = document.getElementById('signups');
    const salesInput = document.getElementById('sales');
    const visitsInput = document.getElementById('visits');

    const usersCard = document.getElementById('users-card').querySelector('p');
    const signupsCard = document.getElementById('signups-card').querySelector('p');
    const salesCard = document.getElementById('sales-card').querySelector('p');
    const visitsCard = document.getElementById('visits-card').querySelector('p');

    function updateCardValue(input, card) {
        card.textContent = parseInt(input.value).toLocaleString();
    }

    [usersInput, signupsInput, salesInput, visitsInput].forEach(input => {
        input.addEventListener('input', () => {
            if (input.id === 'users') updateCardValue(usersInput, usersCard);
            else if (input.id === 'signups') updateCardValue(signupsInput, signupsCard);
            else if (input.id === 'sales') updateCardValue(salesInput, salesCard);
            else if (input.id === 'visits') updateCardValue(visitsInput, visitsCard);
        });
    });
});
