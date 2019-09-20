import React, { useState } from 'react';



const OpretCitat = (props) => {

    // State
const [citat, setCitat] = useState(
    {titel: '', citattekst: '', forfatter: ''},
);

    // Titel
    const handleTitel = (e) => {
        setCitat({...citat, titel: e.target.value})
    }

    // Citattekst
    const handleCitatet = (e) => {
        setCitat({...citat, citattekst: e.target.value})
        
    }
    // Forfatter
    const handleForfatter = (e) => {
        setCitat({...citat, forfatter: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.opretCitatProp(citat);
        setCitat({
            titel: '',
            citattekst: '',
            forfatter: ''
        });
    }

    return ( 
        <div>
        <h1>Opret Citat</h1>
        
              <form onSubmit={handleSubmit}>
                  <input type="text" placeholder="Titel her" id="titel" onChange={handleTitel} value={citat.titel}/>
                  <br/>
                  <input type="text" placeholder="Citattekst her" id="citattekst" onChange={handleCitatet} value={citat.citattekst}/>
                  <br/>
                  <input type="text" placeholder="Forfatter her" id="forfatter" onChange={handleForfatter} value={citat.forfatter}/>
                  <br/>
                  <button>Submit</button>
              </form>
              </div>
     );
}
 
export default OpretCitat;