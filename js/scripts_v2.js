<script>

document.addEventListener("DOMContentLoaded", function() {
  var scriptUrl = 'https://script.google.com/macros/s/AKfycbxogFO3-3H7ebnTIBXRxW6MEaxPHvTBXcLlUFVpuRQXzNYJrxrnxbME7GdFK41Jqaaa/exec'; // URL do web app do Google Apps Script
  
  function fetchFlashcards() {
    fetch(scriptUrl)
      .then(response => response.json())
      .then(data => {
        flashcards = data;
        atualizarFlashcard();
      })
      .catch(error => console.error('Erro ao buscar dados:', error));
  }

  var flashcards = [];
  var indiceAtual = 0;

  function mostrarConteudo() {
    document.getElementById('back-content').style.display = 'block';
  }

  function ocultarConteudo() {
    document.getElementById('back-content').style.display = 'none';
  }

  function atualizarFlashcard() {
    if (flashcards.length === 0) return; // Se não houver flashcards, não faça nada
    document.getElementById('front-content').innerHTML = flashcards[indiceAtual].frente;
    document.getElementById('back-content').innerHTML = flashcards[indiceAtual].tras;
    document.getElementById('back-content').style.display = 'none';
  }

  function flashcardProximo() {
    if (indiceAtual < flashcards.length - 1) {
      indiceAtual++;
      atualizarFlashcard();
    } else {
      alert("Este é o último flashcard.");
    }
  }

  function flashcardAnterior() {
    if (indiceAtual > 0) {
      indiceAtual--;
      atualizarFlashcard();
    } else {
      alert("Este é o primeiro flashcard.");
    }
  }

  fetchFlashcards(); // Inicializa o flashcard com dados da planilha
});

</script>
