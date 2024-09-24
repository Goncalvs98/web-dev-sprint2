const form = document.getElementById('form-inputs');
            
form.addEventListener('submit', (e) => {
    const nameInput = document.getElementById('Nome');
    const emailInput = document.getElementById('E-mail');
    // Verifica se os campos foram preenchidos
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
        e.preventDefault();
        alert('Preencha o formulário, por favor');
    } else {
        // Se o formulário for válido, exibe o modal
    }
});