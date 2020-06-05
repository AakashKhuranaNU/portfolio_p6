// Create your global variables below:
var tracklist = ["All We Got", "No Problem", "Summer Friends", "D.R.A.M. Sings Special", "Blessings", "Same Drugs", "All Night", "Smoke Break", "How Great", "Angels"];
var volLevels = [];

function init() {
	// Your code goes here
	console.log("this is running");
	volume=0;
	var str="vl";
	for (var i=0;i<6;++i)
	{
		var temp=str+i;
		console.log(temp);
		var item =document.getElementById(temp);
		console.log(item);
		volLevels[i]=item;
	}
	console.log(volLevels);

	for (var i=0;i<3;++i)
	{
		var item =volLevels[i];
		console.log(item);
		item.style.backgroundColor= "#9f5cc4";

	}
	volume=3;

	
	song_time=document.querySelector("input");
	// song_time=document.querySelector();
	play_time=document.querySelector("#time-elapsed");
	song_time.max=180;
	song_time.value=0;
	current_time=0;
	console.log(song_time.value);
	playing=false;
	current_song=0;

};

function volUp() {
	// Your code goes here
	if(volume<6){
		var item=volLevels[volume];
		item.style.backgroundColor= "#9f5cc4";
		volume++;
	}
	else{
		alert("this is the max volume");
	}
}

function volDown() {
	// Your code goes here
	if(volume>0){
		volume--;
		var item=volLevels[volume];
		item.style.backgroundColor= "grey";
	}
	else{
		alert("this is the minimum volume");
	}
}

function switchPlay(cl) {
	// Your code goes here
	var item=cl.querySelector('i');
	if(playing==false){
		item.innerHTML="pause";
		playing=true;
		time=setInterval(incre,1000);
	}
	else{
		item.innerHTML="play_arrow";
		clearInterval(time);
		playing=false;	
	}
	song_time.addEventListener('input',changeval);

}

function changeval(){
	console.log("showing val");
	console.log(song_time.value);
	current_time=song_time.value;
	console.log(current_time);
}

function incre(){
	console.log(song_time.value);
	current_time++;
	song_time.value=current_time;
	let res=secondsToMs(current_time);
	play_time.innerHTML=res;
	if (current_time>=180)
	{
		nextSong();
	}
}

function nextSong() {
	// Your code goes here
	if(current_song<tracklist.length-1)current_song++;
	else current_song=0;
	var item=tracklist[current_song];
	var temp=document.querySelector("#player-song-name");
	temp.innerHTML=item;
	current_time=0;
	song_time.value=current_time;
	let res=secondsToMs(current_time);
	play_time.innerHTML=res;
}

function prevSong() {
	// Your code goes here
	if(current_song>0)current_song--;
	else current_song=tracklist.length-1;
	var item=tracklist[current_song];
	var temp=document.querySelector("#player-song-name");
	temp.innerHTML=item;
	current_time=0
	song_time.value=current_time;
	let res=secondsToMs(current_time);
	play_time.innerHTML=res;
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();