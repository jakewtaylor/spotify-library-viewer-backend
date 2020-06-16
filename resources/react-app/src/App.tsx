import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { SpotifyGate } from './components/auth/spotify/SpotifyGate';
import { Search } from './pages/Search/Search';

// const initializeState: RecoilRootProps['initializeState'] = ({ set }) => {
//   const atomsArr = Object.values(atoms);

//   atomsArr.forEach(atom => {
//     console.log(atom);
//     const val = localStorage.getItem(atom.key);

//     if (val) {
//       set(atom, JSON.parse(val).value);
//     }
//   });
// };

export const App: React.FC = () => {
  return (
    <RecoilRoot /*initializeState={initializeState}*/>
      <Router>
        <SpotifyGate>
          <Route exact path="/">
            <p className="text-red-500">test</p>
            <Link to="/search">Go to search</Link>
          </Route>

          <Route exact path="/search" component={Search} />
        </SpotifyGate>
      </Router>
    </RecoilRoot>
  );
};
