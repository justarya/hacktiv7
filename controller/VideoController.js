const Video = require('../models').Video

class VideoController {
    static create() {
        Video.create({
            CourseId: 3,
            urlVideo: 'https://www.youtube.com/watch?v=Dji9ALCgfpM'
        })
        .then(result => {
            console.log(result)
        })
        .catch(err => {
            throw err;
        })
    }

    static loadALl() {
        Video.findAll({
            where: {
                CourseId: 1
            }
        })
        .then(result => {
            console.log(result)
        })
        .catch(err => {
            console.log(err)
        })
    }
}

// VideoController.loadALl()
// VideoController.create()
module.exports = VideoController