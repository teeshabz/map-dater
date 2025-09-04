// app.js — UI/controller that renders the decision tree in the browser.
// The tree data lives in map-dater-decision-tree.js as window.MapDaterTree.

(() => {
  "use strict";

  // --- Guard: ensure the tree is loaded ---
  if (!window.MapDaterTree || !window.MapDaterTree.nodes) {
    console.error("MapDaterTree not found. Ensure map-dater-decision-tree.js is loaded BEFORE app.js.");
    return;
  }

  // --- Tree + state ---
  const TREE = window.MapDaterTree;
  const NODES = TREE.nodes;

  let currentId = TREE.start || "Q1";
  const path = [];           // [{ q, a, nodeId }]
  const historyStack = [];   // [nodeId, ...]

  // --- DOM hooks ---
  const questionArea = document.getElementById("questionArea");
  const answersArea  = document.getElementById("answersArea");
  const resultArea   = document.getElementById("resultArea");
  const backBtn      = document.getElementById("backBtn");
  const restartBtn   = document.getElementById("restartBtn");
  const progressText = document.getElementById("progressText");
  const sectionBadge = document.getElementById("sectionBadge");

  // --- Wire controls ---
  backBtn.addEventListener("click", goBack);
  restartBtn.addEventListener("click", restart);

  // --- Render loop ---
  function render() {
    const node = NODES[currentId];
    if (!node) {
      console.error("Unknown node id:", currentId);
      return;
    }

    // Section badge + progress
    sectionBadge.textContent = node.section ? node.section : "";
    progressText.textContent = path.length > 0
      ? `Answered ${path.length} step${path.length === 1 ? "" : "s"}`
      : "Start";

    // Reset areas
    questionArea.textContent = "";
    answersArea.innerHTML = "";
    resultArea.classList.add("hidden");
    resultArea.innerHTML = "";

    if (node.result) {
      // --- Result view ---
      questionArea.textContent = "Result";

      const title = document.createElement("div");
      title.className = "title";
      title.textContent = node.title || "Result";

      const details = document.createElement("div");
      details.className = "details";
      details.textContent = node.details || "";

      const pathDiv = document.createElement("div");
      pathDiv.className = "path";
      pathDiv.textContent = path.length
        ? "Path: " + path.map(p => `${p.q} → ${p.a}`).join(" | ")
        : "";

      resultArea.appendChild(title);
      resultArea.appendChild(details);
      resultArea.appendChild(pathDiv);
      resultArea.classList.remove("hidden");
    } else {
      // --- Question view ---
      questionArea.textContent = node.text || "";

      (node.answers || []).forEach(ans => {
        const btn = document.createElement("button");
        btn.textContent = ans.label;
        btn.addEventListener("click", () => {
          // record path + move to next
          path.push({ q: node.text || "", a: ans.label, nodeId: node.id });
          historyStack.push(currentId);
          currentId = ans.next;
          render();
        });
        answersArea.appendChild(btn);
      });
    }

    // Back availability
    backBtn.disabled = historyStack.length === 0;
  }

  function goBack() {
    if (historyStack.length === 0) return;
    currentId = historyStack.pop();
    path.pop();
    render();
  }

  function restart() {
    currentId = TREE.start || "Q1";
    path.length = 0;
    historyStack.length = 0;
    render();
  }

  // Initial paint
  render();
})();
