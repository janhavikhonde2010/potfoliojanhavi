import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  { command: "whoami", output: "janhavi.khonde — Web Developer · AI · Automation Engineer" },
  { command: "stack --primary", output: "[ react · node · mongodb · openai · n8n · make.com ]" },
  { command: "shipped", output: "5 production apps for real clients @ The Wise Parrot" },
  { command: "status", output: "ready to ship.", highlight: true },
];

function useTypewriter(text: string, speed = 28, startDelay = 0) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(delay);
  }, [text, speed, startDelay]);

  return { displayed, done };
}

interface TerminalLineProps {
  command: string;
  output: string;
  highlight?: boolean;
  startDelay: number;
  onDone: () => void;
}

function TerminalLine({ command, output, highlight, startDelay, onDone }: TerminalLineProps) {
  const { displayed: cmd, done: cmdDone } = useTypewriter(command, 38, startDelay);
  const { displayed: out, done: outDone } = useTypewriter(
    output,
    16,
    cmdDone ? startDelay + command.length * 38 + 180 : 999999
  );

  useEffect(() => {
    if (outDone) onDone();
  }, [outDone, onDone]);

  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-center gap-2">
        <span className="text-purple-400 select-none">{">"}</span>
        <span className="text-white/85 font-mono">{cmd}</span>
        {!cmdDone && (
          <span className="inline-block w-[2px] h-[1em] bg-purple-400 animate-pulse align-middle" />
        )}
      </div>
      {cmdDone && (
        <div className="mt-1.5 pl-5">
          <span
            className={`font-mono text-sm ${
              highlight
                ? "text-cyan-400 font-semibold"
                : "text-white/45"
            }`}
          >
            {out}
          </span>
          {cmdDone && !outDone && (
            <span className="inline-block w-[2px] h-[0.9em] bg-cyan-400 animate-pulse align-middle ml-0.5" />
          )}
        </div>
      )}
    </div>
  );
}

export default function TerminalWidget() {
  const [visibleLines, setVisibleLines] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleLineDone = (idx: number) => {
    if (idx + 1 < lines.length) {
      setTimeout(() => setVisibleLines(idx + 2), 200);
    }
  };

  // Calculate cumulative delays
  const delays: number[] = [];
  let acc = 0;
  lines.forEach((l, i) => {
    delays.push(acc);
    acc += l.command.length * 38 + l.output.length * 16 + 500;
  });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-2xl mx-auto mt-10 rounded-2xl overflow-hidden"
      style={{
        background: "rgba(10,10,15,0.85)",
        backdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.09)",
        boxShadow:
          "0 24px 80px rgba(0,0,0,0.7), 0 0 0 0.5px rgba(255,255,255,0.05) inset, 0 0 60px rgba(168,85,247,0.08)",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-3 px-5 py-3.5 border-b border-white/[0.06]"
        style={{ background: "rgba(255,255,255,0.025)" }}
      >
        {/* Traffic lights */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-[0_0_6px_rgba(255,95,87,0.6)]" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-[0_0_6px_rgba(254,188,46,0.5)]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-[0_0_6px_rgba(40,200,64,0.5)]" />
        </div>
        {/* Title */}
        <span className="flex-1 text-center text-xs text-white/28 font-mono tracking-wide select-none">
          {">"}_&nbsp;&nbsp;~/janhavi — zsh
        </span>
        <div className="w-16" />
      </div>

      {/* Terminal body */}
      <div className="p-6 font-mono text-sm min-h-[180px]">
        {lines.slice(0, visibleLines).map((line, idx) => (
          <TerminalLine
            key={idx}
            command={line.command}
            output={line.output}
            highlight={line.highlight}
            startDelay={idx === 0 ? 0 : 0}
            onDone={() => handleLineDone(idx)}
          />
        ))}
      </div>

      {/* Bottom glow strip */}
      <div
        className="h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(168,85,247,0.4), rgba(6,182,212,0.3), transparent)",
        }}
      />
    </motion.div>
  );
}
