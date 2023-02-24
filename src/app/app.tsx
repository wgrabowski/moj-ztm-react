import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '@moj-ztm/dashboard/dashboard-feature';
import { Settings } from '@moj-ztm/settings/settings-feature';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/settings" element={<Settings/>}/>
    </Routes>
  );
}

export default App;
