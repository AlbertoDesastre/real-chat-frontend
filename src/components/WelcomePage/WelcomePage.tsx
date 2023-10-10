import { useState } from "react";

function WelcomePage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>This is the title for Welcome Page</h1>
      <button
        onClick={() => {
          setCount((count: number) => count + 1);
        }}
      >
        You've clicked this button {count} times
      </button>
    </>
  );
}

export default WelcomePage;
