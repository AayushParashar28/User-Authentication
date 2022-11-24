function downloadSong() {

    console.log("Downloading started .....");

    return new Promise(function callback(resolve, reject) {
        
        setTimeout(function fun() {

            resolve("excuses");

        }, 1000);
    })
}

let value = downloadSong();

value.then(function fun1(v) {

    console.log("Downloaded Song  = ",v +".mp3");
    console.log("Song Download Completed");

    return v + ".mp3";
}).then(function writeSong(v){
    
    console.log("File Started");
    console.log("File Name = ", v + ".txt");
    console.log("File Ends");
    return v + ".txt" ;

}).then((v)=>{
    
    console.log("Drive Started ");
    console.log("Drive link is = www.drive.google.com/", v);
    console.log("Drive Ends");
})