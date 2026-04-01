import { BrowserRouter, Routes, Route } from 'react-router';
import { Inicio } from '@paginas/Inicio';
import { Sessao } from '@paginas/Sessao';
import { Progresso } from '@paginas/Progresso';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sessao/:noId" element={<Sessao />} />
        <Route path="/progresso" element={<Progresso />} />
      </Routes>
    </BrowserRouter>
  );
}
