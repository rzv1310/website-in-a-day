import { useState, useEffect, useRef, useCallback } from "react";
import {
  Accessibility,
  Plus,
  Minus,
  RotateCcw,
  Type,
  AlignJustify,
  MousePointer,
  Sun,
  Moon,
  Circle,
  BookOpen,
  EyeOff,
  ImageOff,
  X,
} from "lucide-react";

const DEFAULT_FONT_SIZE = 16;
const DEFAULT_LINE_HEIGHT = 1.5;

interface AccessibilityState {
  fontSize: number;
  readableFont: boolean;
  lineHeight: number;
  largeCursor: boolean;
  lightContrast: boolean;
  highContrast: boolean;
  monochrome: boolean;
  readingLine: boolean;
  readingMask: boolean;
  hideImages: boolean;
}

const defaultState: AccessibilityState = {
  fontSize: DEFAULT_FONT_SIZE,
  readableFont: false,
  lineHeight: DEFAULT_LINE_HEIGHT,
  largeCursor: false,
  lightContrast: false,
  highContrast: false,
  monochrome: false,
  readingLine: false,
  readingMask: false,
  hideImages: false,
};

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<AccessibilityState>(defaultState);
  const [mouseY, setMouseY] = useState(0);
  const styleTagRef = useRef<HTMLStyleElement | null>(null);

  // Inject/remove dynamic styles
  useEffect(() => {
    if (!styleTagRef.current) {
      const style = document.createElement("style");
      style.id = "accessibility-widget-styles";
      document.head.appendChild(style);
      styleTagRef.current = style;
    }

    const rules: string[] = [];

    // Font size
    rules.push(`html { font-size: ${state.fontSize}px !important; }`);

    // Line height
    rules.push(`html { line-height: ${state.lineHeight} !important; }`);

    // Readable font
    if (state.readableFont) {
      rules.push(`body, body * { font-family: Arial, sans-serif !important; }`);
    }

    // Large cursor
    if (state.largeCursor) {
      rules.push(`*, *:hover { cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'%3E%3Cpath fill='black' stroke='white' stroke-width='1' d='M4 0 L4 20 L8 16 L12 24 L14 22 L10 14 L16 14 Z'/%3E%3C/svg%3E") 0 0, auto !important; }`);
    }

    // Light contrast
    if (state.lightContrast) {
      rules.push(`html { filter: brightness(1.15) contrast(1.1) !important; background: #fff !important; }`);
    }

    // High contrast
    if (state.highContrast) {
      rules.push(`
        html { background: #000 !important; }
        body { background: #000 !important; color: #ffff00 !important; }
        body * { color: #ffff00 !important; background-color: #000 !important; border-color: #ffff00 !important; }
        body a { color: #00ffff !important; }
      `);
    }

    // Monochrome
    if (state.monochrome) {
      rules.push(`html { filter: grayscale(100%) !important; }`);
    }

    // Hide images
    if (state.hideImages) {
      rules.push(`img { visibility: hidden !important; }`);
    }

    styleTagRef.current.textContent = rules.join("\n");
  }, [state]);

  // Mouse tracking for reading line & mask
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMouseY(e.clientY);
  }, []);

  useEffect(() => {
    if (state.readingLine || state.readingMask) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [state.readingLine, state.readingMask, handleMouseMove]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      styleTagRef.current?.remove();
    };
  }, []);

  const update = (patch: Partial<AccessibilityState>) => {
    setState((prev) => {
      const next = { ...prev, ...patch };
      // Mutually exclusive contrasts
      if (patch.lightContrast && patch.lightContrast !== prev.lightContrast) next.highContrast = false;
      if (patch.highContrast && patch.highContrast !== prev.highContrast) next.lightContrast = false;
      return next;
    });
  };

  const reset = () => {
    setState(defaultState);
  };

  const ToggleRow = ({
    icon,
    label,
    active,
    onToggle,
  }: {
    icon: React.ReactNode;
    label: string;
    active: boolean;
    onToggle: () => void;
  }) => (
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full px-3 py-2 rounded-md text-sm transition-colors"
      style={{
        backgroundColor: active ? "hsl(25 45% 35% / 0.12)" : "transparent",
        color: active ? "hsl(25 45% 35%)" : "hsl(25 30% 25%)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <span className="flex items-center gap-2">
        {icon}
        {label}
      </span>
      <span
        className="w-9 h-5 rounded-full flex items-center px-0.5 transition-colors flex-shrink-0"
        style={{
          backgroundColor: active ? "hsl(25 45% 35%)" : "hsl(35 20% 82%)",
        }}
      >
        <span
          className="w-4 h-4 rounded-full bg-white shadow transition-transform"
          style={{ transform: active ? "translateX(16px)" : "translateX(0)" }}
        />
      </span>
    </button>
  );

  const StepperRow = ({
    icon,
    label,
    value,
    onInc,
    onDec,
    displayValue,
  }: {
    icon: React.ReactNode;
    label: string;
    value: number;
    onInc: () => void;
    onDec: () => void;
    displayValue: string;
  }) => (
    <div
      className="flex items-center justify-between px-3 py-2 rounded-md text-sm"
      style={{ color: "hsl(25 30% 25%)", fontFamily: "Arial, sans-serif" }}
    >
      <span className="flex items-center gap-2">
        {icon}
        {label}
      </span>
      <div className="flex items-center gap-1">
        <button
          onClick={onDec}
          className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold transition-colors hover:opacity-80"
          style={{ backgroundColor: "hsl(25 45% 35%)", color: "#fff" }}
        >
          −
        </button>
        <span className="w-10 text-center text-xs font-medium" style={{ fontFamily: "Arial, sans-serif" }}>
          {displayValue}
        </span>
        <button
          onClick={onInc}
          className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold transition-colors hover:opacity-80"
          style={{ backgroundColor: "hsl(25 45% 35%)", color: "#fff" }}
        >
          +
        </button>
      </div>
    </div>
  );

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <p
      className="text-xs font-bold uppercase tracking-widest px-3 pt-3 pb-1"
      style={{ color: "hsl(25 45% 35%)", fontFamily: "Arial, sans-serif" }}
    >
      {children}
    </p>
  );

  return (
    <>
      {/* Reading Line */}
      {state.readingLine && (
        <div
          className="fixed left-0 right-0 pointer-events-none z-[9998]"
          style={{
            top: mouseY,
            height: "2px",
            backgroundColor: "hsl(25 45% 35% / 0.7)",
          }}
        />
      )}

      {/* Reading Mask */}
      {state.readingMask && (
        <>
          <div
            className="fixed left-0 right-0 pointer-events-none z-[9997]"
            style={{
              top: 0,
              height: Math.max(0, mouseY - 40),
              backgroundColor: "rgba(0,0,0,0.55)",
            }}
          />
          <div
            className="fixed left-0 right-0 pointer-events-none z-[9997]"
            style={{
              top: mouseY + 40,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.55)",
            }}
          />
        </>
      )}

      {/* Widget */}
      <div className="fixed bottom-5 left-5 z-[9999] flex flex-col items-start gap-2">
        {/* Panel */}
        {open && (
          <div
            className="w-72 rounded-xl shadow-2xl border overflow-hidden"
            style={{
              backgroundColor: "#fff",
              borderColor: "hsl(35 20% 82%)",
              maxHeight: "85vh",
              overflowY: "auto",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{ backgroundColor: "hsl(25 45% 35%)", color: "#fff" }}
            >
              <span className="font-bold text-sm" style={{ fontFamily: "Arial, sans-serif" }}>
                Accesibilitate
              </span>
              <button onClick={() => setOpen(false)} className="opacity-80 hover:opacity-100 transition-opacity">
                <X size={16} />
              </button>
            </div>

            {/* Module Conținut */}
            <SectionTitle>Conținut</SectionTitle>
            <StepperRow
              icon={<Type size={14} />}
              label="Mărime Font"
              value={state.fontSize}
              displayValue={`${state.fontSize}px`}
              onInc={() => update({ fontSize: Math.min(state.fontSize + 1, 26) })}
              onDec={() => update({ fontSize: Math.max(state.fontSize - 1, 12) })}
            />
            <ToggleRow
              icon={<Type size={14} />}
              label="Font Lizibil"
              active={state.readableFont}
              onToggle={() => update({ readableFont: !state.readableFont })}
            />
            <StepperRow
              icon={<AlignJustify size={14} />}
              label="Înălțime Rând"
              value={state.lineHeight}
              displayValue={`${state.lineHeight.toFixed(1)}x`}
              onInc={() => update({ lineHeight: Math.min(+(state.lineHeight + 0.1).toFixed(1), 3) })}
              onDec={() => update({ lineHeight: Math.max(+(state.lineHeight - 0.1).toFixed(1), 1) })}
            />
            <ToggleRow
              icon={<MousePointer size={14} />}
              label="Cursor Mare"
              active={state.largeCursor}
              onToggle={() => update({ largeCursor: !state.largeCursor })}
            />

            <div className="mx-3 my-2 h-px" style={{ backgroundColor: "hsl(35 20% 88%)" }} />

            {/* Module Culoare */}
            <SectionTitle>Culoare</SectionTitle>
            <ToggleRow
              icon={<Sun size={14} />}
              label="Contrast Luminos"
              active={state.lightContrast}
              onToggle={() => update({ lightContrast: !state.lightContrast })}
            />
            <ToggleRow
              icon={<Moon size={14} />}
              label="Contrast Ridicat"
              active={state.highContrast}
              onToggle={() => update({ highContrast: !state.highContrast })}
            />
            <ToggleRow
              icon={<Circle size={14} />}
              label="Monocrom"
              active={state.monochrome}
              onToggle={() => update({ monochrome: !state.monochrome })}
            />

            <div className="mx-3 my-2 h-px" style={{ backgroundColor: "hsl(35 20% 88%)" }} />

            {/* Module Orientare */}
            <SectionTitle>Orientare</SectionTitle>
            <ToggleRow
              icon={<BookOpen size={14} />}
              label="Linie de Citire"
              active={state.readingLine}
              onToggle={() => update({ readingLine: !state.readingLine })}
            />
            <ToggleRow
              icon={<EyeOff size={14} />}
              label="Mască de Citire"
              active={state.readingMask}
              onToggle={() => update({ readingMask: !state.readingMask })}
            />
            <ToggleRow
              icon={<ImageOff size={14} />}
              label="Ascunde Imagini"
              active={state.hideImages}
              onToggle={() => update({ hideImages: !state.hideImages })}
            />

            {/* Reset */}
            <div className="p-3">
              <button
                onClick={reset}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-80"
                style={{
                  backgroundColor: "hsl(35 20% 88%)",
                  color: "hsl(25 30% 25%)",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                <RotateCcw size={14} />
                Resetează toate setările
              </button>
            </div>
          </div>
        )}

        {/* Trigger Button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
          style={{ backgroundColor: "hsl(25 45% 35%)", color: "#fff" }}
          aria-label="Deschide widget accesibilitate"
        >
          <Accessibility size={22} />
        </button>
      </div>
    </>
  );
}
