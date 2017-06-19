var Steam = require('steam')
var SteamUser = require('steam-user');
var SteamTotp = require('steam-totp');
var SteamCommunity = require('steamcommunity');
var TradeOfferManager = require('steam-tradeoffer-manager');
var client = new SteamUser();
var friends = new Steam.SteamFriends(client.client);
var community = new SteamCommunity();
var manager = new TradeOfferManager({
	steam: client,
	community: community,
	language: 'en'
});

console.log('[STEAM]Logging into Steam')
var logOnOptions = {
	accountName: 'EDITME', //username
	password: 'EDITME', //password
	twoFactorCode: SteamTotp.generateAuthCode('EDITME') //steam shared secret
};

client.logOn(logOnOptions);

client.on('loggedOn', () => {
	console.log('[STEAM]Logged into Steam');

	client.setPersona(SteamUser.Steam.EPersonaState.Online, 'EDITME');
	client.gamesPlayed(["EDITME", 440]); //delete this line to remove feature
            //custom game played ^^| =>  Steam game id of real game played, used for idling
            //currently it only plays Team Fortress 2, Try changing it :)
			//to add more than 1 game do this | client.gamesPlayed(["EDITME", 440, 730]);
			//i used CSGO APP id as an example, That is how you add more than one game.


	console.log('[STEAM]Now idling selected games');

	client.on('webSession', (sessionid, cookies) => {
	manager.setCookies(cookies);

	community.setCookies(cookies);
	community.startConfirmationChecker(10000, 'EDITME'); //steam identity secret

	client.on('friendRelationship', (steamid, relationship) => {
        if (relationship === 2) {
			client.addFriend(steamid);
        client.chatMessage(steamid, 'Hello there i am a BOT. My owner will talk to you soon :)'); //message said upon friend accept
		console.log('[STEAM]Somone has added you');
		}

});

//Misc


//Trading stuff

	manager.on('newOffer', (offer) => {
	if (offer.partner.getSteamID64() === 'EDITME ADD TRUSTED ACCOUNT STEAMID HERE') {
		offer.accept((err, status) => {
			if (err) {
				console.log(err);
			} else {
				console.log(`Accepted offer. Status: ${status}.`);
			}
		});
	}

manager.on('newOffer', (offer) => {
	if (offer.itemsToGive.length === 0) {
		offer.accept((err, status) => {
			if (err) {
				console.log(err);
			} else {
				console.log(`Trade Offer. Status: ${status}.`);
			}
		});
	} else {
		offer.decline((err) => {
			if (err) {
				console.log(err);
			} else {
				console.log('Trade Offer | Declined (wanted our items).');
			}
		});
	}
});})})})

//chat stuff
//Function(s) made by Caret
//Function(s) (help) send Messages
//chat functions
var returndefaultmessage = false; //default is false. set to true if you want to return a standard message
//default message even if a match is not found in messageresponse list

var messageresponse = [
    [['ping', 'pinger', 'pingas'], 'Pong!'],
    [['bye', 'goodbye'], 'GoodBye'],
	[['hello', 'hey', 'sup', 'hi', 'sup', 'hallo'], 'Hello!'],
]
//lower case only. function converts incoming messages to lower case
//try adding more responses

function getreplymessage(usermessage) {
    console.log('[STEAM]We have received a message!');
    usermessage = usermessage.toLowerCase();
	if (usermessage == 'help') {
		var messagelist = "Possible messages are: ";
		for (var i_a = 0; i_a < messageresponse.length; i_a++ ) {
			for (var i_b = 0; i_b < messageresponse[i_a][0].length; i_b++ ) {
				messagelist += messageresponse[i_a][0][i_b] + ', '
			}
		}
		return [true, messagelist];
	}
    for (var i_a = 0; i_a < messageresponse.length; i_a++ ) {
        for (var i_b = 0; i_b < messageresponse[i_a][0].length; i_b++ ) {
            if (usermessage == messageresponse[i_a][0][i_b]) {
                return [true, messageresponse[i_a][1]];
            }
        }
    }
    return [false, 'DEFAULT']; //returned message when no matches could be found
}

friends.on("friendMsg", function(user, msg, type){
    if(type == Steam.EChatEntryType.ChatMsg){
        var reply = getreplymessage(msg);
        if (reply[0]){//is not the default return for no match (there is a match)
            friends.sendMessage(user, reply[1]);
        }
        else if (returndefaultmessage) {
            friends.sendMessage(user, reply[1]);
        }
    }
}
,);

//Chat Commands
//Made by ME
//When get Message run command
// Messages:
friends.on("friendMsg", function(user, msg, type){
  if(type == Steam.EChatEntryType.ChatMsg){

    if(msg == "!IDLE"){
      console.log('COMMAND ACCEPTED!')
	  client.gamesPlayed([ ]);
	  client.gamesPlayed(["Idling GAMES", 440]);//Edit this to change games played upon idle command
    }
        if(msg == "!IDLESTOP"){
	  console.log('COMMAND ACCEPTED!')
      client.gamesPlayed([ ]);
    }
  }
})