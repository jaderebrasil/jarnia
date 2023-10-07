import gulp from "gulp";

import * as css from "./gulp/css.mjs";

// Default export - build CSS and watch for updates
export default gulp.series(
  gulp.parallel(css.compile),
  css.watchUpdates
);

// CSS compiling
export const buildCSS = gulp.series(css.compile);

// Build all artifacts
export const buildAll = gulp.parallel(
  css.compile,
);