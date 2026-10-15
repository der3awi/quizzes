import React, { useState, useEffect } from 'react';
import { MODULE_REGISTRY } from './data/modules';
import { PortalHub } from './components/PortalHub';
import { StudyEngine } from './components/StudyEngine';

export const App: React.FC = () => {
  // Read initial bank from window.location.hash
  const getBankFromHash = () => {
    const hash = window.location.hash.replace('#', '').trim();
    if (hash) {
      const found = MODULE_REGISTRY.find((b) => b.id === hash);
      if (found) return found.id;
    }
    return null;
  };

  const [activeBankId, setActiveBankId] = useState<string | null>(getBankFromHash);

  // Sync hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setActiveBankId(getBankFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectBank = (bankId: string) => {
    window.location.hash = bankId;
    setActiveBankId(bankId);
  };

  const handleBackToHub = () => {
    window.location.hash = '';
    setActiveBankId(null);
  };

  const selectedBank = MODULE_REGISTRY.find((b) => b.id === activeBankId);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-rose-500/30 selection:text-white">
      {selectedBank ? (
        <StudyEngine bank={selectedBank} onBack={handleBackToHub} />
      ) : (
        <PortalHub onSelectBank={handleSelectBank} />
      )}
    </div>
  );
};

export default App;
