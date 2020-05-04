import axios from "axios";

const url = "http://jsonplaceholder.typicode.com/todos/1";

interface TODO {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const responseData = response.data as TODO;
  const id = responseData.id;
  const title = responseData.title;
  const completed = responseData.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`id of todo : ${id}
    title of todo : ${title}
    todo completed ? : ${completed}`);
};
