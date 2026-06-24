const mineflayer = require('mineflayer');

const SERVER_IP = 'avinashboy.aternos.me';
const SERVER_PORT = 47974;

const names = [
  "OPRohit01", "MohitX01", "RohitPro01", "OPRohit02",
  "MohitX02", "RohitPro02", "OPRohit03", "MohitX03",
  "RohitPro03", "OPRohit04", "MohitX04", "RohitPro04",
  "OPRohit05", "MohitX05", "RohitPro05", "OPRohit06",
  "MohitX06", "RohitPro06", "OPRohit07", "MohitX07",
  "RohitPro07", "OPRohit08", "MohitX08", "RohitPro08",
  "OPRohit09", "MohitX09", "RohitPro09", "OPRohit10",
  "MohitX10", "RohitPro10", "OPRohit11", "MohitX11",
  "RohitPro11", "OPRohit12", "MohitX12", "RohitPro12",
  "OPRohit13", "MohitX13", "RohitPro13", "OPRohit14",
  "MohitX14", "RohitPro14", "OPRohit15", "MohitX15",
  "RohitPro15", "LegendRohit", "KingMohit",
  "UltraRohit", "OPLegend", "RohitYT"
];

for (const username of names) {
  setTimeout(() => {
    const bot = mineflayer.createBot({
      host: SERVER_IP,
      port: SERVER_PORT,
      username: username
    });

    bot.on('spawn', () => {
      console.log(`${username} joined!`);
    });

    bot.on('end', () => {
      console.log(`${username} disconnected`);
    });

    bot.on('error', err => {
      console.log(`${username}: ${err.message}`);
    });
  }, Math.random() * 30000); // 30 sec ke andar random join
}
