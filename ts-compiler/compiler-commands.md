# TypeScript Compiler

## Watch mode

-   Watches a specific file for changes

```
tsc file.ts --watch
OR
tsc file.ts -w
```

## Project Mode

-   Initializes a project in the current folder
-   Creates a tsconfig.json file for the project

```
tsc --init
```

-   Now running `tsc --watch` or `tsc -w` will watch all of the TS files in the project
