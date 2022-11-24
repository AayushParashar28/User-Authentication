function downloaadSong(songName, callback) {

    console.log("Downloading started .....");

    setTimeout(function fun() {

        let song = songName + ".mp3";
        callback(song);

    }, 3000);

}

let song = downloaadSong("excuses", function x(song) {

    console.log("Song Downloading completed");
    console.log("your song ", song);
    
    let file = songfile(song, function x(song) {

        console.log("File Completed");
        console.log("File name is ", song);

        let drive = drivelink(song, function x(song) {

            console.log("link open done");
            console.log("Your Drive link is ", song);
    
        });
    });

});


function songfile(songfile, callback) {

        console.log("File Started .....");


    setTimeout(function fun() {

        let file1 = songfile + ".txt";
        callback(file1);

    }, 5000);

}


function drivelink(songdrive, callback) {

        console.log("Drive Started .....");

    setTimeout(function fun() {

        let drive1 = "www.drive.google.com/" + songdrive;
        callback(drive1);

    }, 7000);

}


