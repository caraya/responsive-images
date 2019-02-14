const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

gulp.task('default', function() {
  return gulp.src('images/master/*.{jpg,png,tiff}')
      .pipe($.responsive({
        '*.{jpg,png,tiff}': [{
          width: 300,
          rename: {
            suffix: '-300px',
            extname: '.jpg',
          },
          format: 'jpeg',
        }, {
          width: 600,
          rename: {
            suffix: '-600px',
            extname: '.jpg',
          },
          // format option can be omitted because
          // format of output image is detected from new filename
          // format: 'jpeg'
        }, {
          width: 600 * 2,
          rename: {
            suffix: '-600@2x',
            extname: '.jpg',
          },
        }, {
          width: 600 * 2,
          rename: {
            suffix: '-600@2x',
            extname: '.webp',
          },
        }, {
          width: 1900,
          rename: {
            suffix: '-1900px',
            extname: '.jpg',
          },
          // Do not enlarge the output image if the input image are
          // already less than the required dimensions.
          withoutEnlargement: true,
        }, {
          // Convert images to the webp format
          width: 1900,
          rename: {
            suffix: '-1900px',
            extname: '.webp',
          },
        }],
      }, {
        // Global configuration for all images
        // The output quality for JPEG, WebP and TIFF output formats
        quality: 80,
        // Use progressive (interlace) scan for JPEG and PNG output
        progressive: true,
        // Strip all metadata
        withMetadata: false,
        // Do not emit the error when image is enlarged.
        errorOnEnlargement: false,
      }))
      .pipe(gulp.dest('images/converted'));
});
