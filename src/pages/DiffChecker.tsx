import { useState } from "react";
import { DiffEditor } from "@monaco-editor/react";

export default function DiffChecker() {
  const [oldText, setOldText] = useState("");
  const [newText, setNewText] = useState("");
  const [showDiff, setShowDiff] = useState(false);

  const handleCompare = () => setShowDiff(true);
  const handleReEdit = () => setShowDiff(false);

  return (
    <div className="min-h-screen w-full bg-[#0b1220] text-gray-100 flex flex-col justify-center items-center p-6">
      <h1 className="text-4xl font-bold mb-8 text-[#fefefe] tracking-wide">
        File Diff Checker (Side-by-Side)
      </h1>

      <div className="w-full max-w-7xl flex flex-col gap-4 md:gap-6">
        {!showDiff ? (
          <>
            {/* Text Areas */}
            <div className="flex flex-col md:flex-row gap-6">
              <textarea
                value={oldText}
                onChange={(e) => setOldText(e.target.value)}
                placeholder="Paste or write your original content here..."
                className="flex-1 h-[70vh] p-5 bg-[#101828] text-gray-200 border border-gray-700 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-[#f0f174] placeholder-gray-500 hide-scrollbar"
              />

              <textarea
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                placeholder="Paste or write your modified content here..."
                className="flex-1 h-[70vh] p-5 bg-[#101828] text-gray-200 border border-gray-700 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-[#f0f174] placeholder-gray-500 hide-scrollbar"
              />
            </div>

            {/* Button */}
            <div className="flex justify-center mt-2">
              <button
                onClick={handleCompare}
                className="px-6 py-3 bg-gradient-to-r from-[#fef87b] to-[#f9e046] text-black font-semibold rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200"
              >
                Compare Files
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Diff Editor */}
            <div className="h-[70vh] rounded-2xl overflow-hidden border border-gray-700">
              <DiffEditor
                height="100%"
                theme="vs-dark"
                language="plaintext"
                original={oldText}
                modified={newText}
                options={{
                  readOnly: true,
                  renderSideBySide: true,
                  automaticLayout: true,
                  wordWrap: "on",
                  diffWordWrap: "on",
                  lineNumbers: "on",
                  minimap: { enabled: false },
                  scrollBeyondLastLine: false,
                  renderOverviewRuler: false,
                  renderIndicators: true,
                  diffAlgorithm: "advanced",
                  enableSplitViewResizing: true,
                  ignoreTrimWhitespace: false,
                }}
                onMount={(diffEditor) => {
                  const originalEditor = diffEditor.getOriginalEditor();
                  const modifiedEditor = diffEditor.getModifiedEditor();

                  [originalEditor, modifiedEditor].forEach((ed) => {
                    if (ed) {
                      ed.updateOptions({
                        wordWrap: "on",
                        wordWrapColumn: 100,
                        scrollBeyondLastLine: false,
                        minimap: { enabled: false },
                      });
                    }
                  });

                  setTimeout(() => {
                    diffEditor.layout();
                    originalEditor?.layout();
                    modifiedEditor?.layout();
                  }, 300);
                }}
              />
            </div>

            {/* Button */}
            <div className="flex justify-center mt-2">
              <button
                onClick={handleReEdit}
                className="px-6 py-3 bg-gradient-to-r from-[#f9a76d] to-[#f78145] text-black font-semibold rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200"
              >
                Re-Edit Text
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}