const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel, createAudioPlayer, createAudioResource, VoiceConnectionStatus } = require('@discordjs/voice');
const ytdl = require('ytdl-core');

const readline = require('readline');

const token = 'MTE4ODI1NTM4NDE1MTAwMzE0Ng.G4Cqw6.aCjCmmsPGWgII5DQQGePEgYN7ZL0X4MXutjniU';
const clientId = '1188255384151003146';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent,GatewayIntentBits.GuildVoiceStates] });

client.login(token);

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  //Responding
  console.log(message.content);

  if(message.content.toLowerCase().includes('1183197777338044546')){ // Fornite
    await message.reply({files: ['https://cdn.discordapp.com/attachments/658075315679002646/1188714990614610031/RPReplay_Final1703482070.mov?ex=659b881b&is=6589131b&hm=8b6363a880b3963c4d9028642f6f34eed2e7facf012e7beb82d05b99327d588a&']});
  }
  if(message.content.toLowerCase().includes('nah')){
    await message.reply({files: ['https://cdn.discordapp.com/attachments/1047003402510553170/1171929203277578351/Gohan_Id_win.jpg?ex=6595d61f&is=6583611f&hm=1fc586a5f20cbb9a896039fde0d9d97e22c3977f1d47dfd9511ff807ce9eaeed&']});
  }
  if (message.content.toLowerCase().includes('761075495986528268')) { //Squad
    // Reply with the image
    await message.reply({files: ['https://cdn.discordapp.com/attachments/399046543950348288/1052326158340997140/747kkm2.jpg?ex=6594769b&is=6582019b&hm=0afecc27b6a6f94a7a2eec3ec7d76141c761d595cc35c74ee372af552b164e15&'] });
  }
  if (message.content.toLowerCase().includes('no')) {
    // Reply with the image
    await message.reply({files: ['https://cdn.discordapp.com/attachments/376389577038102540/1185990412410814625/cat_nonsense.webm?ex=65919ea4&is=657f29a4&hm=401aaf92b7ca3e5a10c1217df6537916fd2aa6b691183b68779520a1853f5d29&'] });
  }
  if(message.content.toLowerCase().includes('130529344622821376')) { //Richards
    // Reply with the image
    await message.reply({files: ['https://cdn.discordapp.com/attachments/382318440255586306/1188685928793919618/Richard_is_fucked.png?ex=659b6d0a&is=6588f80a&hm=a3c6526af443f0faf106bce220e33f1f01983af091c7c1c0d785aa187bfea9f7&'] });
  }
  if (message.content.toLowerCase().includes('lebron')) {
    // Reply with the image
    await message.reply({files: ['https://media.discordapp.net/attachments/996247127128813588/1170549769224077332/sponge.gif?ex=659a0bec&is=658796ec&hm=9f19dbe107aa9df988e6075856ee7d91896447ca6f59c26855b42cde2e6d44f4&'] });
  }
  
  const RayResponses = [
    'https://cdn.discordapp.com/attachments/382318440255586306/1145570326185525308/SmartSelect_20230828_000549_Discord.jpg?ex=659b7501&is=65890001&hm=44765a07354a6f7a849e74e70c37536d32ff2d52c71a208f402e277ee33a8e6a&',
    'https://cdn.discordapp.com/attachments/382318440255586306/1188705870461284433/image.png?ex=659b7f9c&is=65890a9c&hm=3fba0dbe7dc240793edb71a4cf1912e44b2d32f068768369a450b130daa2beb4&'
  ]
  if (message.content.toLowerCase().includes('223225345950613504')) { //ray
    // Reply with the image
    const randomIndex = Math.floor(Math.random() * RayResponses.length);
    const randomResponse = RayResponses[randomIndex];
  
    // Reply with the randomly selected response
    await message.reply({ files: [randomResponse] });
  }

  if (message.content.toLowerCase().includes('187624361690136577')) { //Aaron
    // Reply with the image
    await message.reply({files: ['https://cdn.discordapp.com/attachments/1089321327871152248/1188706873596190720/image.png?ex=659b808b&is=65890b8b&hm=41971f8ab4d6281463a24b9e8e35206285e8831aa11d995d64700019817d500b&'] });
  }

  const JeremyResponses = [  //Jeremy
    'https://cdn.discordapp.com/attachments/1089321327871152248/1188707610250199080/image.png?ex=659b813b&is=65890c3b&hm=f59842b600df6f36bd8eff3a115ec68cfddc9c99b88536092dae6004437e113c&',
    'https://cdn.discordapp.com/attachments/382318440255586306/1188705683588264067/SmartSelect_20230827_141210_Discord.jpg?ex=659b7f70&is=65890a70&hm=b297e6ecb26b349ffb96b1640d709dd3ac15deb9974b6dd736fa827faf129263&',
    'https://cdn.discordapp.com/attachments/399046543950348288/1180310522680311808/image.png?ex=6598a455&is=65862f55&hm=0823b504a2924c670ebab1f9efbe0c096f0f98d7ad522698876c02f11b66d703&'
    // Add more response URLs as needed
  ];
  if (message.content.toLowerCase().includes('102501175705755648')) { //jeremy
    // Reply with the image
    const randomIndex = Math.floor(Math.random() * JeremyResponses.length);
    const randomResponse = JeremyResponses[randomIndex];
  
    // Reply with the randomly selected response
    await message.reply({ files: [randomResponse] });
  }

  //Music FUNCTION !p or !play
  if (!message.guild) return;

  const commandName = message.content.toLowerCase().split(' ')[0];
  if (commandName === '!play' || commandName === '!p') {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.reply('You need to be in a voice channel to use this command.');
    }

    const connection = joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: message.guild.id,
      adapterCreator: message.guild.voiceAdapterCreator,
    });

    const link = message.content.slice(commandName.length).trim();
    const stream = ytdl(link, { filter: 'audioonly' });
    const resource = createAudioResource(stream);

    const player = createAudioPlayer();
    player.play(resource);
    connection.subscribe(player);

    try {
      await new Promise((resolve, reject) => {
        player.on(VoiceConnectionStatus.Ready, () => resolve());
        player.on(VoiceConnectionStatus.Disconnected, () => reject('Disconnected'));
        player.on(VoiceConnectionStatus.Error, (err) => reject(err));
      });
      message.reply(`Now playing: ${link}`);
    } catch (error) {
      console.error(error);
      message.reply('Error playing the song.');
    }
  }

});

client.on('voiceStateUpdate', (oldState, newState) => {
  if (newState.member.id === client.user.id && !newState.channelId) {
    // Leave the voice channel if the bot is the only one in the channel
    const connection = newState.guild.voiceConnection;
    if (connection && connection.joinConfig.group.size === 1) {
      connection.destroy();
    }
  }
});

// Set up a readline interface for reading from the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Type quit to exit');
// Listen for input in the terminal
rl.on('line', (input) => {
  // Check if the input is 'quit' and exit the process if it is
  if (input.toLowerCase() === 'quit') {
    console.log('Exiting...');
    rl.close();
    process.exit(0);
  }
});

// Close the readline interface on process exit
process.on('exit', () => {
  rl.close();
});