import { useState } from "react";

import AddTaskModal from "./Task/AddTaskModal";
import SearchTask from "./Task/SearchBox";
import TaskActions from "./Task/TaskAction";
import TaskList from "./Task/TaskList";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "I want to Learn React such than I can treat it as my slave and can do whatever I want",
    tags: ["web", "react", "javaScript"],
    priority: "High",
    isFavorite: true,
  };
  const [tasks, setTask] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  function handleAddTask(newTask, isAdd) {
    if (isAdd) {
      return setTask([...tasks, newTask]);
    } else {
      setTask(
        tasks.map((task) => {
          if (newTask.id === task.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setShowAddModal(false);
  }

  function handleEditTask(task) {
    setTaskToUpdate(task);
    setShowAddModal(true);
  }

  function handleDeleteTask(taskId) {
    const taskAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTask(taskAfterDelete);
  }

  return (
    <section className="mb-20 " id="tasks">
      {showAddModal && (
        <AddTaskModal
          onSave={handleAddTask}
          onCloseClick={() => {
            setShowAddModal(false);
            setTaskToUpdate(null);
          }}
          taskToUpdate={taskToUpdate}
        />
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions
            onAddClick={() => {
              setShowAddModal(true);
              setTaskToUpdate(null);
            }}
            onDeleteAll={() => {
              tasks.length = 0;
              setTask([...tasks]);
            }}
          />
          <TaskList
            onDelete={handleDeleteTask}
            tasks={tasks}
            onEdit={handleEditTask}
          />
        </div>
      </div>
    </section>
  );
}
