/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore","ojs/ojconfig","ojs/ojtranslation","ojL10n!ojtranslations/nls/localeElements","ojs/ojlocaledata","ojs/ojconverterutils-i18n","ojs/ojlogger","ojs/ojconverter"],function(e,r,t,n,i,a,o,s){"use strict";var u=function(){this.Init()};e.Object.createSubclass(u,s,"oj.NumberConverter"),u.prototype.Init=function(e){u.superclass.Init.call(this,e)},u.prototype.format=function(e){return u.superclass.format.call(this,e)},u.prototype.parse=function(e){return u.superclass.parse.call(this,e)};var l=function(e){this.Init(e)};e.Object.createSubclass(l,u,"oj.IntlNumberConverter"),l.prototype.Init=function(e){l.superclass.Init.call(this,e)},l.prototype._getWrapped=function(){return this._wrapped||(this._wrapped=m.getInstance()),this._wrapped},l.prototype.format=function(n){if(null==n||"string"==typeof n&&0===e.StringUtils.trim(""+n).length||"number"==typeof n&&isNaN(n))return"";var a,s=r.getLocale(),u=i.__getBundle(),l=this.resolvedOptions();try{a=this._getWrapped().format(n,u,l,s)}catch(e){throw this._processConverterError(e,n)}if("NaN"===a){var c=t.getTranslatedString("oj-converter.number.invalidNumberFormat.summary",{value:n}),m=t.getTranslatedString("oj-converter.number.invalidNumberFormat.detail");o.error(c+" "+m)}return a},l.prototype.getHint=function(){return null},l.prototype.getOptions=function(){return l.superclass.getOptions.call(this)},l.prototype.parse=function(t){var n,a,o;if(null==t||""===t)return null;n=r.getLocale(),a=i.__getBundle(),o=this.resolvedOptions();try{return this._getWrapped().parse(e.StringUtils.trim(t),a,o,n)}catch(e){throw this._processConverterError(e,t)}},l.prototype.resolvedOptions=function(){var e,t=r.getLocale();if(t!==this._locale||!this._resolvedOptions){e=i.__getBundle();try{if(!e)return o.error("locale bundle for the current locale %s is unavailable",t),{};this._resolvedOptions=this._getWrapped().resolvedOptions(e,this.getOptions(),t),this._locale=t}catch(e){throw this._processConverterError(e)}}return this._resolvedOptions},l.prototype._processConverterError=function(r,n){var i,o,s,u,l=r.errorInfo;if(l){var c=l.errorCode,m=l.parameterMap;switch(e.Assert.assertObject(m),c){case"optionTypesMismatch":case"optionTypeInvalid":case"optionOutOfRange":case"optionValueInvalid":i=a.IntlConverterUtils.__getConverterOptionError(c,m);break;case"decimalFormatMismatch":s="oj-converter.number.decimalFormatMismatch.summary";break;case"currencyFormatMismatch":s="oj-converter.number.currencyFormatMismatch.summary";break;case"percentFormatMismatch":s="oj-converter.number.percentFormatMismatch.summary";break;case"unsupportedParseFormat":u=t.getTranslatedString("oj-converter.number.shortLongUnsupportedParse.summary"),o=t.getTranslatedString("oj-converter.number.shortLongUnsupportedParse.detail"),i=new e.ConverterError(u,o)}s&&(u=t.getTranslatedString(s,{value:n||m.value,format:m.format}),o=t.getTranslatedString("oj-converter.hint.detail",{exampleValue:this._getHintValue()}),i=new e.ConverterError(u,o))}return i||(u=r.message,o=r.message,i=new e.ConverterError(u,o)),i},l.prototype._getHintValue=function(){var r="";try{r=this.format(12345.98765)}catch(t){t instanceof e.ConverterError&&(r="",o.error("error retrieving hint value in format"))}return r};var c={};c.NumberConverter=u,c.IntlNumberConverter=l;var m=function(){var e,r=/^[+-]?infinity$/i,t=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/,n=/([^+-.0-9]*)([+-]?\d*\.?\d*(E[+-]?\d+)?).*$/,i=/([\^$.*+?|\[\](){}])/g,s=/(^0\.0*)([^0].*$)/,u=/^0+$/,l={trillion:[1e14,1e13,1e12],billion:[1e11,1e10,1e9],million:[1e8,1e7,1e6],thousand:[1e5,1e4,1e3]},c={trillion:1e12,billion:1e9,million:1e6,thousand:1e3},m={HALF_UP:"ceil",CEILING:"ceil",UP:"ceil",HALF_DOWN:"floor",FLOOR:"floor",DOWN:"floor",DEFAULT:"round"},p=1024,g=1048576,v=1073741824,d=1099511627776;function f(e,r,t){var n;for(n=e.length;n<r;n+=1)e=t?"0"+e:e+"0";return e}function y(e,r,t,n,i){var a=e[r];return void 0!==a?(a=Number(a),(isNaN(a)||a<t||a>n)&&function(e,r,t,n){var i=new RangeError(e+" is out of range.  Enter a value between "+r+" and "+t+" for "+n),a={errorCode:"numberOptionOutOfRange",parameterMap:{value:e,minValue:r,maxValue:t,propertyName:n}};throw i.errorInfo=a,i}(a,t,n,r),Math.floor(a)):i}function h(e){var r=e||"en-US",t=r.indexOf("-u-nu-"),n="latn";return-1!==t&&(n=r.substr(t+6,4)),n}function b(e,r,t,n){var i,s=r,u=a.OraI18nUtils.getLocaleElementsMainNode(e),l=function(e,r){if(void 0===r)return"latn";var t=h(r),n="symbols-numberSystem-"+t;return void 0===e.numbers[n]&&(t="latn"),t}(u,n);s.numberingSystemKey=l,s.numberingSystem="symbols-numberSystem-"+l;var c=t.lenientParse;if(s.lenientParse=c||"full",s.style=t.style,void 0!==t.pattern&&t.pattern.length>0)i=t.pattern;else{var m;switch(s.style){case"decimal":m="decimalFormats-numberSystem-";break;case"currency":m="currencyFormats-numberSystem-";break;case"percent":m="percentFormats-numberSystem-";break;default:m="decimalFormats-numberSystem-"}m+=s.numberingSystemKey,i=u.numbers[m].standard}var p=t.decimalFormat;void 0===p&&(p=t.currencyFormat),void 0===p||"decimal"!==s.style&&"currency"!==s.style||(s.shortDecimalFormat=u.numbers["decimalFormats-numberSystem-latn"][p].decimalFormat);var g=u.numbers[s.numberingSystem].decimal,v=u.numbers[s.numberingSystem].group,d=t.separators;if(void 0!==d){s.separators=d;var f=d.decimal,b=d.group;void 0!==f&&""!==f&&(g=d.decimal),void 0!==b&&(v=d.group)}var S=a.OraI18nUtils.getLocaleElementsMainNodeKey(e),x=S.split("-")[0];if(s.plurals=e.supplemental.plurals,s.lang=x,s.pat=i,s.minusSign=u.numbers[s.numberingSystem].minusSign,s.decimalSeparator=g,s.exponential=u.numbers[s.numberingSystem].exponential,s.groupingSeparator=v,s.currencyDisplay=t.currencyDisplay,void 0!==t.currency&&(s.currencyCode=t.currency.toUpperCase()),void 0!==t.unit&&(s.unit=t.unit.toLowerCase()),function(e,r,t,n){for(var i,a=n,o=!1,s=!1,u=0,l=0,c=!0,m=1;m>=0&&l<r.length;--m){var p=!1,g="",v="",d=-1,f=1,y=0,h=0,b=0,S=-1,x=-1,D=0;c=!0;for(var I=l;I<r.length;++I){var O=r.charAt(I);switch(D){case 0:case 2:if(p){if(O===W){I+1<r.length&&r.charAt(I+1)===W?(I+=1,c?g=g.concat("''"):v=v.concat("''")):p=!1;continue}}else{if(O===$||O===_||O===C||O===L){D=1,I-=1;continue}if(O===R){void 0===e.currency&&F("style"),a.style="currency";var N=I+1<r.length&&r.charAt(I+1)===R;N&&(I+=1),c?g=g.concat(N?"'¤¤":"'¤"):v=v.concat(N?"'¤¤":"'¤");continue}if(O===W){if(O===W){I+1<r.length&&r.charAt(I+1)===W?(I+=1,c?g=g.concat("''"):v=v.concat("''")):p=!0;continue}}else{if(O===V){0!==D&&0!==m||q(r),l=I+1,I=r.length;continue}if(O===A){a.style="percent",1!==f&&q(r),a.isPercent=!0,f=100,c?g=g.concat("'%"):v=v.concat("'%");continue}if(O===T){1!==f&&q(r),a.style="perMill",a.isPerMill=!0,f=1e3,c?g=g.concat("'‰"):v=v.concat("'‰");continue}if(O===H){c?g=g.concat("'-"):v=v.concat("'-");continue}}}c?g=g.concat(O):v=v.concat(O);break;case 1:if(1!==m){0===(u-=1)&&(D=2,c=!1);continue}if(u+=1,O===$)h>0?b+=1:y+=1,S>=0&&d<0&&(S+=1);else if(O===_)b>0&&q(r),h+=1,S>=0&&d<0&&(S+=1);else if(O===C)x=S,S=0;else{if(O!==L){if(J=I,Q=k,void 0,void 0,X=r.substr(J,Q.length),null!==new RegExp(Q,"i").exec(X)){for(s&&q(r),s=!0,i=0,I+=k.length;I<r.length&&r.charAt(I)===_;)i+=1,u+=1,I+=1;(y+h<1||i<1)&&q(r),D=2,c=!1,I-=1;continue}D=2,c=!1,I-=1,u-=1;continue}d>=0&&q(r),d=y+h+b}}}if(0===h&&y>0&&d>=0){var U=d;0===U&&(U+=1),b=y-U,y=U-1,h=1}if((d<0&&b>0||d>=0&&(d<y||d>y+h)||0===S||p)&&q(r),1===m){P=M=g,j=w=v;var E=y+h+b,B=d>=0?d:E;a.minimumIntegerDigits=B-y,a.maximumIntegerDigits=s?y+a.minimumIntegerDigits:G,a.maximumFractionDigits=d>=0?E-d:0,a.minimumFractionDigits=d>=0?y+h-d:0,a.groupingSize=S>0?S:0,a.groupingSize0=x}else P=g,j=v,o=!0}var J,Q,X;0===r.length&&(M="",w="",a.minimumIntegerDigits=0,a.maximumIntegerDigits=G,a.minimumFractionDigits=0,a.maximumFractionDigits=K);a.useExponentialNotation=s,a.minExponentDigits=i,(!o||0===P.localeCompare(M)&&0===j.localeCompare(w))&&("currency"===a.style&&"ar"===a.lang?(j=w+"'‏-",P=M):(j=w,P="'-"+M));!function(e,r){var t=r,n={};null!==M&&(t.positivePrefix=z(M,e,t,n));null!==w&&(t.positiveSuffix=z(w,e,t,n));null!==P&&(t.negativePrefix=z(P,e,t,n));null!==j&&(t.negativeSuffix=z(j,e,t,n));void 0!==n.name&&(t.positiveSuffix=" "+n.name,t.positivePrefix="","ar"===t.lang?(t.negativeSuffix=e.numbers[t.numberingSystem].minusSign+" "+n.name,t.negativePrefix=""):(t.negativeSuffix=" "+n.name,t.negativePrefix=e.numbers[t.numberingSystem].minusSign))}(t,a)}(t,i,u,s),void 0===t.pattern&&(s.minimumIntegerDigits=y(t,"minimumIntegerDigits",1,21,s.minimumIntegerDigits),void 0!==t.maximumFractionDigits&&(s.maximumFractionDigits=y(t,"maximumFractionDigits",0,20,s.maximumFractionDigits),s.maximumFractionDigits<s.minimumFractionDigits&&(s.minimumFractionDigits=s.maximumFractionDigits)),void 0!==t.minimumFractionDigits&&(s.minimumFractionDigits=y(t,"minimumFractionDigits",0,20,s.minimumFractionDigits)),s.maximumFractionDigits<s.minimumFractionDigits&&(s.maximumFractionDigits=s.minimumFractionDigits,o.info("maximumFractionDigits is less than minimumFractionDigits, so maximumFractionDigits will be set to minimumFractionDigits")),"currency"===s.style&&void 0===t.minimumFractionDigits&&(void 0===p||"standard"===p))){var D=e.supplemental.currencyData.fractions[t.currency];if(void 0!==D){var I=parseInt(D._digits,10);s.minimumFractionDigits=I,s.maximumFractionDigits=I}}}function F(e){var r=new TypeError('The property "currency" is required when the property "'+e+'" is "currency". An accepted value is a three-letter ISO 4217 currency code.'),t={errorCode:"optionTypesMismatch",parameterMap:{propertyName:e,propertyValue:"currency",requiredPropertyName:"currency",requiredPropertyValueValid:"a three-letter ISO 4217 currency code"}};throw r.errorInfo=t,r}function S(e,r){var t=a.OraI18nUtils.getGetOption(e,r),n=t("style","string",["currency","decimal","percent","unit","perMill"],"decimal");if("decimal"===n||"currency"===n){var i="decimal"===n?"decimalFormat":"currencyFormat";n=t(i,"string",["standard","short","long"]),"OraNumberConverter.parse"===r&&void 0!==n&&"standard"!==n&&function(e){var r=new Error("long and short "+e+" are not supported for parsing"),t={errorCode:"unsupportedParseFormat",parameterMap:{shortFormats:e}};throw r.errorInfo=t,r}(i)}var o=t("currency","string");"currency"===n&&void 0===o&&F("style"),o=t("unit","string"),"unit"===n&&void 0===o&&function(e){var r=new TypeError('The property "unit" is required when the property "'+e+'" is "unit". An accepted value is "byte" or "bit".'),t={errorCode:"optionTypesMismatch",parameterMap:{propertyName:e,propertyValue:"unit",requiredPropertyName:"unit",requiredPropertyValueValid:"byte or bit"}};throw r.errorInfo=t,r}("style"),n=t("roundingMode","string",["UP","DOWN","FLOOR","CEILING","HALF_UP","HALF_DOWN","HALF_EVEN"])}function x(e,r,t){var n=t.groupingSize,i=t.groupingSize0,a=t.decimalSeparator,o=e+"",s=o.split(/e/i),l=s.length>1?parseInt(s[1],10):0,c=(s=(o=s[0]).split(".")).length>1?s[1]:"",m=Math.min(t.maximumFractionDigits,c.length-l);s.length>1&&c.length>l&&(e=D(e,m,r.roundingMode||"DEFAULT"));l=(s=(o=Math.abs(e)+"").split(/e/i)).length>1?parseInt(s[1],10):0,o=(s=(o=s[0]).split("."))[0],c=s.length>1?s[1]:"",l>0?(o+=(c=f(c,l,!1)).slice(0,l),c=c.substr(l)):l<0&&(c=(o=f(o,(l=-l)+1,!0)).slice(-l,o.length)+c,o=o.slice(0,-l)),m>0&&c.length>0?(c=c.length>m?c.slice(0,m):f(c,m,!1),!0===u.test(c)&&(c=c.slice(0,t.minimumFractionDigits)),c=a+c):c=t.minimumFractionDigits>0?a:"",c=f(c,a.length+t.minimumFractionDigits,!1);var p=t.groupingSeparator,g="";!1===r.useGrouping&&void 0===r.pattern&&(p="");var v=(o=f(o,t.minimumIntegerDigits,!0)).length-1;for(c=c.length>1?c:"";v>=0;){if(0===n||n>v)return o.slice(0,v+1)+(g.length?p+g+c:c);g=o.slice(v-n+1,v+1)+(g.length?p+g:""),v-=n,i>0&&(n=i)}return o.slice(0,v+1)+p+g+c}function D(e,r,t){var n,i=t,a=e.toString().split(".");if(void 0===a[1])return Math.abs(e);if("DEFAULT"!==t){if("HALF_UP"===t||"HALF_EVEN"===t||"HALF_DOWN"===t){if("5"===a[1][r]){var o=a[1].substr(r);(o=parseInt(o,10))>5&&(i="HALF_UP")}else i="DEFAULT";e=Math.abs(e)}n=function(e,r,t){if(0===r)return Math[t](e);var n=e.toString().split("e"),i=n[0],a=n[1],o=i+"e"+(a?parseInt(a,10)-r:-r),s=parseFloat(o),u=Math[t](s);return n=u.toString().split("e"),i=n[0],a=n[1],o=i+"e"+(a?parseInt(a,10)+r:r),s=parseFloat(o)}(e,-r,i=function(e,r,t,n){var i=m[r];if("HALF_EVEN"===r){var a;if(0===t){var o=e[0].length;a=parseInt(e[0][o-1],10)}else a=parseInt(e[1][t-1],10);i=a%2==0?m.HALF_DOWN:m.HALF_UP}else"UP"===r&&n<0?i=m.DOWN:"DOWN"===r&&n<0&&(i=m.UP);return i}(a,i,r,e))}else{var s=Math.pow(10,r);if(n=Math.round(e*s)/s,!isFinite(n))return e}return Math.abs(n)}function I(e,r,t,n,i){var o=a.OraI18nUtils.getLocaleElementsMainNode(t);if(!isFinite(e))return e===1/0?o.numbers[n.numberingSystem].infinity:e===-1/0?o.numbers[n.numberingSystem].infinity:"NaN";var u=e;!0===n.isPercent||"percent"===n.style?u*=100:!0===n.isPerMill&&(u*=1e3);var m=r.decimalFormat;void 0===m&&(m=r.currencyFormat);var y=n.style;u="decimal"!==y&&"currency"!==y||void 0===m||"standard"===m?!0===n.useExponentialNotation?function(e,r){var t=e+"",n=0,i=t.split(/e/i),a=i[0];s.lastIndex=0;var o=s.exec(a);null!==o?(n=o[1].length-1,a=o[2]):a=a.replace(".","");var u=i.length>1?parseInt(i[1],10):0,l=parseInt(a,10),c=r.minimumIntegerDigits+r.maximumFractionDigits;if(a.length>c){c-=a.length;var m=Math.pow(10,c);l=Math.round(l*m)}var p=r.minimumIntegerDigits+r.minimumFractionDigits;l=f(l+="",p,!1),-1!==t.indexOf(".")?u-=r.minimumIntegerDigits-t.indexOf(".")+n:u-=p-a.length-r.minimumFractionDigits;var g=Math.abs(u);g=f(g+"",r.minExponentDigits,!0),u<0&&(g=r.minusSign+g);var v=l.slice(0,r.minimumIntegerDigits);return l.slice(r.minimumIntegerDigits).length>0?v+=r.decimalSeparator+l.slice(r.minimumIntegerDigits)+r.exponential+g:v+=r.exponential+g,v}(u,n):"unit"===y?function(e,r,t,n){var i,o,s=Math.abs(e);s>=d?(i="digital-tera",o=s/d):s>=v?(i="digital-giga",o=s/v):s>=g?(i="digital-mega",o=s/g):s>=p?(i="digital-kilo",o=s/p):(i="digital-",o=s),i+=t.unit;var u=t.lang,l=t.plurals[u](o);l="unitPattern-count-"+l,e<0&&(o=-o);var c=x(o,r,t),m=n.units.narrow[i][l];return c=a.OraI18nUtils.formatString(m,[c])}(u,r,n,o):x(u,r,n):function(e,r,t){var n,i,a,o=Math.abs(e),s=function(e){for(var r=Object.keys(l),t=0;t<r.length;t++)for(var n=r[t],i=l[n].length,a=0;a<i;a++)if(l[n][a]<=e)return[n,l[n][a]];return[e,null]}(o),u="";if(null!==s[1]){var m=t.lang,p=t.plurals[m](Math.floor(o/c[s[0]]));if(n=s[1]+"-count-"+p,void 0===(n=t.shortDecimalFormat[n])&&(p="other",n=s[1]+"-count-"+p,n=t.shortDecimalFormat[n]),a=(i=function(e){var r=0,t=0,n=0,i="";if("0"!==e[0]){for(;"0"!==e[r]&&r<e.length;)r+=1;i=e.substr(0,r),n=r}for(r=n;r<e.length&&"0"===e[r];r++)t+=1;return[i,t]}(n))[1],u=i[0],a<n.length){var g=1*Math.pow(10,a);o/=g=s[1]/g*10}}var v="";return void 0!==n&&(v=n.substr(a+i[0].length)),e<0&&(o=-o),v=u+x(o,r,t)+(v=v.replace(/'\.'/g,"."))}(u,r,n);var b="";b+=e<0&&u-0!=0?n.negativePrefix+u+n.negativeSuffix:n.positivePrefix+u+n.positiveSuffix;var F=h(i);if(void 0===a.OraI18nUtils.numeringSystems[F]&&(F="latn"),"latn"!==F){var S,D=[];for(S=0;S<b.length;S++)b[S]>="0"&&b[S]<="9"?D.push(a.OraI18nUtils.numeringSystems[F][b[S]]):D.push(b[S]);return D.join("")}return b}function O(e,r){var t=r.groupingSeparator,i=r.decimalSeparator,o=r.minusSign,s="",u="",l=a.OraI18nUtils.toUpper(r.exponential),c=a.OraI18nUtils.toUpper(e),m=t;c=(c=c.split(l).join("E")).split(m).join("");var p=m.replace(/\u00A0/g," ");m!==p&&(c=c.split(p).join("")),"."===(c=c.split(i).join(".")).charAt(0)&&(c=c.substr(1),u="."),c=c.replace(o,"-");var g=u+n.exec(c)[2];return a.OraI18nUtils.startsWith(g,"-")?(g=g.substr("-".length),s="-"):a.OraI18nUtils.startsWith(c,"+")&&(g=g.substr("+".length),s="+"),[s,g]}function N(e,r,t,n){return isNaN(e)&&U(t.style,t,n),!0===t.isPercent||"percent"===t.style?e/=100:!0===t.isPerMill&&(e/=1e3),a.OraI18nUtils.getGetOption(r,"OraNumberConverter.parse")("roundDuringParse","boolean",[!0,!1],!1)&&(e=function(e,r,t){var n=r.maximumFractionDigits,i=e<0,a=t.roundingMode||"DEFAULT",o=D(e,n,a);return i?-o:o}(e,t,r)),e}function U(e,r,t){var n,i="Enter a number in this format:"+r.pat;switch(e){case"decimal":n="decimalFormatMismatch";break;case"currency":n="currencyFormatMismatch";break;case"percent":n="percentFormatMismatch"}var a=new Error(i),o={errorCode:n,parameterMap:{value:t,format:r.pat}};throw a.errorInfo=o,a}function E(e,n,o,s){var u=a.OraI18nUtils.getLocaleElementsMainNode(n),l={},c=function(e,r){var t,n=h(r);if(void 0===a.OraI18nUtils.numeringSystems[n])return e;var i=[];for(t=0;t<e.length;t++){var o=a.OraI18nUtils.numeringSystems[n].indexOf(e[t]);-1!==o?i.push(o):i.push(e[t])}return i.join("")}(e,s);b(n,l,o,s);var m=NaN,p=c.replace(/ /g,"");if(r.test(p))return m=parseFloat(c);var g=function(e,r,t,n){var o,s=a.OraI18nUtils.trimNumber(e),u="",l=!1,c=n.numbers[t.numberingSystem].plusSign,m=new RegExp("^"+c.replace(i,"\\$1"));s=s.replace(m,"");var p=a.OraI18nUtils.trimNumber(t.positivePrefix),g=a.OraI18nUtils.trimNumber(t.positiveSuffix),v=a.OraI18nUtils.trimNumber(t.negativePrefix),d=a.OraI18nUtils.trimNumber(t.negativeSuffix),f=new RegExp("^"+(p||"").replace(i,"\\$1")),y=new RegExp((g||"").replace(i,"\\$1")+"$"),h=new RegExp("^"+(v||"").replace(i,"\\$1")),b=new RegExp((d||"").replace(i,"\\$1")+"$");if(!0===h.test(s)&&!0===b.test(s))s=(s=s.replace(h,"")).replace(b,""),u="-",l=!0;else if(!0===f.test(s)&&!0===y.test(s))s=(s=s.replace(f,"")).replace(y,""),u="+",l=!0;else if("currency"===t.style){var F,S=t.currencyCode,x=S;if(void 0!==n.numbers.currencies[S]&&(x=n.numbers.currencies[S].symbol),void 0===t.currencyDisplay||"symbol"===t.currencyDisplay?F=x:"code"===t.currencyDisplay&&(F=S),void 0!==F){var D=(p||"").replace(F,""),I=(g||"").replace(F,""),N=(v||"").replace(F,""),E=(d||"").replace(F,"");f=new RegExp(("^"+D).replace(i,"\\$1")),y=new RegExp(I.replace(i,"\\$1")+"$"),h=new RegExp(("^"+N).replace(i,"\\$1")),b=new RegExp(E.replace(i,"\\$1")+"$"),!0===h.test(s)&&!0===b.test(s)?(s=(s=s.replace(h,"")).replace(b,""),u="-",l=!0):!0===f.test(s)&&!0===y.test(s)&&(s=(s=s.replace(f,"")).replace(y,""),u="+",l=!0)}}return l?o=[u,s]:"full"===t.lenientParse?(o=O(s,t))[2]=!0:U(t.style,t,e),o}(c,0,l,u),v=g[0],d=g[1];if(v=v||"+",g[2])return N(m=parseFloat(v+d),o,l,e);var f=function(e,r){var t,n,i={},o=r.decimalSeparator,s=r.groupingSeparator,u=e.replace(/ /g,""),l=r.exponential,c=u.indexOf(l.toLowerCase());c<0&&(c=u.indexOf(a.OraI18nUtils.toUpper(l))),c<0?(n=u,i.exponent=null):(n=u.substr(0,c),i.exponent=u.substr(c+l.length));var m=o,p=n.indexOf(m);p<0?(t=n,i.fraction=null):(t=n.substr(0,p),i.fraction=n.substr(p+m.length)),t=t.split(s).join("");var g=s.replace(/\u00A0/g," ");return s!==g&&(t=t.split(g).join("")),i.integer=t,i}(d,l),y=f.integer,F=f.fraction,S=f.exponent,x=v+y;if(null!==F&&(x+="."+F),null!==S){var D=function(e,r){var t,n=r.minusSign,i=r.plusSign,o=a.OraI18nUtils.trimNumber(e);return n=a.OraI18nUtils.trimNumber(n),i=a.OraI18nUtils.trimNumber(i),a.OraI18nUtils.startsWith(o,n)?t=["-",o.substr(n.length)]:a.OraI18nUtils.startsWith(o,a.OraI18nUtils.trimNumber(i))&&(t=["+",o.substr(i.length)]),t||["",o]}(S,l);x+="e"+(D[0]||"+")+D[1]}return t.test(x)?m=parseFloat(x):"full"===l.lenientParse?(x=O(c,l),m=parseFloat(x[0]+x[1])):U(l.style,l,e),N(m,o,l,e)}var M,w,P,j,_="0",C=",",L=".",A="%",T="‰",$="#",V=";",k="E",H="-",W="'",R="¤",G=2147483647,K=2147483647;function q(e){var r=new SyntaxError('Unexpected character(s) encountered in the pattern "'+e+' An example of a valid pattern is "#,##0.###".'),t={errorCode:"optionValueInvalid",parameterMap:{propertyName:"pattern",propertyValue:e,propertyValueHint:"#,##0.###"}};throw r.errorInfo=t,r}function z(e,r,t,n){for(var i="",a=0;a<e.length;){var o=e.charAt(a);if(a+=1,o!==W){switch(o){case R:var s=t.currencyCode,u=s,l=s;void 0!==r.numbers.currencies[s]&&(u=r.numbers.currencies[s].displayName,l=r.numbers.currencies[s].symbol),void 0===t.currencyDisplay||"symbol"===t.currencyDisplay?o=l:"code"===t.currencyDisplay?o=s:(o=u,n.name=o);break;case A:o=r.numbers[t.numberingSystem].percentSign;break;case T:o=r.numbers[t.numberingSystem].perMille;break;case H:o=r.numbers[t.numberingSystem].minusSign}i=i.concat(o)}}return i}function B(e,r,t){var n={locale:t,style:void 0===e.style?"decimal":e.style,useGrouping:void 0===r.useGrouping||r.useGrouping,numberingSystem:e.numberingSystemKey};n.minimumIntegerDigits=e.minimumIntegerDigits,n.minimumFractionDigits=e.minimumFractionDigits,n.maximumFractionDigits=e.maximumFractionDigits,"decimal"===e.style&&void 0!==r.decimalFormat&&(n.decimalFormat=r.decimalFormat),"currency"===e.style&&void 0!==r.currencyFormat&&(n.currencyFormat=r.currencyFormat),"currency"===e.style&&(n.currency=r.currency,n.currencyDisplay=void 0===r.currencyDisplay?"symbol":r.currencyDisplay),void 0!==r.unit&&(n.unit=r.unit),void 0!==r.pattern&&(n.pattern=r.pattern);var i=r.roundingMode,a=r.roundDuringParse;void 0!==i&&(n.roundingMode=i),void 0!==a&&(n.roundDuringParse=a);var o=e.lenientParse;void 0!==o&&(n.lenientParse=o);var s=e.separators;return void 0!==s&&(n.separators=s),n.virtualKeyboardHint=function(e,r){var t="text";switch(r.style){case"unit":t="text";break;case"currency":case"percent":t=void 0===r.pattern?"text":J(e,r);break;default:t=void 0===r.pattern?"short"===r.decimalFormat||"long"===r.decimalFormat?"text":function(e,r){if(void 0===r.useGrouping||r.useGrouping){if("."===e.decimalSeparator&&""===e.groupingSeparator)return"number"}else if("."===e.decimalSeparator)return"number";return"text"}(e,r):J(e,r)}return t}(e,r),n}function J(e,r){var t;if(t=r.pattern,/[^0-9.#]/i.test(t))return"text";var n=function(e){if(-1!==e.indexOf(","))return!0;return!1}(r.pattern),i=function(e){if(-1!==e.indexOf("."))return!0;return!1}(r.pattern);if(n&&i){if(""!==e.groupingSeparator||"."!==e.decimalSeparator)return"text";if(e.groupingSeparator===e.decimalSeparator)return"text"}return i&&!n&&"."!==e.decimalSeparator?"text":!i&&n&&""!==e.groupingSeparator?"text":"number"}function Q(){return{format:function(e,r,t,n){(arguments.length<=2||void 0===t)&&(t={useGrouping:!0,style:"decimal"}),S(t,"OraNumberConverter.format");var i={};return b(r,i,t,n),I(e,t,r,i,n)},parse:function(e,r,t,n){return"number"==typeof e?e:"[object Number]"===Object.prototype.toString.call(e)?Number(e):((arguments.length<=2||void 0===t)&&(t={useGrouping:!0,style:"decimal"}),S(t,"OraNumberConverter.parse"),E(e,r,t,n))},resolvedOptions:function(e,r,t){return(arguments.length<3||void 0===t)&&(t=a.OraI18nUtils.getLocaleElementsMainNodeKey(e)),(arguments.length<2||void 0===r)&&(r={useGrouping:!0,style:"decimal"}),B(function(e,r,t){var n={};return S(r,"OraNumberConverter.resolvedOptions"),b(e,n,r,t),n.numberingSystemKey=h(t),void 0===a.OraI18nUtils.numeringSystems[n.numberingSystemKey]&&(n.numberingSystemKey="latn"),n}(e,r,t),r,t)}}}return{getInstance:function(){return e||(e=Q()),e}}}();return c});