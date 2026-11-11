import React, { useState, useEffect } from 'react';
import { MODULE_REGISTRY } from './data/modules';
import { PortalHub } from './components/PortalHub';
import { StudyEngine } from './components/StudyEngine';

export const App: React.FC = () => {
  // Read initial bank and mode from window.location.hash, e.g. #res-final or #res-final:past
  const getBankAndModeFromHash = () => {
    const raw = window.location.hash.replace('#', '').trim();
    if (!raw) return { bankId: null, modeKey: undefined };
    const [bId, mKey] = raw.split(':');
    const found = MODULE_REGISTRY.find((b) => b.id === bId);
    if (found) {
      return { bankId: found.id, modeKey: mKey || undefined };
    }
    return { bankId: null, modeKey: undefined };
  };

  const [routeState, setRouteState] = useState<{
    bankId: string | null;
    modeKey?: string;
  }>(getBankAndModeFromHash);

  // Sync hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setRouteState(getBankAndModeFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectBank = (bankId: string, modeKey?: string) => {
    const newHash = modeKey ? `${bankId}:${modeKey}` : bankId;
    window.location.hash = newHash;
    setRouteState({ bankId, modeKey });
  };

  const handleBackToHub = () => {
    window.location.hash = '';
    setRouteState({ bankId: null, modeKey: undefined });
  };

  const selectedBank = MODULE_REGISTRY.find((b) => b.id === routeState.bankId);

  return (
    <div className="min-h-screen bg-[#0f1115] text-[#f3f4f6] font-sans selection:bg-rose-500/30 selection:text-white">
      {selectedBank ? (
        <StudyEngine
          bank={selectedBank}
          initialModeKey={routeState.modeKey}
          onBack={handleBackToHub}
        />
      ) : (
        <PortalHub onSelectBank={handleSelectBank} />
      )}
    </div>
  );
};

export default App;
