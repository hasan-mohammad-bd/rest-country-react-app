import "./App.css";
import Countries from "./components/Countries/Countries";

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

/*
//to load data, there is 5 steps:
function LoadCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => setCountries(data));
  });

  return (
    <div>
      <h2>visiting all countries of the world</h2>
      <h4>Available countries: {countries.length}</h4>
      {
        countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  );
}

function Country(props){
  return(
    <div>
      <h2>Name: {props.name}</h2>
      <h3>Population: {props.population}</h3>
    </div>
  )
}
*/
export default App;

//find out how to deploy site vea github, and with netlify src from google.
