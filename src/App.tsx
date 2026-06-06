import './App.css'
 function Add() {
      let name: string = "hello";
      return <h1>{name}</h1>
    }

function App() {
  // function Types

// function add(a: number, b:number): number {
//     return a + b;
// };
//add(34, 76);
  return (
    <div>
      <h1>Welcome to TypeScript</h1>
      <Add />
    </div>
  );
}

export default App
