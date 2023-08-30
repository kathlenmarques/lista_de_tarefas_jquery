
$(document).ready(function(){
    // Prevenir ação default 
    
    $('form').on('submit', function(e){
        e.preventDefault();
        const nomeTarefa = $('#nome-tarefa').val();
        const novoItem = $('<li></li>');

        $(`<li class="minha-lista"> ${nomeTarefa}</li>`).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        
      });
    });

    $('ul').on('click', '.minha-lista', function() {
      $(this).css("text-decoration", "line-through");
  });
