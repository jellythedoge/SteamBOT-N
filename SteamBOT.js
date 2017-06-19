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


	console.log('[STEAM]Now idling selected games');

	client.on('webSession', (sessionid, cookies) => {
	manager.setCookies(cookies);

	community.setCookies(cookies);
	community.startConfirmationChecker(10000, 'EDITME'); //steam identity secret
	emitter.setMaxListeners(20);

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
//Function made by Caret
//Function sends Messages
//chat functions
var messageresponse = [
    [['ping', 'pinger', 'pingas'], 'Pong!'],
    [['bye', 'goodbye'], 'GoodBye'],
	[['hello', 'hey', 'hi', 'sup', 'hallo'], 'Hello!'],
]
//lower case only. function converts incoming messages to lower case
//try adding more responses

function getreplymessage(usermessage) {
    usermessage = usermessage.toLowerCase();
    for (var i_a = 0; i_a < messageresponse.length; i_a++ ) {
        for (var i_b = 0; i_b < messageresponse[i_a][0].length; i_b++ ) {
            if (usermessage == messageresponse[i_a][0][i_b]) {
                return messageresponse[i_a][1];
            }
        }
    }
	console.log('[STEAM]We have received a message!');
    return 'EDITME'; //edit this line to have a custom message sent to whoever messaged you :)
}

friends.on("friendMsg", function(user, msg, type){
  if(type == Steam.EChatEntryType.ChatMsg){
    var reply = getreplymessage(msg);
    if (reply != ''){
        friends.sendMessage(user, getreplymessage(msg));

//Chat Commands
//Made by ME
//When get Message run command
// Messages:
friends.on("friendMsg", function(user, msg, type){
  if(type == Steam.EChatEntryType.ChatMsg){
    if(msg == "!IDLE"){
      console.log('COMMAND ACCEPTED!')
	  client.gamesPlayed(["Idling GAMES", 440]); //Edit this to
    }
        if(msg == "!IDLESTOP"){
      client.gamesPlayed([ ]);
    }
        if(msg == "how are you"){
      friends.sendMessage(user, "Im doing great!");
    }
}
})}}})