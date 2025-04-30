// A typical Git workflow begins with initializing a repository

git init

// This command creates a .git directory where Git stores all objects and metadata. After initialization, configure the author identity:

git config --global user.name "Jane Doe"
git config --global user.email "jane@example.com"


// Create and stage files using:

echo "# Project" > README.md
git add README.md


// Here, git add stages the file, preparing it for the next commit. A commit finalizes the snapshot:

git commit -m "Initial commit"


// The commit is stored as an object, pointing to the tree structure representing the current project state. Multiple files can be staged and committed iteratively. To push this history to a remote GitHub repository:

git remote add origin https://github.com/username/project.git
git branch -M main
git push -u origin main

// These commands connect the local repository to GitHub and push the initial commit. Developers can verify history using:

git log

// This outputs commit hashes, authors, and messages, facilitating traceability. To inspect a file’s version or content stored as a blob:

git ls-tree HEAD
git show <blob_hash>


