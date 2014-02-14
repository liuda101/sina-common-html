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
          'dest': [
            'src/index.html',
            'src/footers.html',
            'src/footers/*.html'
          ]
        }
      }
    },

    watch: {
      html : {
        files : ['src/*.html', 'src/*/*.html'],
        tasks : ['html_include']
      }
    }
  });

  grunt.loadNpmTasks('grunt-html-include');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default',['watch']);
};