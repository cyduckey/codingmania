import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LandingPage from './LandingPage.jsx'

function PlaceholderPackage() {
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-20 text-slate-100">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-800 bg-slate-900/80 p-10 shadow-2xl shadow-cyan-900/20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Coming soon
        </p>
        <h1 className="mb-4 text-3xl font-semibold">Package routing is ready</h1>
        <p className="text-lg text-slate-400">
          This placeholder will be replaced by the specific package experience once it is wired in.
        </p>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/packages/:packageName" element={<PlaceholderPackage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
