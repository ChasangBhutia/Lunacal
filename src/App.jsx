import Description from "./components/Description";
import Gallery from "./components/Gallery";
import LeftContainer from "./components/LeftContainer";

function App() {
  return (
    <div className="min-h-screen bg-[#191B1F] md:p-7 flex justify-center items-start overflow-hidden">
      <div className="w-full max-w-[1728px] flex flex-col lg:flex-row gap-10 lg:gap-[57px] overflow-hidden">
        <div className="w-full lg:w-[50%] flex justify-center lg:justify-end">
          <LeftContainer />
        </div>
        <div className="w-full lg:w-[50%] flex flex-col items-center gap-3">
          <Description />
          <hr/>
          <Gallery />
          <hr/>
        </div>
      </div>
    </div>
  );
}

export default App;
