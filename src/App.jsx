import { Classify } from './pages/Classify';


function App() {
  let component = null;

  switch (window.location.pathname) {
    case '/':
      component = <Classify />;
    
  }
  return <div>{component}</div>;
}

export default App;
