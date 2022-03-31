const MockScrollingBlock = () => {
  return (
    <>
      <div style={{ height: "25rem", backgroundColor: "#fff" }}>
        <h2 className="text-center align-items-center">Card 1</h2>
      </div>

      <div style={{ height: "25rem", backgroundColor: "#ddd" }}>
        <h2 className="text-center align-items-center">Card 2</h2>
      </div>
      <div style={{ height: "25rem", backgroundColor: "#333", color: "#fff" }}>
        <h2 className="text-center align-items-center">Card 3</h2>
      </div>
    </>
  );
};

export default MockScrollingBlock;
