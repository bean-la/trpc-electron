module.exports = {
  compilationOptions: {
    preferredConfigPath: './tsconfig.json',
    followSymlinks: false,
  },
  entries: [
    {
      filePath: './src/renderer/index.ts',
      outFile: `./dist/renderer.d.ts`,
      noCheck: true,
      libraries: {
        inlinedLibraries: ['@trpc/client', '@trpc/server']
      }
    },
    {
      filePath: './src/main/index.ts',
      outFile: `./dist/main.d.ts`,
      noCheck: true,
      libraries: {
        inlinedLibraries: ['@trpc/client', '@trpc/server']
      }
    },
  ],
};
