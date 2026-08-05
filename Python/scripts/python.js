/* 
    Created on : June 11, 2018, 07:30:48 PM
    Author     : Samuel Chukwuemeka
    www.samuelchukwuemeka.com
    www.chukwuemekasamuel.com
    www.samdomforpeace.com
    www.chukwuemeka-samuel.appspot.com
*/

// Tabbed Menu 0 : Special - α, ß
function openMenu0(evt, menuName0) {
   var α, ß, tablinks0;
   ß = document.getElementsByClassName("menu0");
   for (α = 0; α < ß.length; α++) {
      ß[α].style.display = "none";
   }
   tablinks0 = document.getElementsByClassName("tablink0");
   for (α = 0; α < ß.length; α++) {
      tablinks0[α].className = tablinks0[α].className.replace(" w3-green", "");
   }
   document.getElementById(menuName0).style.display = "block";
   evt.currentTarget.firstElementChild.className += " w3-green";
 }
 document.getElementById("myLink0").click();


 // Tabbed Menu 1 : Special - Γ, π
function openMenu1(evt, menuName1) {
   var Γ, π, tablinks1;
   π = document.getElementsByClassName("menu1");
   for (Γ = 0; Γ < π.length; Γ++) {
      π[Γ].style.display = "none";
   }
   tablinks1 = document.getElementsByClassName("tablink1");
   for (Γ = 0; Γ < π.length; Γ++) {
      tablinks1[Γ].className = tablinks1[Γ].className.replace(" w3-green", "");
   }
   document.getElementById(menuName1).style.display = "block";
   evt.currentTarget.firstElementChild.className += " w3-green";
 }
 document.getElementById("myLink1").click();

// Tabbed Menu - a, b, no number
function openMenu(evt, menuName) {
  var a, b, tablinks;
  b = document.getElementsByClassName("menu");
  for (a = 0; a < b.length; a++) {
     b[a].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (a = 0; a < b.length; a++) {
     tablinks[a].className = tablinks[a].className.replace(" w3-green", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-green";
}
document.getElementById("myLink").click();


// Tabbed Menu - Resources - c, d, 2 
function openMenu2(evt2, menuName2) {
   var c, d, tablinks2;
   d = document.getElementsByClassName("menu2");
   for (c = 0; c < d.length; c++) {
      d[c].style.display = "none";
   }
   tablinks2 = document.getElementsByClassName("tablink2");
   for (c = 0; c < d.length; c++) {
      tablinks2[c].className = tablinks2[c].className.replace(" w3-green", "");
   }
   document.getElementById(menuName2).style.display = "block";
   evt2.currentTarget.firstElementChild.className += " w3-green";
 }
 document.getElementById("myLink2").click();

 
 // Tabbed Menu - Resources - e, f, 3
function openMenu3(evt3, menuName3) {
   var e, f, tablinks3;
   f = document.getElementsByClassName("menu3");
   for (e = 0; e < f.length; e++) {
      f[e].style.display = "none";
   }
   tablinks3 = document.getElementsByClassName("tablink3");
   for (e = 0; e < f.length; e++) {
      tablinks3[e].className = tablinks3[e].className.replace(" w3-green", "");
   }
   document.getElementById(menuName3).style.display = "block";
   evt3.currentTarget.firstElementChild.className += " w3-green";
 }
 document.getElementById("myLink3").click();


 // Tabbed Menu - Resources - g, h, 4
function openMenu4(evt4, menuName4) {
   var g, h, tablinks4;
   h = document.getElementsByClassName("menu4");
   for (g = 0; g < h.length; g++) {
      h[g].style.display = "none";
   }
   tablinks4 = document.getElementsByClassName("tablink4");
   for (g = 0; g < h.length; g++) {
      tablinks4[g].className = tablinks4[g].className.replace(" w3-green", "");
   }
   document.getElementById(menuName4).style.display = "block";
   evt4.currentTarget.firstElementChild.className += " w3-green";
 }
 document.getElementById("myLink4").click();


 // Tabbed Menu - Resources - i, j, 5
function openMenu5(evt5, menuName5) {
   var i, j, tablinks5;
   j = document.getElementsByClassName("menu5");
   for (i = 0; i < j.length; i++) {
      j[i].style.display = "none";
   }
   tablinks5 = document.getElementsByClassName("tablink5");
   for (i = 0; i < j.length; i++) {
      tablinks5[i].className = tablinks5[i].className.replace(" w3-green", "");
   }
   document.getElementById(menuName5).style.display = "block";
   evt5.currentTarget.firstElementChild.className += " w3-green";
 }
 document.getElementById("myLink5").click();


 // Tabbed Menu - Resources - k, l, 6
function openMenu6(evt6, menuName6) {
   var k, l, tablinks6;
   l = document.getElementsByClassName("menu6");
   for (k = 0; k < l.length; k++) {
      l[k].style.display = "none";
   }
   tablinks6 = document.getElementsByClassName("tablink6");
   for (k = 0; k < l.length; k++) {
      tablinks6[k].className = tablinks6[k].className.replace(" w3-green", "");
   }
   document.getElementById(menuName6).style.display = "block";
   evt6.currentTarget.firstElementChild.className += " w3-green";
 }
 document.getElementById("myLink6").click();


 // Tabbed Menu - Resources - m, n, 7
function openMenu7(evt7, menuName7) {
   var m, n, tablinks7;
   n = document.getElementsByClassName("menu7");
   for (m = 0; m < n.length; m++) {
      n[m].style.display = "none";
   }
   tablinks7 = document.getElementsByClassName("tablink7");
   for (m = 0; m < n.length; m++) {
      tablinks7[m].className = tablinks7[m].className.replace(" w3-green", "");
   }
   document.getElementById(menuName7).style.display = "block";
   evt7.currentTarget.firstElementChild.className += " w3-green";
 }
 document.getElementById("myLink7").click();


 // Tabbed Menu - Resources - o, p, 8
function openMenu8(evt8, menuName8) {
   var o, p, tablinks8;
   p = document.getElementsByClassName("menu8");
   for (o = 0; o < p.length; o++) {
      p[o].style.display = "none";
   }
   tablinks8 = document.getElementsByClassName("tablink8");
   for (o = 0; o < p.length; o++) {
      tablinks8[o].className = tablinks8[o].className.replace(" w3-green", "");
   }
   document.getElementById(menuName8).style.display = "block";
   evt8.currentTarget.firstElementChild.className += " w3-green";
 }
 document.getElementById("myLink8").click();


 // Tabbed Menu - Resources - q, r, 9
function openMenu9(evt9, menuName9) {
   var q, r, tablinks9;
   r = document.getElementsByClassName("menu9");
   for (q = 0; q < r.length; q++) {
      r[q].style.display = "none";
   }
   tablinks9 = document.getElementsByClassName("tablink9");
   for (q = 0; q < r.length; q++) {
      tablinks9[q].className = tablinks9[q].className.replace(" w3-green", "");
   }
   document.getElementById(menuName9).style.display = "block";
   evt9.currentTarget.firstElementChild.className += " w3-green";
 }
 document.getElementById("myLink9").click();
 

 // Tabbed Menu - Resources - s, t, 10
 function openMenu10(evt10, menuName10) {
   var s, t, tablinks10;
   t = document.getElementsByClassName("menu10");
   for (s = 0; s < t.length; s++) {
      t[s].style.display = "none";
   }
   tablinks10 = document.getElementsByClassName("tablink10");
   for (s = 0; s < t.length; s++) {
      tablinks10[s].className = tablinks10[s].className.replace(" w3-green", "");
   }
   document.getElementById(menuName10).style.display = "block";
   evt10.currentTarget.firstElementChild.className += " w3-green";
 }
 document.getElementById("myLink10").click();


// Tabbed Menu - Resources - u, v, 11
function openMenu11(evt11, menuName11) {
   var u, v, tablinks11;
   v = document.getElementsByClassName("menu11");
   for (u = 0; u < v.length; u++) {
      v[u].style.display = "none";
   }
   tablinks11 = document.getElementsByClassName("tablink11");
   for (u = 0; u < v.length; u++) {
      tablinks11[u].className = tablinks11[u].className.replace(" w3-green", "");
   }
   document.getElementById(menuName11).style.display = "block";
   evt11.currentTarget.firstElementChild.className += " w3-green";
 }
 document.getElementById("myLink11").click();


 // Tabbed Menu - Resources - w, x, 12
function openMenu12(evt12, menuName12) {
   var w, x, tablinks12;
   x = document.getElementsByClassName("menu12");
   for (w = 0; w < x.length; w++) {
      x[w].style.display = "none";
   }
   tablinks12 = document.getElementsByClassName("tablink12");
   for (w = 0; w < x.length; w++) {
      tablinks12[w].className = tablinks12[w].className.replace(" w3-green", "");
   }
   document.getElementById(menuName12).style.display = "block";
   evt12.currentTarget.firstElementChild.className += " w3-green";
 }
 document.getElementById("myLink12").click();


 // Tabbed Menu - Resources - y, z, 13
function openMenu13(evt13, menuName13) {
   var y, z, tablinks13;
   z = document.getElementsByClassName("menu13");
   for (y = 0; y < z.length; y++) {
      z[y].style.display = "none";
   }
   tablinks13 = document.getElementsByClassName("tablink13");
   for (y = 0; y < z.length; y++) {
      tablinks13[y].className = tablinks13[y].className.replace(" w3-green", "");
   }
   document.getElementById(menuName13).style.display = "block";
   evt13.currentTarget.firstElementChild.className += " w3-green";
 }
 document.getElementById("myLink13").click();


 // Tabbed Menu - Resources - ab, cd, 14
function openMenu14(evt14, menuName14) {
   var ab, cd, tablinks14;
   cd = document.getElementsByClassName("menu14");
   for (ab = 0; ab < cd.length; ab++) {
      cd[ab].style.display = "none";
   }
   tablinks14 = document.getElementsByClassName("tablink14");
   for (ab = 0; ab < cd.length; ab++) {
      tablinks14[ab].className = tablinks14[ab].className.replace(" w3-green", "");
   }
   document.getElementById(menuName14).style.display = "block";
   evt14.currentTarget.firstElementChild.className += " w3-green";
 }
 document.getElementById("myLink14").click();


 // Tabbed Menu - Resources - ef, gh, 15
function openMenu15(evt15, menuName15) {
   var ef, gh, tablinks15;
   gh = document.getElementsByClassName("menu15");
   for (ef = 0; ef < gh.length; ef++) {
      gh[ef].style.display = "none";
   }
   tablinks15 = document.getElementsByClassName("tablink15");
   for (ef = 0; ef < gh.length; ef++) {
      tablinks15[ef].className = tablinks15[ef].className.replace(" w3-green", "");
   }
   document.getElementById(menuName15).style.display = "block";
   evt15.currentTarget.firstElementChild.className += " w3-green";
 }
 document.getElementById("myLink15").click();



  // Tabbed Menu - Resources - ij, kl, 16
function openMenu16(evt16, menuName16) {
   var ij, kl, tablinks16;
   kl = document.getElementsByClassName("menu16");
   for (ij = 0; ij < kl.length; ij++) {
      kl[ij].style.display = "none";
   }
   tablinks16 = document.getElementsByClassName("tablink16");
   for (ij = 0; ij < kl.length; ij++) {
      tablinks16[ij].className = tablinks16[ij].className.replace(" w3-green", "");
   }
   document.getElementById(menuName16).style.display = "block";
   evt16.currentTarget.firstElementChild.className += " w3-green";
 }
 document.getElementById("myLink16").click();


 // Tabbed Menu - Resources - mn, op, 17
function openMenu17(evt17, menuName17) {
   var mn, op, tablinks17;
   op = document.getElementsByClassName("menu17");
   for (mn = 0; mn < op.length; mn++) {
      op[mn].style.display = "none";
   }
   tablinks17 = document.getElementsByClassName("tablink17");
   for (mn = 0; mn < op.length; mn++) {
      tablinks17[mn].className = tablinks17[mn].className.replace(" w3-green", "");
   }
   document.getElementById(menuName17).style.display = "block";
   evt17.currentTarget.firstElementChild.className += " w3-green";
 }
 document.getElementById("myLink17").click();


 // Tabbed Menu - Resources - qr, st, 18
function openMenu18(evt18, menuName18) {
   var qr, st, tablinks18;
   st = document.getElementsByClassName("menu18");
   for (qr = 0; qr < st.length; qr++) {
      st[qr].style.display = "none";
   }
   tablinks18 = document.getElementsByClassName("tablink18");
   for (qr = 0; qr < st.length; qr++) {
      tablinks18[qr].className = tablinks18[qr].className.replace(" w3-green", "");
   }
   document.getElementById(menuName18).style.display = "block";
   evt18.currentTarget.firstElementChild.className += " w3-green";
 }
 document.getElementById("myLink18").click();


// Tabbed Menu - Resources - uv, wx, 19 
function openMenu19(evt19, menuName19) {
   var uv, wx, tablinks19;
   wx = document.getElementsByClassName("menu19");
   for (uv = 0; uv < wx.length; uv++) {
      wx[uv].style.display = "none";
   }
   tablinks19 = document.getElementsByClassName("tablink19");
   for (uv = 0; uv < wx.length; uv++) {
      tablinks19[uv].className = tablinks19[uv].className.replace(" w3-green", "");
   }
   document.getElementById(menuName19).style.display = "block";
   evt19.currentTarget.firstElementChild.className += " w3-green";
 }
 document.getElementById("myLink19").click();


/*
 // Checkbox
 var toggler = document.getElementsByClassName("box");
 var τ;

 for(τ = 0; τ < toggler.length; τ++){
    toggler[τ].addEventListener("click", function(){
      this.parentElement.querySelector(".nested").classList.toggle("active");
      this.classList.toggle("check-box");
    });
 }


 // Caret
 var toggler = document.getElementsByClassName("box");
 var ε;

 for(ε = 0; ε < toggler.length; ε++){
    toggler[ε].addEventListener("click", function(){
      this.parentElement.querySelector(".nested").classList.toggle("active");
      this.classList.toggle("caret-down");
    });
 }

 */