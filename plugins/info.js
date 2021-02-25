let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➵ Dibuat dengan javascript NodeJs
╠➵ Rec: aa akbar
╠➵ Script: @Nurotomo
║
╠➵ Github: https://github.com
╠➵ Instagram: instagram.com/yoshuaxaan
╠➵ YouTube: youtube.com/channel/UC9aSdgHbFGjv9O9L5YAXZzg
║
╠═〘 Thanks To 〙 ═
╠➵ kazuee official
╠➵ @yoshuaxaan
╠➵ Yoshua
╠➵ Yoshua Yos
╠➵ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➵ ketik .donasi
║
╠═〘 *YOSHOBOBT* 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

