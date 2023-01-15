const linguagem = document.querySelector('.form_personalizacao--linguagem');
const areaDoCodigo = document.querySelector('.code_wrapper');
const botao = document.querySelector('.editor_highlight');

function aplicaHighlight() {
    const codigo = areaDoCodigo.innerText;
    areaDoCodigo.innerHTML = `<pre><code class"preview hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código"></pre>`;
    areaDoCodigo.querySelector('code').textContent = codigo;
    hljs.highlightElement(areaDoCodigo.querySelector('code'));
}

botao.addEventListener('click', () => {
    aplicaHighlight();
})