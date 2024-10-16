// Variáveis do carrinho
let carrinho = [];
const carrinhoItens = document.getElementById('carrinho-itens');
const carrinhoTotal = document.getElementById('carrinho-total');

// Função para adicionar produto ao carrinho
document.querySelectorAll('.btn-adicionar').forEach(button => {
    button.addEventListener('click', function() {
        const nome = this.getAttribute('data-nome');
        const preco = parseFloat(this.getAttribute('data-preco'));
        
        const produtoExistente = carrinho.find(item => item.nome === nome);
        
        if (produtoExistente) {
            produtoExistente.quantidade++;
        } else {
            carrinho.push({ nome, preco, quantidade: 1 });
        }
        
        atualizarCarrinho();
    });
});

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
    carrinhoItens.innerHTML = '';
    let total = 0;
    
    carrinho.forEach(produto => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${produto.nome}</td>
            <td>R$ ${produto.preco.toFixed(2)}</td>
            <td>${produto.quantidade}</td>
            <td>R$ ${(produto.preco * produto.quantidade).toFixed(2)}</td>
        `;
        carrinhoItens.appendChild(linha);
        total += produto.preco * produto.quantidade;
    });
    
    carrinhoTotal.textContent = total.toFixed(2);
}
