---
layout: page
title: About
permalink: /about/
hideTitle: true
---

<div style="position: relative; z-index: -1;">

<img src="{{ site.baseurl }}/assets/images/profile.jpg" style="width: 20vw; max-width: 360px; display: block;
    margin: 0 auto;">

<div id="grad1" style="    height: 400px;
    width: 400px;
    background-image: radial-gradient(#f5de1d 0%, #0000ff00 70%, #0000ff00);
    position: absolute;
    right: 0px;
    top: -90px;
    z-index: -10;"></div>    
<div id="grad2" style="    height: 300px;
    width: 300px;
    background-image: radial-gradient(#f8b904 0%, #0000ff00 70%, #0000ff00);
    position: absolute;
    right: 50px;
    top: 100px;
    z-index: -10;"></div>
</div>
<div style="margin-top: -400px">

<div class="right-text" style="width: 12vw;
    max-width: 200px;">
    <div style="font-size: 2.2em;
    font-weight: 200;
    width: 308px;
    position: relative;">
Hello!<br/>
I am Atul Lal.<br/>
</div>
<div class="sub-text">
Graduate Student at Boston University doing Masters in Computer Science
</div>
</div>
<svg 
style="margin-top: 40px; overflow: visible;"
	 viewBox="0 0 788.6 194.2">

<linearGradient id = "g1" x = "0%" y = "100%">
    <stop stop-color = "#f2ee27" offset = "0%"/>
    <stop stop-color = "#f9b704" offset = "100%"/>
</linearGradient>

<path id="curve" fill="transparent"  d="M0,17.1h149.1c73.7,0,144.4,29.3,196.6,81.5l0,0c52.1,52.1,122.9,81.4,196.6,81.4h243.4"/>
<text  fill = "url(#g1)" width="500">
    <textPath style="font-size: 4.15em;
    font-weight: 800;" xlink:href="#curve">
    I am a software developer.
    </textPath>
  </text>
</svg>

<div class="right-text sub-text" style="text-align: right; width: 12vw;
    max-width: 200px; float: right;">
Currently obsessed about stream processing systems.
</div>
</div>

<div style="margin-top: 150px;">
<div class="fun">
<div class="row">
    <div class="col-md-7">
        <div class="image-collection">
        <div id="grad-fun1" class="fun-grad"><div id="grad-fun11" class="fun-grad"></div></div>
        <img id="fun1" src="{{ site.baseurl }}/assets/images/deniro.jpg" class="sq-img" onmouseover="changeText(1)">
        <div id="grad-fun2" class="fun-grad display-none"><div id="grad-fun21" class="fun-grad"></div></div>
        <img id="fun2" src="{{ site.baseurl }}/assets/images/davies.jpg" class="sq-img" onmouseover="changeText(2)">
        <br/>
        <div id="grad-fun3" class="fun-grad display-none"><div id="grad-fun31" class="fun-grad"></div></div>
        <img id="fun3" src="{{ site.baseurl }}/assets/images/monet.jpg" class="sq-img" onmouseover="changeText(3)">
        <div id="grad-fun4" class="fun-grad display-none"><div id="grad-fun41" class="fun-grad"></div></div>
        <img id="fun4" src="{{ site.baseurl }}/assets/images/modric.jpg" class="sq-img" onmouseover="changeText(4)">
        </div>
    </div>
    <div class="col-md-5">
        <div class="text-fun">
        <h2 id="fun-title" style="font-weight: 700">Movies</h2>
        </div>
        <div id="text-fun-desc">
        As a movie lover, I enjoy diverse genres and styles. From the intricate and intense films of David Fincher to the whimsical and offbeat tales of Wes Anderson. I have a soft spot for artsy French New Wave, thrilling suspense movies, and thought-provoking sci-fi films.
            <br/><br/>
            <div class="button-topper">
            Check out my Letterboxd profile:
            </div>
            <a id="letterboxd" href="https://letterboxd.com/atullal/"><img class="logo" src="https://a.ltrbxd.com/logos/letterboxd-logo-h-neg-rgb.svg" alt="Letterboxd Logo" width="200" height="40"></a>
        </div>
    </div>
</div>
</div>

<script>
    function changeText(num) {
        let title = "Movies";
        let desc = "";
        if (num == 1){
            title = "Movies";
            desc = `As a movie lover, I enjoy diverse genres and styles. From the intricate and intense films of David Fincher to the whimsical and offbeat tales of Wes Anderson. I have a soft spot for artsy French New Wave, thrilling suspense movies, and thought-provoking sci-fi films.
            <br/><br/>
            <div class="button-topper">
            Check out my Letterboxd profile:
            </div>
            <a id="letterboxd" href="https://letterboxd.com/atullal/"><img class="logo" src="https://a.ltrbxd.com/logos/letterboxd-logo-h-neg-rgb.svg" alt="Letterboxd Logo" width="200" height="40"></a>`;
        }
        if (num == 2) {
            title = "Music";
            desc = `I am equally captivated by the timeless elegance of Mozart and the modern rhythms of Kendrick Lamar. The soulful jazz of Donald Byrd, the gritty lyrics of Prabh Deep, and the ethereal melodies of Frank Ocean, I find solace in the introspective sounds of Sufjan Stevens and the electric energy of Elton John's rock anthems.<br/><br/>
            <a class="apple-music" href="https://music.apple.com/profile/atullal"><img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Apple_Music_icon.svg" alt="Apple Music Logo" width="60" height="40"> Follow on Apple Music </a>`;
        }
        if (num == 3) {
            title = "Art";
            desc = `From the classics of Monet and Van Gogh to the modern works of Basquiat and Warhol, I find beauty and inspiration in all forms of art. Whether I am admiring a breathtaking landscape painting or a thought-provoking digital creation by La Robotte, art has the power to transport to another world and evoke a range of emotions. I believe that art is an essential part of the human experience.`;
        }
        if (num == 4) {
            title = "Sports";
            desc = `My love for Real Madrid runs deep. The iconic white kit, electric atmosphere of the Santiago Bernabeu Stadium, and watching the team dominate with incredible players, always leaves me in awe. I am part of a global community with a shared passion for one of the greatest football clubs in history. Hala Madrid!`;
        }

        if(!document.getElementById('grad-fun1').classList.contains('display-none')) {
            document.getElementById('grad-fun1').classList.add('display-none');
        }
        if(!document.getElementById('grad-fun2').classList.contains('display-none')) {
            document.getElementById('grad-fun2').classList.add('display-none');
        }
        if(!document.getElementById('grad-fun3').classList.contains('display-none')) {
            document.getElementById('grad-fun3').classList.add('display-none');
        }
        if(!document.getElementById('grad-fun4').classList.contains('display-none')) {
            document.getElementById('grad-fun4').classList.add('display-none');
        }


        document.getElementById('grad-fun'+num).classList.remove('display-none');

		document.getElementById('fun-title').innerHTML = title;
		document.getElementById('text-fun-desc').innerHTML = desc;
    }
</script>
</div>