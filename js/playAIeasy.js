var isFinished = 0;
var message=document.querySelector('#message'),
	move = 0;
var boxes = document.getElementsByClassName('block');
		
		$(document).ready(function() {

			var area = document.getElementById('area');
			area.addEventListener('click', function (event) {
				if (event.target.innerHTML == '' && !isFinished) {
					{
						event.target.innerHTML = 'X';
						move++;
						check();
						if(!isFinished){AImove();};

					}
				}
			});


			$('#reload').click(function () {
				location.href = "reload.php" + location.search;
			});

			$('#back').click(function () {
				location.href = "finalise.php" + location.search;
			});

		});

		function check(){

			var arr = [
				[0,1,2],
				[3,4,5],
				[6,7,8],

				[0,3,6],
				[1,4,7],
				[2,5,8],

				[0,4,8],
				[2,4,6]
			]

			for(var i = 0; i< arr.length; i++){
				if (boxes[arr[i][0]].innerHTML=='X' && boxes[arr[i][1]].innerHTML=='X' && boxes[arr[i][2]].innerHTML=='X'){
					message.innerHTML="Победили крестики!";
					isFinished = 1;
				}else if(boxes[arr[i][0]].innerHTML=='O' && boxes[arr[i][1]].innerHTML=='O' && boxes[arr[i][2]].innerHTML=='O')	{
					message.innerHTML="Победили нолики!";
					isFinished = 1;
				}else if(!isFinished&&move==9){
					message.innerHTML="Ничья!";
					isFinished = 1;
				}
			}
		}

		function AImove() {
			var computerSpot = getRandomInt(0.5, 7.5);
			if(boxes[computerSpot].innerHTML == ''){
				boxes[computerSpot].innerHTML = 'O';
				move++;
				check();
				return;
			}
			else{AImove();}
		}

		function getRandomInt(min, max) {
			let rand = min - 0.5 + Math.random() * (max - min + 1);
			return Math.round(rand);
		}


		/*$(".block").click(function(){
		  	if (playersTurn) {
				if ($(this).html() =="&nbsp;"){
					if ($(this).html() != computerChoice){
						$(this).text(playerChoice);
						playersTurn = false;
						isStepDone=true;
					}
				}		
		 	}
		    if (checkWin(playerChoice) == true) {
		    	playerScore += 1;
				playerWin = true;
		    	$('.playerScore').html(playerScore);		    	
		    	resetBoard();
		    };
		    if (checkTie() == true) {
		    	resetBoard();
		    };
			if (isStepDone) {
	 		while ($(computerSpot).html() != ".") {
				computerSpot = '#cell-' + getRandomInt(0,2) + '-' + getRandomInt(0,2);
	 		}
	 		setTimeout(function(){
	 			$(computerSpot).text(computerChoice);
	 			playersTurn = true;
				isStepDone=false;
			
		    if (checkWin(computerChoice) == true) {
		    	computerScore += 1;
				playerWin=false;
				//ajaxAddScore();
				
				/*$.ajax({
					type:'POST',
					url: 'addScore.php',
					data='playerWin='+playerWin,
					success: function(data){
						$('#allg').html(data)
					}
				});
				*/
				
				
				
		    	/*$('.computerScore').html(computerScore);
		    	resetBoard();
		    };
		    if (checkTie() == true) {
		    	resetBoard();
		    };	 		
	 		},300);
			};
		   });
	    });


		// x will be whoevers hit spots you are checking
	    function checkWin(x){
	    	var win = false;
	    	//check horizontal
			
	    	if ($('#cell-0-0').text() == x
	    	 && $('#cell-0-1').text() == x
	    	 && $('#cell-0-2').text() == x ||
	    	 	$('#cell-1-0').text() == x
	    	 && $('#cell-1-1').text() == x
	    	 && $('#cell-1-2').text() == x ||
	    	 	$('#cell-2-0').text() == x
	    	 && $('#cell-2-1').text() == x
	    	 && $('#cell-2-2').text() == x) {
	    	 	$('.message-text').text(x + " Won last game");
	    		win = true;
	    	};
	    	//check vertical 
	    	if ($('#cell-0-0').text() == x
	    	 && $('#cell-1-0').text() == x
	    	 && $('#cell-2-0').text() == x ||
	    	 	$('#cell-0-1').text() == x
	    	 && $('#cell-1-1').text() == x
	    	 && $('#cell-2-1').text() == x ||
	    	 	$('#cell-0-2').text() == x
	    	 && $('#cell-1-2').text() == x
	    	 && $('#cell-2-2').text() == x) {
	    	 	$('.message-text').text(x + " Won last game");
	    		win = true;
	    	};
	    	//check diagnal 
	    	if ($('#cell-0-0').text() == x
	    	 && $('#cell-1-1').text() == x
	    	 && $('#cell-2-2').text() == x ||
	    	 	$('#cell-0-2').text() == x
	    	 && $('#cell-1-1').text() == x
	    	 && $('#cell-2-0').text() == x) {
	    	 	$('.message-text').text(x + " Won last game");
	    		win = true;
	    	};
	    	//return
	    	return win;
	    }

	    //clear the board
	    function resetBoard(){
	    	$('.Cells').html('.');
	    }

	    function checkTie(){
	    	var tie = false;
	    	if ($('#cell-0-0').html() != "."
	    	&&  $('#cell-0-1').html() != "."
	    	&&  $('#cell-0-2').html() != "."
	    	&&  $('#cell-1-0').html() != "."
	    	&&  $('#cell-1-1').html() != "."
	    	&&  $('#cell-1-2').html() != "."
	    	&&  $('#cell-2-0').html() != "."
	    	&&  $('#cell-2-1').html() != "."
	    	&&  $('#cell-2-2').html() != ".") {
		    	$('.message-text').text("It's A Tie");	    		
	    		tie = true;
	    	};
	    	return tie;
	    }
	     
		function getRandomInt(min, max) {
    		return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		
		function ajaxAddScore(){
		var request = new XMLHttpRequest();
		var params = 'game_id='+game_id.value;
		request.onreadystatechange = function(){
			if(request.readyState == 4) {
				if(request.responseText!=0){
				document.querySelector('#CellsConteiner').innerHTML = request.responseText;
				check();
				}
			}
		}
		request.open('POST','addScore.php');
		request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
		request.send(params);
}*/