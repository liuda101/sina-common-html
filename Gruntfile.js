/*
  grunt.initConfig({
    pkg : grunt.file.readJSON("package.json"),

    uglify : {
    }
  });

  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default","Log some stuff.",function(){
    grunt.log.write("Loging").ok();
  });
*/

module.exports = function(grunt){

  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),

    html_include: {
      index: {
        options: {
          workingDir: 'src',
        },
        files: {
          'dest/index.html': 'src/index.html',
        }
      }
    },

    watch: {
      html : {
        files : ['src/*.html'],
        tasks : ['html_include']
      }
    }
  });

  grunt.loadNpmTasks('grunt-html-include');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default',['watch']);
};