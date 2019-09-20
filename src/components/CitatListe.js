import React from 'react'

const CitatListe = (props) => {

let citatListe = props.alleCitaterProp.map(citat => {
        return (
            <div className="citat" key={citat.id}>
                <h2>{citat.titel}</h2>
                <p>{citat.citattekst}</p>
                <p><i>{citat.forfatter}</i></p>
                <button onClick={ () => {props.deleteCitatProp(citat.id)}}>Slet citat</button>
            </div>
        )
    });


return ( 
    <div className="citat-liste">
        <h1>Citatliste</h1>
        {citatListe}
    </div>
 );

}

 
export default CitatListe;

