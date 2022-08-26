import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Feed from "./components/feed/Feed";
import "./app.scss"
import React from "react";
function App() {

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);


  return (
    <div className="main">
      <Sidebar isLoading={isLoading} />

      <div className="mainContent">
        <Topbar isLoading={isLoading} />
        <Feed />
      </div>
    </div>
  );
}

export default App;
