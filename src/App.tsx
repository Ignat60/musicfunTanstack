import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    (async function () {
      const response = await fetch(
        "https://musicfun.it-incubator.app/api/1.0/playlists",
        {
          headers: {
            "api-key": "5dacb5c0-8de7-4786-90f4-2f8e4513b7e9",
          },
        }
      );
      const data = response.json();
      console.log(data);
    })();
  }, []);

  return <>hello IT-Incubator</>;
}

export default App;
