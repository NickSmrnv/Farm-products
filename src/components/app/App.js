import benefitsCard from "../../mocks/benefitsCard";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import "./style.css";

function App() {
  return <PageWrapper benefits={benefitsCard} />
}

export default App;
