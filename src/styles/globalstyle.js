import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
    font: inherit;
	vertical-align: baseline;
	text-decoration: none; 
}
a {
	color:black;
}
button{
	border:none;
	border-radius:5px;
	padding: 10px 20px;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	background-color:white;
  font-family: 'Catamaran';
  color:#0a043c;
  
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
html, body, #root {
  height: 100%;
}

h1{
  font-size:24px;
	font-weight:bold;

}

h2{
  font-size:22px;
	font-weight:bold;

}
h3{
  font-size:20px;
	font-weight:bold;

}

h4{
  font-size:18px;
	font-weight:bold;

}

h5{
  font-size:16px;
	font-weight:bold;

}

h6{
  font-size:14px;
	font-weight:bold;

}
`

export default GlobalStyle
