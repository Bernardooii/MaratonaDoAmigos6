class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      'playerCount': count
    });
  }
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  remove(){
    var player1 = "players/player1";
    var player2 = "players/player2";
    var player3 = "players/player3";
    var player4 = "players/player4";
    database.ref(player1).remove();
    database.ref(player2).remove();
    database.ref(player3).remove();
    database.ref(player4).remove();
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  getAmgsNofim(){
    database.ref("AmgsNofim").on("value",(data)=>{
      this.rank = data.val();
    })
  }
  static updateAmg(rank){
    database.ref("/").update({
      AmgsNofim:rank
    });
  }
}