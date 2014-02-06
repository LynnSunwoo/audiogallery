//JavaScript Document

window.onload = hello;

// global variables
var songName; //geting the right music
var songSide; // getting the right duration of the music



function hello(){
	
	// when clicking the tapes	
	document.querySelector("#Cry_Me_A_River_").onclick = tape1;
	document.querySelector("#Free_As_A_Bird_").onclick = tape2;
	document.querySelector("#Funky_Peppers_").onclick = tape3;
	document.querySelector("#Honky_Shuffle_").onclick = tape4;
	document.querySelector("#Shake_It_").onclick = tape5;
	
	document.querySelector("#pause").onclick = pauseMusic;
	document.querySelector("#eject").onclick = eject;

}

// pauseing all the music
function pauseMusic(){
	document.querySelector("#Cry_Me_A_River_a").pause();
	document.querySelector("#Cry_Me_A_River_b").pause();
	document.querySelector("#Free_As_A_Bird_a").pause();
	document.querySelector("#Free_As_A_Bird_b").pause();
	document.querySelector("#Funky_Peppers_a").pause();
	document.querySelector("#Funky_Peppers_b").pause();
	document.querySelector("#Honky_Shuffle_a").pause();
	document.querySelector("#Honky_Shuffle_b").pause();
	document.querySelector("#Shake_It_a").pause();
	document.querySelector("#Shake_It_b").pause();
	}

// when you click ject, you will lose the target of the cassette, and music stops.
function eject(){
	document.querySelector("#spanholder span").innerHTML = "Choose Cassette<br><br>to play Music";
	 pauseMusic()
	document.querySelector("#play").onclick = playMusic
	function playMusic(){document.querySelector("").play();}
	}
	

// playing music
function tape1(){
	//when ever you are chainging between tapes, it autometically ejects tapes.
	 eject()	
	// Shows the song title, and now needs to pick A(30sec) or B (60 Sec)side Mode from payer.
	document.querySelector("#spanholder span").innerHTML = "Cry me A River<br><br> Choose the Side<br>either A or B";

	// when A is clicked (for 30 sec)
	document.querySelector("#a").onclick = playA;
	function playA(){
		// again you want to eject the one that was playing while chainging between A and B mode.
	 eject()
		// label shows that you are now playing A( 30 sec song)
		document.querySelector("#spanholder span").innerHTML = "Cry me A River<br><br>30Sec";
		// when you click play button, it will play 30 sec song.
		document.querySelector("#play").onclick = playMusic
		function playMusic(){document.querySelector("#Cry_Me_A_River_a").play();}
		// if you stop the song, it will stop it and go back to start.
		document.querySelector("#stop").onclick = stopMusic;
		function stopMusic(){ pauseMusic(); document.querySelector("#Cry_Me_A_River_a").currentTime = 0;}
		}
		
	// B side is for 60 sec music
	document.querySelector("#b").onclick = playB;
	function playB(){
		//whats to eject A mode, when you change to B .
	 eject()
		document.querySelector("#spanholder span").innerHTML = "Cry me A River<br><br>60Sec";
		document.querySelector("#play").onclick = playMusic
		function playMusic(){document.querySelector("#Cry_Me_A_River_b").play();}
		document.querySelector("#stop").onclick = stopMusic;
		function stopMusic(){ pauseMusic(); document.querySelector("#Cry_Me_A_River_b").currentTime = 0;}
	}
}
	
// same thing repeats, just the music changes.

function tape2(){
	 eject()
	document.querySelector("#spanholder span").innerHTML = "Free As a Bird<br><br> Choose the Side<br>either A or B";
	document.querySelector("#play").onclick = playMusic
	function playMusic(){document.querySelector("").play();}
	
	document.querySelector("#a").onclick = playA;
	function playA(){
			 eject()
		document.querySelector("#spanholder span").innerHTML = "Free As a Bird<br><br>30Sec";
		document.querySelector("#play").onclick = playMusic
		function playMusic(){document.querySelector("#Free_As_A_Bird_a").play();}
		document.querySelector("#stop").onclick = stopMusic;
		function stopMusic(){ pauseMusic(); document.querySelector("#Free_As_A_Bird_a").currentTime = 0;}
		}

	document.querySelector("#b").onclick = playB;
	function playB(){
			 eject()
		document.querySelector("#spanholder span").innerHTML = "Free As a Bird<br><br>60Sec";
		document.querySelector("#play").onclick = playMusic
		function playMusic(){document.querySelector("#Free_As_A_Bird_b").play();}
		document.querySelector("#stop").onclick = stopMusic;
		function stopMusic(){ pauseMusic(); document.querySelector("#Free_As_A_Bird_b").currentTime = 0;}
	}
}

function tape3(){
	 eject()
	document.querySelector("#spanholder span").innerHTML = "Funky Peppers<br><br> Choose the Side<br>either A or B";
		document.querySelector("#play").onclick = playMusic
		function playMusic(){document.querySelector("").play();}
		
	document.querySelector("#a").onclick = playA;
	function playA(){
			 eject()
		document.querySelector("#spanholder span").innerHTML = "Funky Peppers<br><br>30Sec";
		document.querySelector("#play").onclick = playMusic
		function playMusic(){document.querySelector("#Funky_Peppers_a").play();}
		document.querySelector("#stop").onclick = stopMusic;
		function stopMusic(){ pauseMusic(); document.querySelector("#Funky_Peppers_a").currentTime = 0;}
		}

	document.querySelector("#b").onclick = playB;
	function playB(){
			 eject()
		document.querySelector("#spanholder span").innerHTML = "Funky Peppers<br><br>60Sec";
		document.querySelector("#play").onclick = playMusic
		function playMusic(){document.querySelector("#Funky_Peppers_b").play();}
		document.querySelector("#stop").onclick = stopMusic;
		function stopMusic(){ pauseMusic(); document.querySelector("#Funky_Peppers_b").currentTime = 0;}
	}
}

function tape4(){
	 eject()
	document.querySelector("#spanholder span").innerHTML = "Honky Shuffle<br><br> Choose the Side<br>either A or B";
		document.querySelector("#play").onclick = playMusic
		function playMusic(){document.querySelector("").play();}
		
	document.querySelector("#a").onclick = playA;
	function playA(){
			 eject()
		document.querySelector("#spanholder span").innerHTML = "Honky Shuffle<br><br>30Sec";
		document.querySelector("#play").onclick = playMusic
		function playMusic(){document.querySelector("#Honky_Shuffle_a").play();}
		document.querySelector("#stop").onclick = stopMusic;
		function stopMusic(){ pauseMusic(); document.querySelector("#Honky_Shuffle_a").currentTime = 0;}
		}

	document.querySelector("#b").onclick = playB;
	function playB(){
			 eject()
		document.querySelector("#spanholder span").innerHTML = "Honky Shuffle<br><br>60Sec";
		document.querySelector("#play").onclick = playMusic
		function playMusic(){document.querySelector("#Honky_Shuffle_b").play();}
		document.querySelector("#stop").onclick = stopMusic;
		function stopMusic(){ pauseMusic(); document.querySelector("#Honky_Shuffle_b").currentTime = 0;}
	}
	
}

function tape5(){
	 eject()
	document.querySelector("#spanholder span").innerHTML = "Shake It<br><br> Choose the Side<br>either A or B";

		
	document.querySelector("#a").onclick = playA;
	function playA(){
			 eject()
		document.querySelector("#spanholder span").innerHTML = "Shake It<br><br>30Sec";
		document.querySelector("#play").onclick = playMusic
		function playMusic(){document.querySelector("#Shake_It_a").play();}
		document.querySelector("#pause").onclick = pauseMusic;
		function pauseMusic(){document.querySelector("#Shake_It_a").pause();}
		document.querySelector("#stop").onclick = stopMusic;
		function stopMusic(){ pauseMusic(); document.querySelector("#Shake_It_a").currentTime = 0;}
		}

	document.querySelector("#b").onclick = playB;
	function playB(){
			 eject()
		document.querySelector("#spanholder span").innerHTML = "Shake It<br><br>60Sec";
		document.querySelector("#play").onclick = playMusic
		function playMusic(){document.querySelector("#Shake_It_b").play();}
		document.querySelector("#pause").onclick = pauseMusic;
		function pauseMusic(){document.querySelector("#Shake_It_b").pause();}
		document.querySelector("#stop").onclick = stopMusic;
		function stopMusic(){ pauseMusic(); document.querySelector("#Shake_It_b").currentTime = 0;}
	}
}



