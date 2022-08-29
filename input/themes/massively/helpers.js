
let themeHelpers = {
    getGoldSponsorImgs: function(imageDir, goldSponsors) {
        let toReturn = "";
        let rowsArray = goldSponsors.split("\n");

        if(rowsArray.length){
            for(let row of rowsArray){
                let elements = row.split(",");
                let s_img = "";
                let s_href = "";
                let s_alt = "Gold sponsor";
                if(elements.length >= 1) {
                    s_img = "<img src=\"" + imageDir + "/" + elements[0] + "\">";
                }
                if(elements.length >= 3) {
                    s_alt = elements[2];
                }
                if(elements.length >= 2) {
                    //s_href = "<a href=\"" + elements[1] + "\" title=\"" + s_alt + "\" target=\"_blank\">";
                    s_href = "<a href=\"" + elements[1] + "\" target=\"_blank\">";
                }

                if(s_img.length && s_href.length) {
                    toReturn += s_href + s_img + "</a>"
                } else {
                    toReturn += s_alt
                }
                
                toReturn += "<br>";
            }
        }
        return toReturn;
    }
};

module.exports = themeHelpers;