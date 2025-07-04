const questions = [

 {
    "id": 1,
    "question": "What command is used to initialize a new Git repository?",
    "options": ["git start", "git init", "git new", "git create"],
    "answer": "git init"
  },
  {
    "id": 2,
    "question": "Which command stages all changed files for commit?",
    "options": ["git commit", "git stage", "git add .", "git push"],
    "answer": "git add ."
  },
  {
    "id": 3,
    "question": "What does 'git commit -m' do?",
    "options": ["Commits with a message", "Commits to master", "Deletes changes", "Merges branches"],
    "answer": "Commits with a message"
  },
  {
    "id": 4,
    "question": "Which command uploads local commits to GitHub?",
    "options": ["git upload", "git commit", "git push", "git fetch"],
    "answer": "git push"
  },
  {
    "id": 5,
    "question": "What is a Git branch?",
    "options": ["A backup copy", "A version of your repo", "A commit message", "A deleted file"],
    "answer": "A version of your repo"
  },
  {
    "id": 6,
    "question": "What command is used to check the current status of your repo?",
    "options": ["git check", "git log", "git status", "git current"],
    "answer": "git status"
  },
  {
    "id": 7,
    "question": "How do you clone a GitHub repository?",
    "options": ["git fork", "git download", "git clone URL", "git copy"],
    "answer": "git clone URL"
  },
  {
    "id": 8,
    "question": "What file tells Git which files to ignore?",
    "options": [".gitkeep", ".gitignore", "ignore.md", ".env"],
    "answer": ".gitignore"
  },
  {
    "id": 9,
    "question": "What does 'git pull' do?",
    "options": ["Uploads files", "Downloads and merges", "Deletes remote branch", "Saves changes"],
    "answer": "Downloads and merges"
  },
  {
    "id": 10,
    "question": "What is GitHub?",
    "options": ["A text editor", "A Git GUI", "A hosting service for Git repositories", "A compiler"],
    "answer": "A hosting service for Git repositories"
  },
  {
    "id": 11,
    "question": "What does 'git log' show?",
    "options": ["Ignored files", "Unstaged files", "Commit history", "Current branch"],
    "answer": "Commit history"
  },
  {
    "id": 12,
    "question": "Which command creates a new branch?",
    "options": ["git new branch", "git branch [name]", "git create branch", "git init branch"],
    "answer": "git branch [name]"
  },
  {
    "id": 13,
    "question": "How do you switch to another branch?",
    "options": ["git change", "git switch", "git checkout [name]", "git merge [name]"],
    "answer": "git checkout [name]"
  },
  {
    "id": 14,
    "question": "What is the default branch in most GitHub repositories?",
    "options": ["main", "master", "dev", "prod"],
    "answer": "main"
  },
  {
    "id": 15,
    "question": "How do you merge another branch into your current one?",
    "options": ["git combine", "git merge [branch]", "git include", "git add branch"],
    "answer": "git merge [branch]"
  },
  {
    "id": 16,
    "question": "What is a pull request?",
    "options": ["Asking to delete code", "A way to suggest changes", "A backup request", "Git command"],
    "answer": "A way to suggest changes"
  },
  {
    "id": 17,
    "question": "Which command deletes a branch locally?",
    "options": ["git delete [branch]", "git remove branch", "git branch -d [name]", "git drop [branch]"],
    "answer": "git branch -d [name]"
  },
  {
    "id": 18,
    "question": "What is the purpose of 'git fetch'?",
    "options": ["Download changes without merging", "Upload commits", "Clone a repo", "Reset the repo"],
    "answer": "Download changes without merging"
  },
  {
    "id": 19,
    "question": "What is a fork on GitHub?",
    "options": ["A copy of a repository", "A Git branch", "A deleted repo", "An error"],
    "answer": "A copy of a repository"
  },
  {
    "id": 20,
    "question": "What command shows the last commit made?",
    "options": ["git show", "git last", "git commit", "git tail"],
    "answer": "git show"
  },
  {
    "id": 21,
    "question": "Which command unstages a file?",
    "options": ["git remove", "git reset HEAD [file]", "git clean", "git delete"],
    "answer": "git reset HEAD [file]"
  },
  {
    "id": 22,
    "question": "What does 'git diff' do?",
    "options": ["Shows file sizes", "Shows changes not staged", "Deletes changes", "Compares branches only"],
    "answer": "Shows changes not staged"
  },
  {
    "id": 23,
    "question": "Can you use Git without GitHub?",
    "options": ["No", "Only on Linux", "Yes", "Only online"],
    "answer": "Yes"
  },
  {
    "id": 24,
    "question": "How do you commit all staged changes?",
    "options": ["git push", "git add", "git commit -m 'message'", "git save"],
    "answer": "git commit -m 'message'"
  },
  {
    "id": 25,
    "question": "What does 'origin' refer to in Git?",
    "options": ["The creator", "The file system", "The default remote", "A Git branch"],
    "answer": "The default remote"
  },


  {
    "id": 26,
    "question": "What is React?",
    "options": ["A server", "A database", "A JavaScript library for UI", "A CSS framework"],
    "answer": "A JavaScript library for UI"
  },
  {
    "id": 27,
    "question": "Who created React?",
    "options": ["Google", "Facebook", "Microsoft", "Twitter"],
    "answer": "Facebook"
  },
  {
    "id": 28,
    "question": "What is a component in React?",
    "options": ["HTML tag", "Reusable UI block", "Java method", "CSS style"],
    "answer": "Reusable UI block"
  },
  {
    "id": 29,
    "question": "How do you create a functional component in React?",
    "options": ["function MyComponent() {}", "createComponent()", "new Component()", "render()"],
    "answer": "function MyComponent() {}"
  },
  {
    "id": 30,
    "question": "What is JSX?",
    "options": ["JavaScript Extension", "A React API", "JS + XML syntax", "Node.js framework"],
    "answer": "JS + XML syntax"
  },
  {
    "id": 31,
    "question": "Which hook is used for state in a functional component?",
    "options": ["useRef", "useContext", "useState", "useEffect"],
    "answer": "useState"
  },
  {
    "id": 32,
    "question": "Which hook is used for side effects?",
    "options": ["useState", "useCallback", "useEffect", "useMemo"],
    "answer": "useEffect"
  },
  {
    "id": 33,
    "question": "What prop helps uniquely identify elements in lists?",
    "options": ["key", "id", "index", "value"],
    "answer": "key"
  },
  {
    "id": 34,
    "question": "What is a prop in React?",
    "options": ["A variable", "Component input", "Event handler", "Function call"],
    "answer": "Component input"
  },
  {
    "id": 35,
    "question": "How do you pass props in React?",
    "options": ["Inside return()", "As HTML attributes", "Using setState", "By importing"],
    "answer": "As HTML attributes"
  },
  {
    "id": 36,
    "question": "What is the default export in a component file?",
    "options": ["The main component", "CSS", "Multiple components", "Props"],
    "answer": "The main component"
  },
  {
    "id": 37,
    "question": "What command creates a new React app with TypeScript?",
    "options": ["npx create-react-app myapp", "npm install react", "npx create-react-app myapp --template typescript", "react new"],
    "answer": "npx create-react-app myapp --template typescript"
  },
  {
    "id": 38,
    "question": "What does useState return?",
    "options": ["Only a variable", "A setter function", "An array with state and updater", "Nothing"],
    "answer": "An array with state and updater"
  },
  {
    "id": 39,
    "question": "Which file is usually the root of a React app?",
    "options": ["index.html", "App.css", "index.tsx", "main.js"],
    "answer": "index.tsx"
  },
  {
    "id": 40,
    "question": "How are events handled in React?",
    "options": ["CamelCase syntax", "Normal HTML", "Python style", "Angular style"],
    "answer": "CamelCase syntax"
  },
  {
    "id": 41,
    "question": "Which method is used to render a React app to the DOM?",
    "options": ["ReactDOM.render", "React.display", "App.render", "DOM.create"],
    "answer": "ReactDOM.render"
  },
  {
    "id": 42,
    "question": "How do you write a comment in JSX?",
    "options": ["/* comment */", "// comment", "{/* comment */}", "<!-- comment -->"],
    "answer": "{/* comment */}"
  },
  {
    "id": 43,
    "question": "What is the virtual DOM?",
    "options": ["An imaginary tree", "React’s internal DOM copy", "CSS model", "Browser's real DOM"],
    "answer": "React’s internal DOM copy"
  },
  {
    "id": 44,
    "question": "Can React render multiple components?",
    "options": ["Yes", "No", "Only classes", "Only functions"],
    "answer": "Yes"
  },
  {
    "id": 45,
    "question": "What is lifting state up?",
    "options": ["Moving state to parent", "Using global variables", "Updating multiple states", "Using Redux"],
    "answer": "Moving state to parent"
  },
  {
    "id": 46,
    "question": "Which file often imports `App.tsx`?",
    "options": ["main.js", "index.tsx", "style.css", "server.ts"],
    "answer": "index.tsx"
  },
  {
    "id": 47,
    "question": "What does `export default` mean?",
    "options": ["Export a CSS file", "Export multiple items", "Export a single item", "Export as global"],
    "answer": "Export a single item"
  },
  {
    "id": 48,
    "question": "What is the role of `useEffect`?",
    "options": ["Handling styles", "Fetching data and effects", "Modifying props", "Rendering HTML"],
    "answer": "Fetching data and effects"
  },
  {
    "id": 49,
    "question": "What is the advantage of components?",
    "options": ["Less code", "Reusable and testable code", "CSS support", "Database access"],
    "answer": "Reusable and testable code"
  },
  {
    "id": 50,
    "question": "What is the use of React Router?",
    "options": ["Data fetch", "Routing and navigation", "Styling", "Database connection"],
    "answer": "Routing and navigation"
  }


]

export default questions;