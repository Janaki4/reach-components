import Route from "./component/Routes";
import DropdownPage from "./pages/DropdownPage";
import AccordionPage from "./pages/AccordionPage";
import Sidebar from "./component/sidebar";
import ButtonPage from "./pages/ButtonPage";
import ModalPages from "./pages/ModalPages";
import TablePage from "./pages/TablePage";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-6 mt-4">
      <Sidebar/>
      <div className="col-span-5">
        <Route path="/dropdown"><DropdownPage /></Route>
        <Route path="/"><AccordionPage /></Route>
        <Route path="/button"><ButtonPage /></Route>
        <Route path="/modal"><ModalPages /></Route>
        <Route path="/table"><TablePage/></Route>
      </div>
    </div>
  )
}

export default App;
