import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '@moj-ztm/dashboard/dashboard-feature';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
