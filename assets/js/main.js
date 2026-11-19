(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function val(n){var v=0;[].forEach.call(document.querySelectorAll('input[name='+n+']'),function(x){if(x.checked)v=+x.value;});return v;}
var B=[['Beef','beef chuck in 4 cm cubes',150,true],['Chicken','chicken thighs, bone-in or boneless',45,true],['Lamb','lamb shoulder in chunks',120,true],['Bean','beans and lentils (rinsed)',40,false],['Root vegetable','carrots, parsnips, squash and potatoes',35,false]];
var L=[['stock','enough stock to just cover'],['tomato','two tins of chopped tomatoes plus a splash of water'],['coconut','a tin of coconut milk and a little stock'],['simple','water with a bay leaf, an onion half and peppercorns']];
var F=[['Smoky','smoked paprika, cumin and a pinch of sugar'],['Herby','thyme, rosemary and bay, with parsley to finish'],['Spiced','cinnamon, cumin, coriander and ginger'],['Fiery','chilli flakes or fresh chillies with garlic']];
var M=[['Stovetop',1,'Cover and keep at a lazy simmer, stirring now and then.'],['Oven',1.1,'Cover and cook at 150&deg;C (300&deg;F).'],['Slow cooker',3,'Cook on low; you can skip browning in a rush, but it adds flavour.'],['Pressure cooker',0.35,'Cook at high pressure, then release naturally.']];
if(document.querySelector('input[name=base]')){function bd(){var b=B[val('base')],l=L[val('liquid')],f=F[val('flavour')],m=M[val('method')],t=Math.max(10,Math.round(b[2]*m[1]/5)*5),h=t>=60?(Math.floor(t/60)+' h'+(t%60?' '+t%60+' min':'')):t+' min';
  var st=[];if(b[3])st.push('Pat the '+b[1]+' dry, season and brown in batches in a little oil. Set aside.');st.push('Soften a chopped onion, carrot and celery in the pot for 8 minutes. Add garlic and '+f[1]+' for one minute.');
  st.push('Add '+(b[3]?'the meat back with ':'the '+b[1]+' and ')+l[1]+'. Bring just to a simmer.');st.push(m[2]+' Cook for about '+h+(b[0]==='Bean'?', until soft (canned beans need only 20 minutes)':'')+'.');st.push('Taste, season, and brighten with lemon or a spoon of vinegar. Rest 10 minutes before serving.');
  $('bd-o').innerHTML='<h3>'+f[0]+' '+b[0].toLowerCase()+' stew</h3><div class="sp-meta"><span>'+m[0]+'</span><span>Cook: '+h+'</span><span>Serves 4&ndash;6</span></div><ol>'+st.map(function(s){return '<li>'+s+'</li>';}).join('')+'</ol>';}
 [].forEach.call(document.querySelectorAll('.sp-step input'),function(x){x.addEventListener('change',bd);});bd();}
var fm=$('fz-m');if(fm){var fe=$('fz-e'),fc=$('fz-c');function fz(){var m=Math.max(0,parseInt(fm.value,10)||0),e=Math.min(m,Math.max(0,parseInt(fe.value,10)||0)),c=+fc.value,left=m-e,tubs=Math.ceil(left/c),d=new Date();d.setMonth(d.getMonth()+3);
  var html='';for(var i=0;i<Math.min(Math.ceil(e/c),12);i++)html+='<i class="now" title="Tonight"></i>';for(var j=0;j<Math.min(tubs,24);j++)html+='<i title="Freezer"></i>';
  $('fz-o').innerHTML='<h3>'+(left>0?tubs+' container'+(tubs===1?'':'s')+' for the freezer':'Nothing left to freeze')+'</h3><div class="sp-tubs" aria-hidden="true">'+html+'</div><dl><dt>Tonight</dt><dd>'+e+' portion'+(e===1?'':'s')+'</dd><dt>To freeze</dt><dd>'+left+' portion'+(left===1?'':'s')+(left%c&&left>0?' (one container part-filled)':'')+'</dd><dt>Best by</dt><dd>'+d.toLocaleDateString(undefined,{day:'numeric',month:'long',year:'numeric'})+'</dd><dt>Label</dt><dd>Name, portions and today&rsquo;s date</dd></dl>';}
 [fm,fe,fc].forEach(function(x){x.addEventListener('input',fz);x.addEventListener('change',fz);});fz();}
})();
