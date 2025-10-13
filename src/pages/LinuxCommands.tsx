import { useState } from "react";

export default function LinuxCommands() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (cmd: string) => {
    await navigator.clipboard.writeText(cmd);
    setCopied(cmd);
    setTimeout(() => setCopied(null), 1500);
  };

  const sections = [
    {
      title: "🗂️ File & Directory Management",
      commands: [
        { command: "pwd", description: "Show current directory" },
        { command: "ls -la", description: "List files with details" },
        { command: "cd <dir>", description: "Change directory" },
        { command: "cd ..", description: "Go up one level" },
        { command: "mkdir <dir>", description: "Create directory" },
        { command: "mkdir -p a/b/c", description: "Create nested directories" },
        { command: "rmdir <dir>", description: "Remove empty directory" },
        { command: "rm -rf <dir>", description: "Delete directory recursively" },
        { command: "cp <src> <dest>", description: "Copy file" },
        { command: "cp -r <src> <dest>", description: "Copy folder recursively" },
        { command: "mv <src> <dest>", description: "Move or rename files/folders" },
        { command: "touch <file>", description: "Create empty file" },
        { command: "tree", description: "Show directory structure" },
      ],
    },
    {
      title: "📄 File Viewing & Editing",
      commands: [
        { command: "cat <file>", description: "Display file contents" },
        { command: "tac <file>", description: "Display file in reverse" },
        { command: "head <file>", description: "Show first 10 lines" },
        { command: "tail <file>", description: "Show last 10 lines" },
        { command: "tail -f <file>", description: "Follow file output in real-time (logs)" },
        { command: "nl <file>", description: "Show lines with numbering" },
        { command: "less <file>", description: "Open file with scrolling/search" },
        { command: "more <file>", description: "View file (paged)" },
      ],
    },
    {
      title: "🔍 Searching & Filtering",
      commands: [
        { command: "grep 'text' <file>", description: "Search text in file" },
        { command: "grep -r 'pattern' /path", description: "Recursive search" },
        { command: "grep -i 'text'", description: "Case-insensitive search" },
        { command: "grep -n 'text'", description: "Show line numbers" },
        { command: "find . -name '*.log'", description: "Find files by pattern" },
        { command: "locate <filename>", description: "Find file using database" },
        { command: "updatedb", description: "Update file location database" },
        { command: "wc -l <file>", description: "Count lines in file" },
        { command: "wc -w <file>", description: "Count words" },
        { command: "wc -c <file>", description: "Count characters" },
      ],
    },
    {
      title: "⚙️ System Information",
      commands: [
        { command: "uname -a", description: "Show kernel and system info" },
        { command: "hostnamectl", description: "Display system hostname and OS info" },
        { command: "uptime", description: "Show uptime and load average" },
        { command: "lsb_release -a", description: "Show Linux distro info" },
        { command: "lscpu", description: "CPU info" },
        { command: "free -h", description: "Memory usage" },
        { command: "df -h", description: "Disk usage summary" },
        { command: "du -sh *", description: "Show size of each item in current directory" },
        { command: "lsblk", description: "List all block devices (disks)" },
        { command: "whoami", description: "Show current logged in user" },
        { command: "id", description: "Show user/group IDs" },
      ],
    },
    {
      title: "🧠 Process Management",
      commands: [
        { command: "ps aux", description: "List all running processes" },
        { command: "top", description: "Real-time process list" },
        { command: "htop", description: "Interactive process viewer" },
        { command: "kill <pid>", description: "Terminate a process" },
        { command: "kill -9 <pid>", description: "Force kill process" },
        { command: "pkill <name>", description: "Kill process by name" },
        { command: "pgrep <name>", description: "Find PID by name" },
        { command: "jobs", description: "Show background jobs" },
        { command: "bg", description: "Resume job in background" },
        { command: "fg", description: "Bring background job to foreground" },
      ],
    },
    {
      title: "🔒 Permissions & Ownership",
      commands: [
        { command: "chmod +x <file>", description: "Make file executable" },
        { command: "chmod 755 <file>", description: "Set full for owner, read-exec for others" },
        { command: "chown user:group <file>", description: "Change file owner and group" },
        { command: "sudo <command>", description: "Run command as root" },
        { command: "sudo su", description: "Switch to root user" },
        { command: "passwd", description: "Change user password" },
        { command: "groups <user>", description: "Show groups user belongs to" },
      ],
    },
    {
      title: "🌐 Networking & Internet",
      commands: [
        { command: "ip a", description: "Show network interfaces" },
        { command: "ping google.com", description: "Check network connectivity" },
        { command: "curl <url>", description: "Fetch content from URL" },
        { command: "wget <url>", description: "Download file" },
        { command: "netstat -tulnp", description: "Show open ports and connections" },
        { command: "ss -tulnp", description: "Modern netstat replacement" },
        { command: "traceroute <host>", description: "Trace route to host" },
        { command: "nslookup <domain>", description: "DNS lookup" },
        { command: "dig <domain>", description: "Advanced DNS lookup" },
        { command: "scp file user@host:/path", description: "Copy file via SSH" },
        { command: "rsync -avz src/ dest/", description: "Efficiently sync directories" },
        { command: "ssh user@host", description: "Connect to remote server" },
        { command: "exit", description: "Close SSH connection" },
      ],
    },
    {
      title: "💾 Compression & Archiving",
      commands: [
        { command: "tar -cvf file.tar dir/", description: "Create tar archive" },
        { command: "tar -xvf file.tar", description: "Extract tar archive" },
        { command: "tar -czvf file.tar.gz dir/", description: "Create compressed tar.gz" },
        { command: "tar -xzvf file.tar.gz", description: "Extract compressed tar.gz" },
        { command: "gzip <file>", description: "Compress single file" },
        { command: "gunzip <file.gz>", description: "Decompress file" },
        { command: "zip -r file.zip dir/", description: "Zip folder recursively" },
        { command: "unzip file.zip", description: "Unzip archive" },
      ],
    },
    {
      title: "📦 Package Management (Ubuntu/Debian)",
      commands: [
        { command: "sudo apt update", description: "Update package index" },
        { command: "sudo apt upgrade", description: "Upgrade installed packages" },
        { command: "sudo apt install <pkg>", description: "Install package" },
        { command: "sudo apt remove <pkg>", description: "Remove package" },
        { command: "sudo apt autoremove", description: "Remove unused packages" },
        { command: "sudo apt purge <pkg>", description: "Remove package + configs" },
        { command: "dpkg -l", description: "List installed packages" },
        { command: "apt-cache search <pkg>", description: "Search for package" },
      ],
    },
    {
      title: "🧩 Disk, Storage & Mounting",
      commands: [
        { command: "df -h", description: "Disk usage by filesystem" },
        { command: "du -sh *", description: "Size of each directory" },
        { command: "lsblk", description: "List disks and partitions" },
        { command: "mount /dev/sdb1 /mnt", description: "Mount a device" },
        { command: "umount /mnt", description: "Unmount device" },
        { command: "blkid", description: "List block device UUIDs" },
        { command: "fdisk -l", description: "List partition table" },
      ],
    },
    {
      title: "⚙️ System Control (Services & Boot)",
      commands: [
        { command: "systemctl status <service>", description: "Show service status" },
        { command: "systemctl start <service>", description: "Start service" },
        { command: "systemctl stop <service>", description: "Stop service" },
        { command: "systemctl restart <service>", description: "Restart service" },
        { command: "systemctl enable <service>", description: "Enable on boot" },
        { command: "systemctl disable <service>", description: "Disable on boot" },
      ],
    },
    {
      title: "📈 Monitoring & Performance",
      commands: [
        { command: "top", description: "Show running processes" },
        { command: "htop", description: "Interactive process monitor" },
        { command: "vmstat 1", description: "System resource usage" },
        { command: "iostat", description: "I/O stats" },
        { command: "sar -u 1 3", description: "CPU usage sampling" },
        { command: "watch -n 1 free -h", description: "Monitor memory usage live" },
      ],
    },
    {
      title: "🧮 Miscellaneous Utilities",
      commands: [
        { command: "echo 'text'", description: "Print text" },
        { command: "alias ll='ls -la'", description: "Create alias" },
        { command: "unalias ll", description: "Remove alias" },
        { command: "history", description: "View command history" },
        { command: "which <cmd>", description: "Locate binary of command" },
        { command: "man <cmd>", description: "View command manual" },
        { command: "help <cmd>", description: "Get help for built-in" },
        { command: "clear", description: "Clear terminal" },
        { command: "exit", description: "Close terminal session" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b1220] text-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#fefefe] tracking-wide">
        ⚙️ Linux Commands Reference
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
