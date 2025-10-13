import { useState } from "react";

interface GitCommand {
  command: string;
  description: string;
}

interface Category {
  title: string;
  commands: GitCommand[];
}

export default function GitCommands() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (cmd: string) => {
    await navigator.clipboard.writeText(cmd);
    setCopied(cmd);
    setTimeout(() => setCopied(null), 1500);
  };

  const sections: Category[] = [
    {
      title: "🔧 Setup & Config",
      commands: [
        { command: "git config --global user.name 'Your Name'", description: "Set global username" },
        { command: "git config --global user.email 'you@example.com'", description: "Set global email" },
        { command: "git config --list", description: "View all configuration" },
        { command: "git init", description: "Initialize new repository" },
        { command: "git clone <repo-url>", description: "Clone an existing repository" },
      ],
    },
    {
      title: "📦 Staging & Committing",
      commands: [
        { command: "git status", description: "Check working directory and staging area" },
        { command: "git add .", description: "Stage all changes" },
        { command: "git add <file>", description: "Stage a specific file" },
        { command: "git commit -m 'message'", description: "Commit staged changes" },
        { command: "git commit --amend", description: "Edit last commit message or content" },
        { command: "git restore --staged <file>", description: "Unstage a file" },
      ],
    },
    {
      title: "🌿 Branching & Merging",
      commands: [
        { command: "git branch", description: "List local branches" },
        { command: "git branch -a", description: "List all branches (local + remote)" },
        { command: "git branch <branch>", description: "Create new branch" },
        { command: "git checkout -b <branch>", description: "Create & switch to new branch" },
        { command: "git switch <branch>", description: "Switch to branch (modern)" },
        { command: "git merge <branch>", description: "Merge branch into current one" },
        { command: "git branch -d <branch>", description: "Delete branch safely" },
        { command: "git branch -D <branch>", description: "Force delete branch" },
      ],
    },
    {
      title: "🚀 Remote & Upstream",
      commands: [
        { command: "git remote -v", description: "Show current remote repositories" },
        { command: "git remote add origin <url>", description: "Add remote repository (origin)" },
        { command: "git remote set-url origin <new-url>", description: "Update remote repository URL" },
        { command: "git push -u origin <branch>", description: "Push and set upstream tracking branch" },
        { command: "git branch -u origin/<branch>", description: "Link current local branch to remote branch" },
        { command: "git push --set-upstream origin <branch>", description: "Set upstream explicitly (alternative syntax)" },
        { command: "git pull origin <branch>", description: "Pull latest changes from remote branch" },
        { command: "git fetch --all --prune", description: "Fetch all updates and remove deleted branches" },
        { command: "git remote remove origin", description: "Remove remote repository link" },
      ],
    },
    {
      title: "🌍 Working with Forks / Upstream",
      commands: [
        { command: "git remote add upstream <url>", description: "Add the original repo as 'upstream'" },
        { command: "git fetch upstream", description: "Fetch all branches from upstream" },
        { command: "git checkout main", description: "Switch to main branch" },
        { command: "git merge upstream/main", description: "Merge upstream changes into local main" },
        { command: "git rebase upstream/main", description: "Rebase your work on top of upstream" },
        { command: "git push origin main", description: "Push updated main to your fork" },
      ],
    },
    {
      title: "💾 Stash Management",
      commands: [
        { command: "git stash", description: "Stash current uncommitted changes" },
        { command: "git stash list", description: "View all stashes" },
        { command: "git stash pop", description: "Apply and remove most recent stash" },
        { command: "git stash apply stash@{2}", description: "Apply specific stash" },
        { command: "git stash drop stash@{1}", description: "Delete specific stash" },
        { command: "git stash clear", description: "Delete all stashes" },
        { command: "git stash show -p stash@{0}", description: "Show stash diff details" },
      ],
    },
    {
      title: "🎯 Undo, Revert & Reset",
      commands: [
        { command: "git restore <file>", description: "Discard changes in working directory" },
        { command: "git reset HEAD~1", description: "Undo last commit (keep changes unstaged)" },
        { command: "git reset --soft HEAD~1", description: "Undo commit but keep changes staged" },
        { command: "git reset --hard HEAD~1", description: "Undo last commit and remove changes" },
        { command: "git revert <commit-id>", description: "Revert specific commit (safe undo)" },
        { command: "git reflog", description: "View all branch movement history (saves you from mistakes)" },
      ],
    },
    {
      title: "🧩 Rebasing, Cherry-Picking & Fixes",
      commands: [
        { command: "git rebase main", description: "Rebase current branch onto main" },
        { command: "git rebase -i HEAD~3", description: "Interactive rebase last 3 commits" },
        { command: "git cherry-pick <commit>", description: "Apply specific commit to current branch" },
        { command: "git rebase --abort", description: "Abort rebase in progress" },
        { command: "git rebase --continue", description: "Continue rebase after fixing conflicts" },
      ],
    },
    {
      title: "🏷️ Tags & Releases",
      commands: [
        { command: "git tag", description: "List all tags" },
        { command: "git tag <name>", description: "Create lightweight tag" },
        { command: "git tag -a <name> -m 'msg'", description: "Create annotated tag" },
        { command: "git push origin <tag>", description: "Push single tag" },
        { command: "git push --tags", description: "Push all tags" },
        { command: "git tag -d <name>", description: "Delete local tag" },
        { command: "git push origin :refs/tags/<name>", description: "Delete remote tag" },
      ],
    },
    {
      title: "📈 Logs & Diffs",
      commands: [
        { command: "git log --oneline", description: "Compact commit history" },
        { command: "git log --graph --oneline --decorate --all", description: "View commit graph visually" },
        { command: "git show <commit>", description: "Show details of commit" },
        { command: "git diff", description: "Show unstaged differences" },
        { command: "git diff --staged", description: "Show staged differences" },
        { command: "git shortlog -sn", description: "List contributors and commit counts" },
      ],
    },
    {
      title: "⚡ Force & Advanced Pushes",
      commands: [
        { command: "git push --force-with-lease", description: "Safe force push (recommended)" },
        { command: "git push --force", description: "Force push (dangerous, overwrites history)" },
        { command: "git fetch origin && git reset --hard origin/main", description: "Force sync local branch to remote" },
        { command: "git clean -fd", description: "Remove untracked files and directories" },
      ],
    },
    {
      title: "🧠 Search & Blame",
      commands: [
        { command: "git grep '<pattern>'", description: "Search inside repository" },
        { command: "git blame <file>", description: "See who last modified each line" },
        { command: "git ls-files", description: "List tracked files" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b1220] text-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#fefefe] tracking-wide">
        🧭 Git Commands Reference
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {sections.map((section) => (
          <div key={section.title} className="bg-[#101828] p-6 rounded-2xl border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-[#f0f174]">{section.title}</h2>
            <div className="space-y-3">
              {section.commands.map((cmd) => (
                <div
                  key={cmd.command}
                  className="flex justify-between items-start bg-[#0b1220] p-3 rounded-xl border border-gray-700 hover:border-[#f0f174]/60 transition-all"
                >
                  <div className="flex-1">
                    <code className="text-[#9ae6b4] font-mono text-sm">{cmd.command}</code>
                    <p className="text-gray-400 text-xs mt-1">{cmd.description}</p>
                  </div>
                  <button
                    onClick={() => handleCopy(cmd.command)}
                    className="ml-4 px-3 py-1 bg-gradient-to-r from-[#8cff8a] to-[#53e46a] text-black font-semibold rounded-lg text-sm hover:scale-105 transition"
                  >
                    {copied === cmd.command ? "Copied!" : "Copy"}
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
