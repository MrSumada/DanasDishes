import React from "react";

const Background = ({ recipe }) => {

    const addAnchorTags = (inputText) => {
        let replacedText, replacePattern0, replacePattern1, replacePattern2, replacePattern3;

        //remove < and > to disrupt malicious code, add line breaks
        replacePattern0 = inputText.replace(/<|>/g, '').replace(/\n/g,'<br/> ')

        //URLs starting with http://, https://, or ftp://
        replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\\/%?=~_|!:,.;]*[-A-Z0-9+&@#\\/%=~_|])/gim;
        replacedText = replacePattern0.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

        //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
        replacePattern2 = /(^|[^\\/])(www\.[\S]+(\b|$))/gim;
        replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

        //Change email addresses to mailto:: links.
        replacePattern3 = /(([a-zA-Z0-9\-_.])+@[a-zA-Z_]+?(\.[a-zA-Z]{2,6})+)/gim;
        replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');

        return replacedText;
    }

    return (
        <p dangerouslySetInnerHTML={{__html:  addAnchorTags(recipe.background)}}>
        </p>
       
    )
}

export default Background;