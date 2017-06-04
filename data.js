module.exports = {
  filters: {
    stylus: function (str, opts) {
      let ret
      str = str.replace(/\\n/g, '')
      const styl = require('stylus')
      styl(str, opts).render(function (err, css) {
        if (err) throw err
        ret = css.replace(/\\s /g, '')
      })
      return '\n<style>\n' + ret + '</style>'
    }
  },
  brandColor: '#212121', // red #ff5252
  description: 'DevOpsLinks is a free newsletter for DevOps & SysAdmins Featuring Curated Content, Must Read Articles & Tools.',
  cardImage: 'https://placehold.it/1280x760',
  monospace: 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;',
  sansSerif: '-apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', \'Oxygen\', \'Ubuntu\', \'Cantarell\', \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\', sans-serif'
}
