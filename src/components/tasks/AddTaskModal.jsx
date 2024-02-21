import { useForm } from "react-hook-form";
import Modal from "../UI/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/task/tasksSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();

  const dispatch = useDispatch();

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    // console.log(data);
    dispatch(addTask(data));
    onCancel();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Title
          </label>
          <input
            className="w-full rounded-md"
            type="text"
            id="title"
            {...register("title")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            description
          </label>
          <textarea
            className="w-full rounded-md"
            type="text"
            id="description"
            {...register("description")}
          ></textarea>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Deadline
          </label>
          <input
            className="w-full rounded-md"
            type="date"
            id="date"
            {...register("date")}
          />
        </div>
        <div className="flex flex-col mb-5"></div>
        <label htmlFor="title" className="mb-2">
          Assign to
        </label>
        <select
          className="w-full rounded-md"
          id="assignedTo"
          {...register("assignedTo")}
        >
          <option value="Mir Hussain">Mir Hussain</option>
          <option value="Mir khan">Mir khan</option>
          <option value="Mir rahman">Mir rahman</option>
          <option value="Mir ali">Mir Hussain</option>
          <option value="Mir Hussain">Mir ali</option>
          <option value="Mir Hussain banu">Mir Hussain banu</option>
        </select>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Priority
          </label>
          <select
            className="w-full rounded-md"
            id="priority"
            {...register("priority")}
          >
            <option defaultValue value="high">
              High
            </option>
            <option value="medium">medium</option>
            <option value="low">low</option>
          </select>
        </div>
        <div className="flex gap-3 justify-end">
          <button type="button" className="btn btn-danger">
            cancel
          </button>
          <button onClick={onCancel} type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
