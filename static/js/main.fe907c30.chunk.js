(this.webpackJsonpbingo=this.webpackJsonpbingo||[]).push([[0],{40:function(e,t,i){e.exports=i(61)},45:function(e,t,i){},46:function(e,t,i){},61:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),c=i(11),r=i.n(c),o=(i(45),i(46),i(8)),d=i.n(o),p=i(16),s=i(28),l=i(15),m=i(37),u=i(36),k=i(76),g=i(78),f=i(29),h=i.n(f);var b=function(e){var t=0;return e[0].picked&&e[5].picked&&e[10].picked&&e[15].picked&&e[20].picked&&t++,e[1].picked&&e[6].picked&&e[11].picked&&e[16].picked&&e[21].picked&&t++,e[2].picked&&e[7].picked&&e[12].picked&&e[17].picked&&e[22].picked&&t++,e[3].picked&&e[8].picked&&e[13].picked&&e[18].picked&&e[23].picked&&t++,e[4].picked&&e[9].picked&&e[14].picked&&e[19].picked&&e[24].picked&&t++,e[0].picked&&e[1].picked&&e[2].picked&&e[3].picked&&e[4].picked&&t++,e[5].picked&&e[6].picked&&e[7].picked&&e[8].picked&&e[9].picked&&t++,e[10].picked&&e[11].picked&&e[12].picked&&e[13].picked&&e[14].picked&&t++,e[15].picked&&e[16].picked&&e[17].picked&&e[18].picked&&e[19].picked&&t++,e[20].picked&&e[21].picked&&e[22].picked&&e[23].picked&&e[24].picked&&t++,e[0].picked&&e[6].picked&&e[12].picked&&e[18].picked&&e[24].picked&&t++,e[4].picked&&e[8].picked&&e[12].picked&&e[16].picked&&e[20].picked&&t++,t};function v(e,t,i,a,n,c){return e[t].picked&&e[i].picked&&e[a].picked&&e[n].picked&&!e[c].picked?e[c].number:e[t].picked&&e[i].picked&&e[a].picked&&e[c].picked&&!e[n].picked?e[n].number:e[t].picked&&e[i].picked&&e[n].picked&&e[c].picked&&!e[a].picked?e[a].number:e[t].picked&&e[a].picked&&e[n].picked&&e[c].picked&&!e[i].picked?e[i].number:e[i].picked&&e[a].picked&&e[n].picked&&e[c].picked&&!e[t].picked?e[t].number:void 0}function E(e,t,i,a,n,c){return e[t].picked&&e[i].picked&&e[a].picked&&!e[n].picked&&!e[c].picked?e[n].number:e[t].picked&&e[i].picked&&e[n].picked&&!e[a].picked&&!e[c].picked||e[t].picked&&e[i].picked&&e[c].picked&&!e[a].picked&&!e[n].picked?e[a].number:e[t].picked&&e[a].picked&&e[n].picked&&!e[i].picked&&!e[c].picked||e[t].picked&&e[a].picked&&e[c].picked&&!e[i].picked&&!e[n].picked||e[t].picked&&e[n].picked&&e[c].picked&&!e[i].picked&&!e[a].picked?e[i].number:e[i].picked&&e[a].picked&&e[n].picked&&!e[t].picked&&!e[c].picked||e[i].picked&&e[a].picked&&e[c].picked&&!e[t].picked&&!e[n].picked||e[a].picked&&e[n].picked&&e[c].picked&&!e[t].picked&&!e[i].picked?e[t].number:-1}var N=function(e){var t=v(e,0,5,10,15,20);return t>=0||(t=v(e,1,6,11,16,21))>=0||(t=v(e,2,7,12,17,22))>=0||(t=v(e,3,8,13,18,23))>=0||(t=v(e,4,9,14,19,24))>=0||(t=v(e,0,1,2,3,4))>=0||(t=v(e,5,6,7,8,9))>=0||(t=v(e,10,11,12,13,14))>=0||(t=v(e,15,16,17,18,19))>=0||(t=v(e,20,21,22,23,24))>=0||(t=E(e,0,5,10,15,20))>=0||(t=E(e,1,6,11,16,21))>=0||(t=E(e,2,7,12,17,22))>=0||(t=E(e,3,8,13,18,23))>=0||(t=E(e,4,9,14,19,24))>=0||(t=E(e,0,1,2,3,4))>=0||(t=E(e,5,6,7,8,9))>=0||(t=E(e,10,11,12,13,14))>=0||(t=E(e,15,16,17,18,19))>=0||(t=E(e,20,21,22,23,24))>=0?t:-1};var w=function(e){var t=N(e);if(console.log(t),t>0)return t;var i=Math.floor(25*Math.random())+0;for(console.log("randomIndex"+i+" randomNumber "+e[i].number+" picked "+e[i].picked);e[i].picked;)console.log("randomIndex"+i+" randomNumber "+e[i].number+" picked "+e[i].picked),i=Math.floor(25*Math.random())+0;return e[i].number};function B(e,t){for(var i=0;i<e.length;i++)if(e[i].number===t)return!0;return!1}var M=function(){for(var e=Math.floor(25*Math.random())+1,t={number:e,picked:!1},i=[t],a=0;a<24;a++){for(e=Math.floor(25*Math.random())+1;B(i,e);)e=Math.floor(25*Math.random())+1;t={number:e,picked:!1},i.push(t)}return console.log(i),i};var y=function(e,t,i){return n.a.createElement("div",{className:"modalTableEach"},n.a.createElement("p",{className:"modalTablePlayerId"},e?"Computer":"You"),n.a.createElement(k.a,{cellHeight:100,spacing:0,className:"inModalGridList",cols:5},t.map((function(e){return n.a.createElement(g.a,{className:e.gained?"inModalGridListTile inModalBingoGridListTileGained":"inModalGridListTile",key:e.letter,cols:1,rows:.5},n.a.createElement("button",{className:e.gained?"inModalBingoLetter inModalBingoLetterGained":"inModalBingoLetter"},e.letter))}))),n.a.createElement(k.a,{cellHeight:1,spacing:0,cols:5,style:{flex:"1"}},t.map((function(e){return n.a.createElement(g.a,{key:e.letter,rows:.2})}))),n.a.createElement(k.a,{cellHeight:100,spacing:0,className:"inModalGridList",cols:5},i.map((function(e){return n.a.createElement(g.a,{className:"inModalGridListTile",key:e.number,cols:1,rows:.5},n.a.createElement("button",{className:e.picked?"inModalBtn inModalTouched":"inModalBtn"},e.number))}))))},G=i(34),T=i.n(G),x=i(77),S=function(e){Object(m.a)(i,e);var t=Object(u.a)(i);function i(){var e;return Object(s.a)(this,i),(e=t.call(this)).pick=function(){var t=Object(p.a)(d.a.mark((function t(i){var a,n,c,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=e.state.items,n=0;n<25;n++)e.state.items[n].number===i&&(a[n].picked=!0,e.setState({items:a}));return t.next=4,e.checkForBingoUpdate();case 4:for(c=e.state.computerGrid,r=0;r<25;r++)e.state.computerGrid[r].number===i&&(c[r].picked=!0,e.setState({computerGrid:c}));return t.next=8,e.computerCheckForBingoUpdate();case 8:return t.next=10,e.computerTurn();case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.checkForBingoUpdate=Object(p.a)(d.a.mark((function t(){var i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=b(e.state.items),e.outputBingoState(i);case 2:case"end":return t.stop()}}),t)}))),e.outputBingoState=function(t){for(var i=e.state.bingo,a=0;a<t&&a<5;a++)i[a].gained=!0;e.setState({bingo:i}),t>=5&&e.setState({gameEnded:!0,winner:0})},e.computerPick=Object(p.a)(d.a.mark((function t(){var i,a,n,c,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.state.gameEnded){for(i=w(e.state.computerGrid),a=e.state.items,n=0;n<25;n++)e.state.items[n].number===i&&(a[n].picked=!0,e.setState({items:a}));for(e.checkForBingoUpdate(),c=e.state.computerGrid,r=0;r<25;r++)e.state.computerGrid[r].number===i&&(c[r].picked=!0,e.setState({computerGrid:c}));e.computerCheckForBingoUpdate()}case 1:case"end":return t.stop()}}),t)}))),e.computerCheckForBingoUpdate=Object(p.a)(d.a.mark((function t(){var i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=b(e.state.computerGrid),e.computerOutputBingoState(i);case 2:case"end":return t.stop()}}),t)}))),e.computerOutputBingoState=function(t){for(var i=e.state.computerBingo,a=0;a<t&&a<5;a++)i[a].gained=!0;e.setState({computerBingo:i}),t>=5&&e.setState({gameEnded:!0,winner:1})},e.computerTurn=Object(p.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({computerTurn:!0}),t.next=3,e.sleep(800);case 3:return t.next=5,e.computerPick();case 5:e.setState({computerTurn:!1});case 6:case"end":return t.stop()}}),t)}))),e.sleep=function(e){return new Promise((function(t){return setTimeout(t,e)}))},e.gameRestart=function(){e.setState({items:M(),bingo:[{letter:"B",gained:!1},{letter:"I",gained:!1},{letter:"N",gained:!1},{letter:"G",gained:!1},{letter:"O",gained:!1}],computerGrid:M(),computerBingo:[{letter:"B",gained:!1},{letter:"I",gained:!1},{letter:"N",gained:!1},{letter:"G",gained:!1},{letter:"O",gained:!1}],gameEnded:!1}),console.log("RESTARTING")},e.state={computerTurn:!1,bingo:[{letter:"B",gained:!1},{letter:"I",gained:!1},{letter:"N",gained:!1},{letter:"G",gained:!1},{letter:"O",gained:!1}],items:M(),computerBingo:[{letter:"B",gained:!1},{letter:"I",gained:!1},{letter:"N",gained:!1},{letter:"G",gained:!1},{letter:"O",gained:!1}],computerGrid:M(),gameEnded:!1,winner:2},e}return Object(l.a)(i,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"gridRoot"},n.a.createElement(x.a,{className:"resetButton",variant:"contained",color:"secondary",onClick:function(){window.confirm("Are you sure you wish to restart the game?")&&e.gameRestart()}},n.a.createElement(T.a,{className:"resetButtonIcon",fontSize:"large"})),n.a.createElement(k.a,{style:{height:100,padding:0,margin:0},cellHeight:100,spacing:0,className:"gridList",cols:5},this.state.bingo.map((function(e){return n.a.createElement(g.a,{className:e.gained?"gridListTile bingoGridListTileGained":"gridListTile",key:e.letter,cols:1,rows:.5},n.a.createElement("button",{className:e.gained?"bingoLetter bingoLetterGained":"bingoLetter"},e.letter))}))),n.a.createElement(k.a,{cellHeight:100,spacing:0,className:"gridList",cols:5},this.state.items.map((function(t){return n.a.createElement(g.a,{className:"gridListTile",key:t.number,cols:1,rows:.5},n.a.createElement("button",{className:t.picked?"btn touched":"btn",disabled:t.picked||e.state.computerTurn,onMouseDown:e.toggleTouched,onMouseUp:e.handleMouseUp,onClick:function(){return e.pick(t.number)}},t.number))}))),n.a.createElement("p",{className:this.state.computerTurn?"computerPlayingTextShow":"computerPlayingTextHide"},"Computer is playing.."),n.a.createElement(h.a,{style:{border:"1px solid #ccc"},isOpen:this.state.gameEnded,contentLabel:"Minimal Modal Example"},n.a.createElement("div",{className:"modal"},n.a.createElement("div",{className:"modalResultDiv"},n.a.createElement("div",{className:"resultsMessage"},this.state.winner?"You Lost :( Try Again":"You Won!!")),n.a.createElement("div",{className:"modalTablesDiv"},n.a.createElement("div",{style:{flex:1}}),y(0,this.state.bingo,this.state.items),n.a.createElement("div",{style:{flex:1}}),y(1,this.state.computerBingo,this.state.computerGrid),n.a.createElement("div",{style:{flex:1}})),n.a.createElement("div",{className:"modalPlayAgainDiv"},n.a.createElement(x.a,{onClick:this.gameRestart,variant:"contained",color:"primary"},"NEW GAME")))))}}]),i}(a.Component),L=i(35),O=i.n(L);var C=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"leftAndRight"}),n.a.createElement("div",{className:"center"},n.a.createElement("h1",{className:"titleText"},"Play 5x5 Bingo"),n.a.createElement(S,null)),n.a.createElement("div",{className:"leftAndRight"},n.a.createElement("a",{style:{backgroundColor:"#000000",color:"#000000"},href:"https://github.com/haifanm/Bingo",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(O.a,{style:{position:"absolute",right:"8",bottom:"8"},fontSize:"large"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement("title",null,"Scratch - A simple note taking app"),n.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.fe907c30.chunk.js.map