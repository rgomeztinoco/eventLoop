import EventLoop from "../pages/event-loop.js";
import DataStructures from "../pages/data-structures.js";
import TaskQueue from "../pages/task-queue.js";
import { wrapInSectionContainer } from "./helpers.js";
import Quiz from "../pages/quiz.js";

const template = `
<main>
  ${wrapInSectionContainer(EventLoop)}
  ${wrapInSectionContainer(DataStructures)}
  ${wrapInSectionContainer(TaskQueue)}
  ${wrapInSectionContainer(Quiz)}
</main>
`;

const Main = {
  toString() {
    return template;
  },
  addListeners() {
    DataStructures.addListeners();
    TaskQueue.addListeners();
    Quiz.addListeners();
  },
};

export default Main;
