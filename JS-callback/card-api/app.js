$(function() {
    let URL = 'https://deckofcardsapi.com/api/deck';
  
   
    $.getJSON(`${URL}/new/draw/`, function(data) {
      let { suit, value } = data.cards[0];
      console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    });
  

    $.getJSON(`${URL}/new/draw/`, function(data) {
      let firstCard = data.cards[0];
      let deckId = data.deck_id;
      $.getJSON(`${URL}/${deckId}/draw/`, function(data) {
        let secondCard = data.cards[0];
        [firstCard, secondCard].forEach(function(card) {
          console.log(
            `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
          );
        });
      });
    });
  
   
    let deckId = null;
    let $button = $('button');
    let $drawCard = $('#draw-card');
  
    $.getJSON(`${URL}/new/shuffle/`, function(data) {
      deckId = data.deck_id;
      $button.show();
    });
  
    $button.on('click', function() {
      $.getJSON(`${URL}/${deckId}/draw/`, function(data) {
        let cardSource = data.cards[0].image;
        let angle = Math.random() * 90 - 50;
        let randomX = Math.random() * 45 - 25;
        let randomY = Math.random() * 45 - 25;
        $drawCard.append(
          $('<img>', {
            src: cardSource,
            css: {
              transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
            }
          })
        );
        if (data.remaining === 0) $button.remove();
      });
    });
  });