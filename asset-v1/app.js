/* 1.2.1 2021-04-23 18:14:05 */
var app=new function(){this.name="Mono",this.version="1",this.date="2023",this.folder="asset-v1/",this.looptime=8000,this.bpm=120,this.totalframe=328,this.nbpolo=7,this.nbloopbonus=2,this.bonusloopA=!1,this.bonusendloopA=!1,this.recmaxloop=34,this.recminloop=4,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepicto="game-picto.png",this.colBck="#121212",this.col0="#919191",this.col1="#5f5f5f",this.col2="#4b4b4b",this.col3="#373737",this.col4="#232323",this.animearray=[{name:"1_kick",color:"828282",uniqsnd:!1},{name:"2_snare",color:"828282",uniqsnd:!1},{name:"3_hit",color:"828282",uniqsnd:!0},{name:"4_kity",color:"828282",uniqsnd:!0},{name:"5_echo",color:"828282",uniqsnd:!0},{name:"6_bass",color:"828282",uniqsnd:!1},{name:"7_accumulate",color:"828282",uniqsnd:!1},{name:"8_chime",color:"828282",uniqsnd:!0},{name:"9_turn",color:"828282",uniqsnd:!0},{name:"10_cluttered",color:"828282",uniqsnd:!1},{name:"11_moonlight",color:"828282",uniqsnd:!1},{name:"12_knocking",color:"828282",uniqsnd:!1},{name:"13_guitar",color:"828282",uniqsnd:!1},{name:"14_piano",color:"828282",uniqsnd:!0},{name:"15_sad",color:"828282",uniqsnd:!1}],this.bonusarray=[/*No bonuses?*/];for(var n=0,o=this.animearray.length;n<o;n++){var a=this.animearray[n].name;this.animearray[n].soundA=a+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?a+"_a":a+"_b",this.animearray[n].anime=a+"-sprite.png",this.animearray[n].animeData=a+".json"}};