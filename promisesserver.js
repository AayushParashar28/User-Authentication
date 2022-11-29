function downloadSong(song) {

    console.log("Downloading started .....");

    return new Promise(function callback(resolve, reject) {
        
        setTimeout(function fun() {

            song = song + ".mp3"
            resolve(song);

        }, 1000);
    })
}

function writeSong(songName) {

    console.log("File Started ......");

    return new Promise(function callback(resolve, reject) {
        
        setTimeout(function fun1() {

            songName = songName + ".txt";
            resolve(songName);

        }, 1000);
    })
}


function drivelinkSong(fileName) {

    console.log("Drive Started ........");

    return new Promise(function callback(resolve, reject) {
        
        setTimeout(function fun() {

            fileName = "www.drive.google.com/"+fileName;
            resolve(fileName);

        }, 1000);
    })
}

let value = downloadSong("excuses");

value.then(function fun1(v) {

    console.log("Downloaded Song  => ",v);
    console.log("Song Download Completed");

    let v1 = writeSong(v);
    return v1;
}).then(function fun2(v1){
    
    console.log("File name => ", v1);
    console.log("File Writing completed");

    let v2 = drivelinkSong(v1);
    return v2

 }).then(function fun3(v2){

    console.log("Drive link => ", v2);
    console.log("Drive Uploading completed");

})