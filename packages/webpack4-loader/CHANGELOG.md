# Change Log

## 4.1.4

### Patch Changes

- Updated dependencies [24b4a4bd]
  - @linaria/babel-preset@4.2.1

## 4.1.3

### Patch Changes

- c0bd271a: Sometimes Linaria can meet already processed code. In such a case, it shall ignore runtime versions of `styled` tags. Fixes #1037.
- Updated dependencies [8590e134]
- Updated dependencies [f7351b09]
- Updated dependencies [c0bd271a]
- Updated dependencies [8f90fa75]
- Updated dependencies [a5169f16]
- Updated dependencies [ac0991a6]
  - @linaria/babel-preset@4.2.0

## 4.1.2

### Patch Changes

- 008a5d13: Fix webpack crash when an error in Linaria happens. (fixes #1029)
- Updated dependencies [3c593aa8]
  - @linaria/babel-preset@4.1.2

## 4.1.1

### Patch Changes

- Updated dependencies [21ba7a44]
- Updated dependencies [21ba7a44]
- Updated dependencies [21ba7a44]
- Updated dependencies [2abc55b3]
- Updated dependencies [21ba7a44]
  - @linaria/babel-preset@4.1.1

## 4.1.0

### Patch Changes

- Updated dependencies [92f6d871]
  - @linaria/babel-preset@4.1.0

## 4.0.0

### Major Changes

- bc0cbeea: A completely new async mode with native support for Vite, Rollup, esbuild and Webpack resolvers.

  BREAKING CHANGES: Despite the fact, that it should be fully compatible with 3.0 and 2.0 branches, the new version of styles evaluator can have some serious bugs which can make your project unbuildable (however, since there is no runtime, if the build is finished successfully, everything will continue work as it was on 2.0 and 3.0). If you face some problems please let us know and we will fix it as soon as possible.

### Patch Changes

- 8be5650d: The repo has been migrated to PNPM and Turborepo
- ea41d440: New package @linaria/tags that contains all abstract logic for tags processors.
- Updated dependencies [f0cddda4]
  - @linaria/babel-preset@4.0.0
  - @linaria/logger@4.0.0

## 3.0.0-beta.21

### Patch Changes

- Updated dependencies [17c83e34]
  - @linaria/babel-preset@3.0.0-beta.21

## 3.0.0-beta.20

### Patch Changes

- 8be5650d: The repo has been migrated to PNPM and Turborepo
- Updated dependencies [8be5650d]
  - @linaria/babel-preset@3.0.0-beta.20
  - @linaria/logger@3.0.0-beta.20

# [3.0.0-beta.19](https://github.com/callstack/linaria/compare/v3.0.0-beta.18...v3.0.0-beta.19) (2022-06-03)

### Features

- **babel:** api for custom tags ([#976](https://github.com/callstack/linaria/issues/976)) ([3285ccc](https://github.com/callstack/linaria/commit/3285ccc1d00449b78b3fc74087528cd38cbdd116))
- **babel:** new way for detecting tag imports ([#974](https://github.com/callstack/linaria/issues/974)) ([3305cfb](https://github.com/callstack/linaria/commit/3305cfb0c0f65abdacceeb7e6bad118c59f7d551))

# [3.0.0-beta.18](https://github.com/callstack/linaria/compare/v3.0.0-beta.17...v3.0.0-beta.18) (2022-04-01)

**Note:** Version bump only for package @linaria/webpack4-loader

# [3.0.0-beta.17](https://github.com/callstack/linaria/compare/v3.0.0-beta.16...v3.0.0-beta.17) (2021-12-27)

### Bug Fixes

- **webpack:** add cacheProvider for Linaria v3 ([#889](https://github.com/callstack/linaria/issues/889)) ([ee656dd](https://github.com/callstack/linaria/commit/ee656ddff76b17644f42cdba463778ade3dc9567))
- **webpack:** fix usage of webpackResolveOptions conditionally ([#883](https://github.com/callstack/linaria/issues/883)) ([3d6b6c5](https://github.com/callstack/linaria/commit/3d6b6c5d49d1740ec9b12e410bda33ccb8c7f459))

# [3.0.0-beta.16](https://github.com/callstack/linaria/compare/v3.0.0-beta.15...v3.0.0-beta.16) (2021-12-01)

### Bug Fixes

- **webpack:** replace file system cache with in-memory cache (fixes [#878](https://github.com/callstack/linaria/issues/878)) ([#879](https://github.com/callstack/linaria/issues/879)) ([5517cf7](https://github.com/callstack/linaria/commit/5517cf79c1a5dbf7c10d17be01cf4ac4470116f9))

# [3.0.0-beta.15](https://github.com/callstack/linaria/compare/v3.0.0-beta.14...v3.0.0-beta.15) (2021-11-29)

### Bug Fixes

- **webpack:** better merge for configs and fallback for async plugins ([#874](https://github.com/callstack/linaria/issues/874)) ([ad84d6d](https://github.com/callstack/linaria/commit/ad84d6dea9c753c873090b54f5c8583ac4086033)), closes [#855](https://github.com/callstack/linaria/issues/855)

# [3.0.0-beta.14](https://github.com/callstack/linaria/compare/v3.0.0-beta.13...v3.0.0-beta.14) (2021-11-05)

**Note:** Version bump only for package @linaria/webpack4-loader

# [3.0.0-beta.13](https://github.com/callstack/linaria/compare/v3.0.0-beta.12...v3.0.0-beta.13) (2021-09-13)

### Bug Fixes

- **webpack:** pass all user resolve options to loader (fixes [#658](https://github.com/callstack/linaria/issues/658)) ([#830](https://github.com/callstack/linaria/issues/830)) ([a0590e5](https://github.com/callstack/linaria/commit/a0590e5183b3ad3a93fd7adce61504fd85b4bcb1))

# [3.0.0-beta.12](https://github.com/callstack/linaria/compare/v3.0.0-beta.11...v3.0.0-beta.12) (2021-08-31)

**Note:** Version bump only for package @linaria/webpack4-loader

# [3.0.0-beta.7](https://github.com/callstack/linaria/compare/v3.0.0-beta.6...v3.0.0-beta.7) (2021-06-24)

### Bug Fixes

- webpack resolve options ([#785](https://github.com/callstack/linaria/issues/785)) ([64b2b06](https://github.com/callstack/linaria/commit/64b2b06edd873d7db0f36ef25a4b9d8389808eb2))

# [3.0.0-beta.6](https://github.com/callstack/linaria/compare/v3.0.0-beta.5...v3.0.0-beta.6) (2021-06-06)

### Bug Fixes

- **webpack:** hot reload fails after compile error (fixes [#762](https://github.com/callstack/linaria/issues/762)) ([#775](https://github.com/callstack/linaria/issues/775)) ([67fcd81](https://github.com/callstack/linaria/commit/67fcd8108f283f8ade23c68ad3fece8aee335bf1))

# [3.0.0-beta.5](https://github.com/callstack/linaria/compare/v3.0.0-beta.4...v3.0.0-beta.5) (2021-05-31)

**Note:** Version bump only for package @linaria/webpack4-loader

# [3.0.0-beta.4](https://github.com/callstack/linaria/compare/v3.0.0-beta.3...v3.0.0-beta.4) (2021-05-07)

**Note:** Version bump only for package @linaria/webpack4-loader

# [3.0.0-beta.3](https://github.com/callstack/linaria/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2021-04-20)

**Note:** Version bump only for package @linaria/webpack4-loader

# [3.0.0-beta.2](https://github.com/callstack/linaria/compare/v3.0.0-beta.1...v3.0.0-beta.2) (2021-04-11)

**Note:** Version bump only for package @linaria/webpack4-loader
