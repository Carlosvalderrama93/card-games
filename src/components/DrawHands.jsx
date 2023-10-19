import { useEffect, useState } from "react";
import DrawHand from "./DrawHand";
import { takeCard } from "../Others/cards";
import { handScore } from "../Others/handScore";

function DrawHands({ player, deck, flip }) {
  const { hand, name, actions } = player;
  const isDisableButton = hand.cards.some((card) => card.show === false);

  const [cards, setCards] = useState(hand.cards);
  const [disableButton, setDisableButton] = useState(isDisableButton);
  const [score, setScore] = useState(handScore(cards));
  const [stand, setStand] = useState(actions.stand);
  const [handState, setHandState] = useState(hand.state);
  const [disableHit, setDisableHit] = useState(false);

  useEffect(() => handleUpdateScore(cards), [cards]);
  useEffect(() => {
    if (score > 21) setHandState({ ...handState, lost: true });
    if (score === 21) setHandState({ ...handState, won: true });
  }, [score]);
  useEffect(() => {
    if (disableButton || stand || handState.won || handState.lost) {
      setDisableHit(true);
      setStand(true);
      if (handState.won || handState.lost) flip.set(true);
    }
  }, [disableButton, stand, handState.won, handState.lost]);

  function handleUpdateScore(cards, show) {
    const total = handScore(cards, show);
    setScore(total);
  }

  function handleTakeCard() {
    const { card, deck: updatedDeck } = takeCard(deck.current);
    setCards([...cards, card]);
    deck.current = updatedDeck;
  }

  function handleStand() {
    setStand(true);
    flip.set(true);
  }

  return (
    <div className="board-area" key={hand.id}>
      <div>
        <div>{`${name} Score: ${score}`}</div>
        {disableHit ? (
          <button disabled onClick={() => handleTakeCard()}>
            Hit
          </button>
        ) : (
          <button onClick={() => handleTakeCard()}>Hit</button>
        )}
        {stand ? (
          <button disabled>Stand</button>
        ) : (
          <button onClick={() => handleStand()}>Stand</button>
        )}
        <button>Double Down</button>
        <button>Split</button>
        <button>Surrender</button>
      </div>
      <DrawHand
        cards={cards}
        disableButton={setDisableButton}
        handleUpdateScore={handleUpdateScore}
        flip={flip.state}
        stand={setStand}
        hit={setDisableHit}
      />
    </div>
  );
}

export default DrawHands;
