/* eslint-disable no-new */

import '../style.scss';
import '../../../../page-test/script';
import '@gouvfr/header/src/scripts/dist';
import '@gouvfr/navigation/src/scripts/dist';
import { addClass } from '@gouvfr/core/src/scripts/';
import { Header } from '../../src/scripts';

addClass(document.body, '${prefix}-scheme-light-grey-100');

function start () {
  const headers = document.querySelectorAll('.${prefix}-header');

  for (let i = 1; i < headers.length; i++) new Header(headers[i]);
}

if (document.readyState !== 'loading') start();
else document.addEventListener('DOMContentLoaded', start);
