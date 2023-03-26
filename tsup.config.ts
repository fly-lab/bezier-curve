import type { Options } from "tsup";

const config: Options = {
	entry: ["src/index.ts"],
	dts: true,
	treeshake: true,
	clean: true,
	splitting: false,
	minify: "terser",
	format: ["cjs", "esm"],
	external: ["react"],
};

export default config;
