import { useState } from 'react';
import { UtilisateurContext } from './UtilisateurContext';
import FormulaireControle from './FormulaireControle';
import FormulaireNonControle from './FormulaireNonControle';
import TemperatureConvertor from './TemperatureConvertor';
import Profile from './Profile';

function App() {
  const [utilisateur, setUtilisateur] = useState({
    nom: 'Ilyass',
    connecte: true
  });

  return (
    <UtilisateurContext.Provider value={{ utilisateur, setUtilisateur }}>
      <div>
        <h1>TP React débutant</h1>
        <br />
        <h2>Formulaire Contrôlé</h2>
        <br />
        <FormulaireControle />
        <h2>Formulaire Non-Contrôlé</h2>
        <br />
        <FormulaireNonControle />
        <h2>Lifting State Up</h2>
        <br />
        <TemperatureConvertor />
        <h2>Profile Utilisateur</h2>
        <br />
        <Profile />
      </div>
    </UtilisateurContext.Provider>
  );
}

export default App;