import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText); //make sure plugins are ready to use globally

const App = () => {
  return (
    <div className="flex-center h-screen">
      <h1 className="text-3xl text-indigo-300">Hello, Gsap!</h1>
    </div>
  );
};

export default App;
