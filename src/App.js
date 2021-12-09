import React from "react";
import "./App.css";
import ProductResults from "./components/ProductResults"
import FetchRandomUser from "./components/FetchRandomUser";






function App()  {

    return ( 
      <div className="App">
        <FetchRandomUser /> 
        <ProductResults />
      </div>
    );
  
}

export default App;
