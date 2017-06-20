# SteamBOT-N
An open  source steam bot written in Node.js
Can be used on Windows7&UP/DebianBasedLinuxOS/MacOS

A Steam Chat/Idle/Basic Trade BOT

REQUIRES STEAM AUTH APP!!!!

Step 1: To use start by downloading Node.js

Step 2: Make a directory to store the bot, In this example i will use this.
~/Desktop/Projects/STEAM_BOT$ 

Step 3: Open a Terminal/Command Prompt and type the following.

_____________________________________________________________________________________________________________________________

Windows | npm install steam

npm install steam-user

npm install steam-totp

npm install steamcommunity

npm install steam-tradeoffer-manager

_____________________________________________________________________________________________________________________________

Linux | cd Path/to/directory

Now once in the directory since this program is different for Linux than windows.
The program has to be run in the same directory as the modules so do the same as windows from here on.

npm install steam

npm install steam-user

npm install steam-totp

npm install steamcommunity

npm install steam-tradeoffer-manager

_____________________________________________________________________________________________________________________________

Mac | Ok i havent tested this one since i do not use /own a MacOS.
So the following instructions are copied from Linux instructions

cd Path/to/directory

Now once in the directory since this program is different for MacOSt than Windows.
The program has to be run in the same directory as the modules so do the same as windows from here on.

znpm install steam

npm install steam-user

npm install steam-totp

npm install steamcommunity

npm install steam-tradeoffer-manager

Once you have done all of this you need to extract from your phone a certain file.

_____________________________________________________________________________________________________________________________

Android | ROOTED
 
What you need:
 
A Rooted Android Device

A USB Cable

A App called Root Browser

A PC

A Text Editor for your PC
 
Step 1: Navigate to /data/data/com.valvesoftware.android.steam.community/files/Steam-(Your Steam64 ID) or Steamguard-(Your Steam64 ID) using Root Browser
 
Step 2: Copy this file to your emulated SD Card by holding down on the file name, selecting "copy". Your Emulated SD Card is located in Storage/Emulated/0 (paste it here)
 
Step 3: Go to your PC, go to This PC, (Name of your phone), Phone, and the file should be in there.

Step 4: Open this file in your favourite Text Editor and copy your, Shared_Secret and Identity_Secret.

SAVE THESE IN A TEXT DOCUMENT ON YOUR DESKTOP!!!
_____________________________________________________________________________________________________________________________

Android | NONROOTED

I do not know the way as i dont need to.
If anyone can be bothered to write a TUT please follow current PROTOCOL :)
_____________________________________________________________________________________________________________________________

Iphone | NON JAILBROKEN

What you need:

A Program Called ITUNES
A Program Called IExplorer

You need to backup the steam app with Data, Using Itunes.

Open iExplorer, and browse your iTunes backup. You can type "Steam" in the search bar which makes it easier to find. You need to browse it in your backup folder, you won't be able to access app data in the live app.

The file you are looking for is called Steamguard-(Your Steam64 ID)

It should be layed out like.

something: # This is Number 1 | Lets say this says Shared_Secret

something:

something:

something:

Numbers and letters: # This is Number 1's ID number AKA the Shared_Secret

Numbers and letters:

Numbers and letters:

Numbers and letters:

What you need to grab is Shared_Secret and Identity_Secret.
Than Save on Desktop.
_____________________________________________________________________________________________________________________________

Step 4: Edit the SteamBOT with your info.

Step 5: Run with node NameOfFile | If you run from double clicking please dont report any crashes as it is your fault for not reading.
