"use client"
import { useEffect, useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState({})
  async function showTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const res = await response.json();
    setTodo(res)
  }
  useEffect(() => { showTodo() } , []);
  return (
    <div>
      <h2>{todo.title}</h2>
    </div>
  )
}
