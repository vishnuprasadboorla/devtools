// import { useState } from "react";
// import ReactDiffViewer from "react-diff-viewer-continued";

// export default function DiffChecker() {
//   const [oldText, setOldText] = useState("");
//   const [newText, setNewText] = useState("");
//   const [showDiff, setShowDiff] = useState(false);

//   return (
//     <div className="min-h-screen bg-[#0b1220] text-gray-100 p-6 flex flex-col items-center">
//       <h1 className="text-3xl font-bold mb-6 text-[#fefefe] tracking-wide">
//         File Diff Checker
//       </h1>

//       {/* input textareas */}
//       <div className="flex flex-col md:flex-row gap-6 w-full max-w-7xl">
//         <textarea
//           value={oldText}
//           onChange={(e) => setOldText(e.target.value)}
//           placeholder="Original content..."
//           className="flex-1 h-[50vh] p-4 bg-[#101828] text-gray-200 border border-gray-700 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-[#f0f174] placeholder-gray-500 hide-scrollbar"
//         />
//         <textarea
//           value={newText}
//           onChange={(e) => setNewText(e.target.value)}
//           placeholder="Modified content..."
//           className="flex-1 h-[50vh] p-4 bg-[#101828] text-gray-200 border border-gray-700 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-[#f0f174] placeholder-gray-500 hide-scrollbar"
//         />
//       </div>

//       {/* compare button */}
//       <button
//         onClick={() => setShowDiff(true)}
//         className="mt-5 px-8 py-3 bg-gradient-to-r from-[#fef87b] to-[#f9e046] text-black font-semibold rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200"
//       >
//         Compare
//       </button>

//       {/* visual diff */}
//       {showDiff && (
//         <div className="mt-8 w-full max-w-7xl bg-[#101828] border border-gray-700 rounded-2xl overflow-auto p-2">
//           <ReactDiffViewer
//             oldValue={oldText}
//             newValue={newText}
//             splitView={true}
//             showDiffOnly={false}
//             leftTitle="Original"
//             rightTitle="Modified"
//             useDarkTheme={true}
//             styles={{
//               variables: {
//                 dark: {
//                   diffViewerBackground: "#101828",
//                   diffViewerColor: "#d1d5db",
//                   addedBackground: "rgba(34,197,94,0.15)",
//                   removedBackground: "rgba(239,68,68,0.15)",
//                   addedColor: "#22c55e",
//                   removedColor: "#ef4444",
//                   gutterBackground: "#0b1220",
//                   gutterBackgroundDark: "#0b1220",
//                   gutterColor: "#9ca3af",
//                 },
//               },
//             }}
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// import { useState } from "react";
// import { diffWords } from "diff";

// export default function DiffChecker() {
//   const [oldText, setOldText] = useState("");
//   const [newText, setNewText] = useState("");
//   const [diffResult, setDiffResult] = useState<any[]>([]);
//   const [error, setError] = useState("");

//   const handleCompare = () => {
//     try {
//       // Try to parse JSON and pretty-print for structured comparison
//       const parsedOld = JSON.parse(oldText);
//       const parsedNew = JSON.parse(newText);
//       const prettyOld = JSON.stringify(parsedOld, null, 2);
//       const prettyNew = JSON.stringify(parsedNew, null, 2);
//       setDiffResult(diffWords(prettyOld, prettyNew));
//       setError("");
//     } catch {
//       // If invalid JSON, just diff raw text
//       setDiffResult(diffWords(oldText, newText));
//       setError("⚠️ One or both inputs are not valid JSON — showing raw word diff");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#0b1220] text-gray-100 p-6 flex flex-col items-center">
//       <h1 className="text-3xl font-bold mb-6 text-[#fefefe] tracking-wide">
//         File / JSON Diff Checker (Word-Level)
//       </h1>

//       <div className="flex flex-col md:flex-row gap-6 w-full max-w-7xl">
//         <textarea
//           value={oldText}
//           onChange={(e) => setOldText(e.target.value)}
//           placeholder="Original JSON or text..."
//           className="flex-1 h-[45vh] p-4 bg-[#101828] text-gray-200 border border-gray-700 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-[#f0f174] placeholder-gray-500"
//         />
//         <textarea
//           value={newText}
//           onChange={(e) => setNewText(e.target.value)}
//           placeholder="Modified JSON or text..."
//           className="flex-1 h-[45vh] p-4 bg-[#101828] text-gray-200 border border-gray-700 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-[#f0f174] placeholder-gray-500"
//         />
//       </div>

//       <button
//         onClick={handleCompare}
//         className="mt-5 px-8 py-3 bg-gradient-to-r from-[#fef87b] to-[#f9e046] text-black font-semibold rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200"
//       >
//         Compare
//       </button>

//       {error && <p className="mt-3 text-yellow-400">{error}</p>}

//       {diffResult.length > 0 && (
//         <div className="mt-8 w-full max-w-7xl bg-[#101828] border border-gray-700 rounded-2xl overflow-auto p-5 font-mono text-sm leading-relaxed whitespace-pre-wrap">
//           {diffResult.map((part, index) => {
//             let style = "";
//             if (part.added) style = "bg-green-900/50 text-green-300";
//             else if (part.removed) style = "bg-red-900/50 text-red-300";
//             return (
//               <span key={index} className={style}>
//                 {part.value}
//               </span>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

// import { useState } from "react";
// import { DiffEditor } from "@monaco-editor/react";

// export default function DiffChecker() {
//   const [oldText, setOldText] = useState("");
//   const [newText, setNewText] = useState("");
//   const [showDiff, setShowDiff] = useState(false);

//   // compare → show Monaco diff
//   const handleCompare = () => setShowDiff(true);

//   // go back to editing mode
//   const handleReEdit = () => setShowDiff(false);

//   return (
//     <div className="min-h-screen bg-[#0b1220] text-gray-100 p-6 flex flex-col items-center">
//       <h1 className="text-3xl font-bold mb-6 text-[#fefefe] tracking-wide">
//         File Diff Viewer (Side-by-Side)
//       </h1>

//       {!showDiff ? (
//         <div className="flex flex-col md:flex-row gap-6 w-full max-w-7xl">
//           {/* original */}
//           <textarea
//             value={oldText}
//             onChange={(e) => setOldText(e.target.value)}
//             placeholder="Original file content..."
//             className="flex-1 h-[45vh] p-4 bg-[#101828] text-gray-200 border border-gray-700 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-[#f0f174] placeholder-gray-500"
//           />
//           {/* modified */}
//           <textarea
//             value={newText}
//             onChange={(e) => setNewText(e.target.value)}
//             placeholder="Modified file content..."
//             className="flex-1 h-[45vh] p-4 bg-[#101828] text-gray-200 border border-gray-700 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-[#f0f174] placeholder-gray-500"
//           />
//         </div>
//       ) : (
//         <div className="w-full max-w-7xl h-[75vh] rounded-2xl overflow-hidden border border-gray-700">
//           <DiffEditor
//             height="100%"
//             language="plaintext"
//             theme="vs-dark"
//             original={oldText}
//             modified={newText}
//             options={{
//               readOnly: true,
//               renderSideBySide: true,
//               wordWrap: "on",
//               minimap: { enabled: false },
//               scrollBeyondLastLine: false,
//               lineNumbers: "on",
//             }}
//           />
//         </div>
//       )}

//       <button
//         onClick={showDiff ? handleReEdit : handleCompare}
//         className="mt-5 px-8 py-3 bg-gradient-to-r from-[#fef87b] to-[#f9e046] text-black font-semibold rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200"
//       >
//         {showDiff ? "Re-Edit Text" : "Compare Files"}
//       </button>
//     </div>
//   );
// }


import { useState } from "react";
import { DiffEditor } from "@monaco-editor/react";

export default function DiffChecker() {
  const [oldText, setOldText] = useState("");
  const [newText, setNewText] = useState("");
  const [showDiff, setShowDiff] = useState(false);

  const handleCompare = () => setShowDiff(true);
  const handleReEdit = () => setShowDiff(false);

  return (
    <div className="min-h-screen bg-[#0b1220] text-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-[#fefefe] tracking-wide">
        File Diff Viewer (Side-by-Side)
      </h1>

      {!showDiff ? (
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-7xl">
          {/* Left / Original */}
          <textarea
            value={oldText}
            onChange={(e) => setOldText(e.target.value)}
            placeholder="Original file content..."
            className="flex-1 h-[45vh] p-4 bg-[#101828] text-gray-200 border border-gray-700 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-[#f0f174] placeholder-gray-500"
          />

          {/* Right / Modified */}
          <textarea
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            placeholder="Modified file content..."
            className="flex-1 h-[45vh] p-4 bg-[#101828] text-gray-200 border border-gray-700 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-[#f0f174] placeholder-gray-500"
          />
        </div>
      ) : (
        <div className="w-full max-w-7xl h-[75vh] rounded-2xl overflow-hidden border border-gray-700">
        <DiffEditor
        height="100%"
        language="plaintext"
        theme="vs-dark"
        original={oldText}
        modified={newText}
        options={{
            readOnly: true,
            renderSideBySide: true,
            automaticLayout: true,
            scrollBeyondLastLine: false,
            lineNumbers: "on",
            minimap: { enabled: false },
            renderOverviewRuler: false,
            renderIndicators: false,
            diffAlgorithm: "advanced",
            enableSplitViewResizing: false,
            ignoreTrimWhitespace: false,
            originalEditable: false,
            diffWordWrap: "on",
            wordWrap: "on",
            renderMarginRevertIcon: false,
        }}
        onMount={(editor) => {
            const originalEditor = editor.getOriginalEditor();
            const modifiedEditor = editor.getModifiedEditor();

            // ✅ Force proper word wrap on both editors
            originalEditor.updateOptions({
            wordWrap: "on",
            wordWrapColumn: 120,
            wordWrapMinified: true,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            lineNumbers: "on",
            renderWhitespace: "none",
            });

            modifiedEditor.updateOptions({
            wordWrap: "on",
            wordWrapColumn: 120,
            wordWrapMinified: true,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            lineNumbers: "on",
            renderWhitespace: "none",
            });

            // ✅ Sync scroll vertically
            let syncing = false;
            const syncScroll = (source: any, target: any) => {
            if (syncing) return;
            syncing = true;
            target.setScrollTop(source.getScrollTop());
            syncing = false;
            };

            originalEditor.onDidScrollChange(() =>
            syncScroll(originalEditor, modifiedEditor)
            );
            modifiedEditor.onDidScrollChange(() =>
            syncScroll(modifiedEditor, originalEditor)
            );

            // ✅ Fix layout glitch by forcing relayout
            setTimeout(() => {
            editor.layout();
            originalEditor.layout();
            modifiedEditor.layout();
            }, 300);
        }}
        />

        </div>
      )}

      <button
        onClick={showDiff ? handleReEdit : handleCompare}
        className="mt-5 px-8 py-3 bg-gradient-to-r from-[#fef87b] to-[#f9e046] text-black font-semibold rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200"
      >
        {showDiff ? "Re-Edit Text" : "Compare Files"}
      </button>
    </div>
  );
}
