var com=com||{};com.eqela=com.eqela||{};com.eqela.libhtml5canvas=com.eqela.libhtml5canvas||{};com.eqela.libhtml5canvas.HTML5CanvasVgContext=function(){eq.api.Object.call(this);this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_saved=false;this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_current_clip=null;this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_ctx=null;this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_canvas=null;{}};P=com.eqela.libhtml5canvas.HTML5CanvasVgContext.prototype=(function(o){function F(){};F.prototype=o;return(new F());})(eq.api.Object.prototype);P._t={};P._t['eq.api.Object']=true;P._t['com.eqela.libvg.VgContext']=true;P._t['com.eqela.libhtml5canvas.HTML5CanvasVgContext']=true;P.constructor=com.eqela.libhtml5canvas.HTML5CanvasVgContext;com.eqela.libhtml5canvas.HTML5CanvasVgContext.for_canvas_element=function(canvas,rat){var v=new com.eqela.libhtml5canvas.HTML5CanvasVgContext();com.eqela.libhtml5canvas.HTML5CanvasVgContext.prototype.set_canvas.call(v,canvas);var ctx=null;ctx = canvas.getContext('2d');if(ctx===null){return(null);}ctx.scale(rat, rat);v.com_eqela_libhtml5canvas_HTML5CanvasVgContext_ctx=ctx;return(v);};P.apply_path=function(x,y,vp,vt){var _t2=null;var _t1=null;var _t0=null;var v=true;var ctx=this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_ctx;if(vt!==null){var tx=(x+vp.get_x())+(~~(vp.get_w()/2));var ty=(y+vp.get_y())+(~~(vp.get_h()/2));if((function(l,r){return(l!=null&&l._t[r]===true);})(vp,"com.eqela.libvg.VgPathCustom")){tx=(x+com.eqela.libvg.VgPathCustom.prototype.get_start_x.call(((function(l,r){return(l!=null&&l._t[r]===true);})((_t0=vp),"com.eqela.libvg.VgPathCustom")?_t0:null)))+(~~(vp.get_w()/2));ty=(y+com.eqela.libvg.VgPathCustom.prototype.get_start_y.call(((function(l,r){return(l!=null&&l._t[r]===true);})((_t1=vp),"com.eqela.libvg.VgPathCustom")?_t1:null)))+(~~(vp.get_h()/2));}ctx.save();ctx.translate(tx, ty);ctx.rotate(vt.get_rotate_angle());ctx.scale(vt.get_scale_x(), vt.get_scale_y());ctx.translate(-tx, -ty);}if((function(l,r){return(l!=null&&l._t[r]===true);})(vp,"com.eqela.libvg.VgPathRectangle")){ctx.beginPath();ctx.rect(x+vp.get_x(), y+vp.get_y(), vp.get_w(), vp.get_h());}else {if((function(l,r){return(l!=null&&l._t[r]===true);})(vp,"com.eqela.libvg.VgPathRoundedRectangle")){var x1=x+vp.get_x();var y1=y+vp.get_y();var w=vp.get_w();var h=vp.get_h();var r=com.eqela.libvg.VgPathRoundedRectangle.prototype.get_radius.call(((function(l,r){return(l!=null&&l._t[r]===true);})((_t2=vp),"com.eqela.libvg.VgPathRoundedRectangle")?_t2:null));ctx.beginPath();ctx.moveTo(x1 + r, y1);ctx.lineTo(x1 + w - r, y1);ctx.quadraticCurveTo(x1 + w, y1, x1 + w, y1+r);ctx.lineTo(x1+w, y1+h-r);ctx.quadraticCurveTo(x1 + w, y1 + h, x1 + w - r, y1 + h);ctx.lineTo(x1+r, y1+h);ctx.quadraticCurveTo(x1, y1+h, x1, y1+h-r);ctx.lineTo(x1, y1+r);ctx.quadraticCurveTo(x1, y1, x1+r, y1);}else {if((function(l,r){return(l!=null&&l._t[r]===true);})(vp,"com.eqela.libvg.VgPathCircle")){var xc=x+com.eqela.libvg.VgPathCircle.prototype.get_xc.call(vp);var yc=y+com.eqela.libvg.VgPathCircle.prototype.get_yc.call(vp);var radius=com.eqela.libvg.VgPathCircle.prototype.get_radius.call(vp);ctx.beginPath();ctx.arc(xc, yc, radius, 0, 2 * Math.PI, false);}else {if((function(l,r){return(l!=null&&l._t[r]===true);})(vp,"com.eqela.libvg.VgPathCustom")){com.eqela.libhtml5canvas.HTML5CanvasVgContext.prototype.play_custom_path.call(this,x,y,vp);}else {eq.api.Log.warning(eq.api.StringStatic.for_strptr("ERROR: VgPath(Other)"),null);v=false;}}}}return(v);};P.play_custom_path=function(x,y,path){var _t3=null;var ctx=this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_ctx;ctx.beginPath();ctx.moveTo(x+path.get_start_x(), y+path.get_start_y());var it=path.iterate();while(it!==null){var e=((function(l,r){return(l!=null&&l._t[r]===true);})((_t3=it.next()),"com.eqela.libvg.VgPathElement")?_t3:null);if(e===null){break;}var op=com.eqela.libvg.VgPathElement.prototype.get_operation.call(e);if(op===com.eqela.libvg.VgPathElement.com_eqela_libvg_VgPathElement_OP_LINE){ctx.lineTo(x+e.get_x1(), y+e.get_y1());}else if(op===com.eqela.libvg.VgPathElement.com_eqela_libvg_VgPathElement_OP_CURVE){ctx.bezierCurveTo(x+e.get_x1(), y+e.get_y1(), x+e.get_x2(), y+e.get_y2(), x+e.get_x3(), y+e.get_y3());}else if(op===com.eqela.libvg.VgPathElement.com_eqela_libvg_VgPathElement_OP_ARC){ctx.arc(x+e.get_x1(), y+e.get_y1(), e.get_radius(), e.get_angle1(), e.get_angle2(), false);}}};P.to_js_rgba_string=function(c){if(c===null){return(eq.api.StringStatic.for_strptr(""));}var v=eq.api.StringStatic.for_strptr("rgba(%d,%d,%d,%f)").printf().add(eq.api.Primitive.for_integer(~~((com.eqela.libgui.Color.prototype.get_r.call(c)*255)))).add(eq.api.Primitive.for_integer(~~((com.eqela.libgui.Color.prototype.get_g.call(c)*255)))).add(eq.api.Primitive.for_integer(~~((com.eqela.libgui.Color.prototype.get_b.call(c)*255)))).add(eq.api.Primitive.for_double(com.eqela.libgui.Color.prototype.get_a.call(c))).to_string();return(v);};P.apply_alpha=function(vt){var a=1.0;if(vt!==null){a=com.eqela.libvg.VgTransform.prototype.get_alpha.call(vt);}var ctx=this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_ctx;ctx.globalAlpha = a;};P.stroke=function(x,y,vp,vt,c,linewidth,style){if(com.eqela.libhtml5canvas.HTML5CanvasVgContext.prototype.apply_path.call(this,x,y,vp,vt)===false){return(false);}if(style!==0){eq.api.Log.warning(eq.api.StringStatic.for_strptr("Stroke style not implemented."),null);}com.eqela.libhtml5canvas.HTML5CanvasVgContext.prototype.apply_alpha.call(this,vt);var ctx=this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_ctx;ctx.strokeStyle = this.to_js_rgba_string(c).to_strptr();ctx.lineWidth = linewidth;ctx.stroke();if(vt != null) {ctx.restore();}return(true);};P.clear=function(x,y,vp,vt){if((vp===null)||(((function(l,r){return(l!=null&&l._t[r]===true);})(vp,"com.eqela.libvg.VgPathRectangle"))===false)){return(false);}var ctx=this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_ctx;ctx.clearRect(vp.get_x(), vp.get_y(), vp.get_w(), vp.get_h());return(true);};P.fill_color=function(x,y,vp,vt,c){if(com.eqela.libhtml5canvas.HTML5CanvasVgContext.prototype.apply_path.call(this,x,y,vp,vt)===false){return(false);}com.eqela.libhtml5canvas.HTML5CanvasVgContext.prototype.apply_alpha.call(this,vt);var ctx=this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_ctx;ctx.fillStyle = this.to_js_rgba_string(c).to_strptr();ctx.fill();if(vt != null) {ctx.restore();}return(true);};P.fill_vertical_gradient=function(x,y,vp,vt,a,b){if(com.eqela.libhtml5canvas.HTML5CanvasVgContext.prototype.apply_path.call(this,x,y,vp,vt)===false){return(false);}com.eqela.libhtml5canvas.HTML5CanvasVgContext.prototype.apply_alpha.call(this,vt);var ctx=this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_ctx;var g = ctx.createLinearGradient(x+vp.get_x(),y+vp.get_y(),x+vp.get_x(),y+vp.get_y()+vp.get_h());g.addColorStop(0, this.to_js_rgba_string(a).to_strptr());g.addColorStop(1, this.to_js_rgba_string(b).to_strptr());ctx.fillStyle = g;ctx.fill();if(vt != null) {ctx.restore();}return(true);};P.fill_horizontal_gradient=function(x,y,vp,vt,a,b){if(com.eqela.libhtml5canvas.HTML5CanvasVgContext.prototype.apply_path.call(this,x,y,vp,vt)===false){return(false);}com.eqela.libhtml5canvas.HTML5CanvasVgContext.prototype.apply_alpha.call(this,vt);var ctx=this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_ctx;var g = ctx.createLinearGradient(x+vp.get_x(),y+vp.get_y(),x+vp.get_x()+vp.get_w(),y+vp.get_y());g.addColorStop(0, this.to_js_rgba_string(a).to_strptr());g.addColorStop(1, this.to_js_rgba_string(b).to_strptr());ctx.fillStyle = g;ctx.fill();if(vt != null) {ctx.restore();}return(true);};P.fill_radial_gradient=function(x,y,vp,vt,radius,a,b){if(com.eqela.libhtml5canvas.HTML5CanvasVgContext.prototype.apply_path.call(this,x,y,vp,vt)===false){return(false);}com.eqela.libhtml5canvas.HTML5CanvasVgContext.prototype.apply_alpha.call(this,vt);var ctx=this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_ctx; var g = ctx.createRadialGradient(x+vp.get_x()+(vp.get_w()/2),y+vp.get_y()+(vp.get_h()/2),0,x+vp.get_x()+(vp.get_w()/2),y+vp.get_y()+(vp.get_h()/2),radius);g.addColorStop(0, this.to_js_rgba_string(a).to_strptr());g.addColorStop(1, this.to_js_rgba_string(b).to_strptr());ctx.fillStyle = g;ctx.fill();if(vt != null) {ctx.restore();}return(true);};P.fill_diagonal_gradient=function(x,y,vp,vt,a,b,direction){if(com.eqela.libhtml5canvas.HTML5CanvasVgContext.prototype.apply_path.call(this,x,y,vp,vt)===false){return(false);}com.eqela.libhtml5canvas.HTML5CanvasVgContext.prototype.apply_alpha.call(this,vt);var x1=0;var y1=0;var x2=0;var y2=0;if(direction===1){x1=(x+vp.get_x())+vp.get_w();y1=(y+vp.get_y())+vp.get_h();x2=x+vp.get_x();y2=y+vp.get_y();}else {x1=(x+vp.get_x())+vp.get_w();y1=y+vp.get_y();x2=x+vp.get_x();y2=(y+vp.get_y())+vp.get_h();}var ctx=this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_ctx; var g = ctx.createLinearGradient(x1, y1, x2, y2);g.addColorStop(0, this.to_js_rgba_string(a).to_strptr());g.addColorStop(1, this.to_js_rgba_string(b).to_strptr());ctx.fillStyle = g;ctx.fill();if(vt != null) {ctx.restore();}return(true);};P.draw_text=function(ax,ay,vt,text){if(text===null){return(false);}var x=ax;var y=ay;var props=text.get_text_properties();if(props===null){return(false);}if(com.eqela.libgui.TextProperties.prototype.get_alignment.call(props)===1){x=x-(text.get_width()/2);}var canvas=null;if((function(l,r){return(l!=null&&l._t[r]===true);})(text,"com.eqela.libhtml5canvas.HTML5TextLayout")){canvas=com.eqela.libhtml5canvas.HTML5TextLayout.prototype.get_canvas.call(text);}com.eqela.libhtml5canvas.HTML5CanvasVgContext.prototype.apply_alpha.call(this,vt);if(canvas!==null){var ctx=this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_ctx;if(vt != null) {ctx.save();ctx.translate(x+(canvas.width/2), y+(canvas.height/2));ctx.rotate(vt.get_rotate_angle());ctx.scale(vt.get_scale_x(), vt.get_scale_y());ctx.translate(-x-(canvas.width/2), -y-(canvas.height/2));}if(canvas.width > 0 && canvas.height > 0) {ctx.drawImage(canvas, x, y);}if(vt != null) {ctx.restore();}}return(true);};P.draw_graphic=function(x,y,vt,agraphic){var drawn=false;var w=0;var h=0;if(agraphic!==null){if(w < 1){w=~~(agraphic.get_width());}if(h < 1){h=~~(agraphic.get_height());}}com.eqela.libhtml5canvas.HTML5CanvasVgContext.prototype.apply_alpha.call(this,vt);if((function(l,r){return(l!=null&&l._t[r]===true);})(agraphic,"com.eqela.libvg.CodeImage")){agraphic.render(this,x,y,vt);drawn=true;}else {if((function(l,r){return(l!=null&&l._t[r]===true);})(agraphic,"com.eqela.libhtml5canvas.HTML5RenderableImage")){var ctx=this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_ctx;var img = agraphic.get_element();if(vt != null) {ctx.save();ctx.translate(x+(w/2), y+(h/2));ctx.rotate(vt.get_rotate_angle());ctx.scale(vt.get_scale_x(), vt.get_scale_y());ctx.translate(-x-(w/2), -y-(h/2));ctx.drawImage(img, x, y, w*vt.get_scale_x(), h*vt.get_scale_y());ctx.restore();}else {ctx.drawImage(img, x, y, w, h);}drawn=true;}else {if((function(l,r){return(l!=null&&l._t[r]===true);})(agraphic,"com.eqela.libhtml5canvas.HTML5Image")){var ctx=this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_ctx;var img = agraphic.get_image();if(img) {var thecontext = this;if(typeof img.naturalWidth != "undefined" && img.naturalWidth > 0) {drawn = true;if(vt != null) {ctx.save();ctx.translate(x+(w/2), y+(h/2));ctx.rotate(vt.get_rotate_angle());ctx.scale(vt.get_scale_x(), vt.get_scale_y());ctx.translate(-x-(w/2), -y-(h/2));ctx.drawImage(img, x, y, w*vt.get_scale_x(), h*vt.get_scale_y());ctx.restore();}else {ctx.drawImage(img, x, y, w, h);}}else {img.onload = function() {thecontext.draw_graphic(x, y, vt, agraphic);}}}}}}if(drawn===false){if(w < 1){w=32;}if(h < 1){h=32;}this.stroke(x,y,com.eqela.libvg.VgPathRectangle.create(0,0,w,h),null,com.eqela.libgui.Color.instance(eq.api.StringStatic.for_strptr("#808080")),2,0);}return(true);};P.clip=function(x,y,vp,vt){var ctx=this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_ctx;if(this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_saved===false){ctx.save();this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_saved=true;}if(com.eqela.libhtml5canvas.HTML5CanvasVgContext.prototype.apply_path.call(this,x,y,vp,vt)){ctx.clip();if(this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_current_clip===null){this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_current_clip=com.eqela.libgui.RectangleStatic.instance(x+vp.get_x(),y+vp.get_y(),vp.get_w(),vp.get_h());}else {var cx1=~~(this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_current_clip.get_x());var cy1=~~(this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_current_clip.get_y());var cx2=cx1+this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_current_clip.get_width();var cy2=cy1+this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_current_clip.get_height();var nx=x+vp.get_x();var ny=y+vp.get_y();var nw=vp.get_w();var nh=vp.get_h();if(nx > cx1){cx1=nx;}if((nx+nw) < cx2){cx2=nx+nw;}if(ny > cy1){cy1=ny;}if((ny+nh) < cy2){cy2=ny+nh;}var cw=cx2-cx1;if(cw < 0){cw=0;}var ch=cy2-cy1;if(ch < 0){ch=0;}this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_current_clip=com.eqela.libgui.RectangleStatic.instance(cx1,cy1,cw,ch);}return(true);}return(false);};P.clip_clear=function(){if(this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_saved){var ctx=this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_ctx;ctx.restore();this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_saved=false;this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_current_clip=null;}return(true);};P.get_clip=function(){if(this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_current_clip!==null){return(this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_current_clip);}var w=0;var h=0;var canvas=this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_canvas;w = canvas.width;h = canvas.height;return(com.eqela.libgui.RectangleStatic.instance(0,0,w,h));};P.set_ctx=function(v){this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_ctx=v;return(this);};P.get_ctx=function(){return(this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_ctx);};P.set_canvas=function(v){this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_canvas=v;return(this);};P.get_canvas=function(){return(this.com_eqela_libhtml5canvas_HTML5CanvasVgContext_canvas);};com.eqela.libhtml5canvas.HTML5RealImage=function(){eq.api.Object.call(this);this.com_eqela_libhtml5canvas_HTML5RealImage__name=null;this.com_eqela_libhtml5canvas_HTML5RealImage_image=null;{var image=null;image = new Image();this.com_eqela_libhtml5canvas_HTML5RealImage_image=image;}};P=com.eqela.libhtml5canvas.HTML5RealImage.prototype=(function(o){function F(){};F.prototype=o;return(new F());})(eq.api.Object.prototype);P._t={};P._t['eq.api.Object']=true;P._t['com.eqela.libgui.Size']=true;P._t['com.eqela.libgui.AsyncImage']=true;P._t['com.eqela.libgui.Image']=true;P._t['com.eqela.libhtml5canvas.HTML5Image']=true;P._t['com.eqela.libhtml5canvas.HTML5RealImage']=true;P.constructor=com.eqela.libhtml5canvas.HTML5RealImage;com.eqela.libhtml5canvas.HTML5RealImage.MyBase64Encoder=function(){eq.api.Object.call(this);{}};P2=P;P=com.eqela.libhtml5canvas.HTML5RealImage.MyBase64Encoder.prototype=(function(o){function F(){};F.prototype=o;return(new F());})(eq.api.Object.prototype);P._t={};P._t['eq.api.Object']=true;P._t['com.eqela.libhtml5canvas.HTML5RealImage.MyBase64Encoder']=true;P.constructor=com.eqela.libhtml5canvas.HTML5RealImage.MyBase64Encoder;com.eqela.libhtml5canvas.HTML5RealImage.MyBase64Encoder.encode=function(buffer){if(buffer===null){return(null);}var ptr=buffer.get_pointer();var sb=null;if(ptr!==null){sb=eq.api.StringBufferStatic.create(null);var i=0;var append=0;var size=buffer.get_size();while(i < size){var a6=0;var b6=0;var c6=0;var d6=0;var byte1=~~((ptr.get_byte(i++) & 0xFF));var byte2=~~((ptr.get_byte(i++) & 0xFF));var byte3=~~((ptr.get_byte(i++) & 0xFF));a6=~~((byte1 >> 2));b6=~~((((byte1 & 0x03) << 4)+(~~((byte2 >> 4)))));sb.append_c(com.eqela.libhtml5canvas.HTML5RealImage.MyBase64Encoder.to_ascii_char(a6));sb.append_c(com.eqela.libhtml5canvas.HTML5RealImage.MyBase64Encoder.to_ascii_char(b6));append=i-size;if(append <= 0){c6=~~((((byte2 & 0x0F) << 2)+(~~((byte3 >> 6)))));d6=~~((byte3 & 0x3F));sb.append_c(com.eqela.libhtml5canvas.HTML5RealImage.MyBase64Encoder.to_ascii_char(c6));sb.append_c(com.eqela.libhtml5canvas.HTML5RealImage.MyBase64Encoder.to_ascii_char(d6));}else {if(append > 1){sb.append_c('='.charCodeAt(0));}else {c6=~~((((byte2 & 0x0F) << 2)+(~~((byte3 >> 6)))));sb.append_c(com.eqela.libhtml5canvas.HTML5RealImage.MyBase64Encoder.to_ascii_char(c6));}sb.append_c('='.charCodeAt(0));}}}if(sb!==null){return(sb.to_string());}return(null);};com.eqela.libhtml5canvas.HTML5RealImage.MyBase64Encoder.to_ascii_char=function(lookup){if((lookup < 0)||(lookup > 63)){return(0);}var c=0;if(lookup <= 25){c=lookup+65;}else {if(lookup <= 51){c=lookup+71;}else {if(lookup <= 61){c=lookup-4;}else {if(lookup===62){c='+'.charCodeAt(0);}else {if(lookup===63){c='/'.charCodeAt(0);}}}}}return(c);};P=P2;P2=null;com.eqela.libhtml5canvas.HTML5RealImage.for_url=function(url){var v=new com.eqela.libhtml5canvas.HTML5RealImage();com.eqela.libhtml5canvas.HTML5RealImage.prototype.read.call(v,url);return(v);};P.get_url=function(){return(this.com_eqela_libhtml5canvas_HTML5RealImage__name);};P.release=function(){};P.crop=function(x,y,w,h){return(com.eqela.libhtml5canvas.ImageCropper.crop(this,x,y,w,h));};P.encode=function(type){return(null);};com.eqela.libhtml5canvas.HTML5RealImage.for_data=function(buffer,type){var v=new com.eqela.libhtml5canvas.HTML5RealImage();com.eqela.libhtml5canvas.HTML5RealImage.prototype.set_data.call(v,buffer,type);return(v);};P.get_width=function(){var image=this.com_eqela_libhtml5canvas_HTML5RealImage_image;return(image.width);return(0);};P.get_height=function(){var image=this.com_eqela_libhtml5canvas_HTML5RealImage_image;return(image.height);return(0);};P.get_image=function(){return(this.com_eqela_libhtml5canvas_HTML5RealImage_image);};P.set_data=function(buffer,type){this.com_eqela_libhtml5canvas_HTML5RealImage__name=eq.api.StringStatic.for_strptr("image");var src=eq.api.StringStatic.for_strptr("data:%s;base64,%s").printf().add(type).add(com.eqela.libhtml5canvas.HTML5RealImage.MyBase64Encoder.encode(buffer)).to_string();var image=this.com_eqela_libhtml5canvas_HTML5RealImage_image;image.src = src.to_strptr();};P.read=function(_name){var nn=_name;this.com_eqela_libhtml5canvas_HTML5RealImage__name=_name;var image=this.com_eqela_libhtml5canvas_HTML5RealImage_image;image.src = nn.to_strptr();};P.resize=function(w,h){if((w < 0)&&(h < 0)){return(this);}return(com.eqela.libhtml5canvas.HTML5ResizedImage.create(this,w,h));};P.is_loaded=function(){if(this.com_eqela_libhtml5canvas_HTML5RealImage_image===null){return(false);}var v=false;var image=this.com_eqela_libhtml5canvas_HTML5RealImage_image;if(image.complete === true) {v = true;}if(v){if((this.get_width() < 1)||(this.get_height() < 1)){v=false;}}if(v){eq.api.Log.debug(eq.api.StringStatic.for_strptr("HTML5Image `%s' is done loading. width=%d, height=%d").printf().add(this.com_eqela_libhtml5canvas_HTML5RealImage__name).add(eq.api.Primitive.for_double(this.get_width())).add(eq.api.Primitive.for_double(this.get_height())),null);}return(v);};com.eqela.libhtml5canvas.HTML5RenderableImage=function(){eq.api.Object.call(this);this.com_eqela_libhtml5canvas_HTML5RenderableImage_width=0;this.com_eqela_libhtml5canvas_HTML5RenderableImage_height=0;this.com_eqela_libhtml5canvas_HTML5RenderableImage_element=null;this.com_eqela_libhtml5canvas_HTML5RenderableImage_context=null;{}};P=com.eqela.libhtml5canvas.HTML5RenderableImage.prototype=(function(o){function F(){};F.prototype=o;return(new F());})(eq.api.Object.prototype);P._t={};P._t['eq.api.Object']=true;P._t['com.eqela.libgui.Renderable']=true;P._t['com.eqela.libgui.Size']=true;P._t['com.eqela.libgui.Image']=true;P._t['com.eqela.libgui.RenderableImage']=true;P._t['com.eqela.libvg.VgRenderable']=true;P._t['com.eqela.libvg.VgRenderableImage']=true;P._t['com.eqela.libhtml5canvas.HTML5RenderableImage']=true;P.constructor=com.eqela.libhtml5canvas.HTML5RenderableImage;com.eqela.libhtml5canvas.HTML5RenderableImage.create=function(w,h){var v=new com.eqela.libhtml5canvas.HTML5RenderableImage();var e=null;e = document.createElement('canvas');e.width = w;e.height = h;v.com_eqela_libhtml5canvas_HTML5RenderableImage_element=e;v.com_eqela_libhtml5canvas_HTML5RenderableImage_width=w;v.com_eqela_libhtml5canvas_HTML5RenderableImage_height=h;return(v);};P.release=function(){};P.crop=function(x,y,w,h){return(com.eqela.libhtml5canvas.ImageCropper.crop(this,x,y,w,h));};P.encode=function(type){return(null);};P.get_element=function(){return(this.com_eqela_libhtml5canvas_HTML5RenderableImage_element);};P.get_width=function(){return(this.com_eqela_libhtml5canvas_HTML5RenderableImage_width);};P.get_height=function(){return(this.com_eqela_libhtml5canvas_HTML5RenderableImage_height);};P.get_vg_context=function(){if(this.com_eqela_libhtml5canvas_HTML5RenderableImage_context===null){this.com_eqela_libhtml5canvas_HTML5RenderableImage_context=com.eqela.libhtml5canvas.HTML5CanvasVgContext.for_canvas_element(this.com_eqela_libhtml5canvas_HTML5RenderableImage_element,1.0);}return(this.com_eqela_libhtml5canvas_HTML5RenderableImage_context);};P.resize=function(aw,ah){var w=aw;var h=ah;if((w < 1)&&(h > 0)){w=~~(((this.com_eqela_libhtml5canvas_HTML5RenderableImage_width/((this.com_eqela_libhtml5canvas_HTML5RenderableImage_height/(h))))));}if((h < 1)&&(w > 0)){h=~~(((this.com_eqela_libhtml5canvas_HTML5RenderableImage_height/((this.com_eqela_libhtml5canvas_HTML5RenderableImage_width/(w))))));}if((w < 1)||(h < 1)){return(null);}var v=new com.eqela.libhtml5canvas.HTML5RenderableImage();v.com_eqela_libhtml5canvas_HTML5RenderableImage_width=w;v.com_eqela_libhtml5canvas_HTML5RenderableImage_height=h;v.com_eqela_libhtml5canvas_HTML5RenderableImage_element=this.com_eqela_libhtml5canvas_HTML5RenderableImage_element;return(v);};P.render=function(ops){var ctx=this.get_vg_context();if(ctx===null){return;}ctx.clear(0,0,com.eqela.libvg.VgPathRectangle.create(0,0,~~(this.get_width()),~~(this.get_height())),null);com.eqela.libvg.VgRenderer.render_to_vg_context(ops,ctx,0,0);};com.eqela.libhtml5canvas.HTML5ResizedImage=function(){eq.api.Object.call(this);this.com_eqela_libhtml5canvas_HTML5ResizedImage_original=null;this.com_eqela_libhtml5canvas_HTML5ResizedImage_width=0;this.com_eqela_libhtml5canvas_HTML5ResizedImage_height=0;{}};P=com.eqela.libhtml5canvas.HTML5ResizedImage.prototype=(function(o){function F(){};F.prototype=o;return(new F());})(eq.api.Object.prototype);P._t={};P._t['eq.api.Object']=true;P._t['com.eqela.libgui.Size']=true;P._t['com.eqela.libgui.AsyncImage']=true;P._t['com.eqela.libgui.Image']=true;P._t['com.eqela.libhtml5canvas.HTML5Image']=true;P._t['com.eqela.libhtml5canvas.HTML5ResizedImage']=true;P.constructor=com.eqela.libhtml5canvas.HTML5ResizedImage;com.eqela.libhtml5canvas.HTML5ResizedImage.create=function(original,w,h){if(original===null){return(null);}var v=new com.eqela.libhtml5canvas.HTML5ResizedImage();v.com_eqela_libhtml5canvas_HTML5ResizedImage_original=original;v.com_eqela_libhtml5canvas_HTML5ResizedImage_width=w;v.com_eqela_libhtml5canvas_HTML5ResizedImage_height=h;return(v);};P.get_url=function(){if(this.com_eqela_libhtml5canvas_HTML5ResizedImage_original!==null){return(this.com_eqela_libhtml5canvas_HTML5ResizedImage_original.get_url());}return(null);};P.release=function(){};P.crop=function(x,y,w,h){return(com.eqela.libhtml5canvas.ImageCropper.crop(this,x,y,w,h));};P.encode=function(type){return(null);};P.get_width=function(){var v=this.com_eqela_libhtml5canvas_HTML5ResizedImage_width;if((v < 1)&&(this.com_eqela_libhtml5canvas_HTML5ResizedImage_height > 0)){var oh=this.com_eqela_libhtml5canvas_HTML5ResizedImage_original.get_height();if(oh > 0){var f=(this.com_eqela_libhtml5canvas_HTML5ResizedImage_height/(oh));v=~~((f*this.com_eqela_libhtml5canvas_HTML5ResizedImage_original.get_width()));}}if(v < 1){v=~~(this.com_eqela_libhtml5canvas_HTML5ResizedImage_original.get_width());}return(v);};P.get_height=function(){var v=this.com_eqela_libhtml5canvas_HTML5ResizedImage_height;if((v < 1)&&(this.com_eqela_libhtml5canvas_HTML5ResizedImage_width > 0)){var ow=this.com_eqela_libhtml5canvas_HTML5ResizedImage_original.get_width();if(ow > 0){var f=(this.com_eqela_libhtml5canvas_HTML5ResizedImage_width/(ow));v=~~((f*this.com_eqela_libhtml5canvas_HTML5ResizedImage_original.get_height()));}}if(v < 1){v=~~(this.com_eqela_libhtml5canvas_HTML5ResizedImage_original.get_height());}return(v);};P.get_image=function(){return(this.com_eqela_libhtml5canvas_HTML5ResizedImage_original.get_image());};P.resize=function(w,h){return(this.com_eqela_libhtml5canvas_HTML5ResizedImage_original.resize(w,h));};P.is_loaded=function(){return(this.com_eqela_libhtml5canvas_HTML5ResizedImage_original.is_loaded());};com.eqela.libhtml5canvas.HTML5TextLayout=function(){eq.api.Object.call(this);this.com_eqela_libhtml5canvas_HTML5TextLayout_props=null;this.com_eqela_libhtml5canvas_HTML5TextLayout_str_list=null;this.com_eqela_libhtml5canvas_HTML5TextLayout_canvas=null;this.com_eqela_libhtml5canvas_HTML5TextLayout_dpi=0;this.com_eqela_libhtml5canvas_HTML5TextLayout_th=0;{}};P=com.eqela.libhtml5canvas.HTML5TextLayout.prototype=(function(o){function F(){};F.prototype=o;return(new F());})(eq.api.Object.prototype);P._t={};P._t['eq.api.Object']=true;P._t['com.eqela.libgui.Size']=true;P._t['com.eqela.libgui.TextLayout']=true;P._t['com.eqela.libhtml5canvas.HTML5TextLayout']=true;P.constructor=com.eqela.libhtml5canvas.HTML5TextLayout;com.eqela.libhtml5canvas.HTML5TextLayout.create=function(props,dpi){var v=new com.eqela.libhtml5canvas.HTML5TextLayout();if(com.eqela.libhtml5canvas.HTML5TextLayout.prototype.initialize.call(v,props,dpi)===false){v=null;}return(v);};P.get_font_name=function(font){var n=com.eqela.libgui.Font.prototype.get_name.call(font);if(n===null){n=eq.api.StringStatic.for_strptr("Sans");}if(eq.api.StringStatic.for_strptr("Sans").equals(n)){n=eq.api.StringStatic.for_strptr("Arial");}if(n.has_suffix(eq.api.StringStatic.for_strptr(".ttf"))||n.has_suffix(eq.api.StringStatic.for_strptr(".otf"))){n=n.substring(0,n.get_length()-4).replace_char('_'.charCodeAt(0),' '.charCodeAt(0));}return(n);};P.to_js_rgba_string=function(c){if(c===null){return(eq.api.StringStatic.for_strptr(""));}var v=eq.api.StringStatic.for_strptr("rgba(%d,%d,%d,%f)").printf().add(eq.api.Primitive.for_integer(~~((com.eqela.libgui.Color.prototype.get_r.call(c)*255)))).add(eq.api.Primitive.for_integer(~~((com.eqela.libgui.Color.prototype.get_g.call(c)*255)))).add(eq.api.Primitive.for_integer(~~((com.eqela.libgui.Color.prototype.get_b.call(c)*255)))).add(eq.api.Primitive.for_double(com.eqela.libgui.Color.prototype.get_a.call(c))).to_string();return(v);};P.get_outline_width=function(){return(3);};P.initialize=function(props,dpi){var _t4=null;this.com_eqela_libhtml5canvas_HTML5TextLayout_props=props;this.com_eqela_libhtml5canvas_HTML5TextLayout_dpi=dpi;if(props===null){return(false);}var text=com.eqela.libgui.TextProperties.prototype.get_text.call(props);if(text===null){return(false);}var str=text.to_strptr();if(str===null){return(false);}var font=null;var font_height=0;var fontinfo=com.eqela.libgui.TextProperties.prototype.get_font.call(props);if(fontinfo!==null){var sb=eq.api.StringBufferStatic.create(null);if(com.eqela.libgui.Font.prototype.is_bold.call(fontinfo)){sb.append(eq.api.StringStatic.for_strptr("bold"));}if(com.eqela.libgui.Font.prototype.is_italic.call(fontinfo)){if(sb.count() > 0){sb.append_c(' '.charCodeAt(0));}sb.append(eq.api.StringStatic.for_strptr("italic"));}if(sb.count() < 1){sb.append(eq.api.StringStatic.for_strptr("normal"));}font=eq.api.StringStatic.for_strptr("%s %spx %s").printf().add(sb.to_string()).add(eq.api.StringStatic.for_integer(com.eqela.libgui.Length.to_pixels(com.eqela.libgui.Font.prototype.get_size.call(fontinfo),dpi))).add(com.eqela.libhtml5canvas.HTML5TextLayout.prototype.get_font_name.call(this,fontinfo)).to_string().strip();var fstyle=sb.to_string();var bstyle=eq.api.StringStatic.for_strptr("");if(eq.api.StringStatic.for_strptr("bold").equals(fstyle)){fstyle=eq.api.StringStatic.for_strptr("normal");bstyle=eq.api.StringStatic.for_strptr(" font-weight: bold;");}var font_style=eq.api.StringStatic.for_strptr("padding: 0px; font-style: %s; font-size: %spx; font-family: %s;%s").printf().add(fstyle).add(eq.api.StringStatic.for_integer(com.eqela.libgui.Length.to_pixels(com.eqela.libgui.Font.prototype.get_size.call(fontinfo),dpi))).add(com.eqela.libhtml5canvas.HTML5TextLayout.prototype.get_font_name.call(this,fontinfo)).add(bstyle).to_string().strip();font_height=com.eqela.libhtml5canvas.HTML5TextLayout.prototype.text_height.call(this,text,font_style);}if(font===null){font=eq.api.StringStatic.for_strptr("12px Arial");font_height=com.eqela.libhtml5canvas.HTML5TextLayout.prototype.text_height.call(this,text,eq.api.StringStatic.for_strptr("padding: 0px; font-size: 12px; font-family: Arial;"));}var canvas=null;this.com_eqela_libhtml5canvas_HTML5TextLayout_canvas=null;canvas = document.createElement('canvas');if(!canvas) {return(false);}var ctx = canvas.getContext('2d');if(!ctx) {return(false);}if(!ctx.measureText) {return(false);}ctx.font = font.to_strptr();this.com_eqela_libhtml5canvas_HTML5TextLayout_canvas=canvas;var outline=com.eqela.libgui.TextProperties.prototype.get_outline_color.call(props);if(outline!==null){var rgba=com.eqela.libhtml5canvas.HTML5TextLayout.prototype.to_js_rgba_string.call(this,outline);ctx.strokeStyle = rgba.to_strptr();ctx.lineWidth = this.get_outline_width();}var outlinewidth=com.eqela.libhtml5canvas.HTML5TextLayout.prototype.get_outline_width.call(this);var wrap_width=com.eqela.libgui.TextProperties.prototype.get_wrap_width.call(props);var wrap=false;var c_rgba=com.eqela.libhtml5canvas.HTML5TextLayout.prototype.to_js_rgba_string.call(this,com.eqela.libgui.TextProperties.prototype.get_color.call(props));var metrics = ctx.measureText(str);canvas.width = metrics.width;if(wrap_width > 0) {if(metrics.width > props.get_wrap_width()) {wrap = true;var h = font_height;}}ctx.font = font.to_strptr();if(!wrap) {canvas.height = font_height;}ctx.textBaseline = "bottom";ctx.fillStyle = c_rgba.to_strptr();ctx.font = font.to_strptr();if(wrap){var words = str.split(" ");var line = "";var line_height = font_height;var x = 0;var y = 0;var n;for(n = 0; n < words.length; n++) {if(ctx.measureText(words[n]).width > wrap_width) {var index = n;var start = 0;var text = words[n];var pos;words.splice(index, 1);for(pos= 0; pos < text.length; pos++) {var s_text = text.substring(start, pos);if(ctx.measureText(s_text).width > wrap_width) {words.splice(index, 0, text.substring(start, pos-1));index++;start = pos - 1;pos--;}}words.splice(index, 0, text.substring(start, pos));}var temp_line = line + words[n] + " ";var metrics = ctx.measureText(temp_line);var temp_width = metrics.width;if (temp_width > wrap_width) {h += line_height;this.add_string_line(line, x, y+font_height);line = words[n] + " ";y += line_height;}else {line = temp_line;}x = 0;if(props.get_alignment() === 1) {x = x + (canvas.width/2) - (ctx.measureText(line).width / 2);if(x < 0) {x = 0;}}}this.add_string_line(line, x, y+font_height);y += line_height;canvas.height = y;if(this.com_eqela_libhtml5canvas_HTML5TextLayout_str_list!==null){var ite=this.com_eqela_libhtml5canvas_HTML5TextLayout_str_list.iterate();while(ite!==null){var po=((function(l,r){return(l!=null&&l._t[r]===true);})((_t4=ite.next()),"eq.api.PropertyObject")?_t4:null);if(po===null){break;}var temp_str=eq.api.PropertyObject.prototype.get_string.call(po,eq.api.StringStatic.for_strptr("text"),null);var x=eq.api.PropertyObject.prototype.get_int.call(po,eq.api.StringStatic.for_strptr("x"),0);var y=eq.api.PropertyObject.prototype.get_int.call(po,eq.api.StringStatic.for_strptr("y"),0);var rgba=com.eqela.libhtml5canvas.HTML5TextLayout.prototype.to_js_rgba_string.call(this,com.eqela.libgui.TextProperties.prototype.get_color.call(props));ctx.textBaseline = "bottom";ctx.fillStyle = rgba.to_strptr();ctx.font = font.to_strptr();if(outline!==null){rgba=com.eqela.libhtml5canvas.HTML5TextLayout.prototype.to_js_rgba_string.call(this,outline);ctx.strokeStyle = rgba.to_strptr();ctx.lineWidth = this.get_outline_width();ctx.strokeText(temp_str.to_strptr(), x, y);}ctx.fillText(temp_str.to_strptr(), x, y);}}}else {if(outline!==null){var rgba=com.eqela.libhtml5canvas.HTML5TextLayout.prototype.to_js_rgba_string.call(this,outline);ctx.strokeStyle = rgba.to_strptr();ctx.lineWidth = this.get_outline_width();ctx.strokeText(str, 0, font_height);}ctx.fillText(str, 0, font_height);}return(true);};P.add_string_line=function(str,x,y){if(this.com_eqela_libhtml5canvas_HTML5TextLayout_str_list===null){this.com_eqela_libhtml5canvas_HTML5TextLayout_str_list=eq.api.LinkedList.create();}this.com_eqela_libhtml5canvas_HTML5TextLayout_str_list.add(eq.api.PropertyObject.prototype.set_int.call(eq.api.PropertyObject.prototype.set_int.call(new eq.api.PropertyObject().set(eq.api.StringStatic.for_strptr("text"),eq.api.StringStatic.for_strptr(str)),eq.api.StringStatic.for_strptr("x"),x),eq.api.StringStatic.for_strptr("y"),y));};P.text_height=function(intext,font_style){var th=0;var body = document.getElementsByTagName("body")[0];var dummy = document.createElement("div");var text = document.createTextNode(intext.to_strptr());dummy.appendChild(text);dummy.setAttribute("style", font_style.to_strptr());body.appendChild(dummy);th = dummy.offsetHeight;body.removeChild(dummy);this.com_eqela_libhtml5canvas_HTML5TextLayout_th=th;return(th);};P.get_text_properties=function(){return(this.com_eqela_libhtml5canvas_HTML5TextLayout_props);};P.get_cursor_position=function(index){var x=0;var y=0;var w=2;var h=this.com_eqela_libhtml5canvas_HTML5TextLayout_th;var text=com.eqela.libgui.TextProperties.prototype.get_text.call(this.com_eqela_libhtml5canvas_HTML5TextLayout_props);var str=text.substring(0,index);var canvas=this.com_eqela_libhtml5canvas_HTML5TextLayout_canvas;var ctx = canvas.getContext('2d');x = ctx.measureText(str.to_strptr()).width;return(com.eqela.libgui.RectangleStatic.instance(x,y,w,h));};P.xy_to_index=function(x,y){var text=com.eqela.libgui.TextProperties.prototype.get_text.call(this.com_eqela_libhtml5canvas_HTML5TextLayout_props);if((text===null)||eq.api.StringStatic.for_strptr("").equals(text)){return(0);}var tw=0;var canvas=this.com_eqela_libhtml5canvas_HTML5TextLayout_canvas;var ctx = canvas.getContext('2d');tw = ctx.measureText(text.to_strptr()).width;if(x >= tw){return(text.get_length());}else {var c=0;var t=0;for(c=0;c < text.get_length();c++){var str=eq.api.StringStatic.for_character(text.get_char(c)); t += ctx.measureText(str.to_strptr()).width;if(x < t){return(c);}}}return(0);};P.get_width=function(){var v=0;if(this.com_eqela_libhtml5canvas_HTML5TextLayout_canvas!==null){var canvas=this.com_eqela_libhtml5canvas_HTML5TextLayout_canvas;v = canvas.width;}return(v);};P.get_height=function(){var v=0;if(this.com_eqela_libhtml5canvas_HTML5TextLayout_canvas!==null){var canvas=this.com_eqela_libhtml5canvas_HTML5TextLayout_canvas;v = canvas.height;}return(v);};P.get_canvas=function(){return(this.com_eqela_libhtml5canvas_HTML5TextLayout_canvas);};com.eqela.libhtml5canvas.ImageCropper=function(){eq.api.Object.call(this);{}};P=com.eqela.libhtml5canvas.ImageCropper.prototype=(function(o){function F(){};F.prototype=o;return(new F());})(eq.api.Object.prototype);P._t={};P._t['eq.api.Object']=true;P._t['com.eqela.libhtml5canvas.ImageCropper']=true;P.constructor=com.eqela.libhtml5canvas.ImageCropper;com.eqela.libhtml5canvas.ImageCropper.crop=function(orig,x,y,w,h){var _t5=null;if(orig===null){return(null);}var bm=((function(l,r){return(l!=null&&l._t[r]===true);})((_t5=com.eqela.libhtml5canvas.HTML5RenderableImage.create(w,h)),"com.eqela.libvg.VgRenderableImage")?_t5:null);if(bm===null){return(null);}var vg=bm.get_vg_context();if(vg===null){return(null);}vg.draw_graphic(-x,-y,null,orig);return(bm);};