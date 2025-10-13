import { useState } from "react";

export default function LinuxShortcuts() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (shortcut: string) => {
    await navigator.clipboard.writeText(shortcut);
    setCopied(shortcut);
    setTimeout(() => setCopied(null), 1500);
  };

  const sections = [
    {
      title: "🧭 System & Window Navigation",
      shortcuts: [
        { keys: "Ctrl + Alt + T", description: "Open terminal" },
        { keys: "Alt + Tab", description: "Switch between open windows" },
        { keys: "Alt + F4", description: "Close current window" },
        { keys: "Super (Windows key)", description: "Open activities overview" },
        { keys: "Super + A", description: "Open applications menu" },
        { keys: "Super + L", description: "Lock the screen" },
        { keys: "Super + D", description: "Show desktop" },
        { keys: "Ctrl + Alt + Del", description: "Logout or restart prompt" },
        { keys: "Alt + Space", description: "Open window menu" },
      ],
    },
    {
      title: "💻 Workspace & Window Management",
      shortcuts: [
        { keys: "Super + Left/Right", description: "Snap window to left/right half" },
        { keys: "Super + Up", description: "Maximize window" },
        { keys: "Super + Down", description: "Minimize/restore window" },
        { keys: "Ctrl + Alt + Arrow (←/→)", description: "Switch between workspaces" },
        { keys: "Shift + Ctrl + Alt + Arrow", description: "Move window to another workspace" },
        { keys: "Super + Tab", description: "Cycle through open apps" },
        { keys: "Ctrl + Alt + Shift + R", description: "Start/stop screen recording" },
      ],
    },
    {
      title: "⌨️ Terminal Navigation & Editing",
      shortcuts: [
        { keys: "Ctrl + C", description: "Terminate current command" },
        { keys: "Ctrl + D", description: "Logout or exit terminal" },
        { keys: "Ctrl + L", description: "Clear terminal screen" },
        { keys: "Ctrl + R", description: "Search command history" },
        { keys: "Ctrl + Shift + T", description: "Open new terminal tab" },
        { keys: "Ctrl + Shift + W", description: "Close current terminal tab" },
        { keys: "Ctrl + Shift + N", description: "Open new terminal window" },
        { keys: "Ctrl + Shift + C", description: "Copy selected text" },
        { keys: "Ctrl + Shift + V", description: "Paste text" },
        { keys: "Ctrl + A", description: "Move to start of line" },
        { keys: "Ctrl + E", description: "Move to end of line" },
        { keys: "Ctrl + U", description: "Delete from cursor to start of line" },
        { keys: "Ctrl + K", description: "Delete from cursor to end of line" },
        { keys: "Ctrl + W", description: "Delete previous word" },
        { keys: "Alt + F/B", description: "Move forward/backward by word" },
      ],
    },
    {
      title: "🧰 File Management (Nautilus / File Explorer)",
      shortcuts: [
        { keys: "Ctrl + N", description: "New window" },
        { keys: "Ctrl + T", description: "New tab" },
        { keys: "Ctrl + W", description: "Close tab/window" },
        { keys: "Ctrl + H", description: "Toggle hidden files" },
        { keys: "Ctrl + 1 / 2", description: "Switch between view modes" },
        { keys: "Alt + ↑ / ↓", description: "Move up/down a directory" },
        { keys: "Ctrl + Shift + N", description: "Create new folder" },
        { keys: "F2", description: "Rename selected file" },
        { keys: "Delete", description: "Move to trash" },
        { keys: "Shift + Delete", description: "Delete permanently" },
        { keys: "Ctrl + A", description: "Select all" },
      ],
    },
    {
      title: "🧩 Text Editing & Navigation (Generic)",
      shortcuts: [
        { keys: "Ctrl + A", description: "Select all text" },
        { keys: "Ctrl + X", description: "Cut selected text" },
        { keys: "Ctrl + C", description: "Copy selected text" },
        { keys: "Ctrl + V", description: "Paste copied text" },
        { keys: "Ctrl + Z", description: "Undo" },
        { keys: "Ctrl + Shift + Z / Y", description: "Redo" },
        { keys: "Ctrl + S", description: "Save file" },
        { keys: "Ctrl + F", description: "Find in file" },
        { keys: "Ctrl + H", description: "Find and replace" },
      ],
    },
    {
      title: "📈 System & Developer Shortcuts",
      shortcuts: [
        { keys: "Ctrl + Alt + F1–F6", description: "Switch to virtual consoles (TTYs)" },
        { keys: "Ctrl + Alt + F7", description: "Return to GUI" },
        { keys: "Ctrl + Alt + Backspace", description: "Restart display server (X11)" },
        { keys: "Alt + F2", description: "Run command prompt" },
        { keys: "Ctrl + Alt + Del", description: "Logout/Restart system" },
        { keys: "Ctrl + Alt + L", description: "Lock screen" },
      ],
    },
    {
      title: "🧠 VSCode (Linux Edition)",
      shortcuts: [
        { keys: "Ctrl + P", description: "Quick open files" },
        { keys: "Ctrl + Shift + P", description: "Command palette" },
        { keys: "Ctrl + /", description: "Toggle line comment" },
        { keys: "Alt + Up/Down", description: "Move line up or down" },
        { keys: "Shift + Alt + ↓", description: "Duplicate line below" },
        { keys: "Ctrl + B", description: "Toggle sidebar" },
        { keys: "Ctrl + `", description: "Open integrated terminal" },
        { keys: "Ctrl + Tab", description: "Switch between files" },
        { keys: "Ctrl + Shift + F", description: "Search in files" },
        { keys: "Ctrl + Shift + E", description: "Focus on Explorer view" },
        { keys: "Ctrl + Shift + G", description: "Open Source Control view" },
        { keys: "Ctrl + Shift + X", description: "Open Extensions view" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b1220] text-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#fefefe] tracking-wide">
        ⌨️ Linux Keyboard Shortcuts Reference
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {sections.map((section) => (
          <div key={section.title} className="bg-[#101828] p-6 rounded-2xl border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-[#f0f174]">{section.title}</h2>
            <div className="space-y-3">
              {section.shortcuts.map((item) => (
                <div
                  key={item.keys}
                  className="flex justify-between items-start bg-[#0b1220] p-3 rounded-xl border border-gray-700 hover:border-[#f0f174]/60 transition-all"
                >
                  <div className="flex-1">
                    <code className="text-[#9ae6b4] font-mono text-sm">{item.keys}</code>
                    <p className="text-gray-400 text-xs mt-1">{item.description}</p>
                  </div>
                  <button
                    onClick={() => handleCopy(item.keys)}
                    className="ml-4 px-3 py-1 bg-gradient-to-r from-[#8cff8a] to-[#53e46a] text-black font-semibold rounded-lg text-sm hover:scale-105 transition"
                  >
                    {copied === item.keys ? "Copied!" : "Copy"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
