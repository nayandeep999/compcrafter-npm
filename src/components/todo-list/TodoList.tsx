import { Edit, Trash } from "lucide-react";
import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<boolean[]>([]);
  const [newTask, setNewTask] = useState("");
  const [editingTaskIndex, setEditingTaskIndex] = useState<number | null>(null);
  const [editedTask, setEditedTask] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setNewTask(event.target.value);
  }

  function addTask(): void {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setCompletedTasks([...completedTasks, false]);
      setNewTask("");
    }
  }

  function toggleEdit(index: number) {
    setEditingTaskIndex(index);
    setEditedTask(tasks[index]);
  }

  function saveEditTask() {
    if (editedTask.trim() !== "" && editingTaskIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editingTaskIndex] = editedTask;
      setTasks(updatedTasks);
      setEditingTaskIndex(null);
      setEditedTask("");
    }
  }

  function toggleComplete(index: number) {
    const updatedCompletedTasks = [...completedTasks];
    updatedCompletedTasks[index] = !updatedCompletedTasks[index];
    setCompletedTasks(updatedCompletedTasks);
  }

  function deleteTask(index: number) {
    setTasks(tasks.filter((_, i) => i !== index));
    setCompletedTasks(completedTasks.filter((_, i) => i !== index));
  }

  return (
    <div className="max-w-sm w-full p-6 bg-gray-800 rounded-lg shadow-md">
      {" "}
      {/* Changed max-w-lg to max-w-2xl */}
      <h1 className="text-2xl font-bold text-white mb-4">Todo List</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter a new task"
        />
        <button
          onClick={addTask}
          className="ml-2 p-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Add
        </button>
      </div>
      <div className="flex flex-col">
        {tasks.length > 0 ? (
          <>
            {tasks.map((task, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-700 p-3 rounded-lg mb-2"
              >
                {editingTaskIndex === index ? (
                  <>
                    <input
                      type="text"
                      value={editedTask}
                      onChange={(e) => setEditedTask(e.target.value)}
                      className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={saveEditTask}
                      className="ml-2 p-1 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <input
                      type="checkbox"
                      checked={completedTasks[index]}
                      onChange={() => toggleComplete(index)}
                      className="mr-3 w-6 h-6 text-green-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" // Increased size of checkbox
                    />
                    <span
                      className={`flex-1 text-white text-lg ${
                        completedTasks[index]
                          ? "line-through text-gray-500"
                          : ""
                      }`}
                    >
                      {task}
                    </span>
                    <button
                      onClick={() => toggleEdit(index)}
                      className="p-1 ml-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => deleteTask(index)}
                      className="p-1 bg-red-500 text-white rounded ml-2 hover:bg-red-600"
                    >
                      <Trash className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>
            ))}
          </>
        ) : (
          <p className="text-gray-400">No tasks available</p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
