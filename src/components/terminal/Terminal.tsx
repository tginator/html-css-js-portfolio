import { useEffect, useRef, useState, type FormEvent } from "react";
import { Modal } from "@/components/ui/Modal";
import { siteConfig } from "@/config/site";

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface HistoryLine {
  type: "input" | "output";
  text: string;
}

const WELCOME: string[] = [
  "TYLER.DEV TERMINAL v1.0",
  'Type "help" to see available commands.',
];

function runCommand(raw: string): string[] | "CLEAR" {
  const command = raw.trim().toLowerCase();

  switch (command) {
    case "help":
      return ["help, about, whoami, projects, skills, education, contact, status, clear"];
    case "about":
    case "whoami":
      return ["Tyler Gordon", "Software Engineering graduate from Curtin University."];
    case "projects":
    case "ls projects":
    case "ls":
      return ["wa-energy-dashboard/", "air-traffic-control/", "focuspal/"];
    case "skills":
      return ["Languages: Java, Python, JavaScript, SQL, Kotlin, HTML, CSS", 'Run "skills --full" is not implemented. See the Inventory section.'];
    case "education":
      return [`${siteConfig.university}`, "Bachelor of Computing, Software Engineering", "Completed: December 2026"];
    case "contact":
      return [siteConfig.email, siteConfig.links.linkedin];
    case "status":
      return ["Currently building the next thing."];
    case "clear":
      return "CLEAR";
    case "":
      return [];
    default:
      return [`command not found: ${command}`, 'Type "help" for a list of commands.'];
  }
}

export function Terminal({ isOpen, onClose }: TerminalProps) {
  const [history, setHistory] = useState<HistoryLine[]>(() => WELCOME.map((text) => ({ type: "output", text })));
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [history]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const result = runCommand(input);

    if (result === "CLEAR") {
      setHistory([]);
    } else {
      setHistory((prev) => [
        ...prev,
        { type: "input", text: input },
        ...result.map((text) => ({ type: "output" as const, text })),
      ]);
    }
    setInput("");
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} titleId="terminal-title">
      <h3 id="terminal-title" className="font-pixel text-pixel-xs text-leaf">
        &gt;_ TERMINAL
      </h3>
      <div
        ref={scrollRef}
        className="mt-4 h-64 overflow-y-auto border-2 border-void-700 bg-void-950 p-3 font-mono text-sm"
      >
        {history.map((line, index) => (
          <p key={index} className={line.type === "input" ? "text-cyan" : "text-slate-300"}>
            {line.type === "input" ? `> ${line.text}` : line.text}
          </p>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-3 flex items-center gap-2 border-2 border-void-700 bg-void-950 px-3 py-2">
        <span className="font-mono text-sm text-leaf" aria-hidden="true">
          &gt;
        </span>
        <label htmlFor="terminal-input" className="sr-only">
          Terminal command input
        </label>
        <input
          ref={inputRef}
          id="terminal-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent font-mono text-sm text-slate-100 outline-none"
          autoComplete="off"
          spellCheck={false}
        />
      </form>
    </Modal>
  );
}
