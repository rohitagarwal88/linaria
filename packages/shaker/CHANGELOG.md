# Change Log

## 4.2.1

### Patch Changes

- 24b4a4bd: Fix function usage in string literals. Fixes #1047.
- Updated dependencies [24b4a4bd]
  - @linaria/utils@4.2.1

## 4.2.0

### Minor Changes

- f7351b09: In some cases, different parts of babel-preset could use different versions of installed @babel/core. It caused the ".key is not a valid Plugin property" error. Fixed.

### Patch Changes

- a5169f16: Do not set custom babel envName for the shaker. Fixes #1034.
- ac0991a6: Better detection for jsx-runtime. Reduces the amount of evaluated code and improves speed and stability.
- Updated dependencies [8590e134]
- Updated dependencies [f7351b09]
- Updated dependencies [8f90fa75]
- Updated dependencies [ac0991a6]
  - @linaria/utils@4.2.0

## 4.1.2

### Patch Changes

- Updated dependencies [50bc0c79]
  - @linaria/utils@4.1.1

## 4.1.1

### Patch Changes

- 2abc55b3: Fix 'Using the tag in runtime is not supported' in some enviroments (fixes #1021)

## 4.1.0

### Patch Changes

- Updated dependencies [92f6d871]
  - @linaria/utils@4.1.0

## 4.0.0

### Major Changes

- bc0cbeea: A completely new async mode with native support for Vite, Rollup, esbuild and Webpack resolvers.

  BREAKING CHANGES: Despite the fact, that it should be fully compatible with 3.0 and 2.0 branches, the new version of styles evaluator can have some serious bugs which can make your project unbuildable (however, since there is no runtime, if the build is finished successfully, everything will continue work as it was on 2.0 and 3.0). If you face some problems please let us know and we will fix it as soon as possible.

### Patch Changes

- 8be5650d: The repo has been migrated to PNPM and Turborepo
- b8515929: In some cases, the shaker mistakenly removed assignment expressions. Fixes #1008.
- ea41d440: New package @linaria/tags that contains all abstract logic for tags processors.
- Updated dependencies [ea41d440]
  - @linaria/logger@4.0.0
  - @linaria/utils@4.0.0

## 3.0.0-beta.21

### Patch Changes

- Updated dependencies [17c83e34]
  - @linaria/babel-preset@3.0.0-beta.21
  - @linaria/preeval@3.0.0-beta.21

## 3.0.0-beta.20

### Patch Changes

- 8be5650d: The repo has been migrated to PNPM and Turborepo
- Updated dependencies [8be5650d]
  - @linaria/babel-preset@3.0.0-beta.20
  - @linaria/logger@3.0.0-beta.20
  - @linaria/preeval@3.0.0-beta.20

# [3.0.0-beta.19](https://github.com/callstack/linaria/compare/v3.0.0-beta.18...v3.0.0-beta.19) (2022-06-03)

### Bug Fixes

- **babel:** error when css calls reference css calls inside components ([#971](https://github.com/callstack/linaria/issues/971)) ([fe6e083](https://github.com/callstack/linaria/commit/fe6e083fb48e71274a4e506824ccb8b461b7fb89))

### Features

- **babel:** api for custom tags ([#976](https://github.com/callstack/linaria/issues/976)) ([3285ccc](https://github.com/callstack/linaria/commit/3285ccc1d00449b78b3fc74087528cd38cbdd116))
- **babel:** new way for detecting tag imports ([#974](https://github.com/callstack/linaria/issues/974)) ([3305cfb](https://github.com/callstack/linaria/commit/3305cfb0c0f65abdacceeb7e6bad118c59f7d551))

# [3.0.0-beta.18](https://github.com/callstack/linaria/compare/v3.0.0-beta.17...v3.0.0-beta.18) (2022-04-01)

### Bug Fixes

- **shaker:** fix edge case with polyfilled defineProperty ([#951](https://github.com/callstack/linaria/issues/951)) ([38a5541](https://github.com/callstack/linaria/commit/38a5541d26142cafa859ceffa6922ef559c57100))
- **shaker:** fix some edge cases related to export patterns ([#951](https://github.com/callstack/linaria/issues/951)) ([18ca481](https://github.com/callstack/linaria/commit/18ca481f1f85ebcdc2704cc4af2173dcf9a4bb7f))

# [3.0.0-beta.17](https://github.com/callstack/linaria/compare/v3.0.0-beta.16...v3.0.0-beta.17) (2021-12-27)

### Bug Fixes

- **react:** refactored types for styled function (fixes [#872](https://github.com/callstack/linaria/issues/872)) ([#887](https://github.com/callstack/linaria/issues/887)) ([7b8b129](https://github.com/callstack/linaria/commit/7b8b12937f9a0d1730d908e7cebad1684ccb03c3))

# [3.0.0-beta.15](https://github.com/callstack/linaria/compare/v3.0.0-beta.14...v3.0.0-beta.15) (2021-11-29)

**Note:** Version bump only for package @linaria/shaker

# [3.0.0-beta.14](https://github.com/callstack/linaria/compare/v3.0.0-beta.13...v3.0.0-beta.14) (2021-11-05)

### Bug Fixes

- **shaker:** exports/object issue with TS (fixes [#861](https://github.com/callstack/linaria/issues/861)) ([#863](https://github.com/callstack/linaria/issues/863)) ([acdbdfe](https://github.com/callstack/linaria/commit/acdbdfe5be46eee238f83eb41aeb2291b5d9e034))
- **shaker:** reimplement enums support (fixes [#848](https://github.com/callstack/linaria/issues/848)) ([#853](https://github.com/callstack/linaria/issues/853)) ([8f1d7cb](https://github.com/callstack/linaria/commit/8f1d7cbadb2665fd734bcda42fd1caa6042659f4))

# [3.0.0-beta.13](https://github.com/callstack/linaria/compare/v3.0.0-beta.12...v3.0.0-beta.13) (2021-09-13)

### Bug Fixes

- **shaker:** partial support for ts compiled code (fixes [#820](https://github.com/callstack/linaria/issues/820)) ([#836](https://github.com/callstack/linaria/issues/836)) ([ec8ee68](https://github.com/callstack/linaria/commit/ec8ee684b6e90ead46295733ccd8cfefe4eaa04d))

# [3.0.0-beta.12](https://github.com/callstack/linaria/compare/v3.0.0-beta.11...v3.0.0-beta.12) (2021-08-31)

### Bug Fixes

- **shaker:** improve dependency resolution for wildcard exports ([#826](https://github.com/callstack/linaria/issues/826), fixes [#816](https://github.com/callstack/linaria/issues/816)) ([5aac3eb](https://github.com/callstack/linaria/commit/5aac3eb86ec10e1a6ae60097482155fe44498c28))
- Faster method of building dependencies array ([#824](https://github.com/callstack/linaria/issues/824), fixes [#797](https://github.com/callstack/linaria/issues/797)) ([2463881](https://github.com/callstack/linaria/commit/24638819ee06f5ccf7139ff49ecbc36f893468fb))

# [3.0.0-beta.11](https://github.com/callstack/linaria/compare/v3.0.0-beta.10...v3.0.0-beta.11) (2021-08-08)

### Bug Fixes

- **shaker:** string literals for addressing values in imported NS ([#815](https://github.com/callstack/linaria/issues/815)) ([8adf43e](https://github.com/callstack/linaria/commit/8adf43ec56b107c8017608ccc460d0ba8794c8ef))

# [3.0.0-beta.10](https://github.com/callstack/linaria/compare/v3.0.0-beta.9...v3.0.0-beta.10) (2021-07-24)

### Bug Fixes

- **shaker:** use the last export statement instead of the 1st ([#804](https://github.com/callstack/linaria/issues/804)) ([b79584c](https://github.com/callstack/linaria/commit/b79584c292aaa50eb2a420b73434341419b01ff9))

# [3.0.0-beta.9](https://github.com/callstack/linaria/compare/v3.0.0-beta.8...v3.0.0-beta.9) (2021-07-23)

### Bug Fixes

- **shaker:** keep exports if there are dependent code (fixes [#804](https://github.com/callstack/linaria/issues/804)) ([#807](https://github.com/callstack/linaria/issues/807)) ([4bb7744](https://github.com/callstack/linaria/commit/4bb77444a604581877a64d6f88dfac0bc04583f0))
- **shaker:** support for "export \* from …" ([#809](https://github.com/callstack/linaria/issues/809)) ([b06c1ba](https://github.com/callstack/linaria/commit/b06c1ba5f44ae7af23cf7793c13a2acfee1bf706))

# [3.0.0-beta.8](https://github.com/callstack/linaria/compare/v3.0.0-beta.7...v3.0.0-beta.8) (2021-07-18)

**Note:** Version bump only for package @linaria/shaker

# [3.0.0-beta.7](https://github.com/callstack/linaria/compare/v3.0.0-beta.6...v3.0.0-beta.7) (2021-06-24)

### Bug Fixes

- **shaker:** fix undefined imports in some cases ([#333](https://github.com/callstack/linaria/issues/333), [#761](https://github.com/callstack/linaria/issues/761)) ([#787](https://github.com/callstack/linaria/issues/787)) ([e374072](https://github.com/callstack/linaria/commit/e3740727447b2867a2cfe40f763bc88e72eb2503))

# [3.0.0-beta.5](https://github.com/callstack/linaria/compare/v3.0.0-beta.4...v3.0.0-beta.5) (2021-05-31)

### Bug Fixes

- **shaker:** typescript enums support ([#761](https://github.com/callstack/linaria/issues/761)) ([#764](https://github.com/callstack/linaria/issues/764)) ([6907e22](https://github.com/callstack/linaria/commit/6907e2280a2ab8ee014b5d02b1169714ccac9d66))

# [3.0.0-beta.4](https://github.com/callstack/linaria/compare/v3.0.0-beta.3...v3.0.0-beta.4) (2021-05-07)

**Note:** Version bump only for package @linaria/shaker

# [3.0.0-beta.3](https://github.com/callstack/linaria/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2021-04-20)

**Note:** Version bump only for package @linaria/shaker

# [3.0.0-beta.2](https://github.com/callstack/linaria/compare/v3.0.0-beta.1...v3.0.0-beta.2) (2021-04-11)

**Note:** Version bump only for package @linaria/shaker
