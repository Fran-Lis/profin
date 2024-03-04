import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import { useSelector } from "react-redux";
import Results from "./components/Results/Results";
import LastUpdate from "./components/LastUpdate/LastUpdate";

function App() {
  const url = useSelector(state => state.url.value)

  return (
    <>
      <Header />
      <Form />
      <LastUpdate />
      {url && <Results />}
    </>
  );
}

export default App;
