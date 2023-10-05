import DrawHand from "./DrawHand";

function DrawHands({ hand }) {
  return (
    <div className="board-area" key={hand.id}>
      <DrawHand cards={hand.cards} />
    </div>
  );
}

export default DrawHands;
