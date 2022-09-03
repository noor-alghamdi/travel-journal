import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Card from "./components/cards/Card";
import cardData from "./data";

function App() {
  const travelCard = cardData.map((card) => {
    return (
      <Card
        title={card.title}
        location={card.location}
        googleMapsUrl={card.googleMapsUrl}
        startDate={card.startDate}
        endDate={card.endDate}
        description={card.description}
        imageUrl={card.imageUrl}
      />
    );
  });
  return (
    <div className="App">
      <Header />
      {travelCard}
    </div>
  );
}

export default App;
