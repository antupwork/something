		var oC=document.getElementById('chess');
		var chess=oC.getContext('2d');
		var logo=new Image();
		//判断是否点击过
		var isClick=[];

		var winner=[];					//数组的赢法；
		var count=[]; 					//代表赢法种类的索引；
			for(var i=0;i<15;i++){
				winner[i]=[];
				for(var j=0;j<15;j++){
					winner[i][j]=[];
				}
			}
			//横线
			for(var i=0;i<15;i++){
				for(var j=0;j<11;j++){
					for(var k=0;k<5;k++){
						winner[i][j+k][count]=true;
					}
					count++;
				}
			}	
			//竖线
			for(var i=0;i<15;i++){
				for(var j=0;j<11;j++){
					for(var k=0;k<5;k++){
						winner[j+k][i][count]=true;
					}
					count++;
				}
			}
			//斜线
			for(var i=0;i<11;i++){
				for(var j=0;j<11;j++){
					for(k=0;k<5;k++){
						winner[i+k][j+k][count]=true;
					}
					count++;
				}
			}
			//反斜线
			for(var i=0;i<11;i++){
				for(var j=14;j>3;j--){
					for(var k=0;k<5;k++){
						winner[i+k][j-k][count]=true;
					}
					count++;
				}
			}
		//统计数组的赢法
		var userWin=[];
		var computerWin=[];
			for(var i=0;i<count;i++){
				userWin[i]=0;
				computerWin[i]=0;
			}
		for(var i=0;i<15;i++){
			isClick[i]=[];
			for(var j=0;j<15;j++){
				isClick[i][j]=0;
			}
		}
		chess.strokeStyle='#053405';		
		logo.src='bg.jpg';
		logo.onload=function () {
			 chess.drawImage(logo,0,0,450,450);
			 drawImage();
		}
		//下棋
		var changeColor=true;
		oC.onclick=function (ev) {
			var x=ev.offsetX;
			var y=ev.offsetY;
			var i=Math.floor(x/30);
			var j=Math.floor(y/30);
			if(isClick[i][j]==0){
				drawChess(i,j,changeColor);
				if(changeColor){
					isClick[i][j]=1;	
				}else{
					isClick[i][j]=2;
				}
				changeColor=!changeColor;	
				for(var k=0;k<count;k++){
					if(winner[i][j][k]){
						userWin[k]++;
						computerWin[k]=10;
						if(userWin[k]==5){
							alert('you win !!')
						}
					}
				}			
			}
		}
		function drawImage(){
			for(var i=0;i<15;i++){
				chess.moveTo(15+i*30, 15);
				chess.lineTo(15+i*30,435);
				chess.moveTo(15,15+i*30);
				chess.lineTo(435,15+i*30);
				chess.stroke();
			}
		}
		function drawChess(i,j,chcolor){
			 //画棋子
			 chess.beginPath();
			 chess.arc(15+i*30,15+j*30,13,0,360);
			 chess.closePath();			
			 var chessColor=chess.createRadialGradient(15+i*30+2,15+j*30-2,14,13+i*30+2,15+j*30-2,0);
			 if(chcolor){
				 chessColor.addColorStop(1,'#636060');
				 chessColor.addColorStop(0,'#000000');
			 }else{
				 chessColor.addColorStop(0,'#ffffff');
				 chessColor.addColorStop(1,'#d2cdcd');
			 }
			 chess.fillStyle=chessColor;
			 chess.fill();
				
		}
