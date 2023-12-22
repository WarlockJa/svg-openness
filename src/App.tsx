import "./App.css";
import SeeThrough from "./components/SeeThrough";

function App() {
  // useEffect(() => {
  //   const incOffset = () => {
  //     percentRef.current === 100
  //       ? clearInterval(interval)
  //       : (percentRef.current += 1);
  //     setPercent(percentRef.current);
  //   };

  //   const interval = setInterval(incOffset, 20);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <main>
      <SeeThrough />
    </main>
  );
}

export default App;
