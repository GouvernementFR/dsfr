/* eslint-disable no-new */

import '../style.scss';
import '@frds/schemes/src/scripts/dist';
import '@frds/header/src/scripts/dist';
import '@frds/navigation/src/scripts/dist';
import { addClass } from '@frds/utilities/src/scripts/';
import { Header } from '../../src/scripts';

addClass(document.body, '${prefix}-scheme-light-grey-100');

function start () {
  const headers = document.querySelectorAll('.${prefix}-header');
  console.log(headers);

  for (let i = 1; i < headers.length; i++) new Header(headers[i]);
}

if (document.readyState !== 'loading') start();
else document.addEventListener('DOMContentLoaded', start);
