const fs = require('fs');
const axios = require('axios');

let config = JSON.parse(fs.readFileSync('configs.json', 'utf8'));
let dateReg = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\+\d{2}:\d{2}/;

let {forcedDraw} = config;

config.mediaList.forEach((mediaInfo) => {
    axios.get(`https://api.instagram.com/oembed/?url=http://instagr.am/p/${mediaInfo.media}`)
        .then(response => {
            let markdownContent;
            let dateObj, date;

            let {categories, tags, fileName, title} = mediaInfo;

            let html = response.data.html.replace('\n', '');

            /* -------- Custom code for setting tags through media content -------- */
            // let kendoNum = 0;
            // let indexOf = -1;
            // while(true) {
            //     indexOf = html.indexOf('kendo', indexOf+1);
            //     if(indexOf !== -1) {
            //         kendoNum++;
            //     } else {
            //         break;
            //     }
            // }

            // tags = kendoNum === 1 ? 'strength' : 'kendo';
            /* -------------------------------------------------------------------- */

            dateObj = new Date(dateReg.exec(html)[0]);
            date = `${dateObj.getFullYear()}-${dateObj.getMonth()+1}-${dateObj.getDate()}`;

            fileName = `${date}-` + eval(fileName);
            title = eval(title);

            markdownContent = 
`---
layout: post
title: "${title}"
categories: ${categories}
tags: ${tags}
---

${html}`;

            if(forcedDraw) {
                markdownContent += `<script type="text/javascript">instgrm.Embeds.process()</script>`;
            }

            fs.writeFile(`posts/${fileName}`, markdownContent, function(err) {
                if(err) {
                    throw err;
                }
            }); 
        })
        .catch(error => {
            throw (error);
        });
});