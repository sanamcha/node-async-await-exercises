$(function(){

  
    async function draw(){
        let data = await $.getJSON("https://deckofcardsapi.com/api/deck/new/draw");
        let {suit, value}= data.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`)
    }


    async function newDraw() {
    let card1 = await $.getJSON("https://deckofcardsapi.com/api/deck/new/draw/");
    let deckId = card1.deck_id;
    let card2 = await $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`);
    [card1, card2].forEach(card => {
      let { suit, value } = card.cards[0];
      console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
        });
    }

    async function game() {
        let $button = $('button');
        let $showCard = $('#show-card');
    
        let deckData = await $.getJSON("https://deckofcardsapi.com/api/deck/new/shuffle/");
        $button.show().on('click', async function() {
          let cardData = await $.getJSON(`https://deckofcardsapi.com/api/deck/${deckData.deck_id}/draw/`);
          let cardSrc = cardData.cards[0].image;
          let angle = Math.random() * 90 - 45;
          let randomX = Math.random() * 45 - 25;
          let randomY = Math.random() * 45 - 25;
          $showCard.append(
            $('<img>', {
              src: cardSrc,
              css: {
                transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
              }
            })
          );
          if (cardData.remaining === 0) $button.remove();
        });
      }
      game();

});