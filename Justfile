set shell := ['nu.exe', '-c']

install:
  vsce package
  code --install-extension $"vs-poor-gpt-(open package.json|get version).vsix"
  rm -f $"vs-poor-gpt-(open package.json|get version).vsix"
