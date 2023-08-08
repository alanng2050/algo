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
  // nodemon({
  //   script: 'built/bubble.js',
  //   watch: 'built/**/*',
  //   done: cb,
  // })
}

const del = (cb) => {
  execFile('rm', ['-rf', 'built'], () => {
    cb()
  })
}

exports.dev = gulp.series(del, watch, build, start)
exports.build = gulp.series(del, build)
