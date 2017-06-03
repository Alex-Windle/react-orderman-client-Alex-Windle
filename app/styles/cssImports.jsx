/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * If we were using SASS, this would be a standard SASS import file.
 * However, because we're using CSS, we're just localizing all CSS imports
 * into a JS file for ease of use.
 */


/**
 * Normalize.css helps change the default CSS so that it is consistent
 * across browsers.
 */
import 'normalize.css';


/**
 * Bootswatch is a site with free Bootstrap based themes. For simplicity
 * sake, we're going to use them since most people have some experience
 * with bootstrap. However, the API is identical to bootstrap.
 */
import 'bootswatch/flatly/bootstrap.css';


// Here are some custom css files we wrote.
import './custom.css';
