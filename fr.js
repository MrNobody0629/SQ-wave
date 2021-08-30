function drawfr() 
{
	 var Vp=document.myForm.Vp.value;
 var fo=document.myForm.fo.value
 var HA=document.myForm.HA.value;

 Vp=Number(Vp);
 fo=Number(fo);
 HA=Number(HA);
	var HA=document.myForm.HA.value;

	var c = document.getElementById("canv_frr");
	var ctx = c.getContext("2d");
	// define origin at Plot_harmonics center
	var ax={};
	if(HA<11)
		{HA=HA}
	else
		{HA=11}
	for(i1 = 1;i1<=HA; i1=i1+2)
	{
	    // x_1, y_1 place Plot_harmonics origin in middle of canvas
		ax.x_1 = 20; 
		ax.y_1 = 50;
		var m = 0;
		showText(ctx,ax,i1);
	}
}


function showText(ctx,ax,i1) {
	var Vp=document.myForm.Vp.value;
 var fo=document.myForm.fo.value
 var HA=document.myForm.HA.value;

 Vp=Number(Vp);
 fo=Number(fo);
 HA=Number(HA);
 var x_1=ax.x_1, w=ctx.canvas.width;
 var y_1=ax.y_1, h=ctx.canvas.height;
 var clr= "green";
 if (i1 == 1)
 {
    ctx.fillStyle = clr;
    ctx.font = "24px times new roman";
    ctx.fillText("("+4*Vp+"/π)"+"sin"+2*fo+"πt",x_1+10,y_1+40);
 }
 else if (i1 == 3) 
 {
    ctx.fillStyle = clr;
    ctx.font = "24px times new roman";
    ctx.fillText("+("+4*Vp+"/3π)"+"sin"+6*fo+"πt",x_1+160,y_1+40);
 }
 else if (i1 == 5) 
 {
    ctx.fillStyle = clr;
    ctx.font = "24px times new roman";
    ctx.fillText("+("+4*Vp+"/5π)"+"sin"+10*fo+"πt",x_1+ 10,y_1+80);
 }
 else if (i1 == 7) 
 {
    ctx.fillStyle = clr;
    ctx.font = "24px times new roman";
    ctx.fillText("+("+4*Vp+"/7π)"+"sin"+14*fo+"πt",x_1+190,y_1+80);
 }
 else if (i1 == 9) 
 {
    ctx.fillStyle = clr;
    ctx.font = "24px times new roman";
    ctx.fillText("+("+4*Vp+"/9π)"+"sin"+18*fo+"πt",x_1+ 10,y_1+120);
 }
  else if (i1 == 11) 
 {
    ctx.fillStyle = clr;
    ctx.font = "24px times new roman";
    ctx.fillText("+("+4*Vp+"/11π)"+"sin"+22*fo+"πt",x_1+ 190,y_1+120);
 }
 
}
