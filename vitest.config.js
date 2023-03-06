import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: "jsdom",
        restoreMocks: true,
        setupFiles: ["./src/setupTests.ts"],
        threads: true,
    }
});