import Notes from "./components/Notes";
import Textarea from "./components/Textarea";


function App() {
  return (
    <div className="App">
      <div className="form-body">
        <h4>NotesApp</h4>
        <Textarea />
        <Notes />
      </div>
    </div>
  );
}

export default App;
