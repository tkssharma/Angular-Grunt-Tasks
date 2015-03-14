module.exports = function (grunt)
{
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
  
           notify: {
      custom_options: {
        options: {
          title: 'Notify Title',
          message: 'This is a "Notify Message" test!'
        }
      },
      just_message: {
        options: {
          message: 'Just Message'
        }
      },
      example: {
        options: {
          title: 'Doodle or Die',  // optional
          message: 'Deploy to production success!' //required
        }
      },
      directory: {
        options: {
          title: 'Directory',
          message: 'Look in c:\\temp\\new\\ or /var/tmp/new.'
        }
      },
      newlines: {
        options: {
          title: 'Directory',
          message: 'Line 1\nLine 2\nLine3\nLine 4\nLine 5.'
        }
      }
    },

       	watch : {
 				saas : {
 					files : ['sass/*.scss'],		
					tasks : ['saas','uglify']

 				}

		       },
		saas: {
				dist : 
				{

					files : 
					{

                     "css/style.css" :"css/final.scss"
					}
				}
			},


		uglify: {
			  options :{ manage : false },
			mytarget: {
			 files :[{
			 	expand : true ,
			 	cwd : 'js/',
			 	src : ['**/*.js'],
			 	dest : 'js/'
			 }]
			
			}
		},

		cssmin: {
			mytarget: {
			 files :[{

			 	expand : true ,
			 	cwd : 'css/' ,
			 	src : ['*css','!*min.css'],
			 	dest : 'css/',
			 	ext : '.min.css'


			 }]
			
			}
		},

		concat: {
			options: {
				separator: "\n\n"
			},
			dist: {
				src: ['js/main.js' , 'js/controller.js'],
				dest: 'bin/<%= pkg.name %>.js'
			}
			
		}

	});

	//grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-saas');
	grunt.loadNpmTasks('grunt-notify');
	grunt.registerTask('default', ['concat','uglify' , 'watch','notify']);


}