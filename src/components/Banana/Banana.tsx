import {
  bananaStore,
  incremented,
  decremented,
  restarted,
} from "./BananaReducer";

function Banana() {
  let bananas = bananaStore.getState().value;

  bananaStore.subscribe(() => {
    console.log(bananaStore.getState().value);
    bananas = bananaStore.getState().value;
  });

  return (
    <>
      <h2>You have an amazing amount of {bananas} bananas!</h2>
      <button
        onClick={() => {
          bananaStore.dispatch(incremented());
        }}
      >
        More bananas!
      </button>
      <button
        onClick={() => {
          bananaStore.dispatch(decremented());
        }}
      >
        Less bananas...
      </button>
      <button
        onClick={() => {
          bananaStore.dispatch(restarted());
        }}
      >
        Eat them all
      </button>
    </>
  );
}

export default Banana;
