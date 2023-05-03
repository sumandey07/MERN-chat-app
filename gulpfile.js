import { src, dest, series, parallel } from "gulp";
import del from "del";
import { existsSync, mkdirSync } from "fs";
import zip from "gulp-zip";
import log from "fancy-log";
import webpack_stream from "webpack-stream";
import webpack_config from "./backend/webpack.config.js";
import { setEnvironmentData } from "worker_threads";
import { exec } from "child_process";

const paths = {
  prod_build: "../prod-build",
  server_file_name: "api.bundle.js",
  react_src: "../frontend/build/**/*",
  react_dist: "../prod-build/frontend/build",
  zipped_file_name: "mern-prod.zip",
};

function clean() {
  log("removing the old files in the directory");
  return del("../prod-build/**", { force: true });
}

function createProdBuildFolder() {
  const dir = paths.prod_build;
  log(`Creating the folder if not exist  ${dir}`);
  if (!existsSync(dir)) {
    mkdirSync(dir);
    log("📁  folder created:", dir);
  }

  return Promise.resolve("the value is ignored");
}

gulp.task("apply-prod-environment", function () {
  process.env.NODE_ENV = "production";
});

function buildReactCodeTask(cb) {
  log("building React code into the directory");
  return exec(
    "cd ../frontend && npm run build",
    function (err, stdout, stderr) {
      log(stdout);
      log(stderr);
      cb(err);
    }
  );
}

function copyReactCodeTask() {
  log("copying React code into the directory");
  return src(`${paths.react_src}`).pipe(dest(`${paths.react_dist}`));
}

function copyNodeJSCodeTask() {
  log("building and copying server code into the directory");
  return webpack_stream(webpack_config).pipe(
    dest(`${paths.prod_build}/backend/`)
  );
}

function zippingTask() {
  log("zipping the code ");
  return src(`${paths.prod_build}/**`)
    .pipe(zip(`${paths.zipped_file_name}`))
    .pipe(dest(`${paths.prod_build}`));
}

const _default = series(
  clean,
  createProdBuildFolder,
  buildReactCodeTask,
  parallel(copyReactCodeTask, copyNodeJSCodeTask),
  zippingTask
);
export { _default as default };
