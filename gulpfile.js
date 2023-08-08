const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const ts = require('gulp-typescript')
const { execFile } = require('node:child_process')
const tsProject = ts.createProject('tsconfig.json')

const build = () => {
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest('built'))
}

const watch = (cb) => {
  gulp.watch(['src/**/*'], build)
  cb()
}

const start = (cb) => {
  nodemon({
    script: 'built/index.js',
    done: cb,
    watch: 'built/**/*',
  })
}

const del = (cb) => {
  execFile('rm -rf built', () => {
    cb()
  })
}

exports.dev = gulp.series(del, gulp.parallel(gulp.series(build, start), watch))
exports.build = gulp.series(del, build)
