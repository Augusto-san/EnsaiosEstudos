  <script>
    // Dados de exemplo para os flashcards
    var flashcards = [
      {
        frente: "Adjetivo e substantivo de dois gêneros<br><br>1. que ou o que existe há pouco tempo; novo, jovem<br>2. que ou aquele que iniciou recentemente alguma atividade, função etc; principiante, iniciante.",
        tras: "NOVEL"
      },
      {
        frente: "Pessoa que expressa crença ou confiança<br><br>1. Aquele que acredita ou confia em algo ou alguém.",
        tras: "CREDULO"
      },
      {
        frente: "Sensação desagradável causada por uma dor física ou moral<br><br>1. Estado emocional caracterizado por um sofrimento prolongado.",
        tras: "TRISTEZA"
      }
    ];
    
    var indiceAtual = 0; // Mantém o índice do flashcard atual

    function mostrarConteudo() {
      // Exibe a parte de trás do flashcard sem esconder a frente
      document.getElementById('back-content').style.display = 'block';
    }

    function ocultarConteudo() {
      // Esconde a parte de trás do flashcard e exibe a frente
      document.getElementById('back-content').style.display = 'none';
    }

    function atualizarFlashcard() {
      // Atualiza o conteúdo do flashcard com base no índice atual
      document.getElementById('front-content').innerHTML = flashcards[indiceAtual].frente;
      document.getElementById('back-content').innerHTML = flashcards[indiceAtual].tras;
      document.getElementById('back-content').style.display = 'none'; // Esconde a parte de trás ao trocar
    }

    function flashcardProximo() {
      // Vai para o próximo flashcard
      if (indiceAtual < flashcards.length - 1) {
        indiceAtual++;
        atualizarFlashcard();
      } else {
        alert("Este é o último flashcard.");
      }
    }

    function flashcardAnterior() {
      // Volta para o flashcard anterior
      if (indiceAtual > 0) {
        indiceAtual--;
        atualizarFlashcard();
      } else {
        alert("Este é o primeiro flashcard.");
      }
    }

    // Inicializa o flashcard com o primeiro conteúdo
    atualizarFlashcard();
  </script>
