# @linaria/testkit

## 4.1.4

### Patch Changes

- Updated dependencies [24b4a4bd]
  - @linaria/babel-preset@4.2.1
  - @linaria/shaker@4.2.1
  - @linaria/tags@4.1.3
  - @linaria/react@4.1.4

## 4.1.3

### Patch Changes

- ac0991a6: Better detection for jsx-runtime. Reduces the amount of evaluated code and improves speed and stability.
- Updated dependencies [8590e134]
- Updated dependencies [f7351b09]
- Updated dependencies [c0bd271a]
- Updated dependencies [8f90fa75]
- Updated dependencies [a5169f16]
- Updated dependencies [ac0991a6]
  - @linaria/babel-preset@4.2.0
  - @linaria/shaker@4.2.0
  - @linaria/react@4.1.3
  - @linaria/tags@4.1.2

## 4.1.2

### Patch Changes

- Updated dependencies [3c593aa8]
  - @linaria/babel-preset@4.1.2
  - @linaria/shaker@4.1.2
  - @linaria/tags@4.1.1
  - @linaria/react@4.1.2

## 4.1.1

### Patch Changes

- 21ba7a44: The default config was changed to process ES modules inside node_modules.
- 21ba7a44: The better detector of React components.
- Updated dependencies [21ba7a44]
- Updated dependencies [21ba7a44]
- Updated dependencies [21ba7a44]
- Updated dependencies [2abc55b3]
- Updated dependencies [21ba7a44]
  - @linaria/babel-preset@4.1.1
  - @linaria/react@4.1.1
  - @linaria/shaker@4.1.1

## 4.1.0

### Minor Changes

- 92f6d871: Instead of just replacing tags with their runtime versions, `transform` mistakenly applied all babel transformations. (fixes #1018)

### Patch Changes

- Updated dependencies [92f6d871]
  - @linaria/babel-preset@4.1.0
  - @linaria/shaker@4.1.0
  - @linaria/tags@4.1.0
  - @linaria/react@4.1.0

## 4.0.0

### Major Changes

- bc0cbeea: A completely new async mode with native support for Vite, Rollup, esbuild and Webpack resolvers.

  BREAKING CHANGES: Despite the fact, that it should be fully compatible with 3.0 and 2.0 branches, the new version of styles evaluator can have some serious bugs which can make your project unbuildable (however, since there is no runtime, if the build is finished successfully, everything will continue work as it was on 2.0 and 3.0). If you face some problems please let us know and we will fix it as soon as possible.

### Patch Changes

- 8be5650d: The repo has been migrated to PNPM and Turborepo
- 17c83e34: Fix for the case when `styled` wraps an imported component.
- ea41d440: New package @linaria/tags that contains all abstract logic for tags processors.
- 592b89b5: Fix for broken object interpolation (#995)
- 9a50c1c1: Linaria now removes all unused css-related code from the runtime.
- 4cdf0315: Tagged template-specific logic has been moved from `BaseProcessor` to `TaggedTemplateProcessor`. `BaseProcessor` now can be used to define any type of expressions for zero-runtime transformations, such as `makeStyles` from `@griffel/react`.
- 17c83e34: Aliases for environments without the support of `exports` in package.json.
- f0cddda4: Extends `BaseProcessor` to support tags other than tagged templates, such as `makeStyles` from `@griffel/react`.
- Updated dependencies [f0cddda4]
  - @linaria/babel-preset@4.0.0
  - @linaria/extractor@4.0.0
  - @linaria/react@4.0.0
  - @linaria/shaker@4.0.0
  - @linaria/tags@4.0.0

## 3.0.0-beta.21

### Patch Changes

- 17c83e34: Aliases for environments without the support of `exports` in package.json.
- Updated dependencies [17c83e34]
  - @linaria/react@3.0.0-beta.21
  - @linaria/babel-preset@3.0.0-beta.21
  - @linaria/extractor@3.0.0-beta.21
  - @linaria/preeval@3.0.0-beta.21
  - @linaria/shaker@3.0.0-beta.21

## 3.0.0-beta.20

### Patch Changes

- 8be5650d: The repo has been migrated to PNPM and Turborepo
- Updated dependencies
  - @linaria/babel-preset@3.0.0-beta.20
  - @linaria/extractor@3.0.0-beta.20
  - @linaria/preeval@3.0.0-beta.20
  - @linaria/react@3.0.0-beta.20
  - @linaria/shaker@3.0.0-beta.20
