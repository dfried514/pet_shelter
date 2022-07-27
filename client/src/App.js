import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import New from './views/New';
import Update from './views/Update';
import Details from './views/Details';

const App = () => {
  const [petsUpdated, setPetsUpdated] = useState(false);

  return (
    <>
      <Routes>
        <Route element={<Main 
          petsUpdated={petsUpdated} 
          setPetsUpdated={setPetsUpdated}
        />} path="/" />
        <Route element={<New
          setPetsUpdated={setPetsUpdated}
        />} path="/pets/new" />
        <Route element={<Update
          setPetsUpdated={setPetsUpdated}
        />} path="/pets/:id/edit/" />
        <Route element={<Details
          setPetsUpdated={setPetsUpdated}
        />} path="/pets/:id" />
      </Routes>
    </>
  )
}
export default App;
