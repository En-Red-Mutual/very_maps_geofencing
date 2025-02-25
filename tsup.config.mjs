import { defineConfig } from "tsup";
import * as fs from "fs";
const pkgJson = JSON.parse(fs.readFileSync("./package.json", "utf-8"));
const peerDependencies = Object.keys(pkgJson?.peerDependencies || {});
export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs","esm"],
  clean: true,
  sourcemap: true,
  splitting: false,
  treeshake: true,
  banner: {
    js: `"use client";`,
  },
  dts: {
    resolve: peerDependencies,
  },
  cjsInterop: true,
  target: "esnext",
  external: peerDependencies,
  esbuildOptions(options){
    options.platform ="browser";
    options.banner = {
      js: `"use client";`,
    }
  }
});