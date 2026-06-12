const Viewer = ({ count }) => {
  return (
    <div className="viewer">
      <p>현재 카운트:</p>
      <h1>{count}</h1>
    </div>
  );
};

export default Viewer;
