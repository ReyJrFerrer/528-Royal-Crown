import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import IAmMiltea from './pages/i-am-milktea';
import Bakery517 from './pages/517-bakery';
import XandersRoasted from './pages/xanders-roasted';
import FranchiseOpportunities from './pages/FranchiseOpportunities';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="i-am-milktea" element={<IAmMiltea />} />
          <Route path="517-bakery" element={<Bakery517 />} />
          <Route path="xanders-roasted" element={<XandersRoasted />} />
          <Route path="franchise-opportunities" element={<FranchiseOpportunities />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
