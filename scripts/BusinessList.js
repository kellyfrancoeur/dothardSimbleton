import { getBusinesses } from "./database.js";

export const bizList = () => {
    const bizArr = getBusinesses()
    let bizListHTML = "<h1>Active Businesses</h1>"
    
    bizArr.forEach(
        (bizObject) => {
            bizListHTML += `<section class = "biz">
                <h2 class = "name"> ${bizObject.companyName}</h2>
                <div class = "address">
                    ${bizObject.addressFullStreet}
                    ${bizObject.addressFullStreet}, ${bizObject.addressStateCode} ${bizObject.addressZipCode}
                </div>
            </section>`
        }
    )
    return bizListHTML
}
// console.log (bizListHTML)