import Fix from './Fix';
import './App.css';
import AppName from './AppName';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item1 from './Item1';

function App() {
  const work = [
    {
      workname: "Buy Milk",
      workdate: "24/08/2024",
    },
    {
      workname: "Buy Eggs",
      workdate: "25/08/2024",
    },
    {
      workname: "Buy Alcohal",
      workdate: "26/08/2024",
    },
    {
      workname: "Buy Egg",
      workdate: "27/08/2024",
    }
  ];
  
  return (
    <div className="App">
      <AppName />
      <Fix />
      <Item1 items={work} />
    </div>
  );
}

export default App;
