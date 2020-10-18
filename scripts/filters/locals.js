/* global hexo */

'use strict';

const path = require('path');

hexo.extend.filter.register('template_locals', locals => {
  const { env } = hexo;
  const { theme } = locals;
  const { i18n } = hexo.theme;
  locals.hexoVersion = env.version;
  locals.fluidVersion = require(path.normalize(path.join(hexo.theme_dir, 'package.json'))).version;
  locals.languages = [...i18n.languages];
  locals.languages.splice(locals.languages.indexOf('default'), 1);
  locals.page.lang = locals.page.lang || locals.page.language;
  locals.pjax = theme.pjax && theme.pjax.enable ? ' data-pjax' : '';
});
