function WelcomePage({
  setCount,
  count,
}: {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
}) {
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
