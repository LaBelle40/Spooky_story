const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    BUS_STATION_WAIT: Symbol("station_wait"),
    BUS_ARRIVAL: Symbol("arrival"),
    BUS_MOVEMENT:Symbol("bus_movement"),
    PATH_ROUTE:Symbol("path_route"),
    TRAIL_ROUTE:Symbol("trail_route"),
    WOOD_WALKING:Symbol("wood_walk"),
});

module.exports = class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "Your friends invite you to go camping in the woods, when you come to the bus station to meet them its empty and you see nobody there do you WAIT there, do you CALL your friends or GO back home ?";
                this.stateCur = GameState.BUS_STATION_WAIT;
                break;
            case GameState.BUS_STATION_WAIT:
                if(sInput.toLowerCase().match("call")){
                    sReply = "You call your friends and nobody picks up so you decide to wait there or Do you keep calling your friend?";
                }else if(sInput.toLowerCase().match("wait")){
                    sReply = "Soon a bus comes and there is no driver nor is there passengers it looks spooky. Do you GO in or do you WAIT longer?";
                    this.stateCur = GameState.BUS_ARRIVAL;
                }else{
                    sReply ="You decided to go back home. adventure ends...";
                    this.stateCur = GameState.WELCOMING;
                }
                break;
            case GameState.BUS_ARRIVAL:
                if(sInput.toLowerCase().match("go")){
                    sReply = "You enter the bus and the door shuts it seems to drive itself and soon takes you to a dark and empty forest. There is a trail that look old and a path that seems to go deeper into the forest, there seems to be voices at the end so do you go down the PATH or down the TRAIL?"
                    this.stateCur = GameState.BUS_MOVEMENT;
                }else{
                    sReply = "The bus leaves and you decide to walk to the woods instead. You come across a ranger lounge near the camping ground but nobody there. But there is a phone ringing. You also hear voices outside. Do you PICK the phone or FOLLOW the voices?";
                    this.stateCur = GameState.WOOD_WALKING;

                }
                break;
                case GameState.WOOD_WALKING:
                    if(sInput.toLowerCase().match("pick")){
                        sReply = "You pick the phone and static is all that you hear under the static you hear the words “camp site 15” and you decide to head there you are surprised by your friends at the camp site and they tell you all about a prank they had prepared for you with them being ghosts . You have a nice time and go home safely";
                        sReply+="\n\n GAME ENDING: Prank  missed. !!!";
                        this.stateCur = GameState.WELCOMING;
    
                    }else{
                        sReply = "You follow the voices and you find your friends in a tent with a phone one of them is whispering into the phone you yell “GOT YOU!” and they all jump in surprise they tell you about the prank they had planned you all had a nice night and you went home feeling clever for catching them.";
                        sReply+="\n\n GAME ENDING: The tables have turned.  !!!";
                        this.stateCur = GameState.WELCOMING;
        
                    }
                    break;
            case GameState.BUS_MOVEMENT:
                if(sInput.toLowerCase().match("path")){
                    sReply = "You head down the old beaten path and come across an old camping site, camp site 15, you recognize that the equipment belongs to your friends and as you examine the site a troop of ghostly figures ambles slowly towards you muttering phrases like “come closer” and “let us help you” do you GO closer or RUN away?";
                    this.stateCur = GameState.PATH_ROUTE;

                }else{
                    sReply = "You go down the trail deeper into the dark forest and you come across a wall of briars and a ghostly figure comes through and he begins to chase you. As you run down the trail white hands stick out the side of the bushes and try to grab you at the end of the trail another ghostly figure blocks the way as both figures close in on you, they shout “surprise!” and wipe white paint off of their faces. Its your friends! And the whole thing was a prank you all head home and have a nice rest but you still wonder about the bus";
                    sReply+="\n\n GAME ENDING: Prank success !!!";
                    this.stateCur = GameState.WELCOMING; 
                }
                break;
                case GameState.PATH_ROUTE:
                    if(sInput.toLowerCase().match("go")){
                        sReply = "You go closer and they grab your arms and tickle you. It was a prank! Your friends planned the whole thing but the bus is a mystery"
                        sReply+="\n\n GAME ENDING: Prank success !!!";
                        this.stateCur = GameState.WELCOMING;
                    }else{
                        sReply = "You Start to run and the ghost call you back in normal voices they wipe the white paint off their faces and it turns out to be your friends they tell you it was all a prank and that the driver of the bus was hiding you took the prank to seriously and head home steaming";
                        sReply+="\n\n GAME ENDING: Annoyed !!!";
                        this.stateCur = GameState.WELCOMING;
    
                    }
                    break;
                    
           
        }
        return([sReply]);
    }
}