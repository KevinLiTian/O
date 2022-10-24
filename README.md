# O Studio - Lifelong Learners

## Contribution

We use GitHub issues and pull requests (PR) to keep track of tasks and contribute. To contribute, first identify what is the issue:

- A bug?
- A new feature to be added?

Then open an issue in the GitHub issue tab and write detailed description following the corresponding instructions.

Afterwards, create a new branch and give it a reasonable name based on the issue. Develop on the new branch created, if documents need to be updated, update the document; if tests need to be added, add tests. Remember to follow the [code style](#dev-tool--code-style) of the project!

After you have done the bug fix/new feature implementation, submit a pull request and write detailed description of what you did following the pull request instructions.

The maintainers of the repository will review and commment on the PR, if everything goes well, the PR will be merged!

## Dev Tool & Code Style

We recommand [VS Code](https://code.visualstudio.com/) as your default code editor since we will use a lot of its features. For code formatting, we mostly use VS Code's extension [Prettier](https://prettier.io/), but here's the general recommanded setting to put in your `settings.json` in VS Code:

```json
{
  "editor.fontLigatures": true,
  "editor.formatOnSave": true,
  "files.autoSave": "afterDelay",
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "vscode.css-language-features"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## Written at the End

We are passionate about web development and want to learn as much as we can. We believe in learning by doing, we are working on replicating the appearance of popular web designs and learn from them.

- K.LT
- Tusuu
