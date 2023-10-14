import {
  bananaStore,
  incremented,
  decremented,
  restarted,
} from "./BananaReducer";

function Banana() {
  bananaStore.subscribe(() => {
    console.log(bananaStore.getState().value);
  });

  return (
    <>
      <h2>
        You have an amazing amount of {bananaStore.getState().value} bananas!
      </h2>
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
