const botoesAvancar = document.querySelectorAll('.btn-proximo');

botoesAvancar.forEach(botao => {
    botao.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        // Remove o passo atual
        atual.classList.remove('ativo');

        // Adiciona o próximo passo
        document.getElementById(proximoPasso).classList.add('ativo');
    });
});
