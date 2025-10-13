import { useState } from "react";

export default function JSONFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleFormat = (pretty: boolean) => {
    try {
      const parsed = JSON.parse(input);
      const formatted = pretty
        ? JSON.stringify(parsed, null, 2)
        : JSON.stringify(parsed);
      setOutput(formatted);
      setError("");
    } catch (e: any) {
      setError("Invalid JSON format");
      setOutput("");
    }
  };

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    alert("✅ JSON copied to clipboard!");
  };

  return (
    <div className="min-h-screen w-full bg-[#0b1220] text-gray-100 flex flex-col justify-center items-center p-6">
      <h1 className="text-4xl font-bold mb-8 text-[#fefefe] tracking-wide">
        JSON Formatter
      </h1>

      <div className="w-full max-w-7xl flex flex-col gap-4 md:gap-6">
        {/* Text Areas */}
        <div className="flex flex-col md:flex-row gap-6">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste or write your JSON here..."
            className="flex-1 h-[70vh] p-5 bg-[#101828] text-gray-200 border border-gray-700 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-[#f0f174] placeholder-gray-500 hide-scrollbar"
          />

          <textarea
            value={output}
            readOnly
            placeholder="Formatted JSON will appear here..."
            className="flex-1 h-[70vh] p-5 bg-[#101828] text-gray-200 border border-gray-700 rounded-2xl resize-none focus:outline-none placeholder-gray-500 hide-scrollbar"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-5 mt-2">
          <button
            onClick={() => handleFormat(true)}
            className="px-6 py-3 bg-gradient-to-r from-[#fef87b] to-[#f9e046] text-black font-semibold rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200"
          >
            Format JSON
          </button>

          <button
            onClick={() => handleFormat(false)}
            className="px-6 py-3 bg-gradient-to-r from-[#f9a76d] to-[#f78145] text-black font-semibold rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200"
          >
            Minify JSON
          </button>

          <button
            onClick={handleCopy}
            disabled={!output}
            className={`px-6 py-3 font-semibold rounded-xl shadow-md transition-all duration-200 ${
              output
                ? "bg-gradient-to-r from-[#8cff8a] to-[#53e46a] text-black hover:scale-105 hover:shadow-lg"
                : "bg-gray-500 text-gray-300 cursor-not-allowed"
            }`}
          >
            Copy
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-400 text-center mt-4 font-medium tracking-wide">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
