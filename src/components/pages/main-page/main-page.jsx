import About from "../../blocks/about/about";
import Benefits from "../../blocks/benefits/benefits";

function MainPage({ benefits }) {
  return (
    <>
      <About />
      <Benefits benefits={benefits}/>
    </>
  );
}

export default MainPage;