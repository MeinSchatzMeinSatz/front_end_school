import type { Todo } from "../types/types";
import { useTodoDispatch } from "../App";

interface Props extends Todo {}

const TodoItem = (props: Props) => {
  const dispatch = useTodoDispatch();
  const onClickButton = () => {
    dispatch.onClickDelete(props.id);
  };

  return (
    <div>
      {props.id} : {props.content}
      <button onClick={onClickButton}>삭제</button>
    </div>
  );
};

export default TodoItem;
