import MyRoutes from "../routes/MyRoutes";
import CountProvider from "../context/Count";

function App() {
  return (
    <CountProvider>
      <MyRoutes/>
    </CountProvider>
  );
}

export default App;