import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Maximize2 } from 'lucide-react';

interface SpecimenModalProps {
  imageSrc: string;
  label?: string;
  questionText?: string;
  onClose: () => void;
}

export const SpecimenModal: React.FC<SpecimenModalProps> = ({
  imageSrc,
  label,
  questionText,
  onClose,
}) => {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.3, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.3, 0.7));
  const handleReset = () => setZoom(1);

  // Normalize image path for Vite /public/images/
  const resolvedSrc = imageSrc.startsWith('/')
    ? imageSrc
    : imageSrc.startsWith('http')
    ? imageSrc
    : `/images/${imageSrc}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-slate-900 border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-xs font-bold tracking-wider">
              {label || 'CLINICAL SPECIMEN'}
            </span>
            <span className="text-slate-300 text-xs truncate max-w-md hidden sm:inline">
              High-Resolution Pathological / Radiological Reference
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleZoomIn}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleZoomOut}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={handleReset}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition"
              title="Reset Zoom"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition ml-2"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Container with Zoom */}
        <div className="flex-1 overflow-auto p-6 flex items-center justify-center bg-black/40 min-h-[300px]">
          <div
            className="transition-transform duration-200 cursor-grab active:cursor-grabbing flex items-center justify-center"
            style={{ transform: `scale(${zoom})` }}
          >
            <img
              src={resolvedSrc}
              alt={label || 'Specimen viewer'}
              className="max-h-[60vh] max-w-full rounded-lg object-contain shadow-lg border border-white/5"
            />
          </div>
        </div>

        {/* Footer info */}
        {questionText && (
          <div className="px-6 py-3 border-t border-white/10 bg-slate-950/40 text-xs text-slate-400 flex items-center justify-between">
            <span className="truncate pr-4">{questionText}</span>
            <span className="font-mono text-[11px] text-slate-500 shrink-0">
              {Math.round(zoom * 100)}% ZOOM
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
