import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/index', 'src/load'],
  rollup: {
    emitCJS: true,
  },
})
