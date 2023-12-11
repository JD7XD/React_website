import './App.css';
import Header from "./Components/header";
import { Progress } from "./Components/progress_bar"

function App() {
  return (
    <>
      <body>
        <div id="root"></div>
      </body>
      <Header title="Wasup" name="Jason" search_bar={true} />
      <Progress />
    </>
  );
}

export default App;

