import Todo  from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My todos</h1>
      <Todo text='Learn React' /> 
      <Todo text='Master React'/>
      <Todo text= 'Explore the full React course' />
      
      {/* kaç tane todo yazarsan sayfada o kadar kutucuk olusuyor */}
      {/* todo klasöründe bir tane span yazsan bile kutucuk kadar span ekliyor */}
    </div>
  );

}

export default App;