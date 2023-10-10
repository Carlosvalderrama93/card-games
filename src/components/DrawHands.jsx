import { useState } from "react";
import DrawHand from "./DrawHand";

function DrawHands({ player }) {
  const { hand, name } = player;
  const [score, setScore] = useState(getScore(hand.cards));

  function handleUpdateScore(cards, show = false) {
    const total = getScore(cards, show);
    setScore(total);
  }

  function getScore(cards, show = false) {
    if (show) cards.forEach((card) => (card.show = true));
    const validCards = cards.filter((card) => card.show === true);
    const scores = validCards.map((card) => card.score);
    return scores.reduce((ac, cv) => ac + cv);
  }

  return (
    <div className="board-area" key={hand.id}>
      <div>{`${name} Score: ${score}`}</div>
      <DrawHand hand={hand} handleUpdateScore={handleUpdateScore} />
    </div>
  );
}

export default DrawHands;
