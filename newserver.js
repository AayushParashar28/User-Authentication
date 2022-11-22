function downloaadSong(songName, callback) {
    
    console.log("Downloading started .....");

    setTimeout(function fun(){

        let song = songName + ".mp3";
        callback(song);

    }, 3000);

}

let song = downloaadSong("excuses", function x(song) {
    
    console.log("Song Downloading completed");
    console.log("your song ", song);

});


function songfile(songName, callback) {
    
    setTimeout(function fun(){
     
        console.log("File Started .....");
       
    }, 4000);

    setTimeout(function fun(){

        let file1 = songName + ".mp3" + ".txt";
        callback(file1);

    }, 5000);

}

let file = songfile("excuses", function x(song) {
    
    console.log("File Completed");
    console.log("File name is ", song);

});


function drivelink(songName, callback) {
    
    setTimeout(function fun(){
     
        console.log("Drive Started .....");
       
    }, 6000);

    setTimeout(function fun(){

        let drive1 = "www.drive.google.com/" + songName + ".mp3" + ".txt";
        callback(drive1);

    }, 7000);

}

let drive = drivelink("excuses", function x(song) {
    
    console.log("link open done");
    console.log("Your Drive link is ", song);

});
