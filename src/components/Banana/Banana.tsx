import {
  bananaStore,
  incremented,
  decremented,
  restarted,
} from "./BananaReducer";

function Banana() {
  const bananas = bananaStore.getState().value;

  console.log(bananas);

  return (
    <>
      <h2>You have an amazing amount of {bananas} bananas!</h2>
      <button
        onClick={() => {
          incremented();
        }}
      >
        More bananas!
      </button>
      <button
        onClick={() => {
          decremented();
        }}
      >
        Less bananas...
      </button>
      <button
        onClick={() => {
          restarted();
        }}
      >
        Eat them all
      </button>
    </>
  );
}

export default Banana;
