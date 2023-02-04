import Button from "../component/Button";
import { GiAbstract027, GiAbstract026 } from "react-icons/gi";

function ButtonPage({onClick}) {

  return (
    <div className="App">
      <div>
        <Button primary rounded outline className="mb-2"><GiAbstract027 /> primary </Button>
      </div>
      <div>
        <Button secondary >secondary</Button>
      </div>
      <div>
        <Button primary >appa</Button>
      </div>
      <div>
        <Button danger >Danger</Button>
      </div>
      <div>
        <Button success outline rounded> <GiAbstract026 /> Janakiraman</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
