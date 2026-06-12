const Controller = ({ controlCounter }) => {
  return (
    <div>
      <button
        onClick={() => {
          controlCounter(-100);
        }}
      >
        -100
      </button>
      <button
        onClick={() => {
          controlCounter(-10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          controlCounter(-1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          controlCounter(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          controlCounter(10);
        }}
      >
        10
      </button>
      <button
        onClick={() => {
          controlCounter(100);
        }}
      >
        100
      </button>
    </div>
  );
};

export default Controller;
