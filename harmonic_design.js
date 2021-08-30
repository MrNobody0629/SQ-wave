function draw_harmonic() {
 // get values directly from form
 var Vp=document.myForm.Vp.value;
 var fo=document.myForm.fo.value
 var Vmax=document.myForm.Vmax.value
 var Tmax=document.myForm.Tmax.value
 var N=document.myForm.N.value
 var HA=document.myForm.HA.value;
 var m = 0;
 var xx=1;
 var thick=1;
 Vp=Number(Vp);
 fo=Number(fo);
 Vmax=Number(Vmax);
 Tmax=Number(Tmax);
 N=Number(N);
 HA=Number(HA);
 // define canvas
 var canvas = document.getElementById("canvs");
 if (null==canvas || !canvas.getContext) return;
 ctx=canvas.getContext("2d")

// fill canvas
 ctx.fillStyle= "white";
 ctx.fillRect(0,0,1050,401);
 // define origin at Plot_harmonics center
 var axes={};
 if(HA<9)
 {HA=HA}
 else{HA=9}
 for(i1 = 1;i1<=HA; i1=i1+2)
      
 {
 axes.x_1 = 0;  // x_1, y_1 place Plot_harmonics origin in middle of canvas
 axes.y_1 = 0.18*(xx)*canvas.height;
 var m = 0;
 // draw axes
 Display_axis(ctx,axes);
 showTextt(ctx,axes,i1);
 xx=xx+1;
var x=new Array(), y=new Array();   // x,y Plot_harmonicsting variables
 var dt, tstart, tstop;             // time variables
 var z;
 z = 0;
 var k;
 k = 0;
 // define Plot_harmonics paramaters
 tstart=0;
 tstop=Tmax;
 dt = Tmax / (N-1);             // time increment over N points
 axes.xscale = (canvas.width)/(Tmax);   // x pix per s
 axes.yscale = (canvas.height)/(2*Vmax);    // y pix per V
 axes.N = N;
 for (k=0; k <= (Tmax*fo); k++) 
 {
 for (i=1; i<(N/(Tmax*fo)); i++) 
 {
  
 x[m] = (z + (dt));
 
 
                y[m] = (Vp/(i1))*Math.sin(2*(i1)*(Math.PI)*fo*x[m]); 
            
 z=x[m] 
 m=m+1;
 
    }
   }


 Plot_harmonics(ctx,axes,x,y,"rgb(255,0,0)",1); 
 
 
 }
}
 
///////////////////////////////////////////////////////
function Plot_harmonics (ctx,axes,x,y,color,thick) {

 var i, x_1, y_1, xscale, yscale, xp, yp;
 x_1=axes.x_1;  y_1=axes.y_1;
 xscale=axes.xscale;  yscale=axes.yscale;
 ctx.beginPath();
 ctx.lineWidth = thick;
 ctx.strokeStyle = color;
  
 for (i=0; i<axes.N; i++) {
    // translate actual x,y to Plot_harmonics xp,yp
    
    xp = x_1 + x[i]*xscale;
    yp = y_1 - y[i]*yscale;
    
    // draw ine to next point
    if (i==0) ctx.moveTo( xp, yp );
    else      ctx.lineTo( xp, yp );
    
    
 }
 
 ctx.stroke();
}
//////////////////////////////////////////////////////
function Display_axis(ctx,axes) {
 var x_1=axes.x_1, w=ctx.canvas.width;
 var y_1=axes.y_1, h=ctx.canvas.height;

 ctx.lineWidth = 2;
  ctx.beginPath();
 ctx.strokeStyle = "blue"; 
 ctx.moveTo(0,y_1); 

 ctx.lineTo(w,y_1);  //document.write("X axis")
 ctx.moveTo(x_1,0);    ctx.lineTo(x_1,h);  // Y axis
 ctx.stroke();
 
}

function showTextt(ctx,axes,i1) {
 var x_1=axes.x_1, w=ctx.canvas.width;
 var y_1=axes.y_1, h=ctx.canvas.height;
 var clr= "black";
 var fo=document.myForm.fo.value
 if (i1 == 1)
 {
    ctx.fillStyle = clr;
    ctx.font = "12px times new roman";
    ctx.fillText(fo+"Hz",x_1+10,y_1-40);
    ctx.fillText("Fundamental signal",x_1+320,y_1-30);
 }
 else if (i1 == 3) 
 {
    ctx.fillStyle = clr;
    ctx.font = "12px times new roman";
    ctx.fillText(3*fo+"Hz",x_1+10,y_1-40);
    ctx.fillText("3rd harmonic",x_1+360,y_1-40);
 }
 else if (i1 == 5) 
 {
    ctx.fillStyle = clr;
    ctx.font = "12px times new roman";
    ctx.fillText(5*fo+"Hz",x_1+10,y_1-35);
    ctx.fillText("5th harmonic",x_1+360,y_1-35);

 }
 else if (i1 == 7) 
 {
    ctx.fillStyle = clr;
    ctx.font = "12px times new roman";
    ctx.fillText(7*fo+"Hz",x_1+10,y_1-30);
    ctx.fillText("7th harmonic",x_1+360,y_1-30);

 }
 else if (i1 == 9) 
 {
    ctx.fillStyle = clr;
    ctx.font = "12px times new roman";
    ctx.fillText(9*fo+"Hz",x_1+10,y_1-25);
    ctx.fillText("9th harmonic",x_1+360,y_1-25);

 }
}
