import JsxParser from 'react-jsx-parser';
import {Link} from 'react-router-dom';
var MarkdownIt = require('markdown-it');

function markDownBold(str){
    const regexp = /\*\*(.*?)\*\*/gm;
    const boldList = [...str.matchAll(regexp)].map(x => x);
    const replaceWith = boldList.map(x => "<bold className='bold-inline'>"+(x[1]).replace(/\*\*>/g , "")+"</bold>");
    
    console.log(replaceWith);
    console.log(boldList);
    var boldenedText = str;
    for(var index in boldList){
        boldenedText = boldenedText.replace(boldList[index][0] ,replaceWith[index]);
        console.log(boldenedText);
    }

    return boldenedText;
}

function markdownlinks(mdContents){
    const regexMdLinks = /\[([^\[]+)\](\(.*\))/gm ;
    const matches = mdContents.match(regexMdLinks) ;

    if(matches){
        const singleMatch = /\[([^\[]+)\]\((.*)\)/ ;
        var res = mdContents;
        for (var i = 0; i < matches.length; i++) {
            var text = singleMatch.exec(matches[i]);
            res = (res.replace(matches[i],`<a className='red-link' href='${text[2]}'>${text[1]}</a>`));
        }
        return res;
    }else{
        return mdContents;
    }


}

function markdownToHtml(mdContents){
    var md = new MarkdownIt(); 
    var el = ( md.render(mdContents)
    .replaceAll("&lt;","<")
    .replaceAll("&gt;",">"))
    .replaceAll("<a href=","<Link  class='red-link' to=" )
    .replaceAll("</a>","</Link>")
    .replace(/<\/p>\n$/g,"")
    .replace(/^(<p>)/,"");
    return  el;
}

export default function MyComponent(props) {
    return (
        <JsxParser
        components={{Link}}
        jsx={markdownToHtml(props.content)}
        ></JsxParser>
  )
}


