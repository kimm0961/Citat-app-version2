import React, { useState } from 'react';
import uuid from 'uuid/v1';
import CitatListe from './components/CitatListe';
import OpretCitat from './components/OpretCitat';

 function App() {

  // State
  const [citater, setCitater] = useState([
    {titel: 'Trust', citattekst: 'Den eneste måde at finde ud af, om en person er til at stole på, er at stole på ham.', forfatter: 'Ernest Hemingway', id: 1},
    {titel: 'Real Friends', citattekst: 'Gode venner kan lave alting sammen – men kun de bedste venner er i stand til at lave ingenting sammen.', forfatter: 'Peter Plys', id: 2},
    {titel: 'Do Not Worry', citattekst: 'Jeg har haft tusinder af bekymringer, de færreste er blevet til noget.', forfatter: 'Mark Twain', id: 3},
    {titel: 'Be hayppy Not Angry', citattekst: 'Husk, at for hvert minut du er vred, mister du tres sekunders lykke.', forfatter: 'Ralph Waldo Emerson', id: 4},
    {titel: 'Self Love', citattekst: 'Vær dig selv, alle andre er alligevel optaget.', forfatter: 'Oscar Wilde', id: 5}
  ]);

  // Opret citat
  const opretCitat = (newCitat) => {
    newCitat.id = uuid();
    setCitater([...citater, newCitat]);
  }
  
  // Slet citat
  const sletCitat = (id) => {
    setCitater(citater.filter(function (citat) {
      return citat.id !== id
    }));
  }

 // Det der bliver vist:
  return (
    <div className="App">
      <h1>App</h1>
      <OpretCitat opretCitatProp={opretCitat} />
      <CitatListe alleCitaterProp={citater} deleteCitatProp={sletCitat} />
    </div>
  );
}

 
export default App;
