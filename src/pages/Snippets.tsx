import { useState, useEffect } from "react";

interface Snippet {
  id: string;
  title: string;
  content: string;
}

export default function Snippets() {
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Load snippets from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("snippets");
    if (saved) setSnippets(JSON.parse(saved));
  }, []);

  // Save to localStorage whenever snippets change
  useEffect(() => {
    localStorage.setItem("snippets", JSON.stringify(snippets));
  }, [snippets]);

  const handleAddSnippet = () => {
    if (!title.trim() || !content.trim()) return alert("Please fill all fields");
    const newSnippet = { id: Date.now().toString(), title, content };
    setSnippets([newSnippet, ...snippets]);
    setTitle("");
    setContent("");
  };

  const handleDelete = (id: string) => {
    if (confirm("Delete this snippet?")) {
      setSnippets(snippets.filter((s) => s.id !== id));
    }
  };

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    alert("✅ Copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-[#0b1220] text-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-[#fefefe] tracking-wide">
        Snippets Manager
      </h1>

      {/* Add New Snippet */}
      <div className="w-full max-w-4xl bg-[#101828] p-6 rounded-2xl border border-gray-700 mb-8">
        <input
          type="text"
          placeholder="Snippet Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 p-3 bg-[#0b1220] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f0f174]"
        />
        <textarea
          placeholder="Snippet Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-32 p-3 bg-[#0b1220] border border-gray-700 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#f0f174]"
        />
        <button
          onClick={handleAddSnippet}
          className="mt-4 px-6 py-2 bg-gradient-to-r from-[#fef87b] to-[#f9e046] text-black font-semibold rounded-lg shadow-md hover:scale-105 transition-all"
        >
          ➕ Save Snippet
        </button>
      </div>

      {/* Saved Snippets */}
      <div className="w-full max-w-4xl flex flex-col gap-4">
        {snippets.length === 0 ? (
          <p className="text-gray-400 text-center">No snippets saved yet.</p>
        ) : (
          snippets.map((snippet) => (
            <div
              key={snippet.id}
              className="bg-[#101828] border border-gray-700 rounded-xl p-4 flex justify-between items-start gap-4"
            >
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-[#fefefe]">
                  {snippet.title}
                </h2>
                <pre className="mt-2 bg-[#0b1220] text-gray-300 p-3 rounded-lg overflow-x-auto text-sm whitespace-pre-wrap">
                  {snippet.content}
                </pre>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleCopy(snippet.content)}
                  className="px-3 py-1 bg-green-500 text-black rounded-lg font-medium hover:bg-green-400 transition"
                >
                  Copy
                </button>
                <button
                  onClick={() => handleDelete(snippet.id)}
                  className="px-3 py-1 bg-red-500 text-black rounded-lg font-medium hover:bg-red-400 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
