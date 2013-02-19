/**
 * document.execCommand("fontName") will create either inline styles (firefox, chrome) or use font tags
 * which we don't want
 * Instead we set a css class
 */
(function(wysihtml5) {
  var REG_EXP = /wysiwyg-font-family-[0-9a-z]+/g;
  
  wysihtml5.commands.fontName = {
    exec: function(composer, command, family) {
      return wysihtml5.commands.formatInline.exec(composer, command, "span", "wysiwyg-font-family-" + family, REG_EXP);
    },

    state: function(composer, command, family) {
      return wysihtml5.commands.formatInline.state(composer, command, "span", "wysiwyg-font-family-" + family, REG_EXP);
    }
  };
})(wysihtml5);