import { useEffect, useRef, useState } from "react";
import DrawHand from "./DrawHand";
import { takeCard } from "../Others/cards";
import { handScore } from "../Others/handScore";

function DrawHands({ player, deck }) {
  const { hand, name } = player;
  const isDisableButton = hand.cards.some((card) => card.show === false);

  const [cards, setCards] = useState(hand.cards);
  const [disableButton, setDisableButton] = useState(isDisableButton);
  const [score, setScore] = useState(handScore(cards));
  useEffect(() => handleUpdateScore(cards), [cards]);

  function handleUpdateScore(cards, show) {
    const total = handScore(cards, show);
    setScore(total);
  }

  function handleTakeCard() {
    const { card, deck: updatedDeck } = takeCard(deck.current);
    setCards([...cards, card]);
    deck.current = updatedDeck;
  }

  return (
    <div className="board-area" key={hand.id}>
      <div>
        <div>{`${name} Score: ${score}`}</div>
        {disableButton ? (
          <button disabled onClick={() => handleTakeCard()}>
            Take a new Card
          </button>
        ) : (
          <button onClick={() => handleTakeCard()}>Take a new Card</button>
        )}
      </div>
      <DrawHand
        cards={cards}
        disableButton={setDisableButton}
        handleUpdateScore={handleUpdateScore}
      />
    </div>
  );
}

export default DrawHands;
