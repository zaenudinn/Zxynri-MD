let handler = async(m, { conn }) => {
conn.send2Contact(m.chat, numberowner, nameowner, numbercretor, namecreatore m)
}
handler.help = ['owner2', 'creator2']
handler.tags = ['info']
handler.command = /^(owner2|creator2)$/i

module.exports = handler
