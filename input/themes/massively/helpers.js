
let themeHelpers = {
    getGoldSponsorImgs: function(imageDir, goldSponsors) {
        let toReturn = [];
        let rowsArray = goldSponsors.split("\n");
        
        if(rowsArray.length){
            
            for (let i = 0, row; row = rowsArray[i]; i++) {
                let elements = row.split("|");
                let rowHtml = "";
                if(elements.length >= 4) {
                    rowHtml = elements[3] + "<br>";
                }
                if(elements.length >= 3) {
                    //'sponsor url|sponsor name|img fileName'
                    let s_img = "<img src=\"" + imageDir + "/" + elements[2] + "\">";
                    let s_href = "<a href=\"" + elements[0] + "\" target=\"_blank\" title=\"" + elements[1] + "\">";
                    rowHtml = s_href + rowHtml + s_img + "</a>"
                }
                if(rowHtml.length){
                    toReturn.push(rowHtml);
                }
            }
        }
        return toReturn.join("<br>");
    }
};

module.exports = themeHelpers;