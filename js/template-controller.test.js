import { mainJS } from './template-controller.js'
import { jest } from '@jest/globals'

describe('main file testing', () => {

    beforeEach(() => {
        document.body.innerHTML = `<section class="recommend-container">
        <div class="header">
            <a href="https://popup.taboola.com/" target="_blank">
                <div class="logo"></div>
            </a>
        </div>
        <div class="error-container hide">
            Something went wrong...
            <button>Try again</button>
        </div>
        <main class="recommendations">
        </main>
    </section>`
    })

    const requestRes = {
        data: {
            list: [
                {
                    "description": "◇米国女子◇LPGAロッテ選手権 最終日◇コオリナGC（ハワイ州）◇6,421ヤード（パー72） 宮里藍が後続に3打のリードで迎えた最終日、4バーディ、2ボギーの通算12アンダーで逃げ切り、2位に4打差をと広げて今季初勝利を飾っている。 宮",
                    "type": "video",
                    "name": "宮里藍が今季初勝利！ツアー通算８勝目",
                    "created": "Sun, 22 Apr 2012 01:35:26 UTC",
                    "branding": "GDO - News",
                    "duration": "0",
                    "views": "0",
                    "thumbnail": [
                        {
                            "url": "http://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fcdn.taboolasyndication.com%2Fsv%2Fimages%2Fentrepreneur120.png"
                        }
                    ],
                    "categories": [
                        "jp"
                    ],
                    "id": "~~V1~~-2047596298488215567~~CnPJnmSYPxir7vSzlFtskC5dKLQe2REsTFN8A2PneMe9OSd03RFk211LqYDaWXBnlD6CtweKIb_hxshbJxLBaL3Gzi67IULKH_cPQniqvf34JR2BZr0JwlZJK_n38LmXBznfstAxgHxK10DUnx__IOZshTJzHV6HG2_zDL-kFQ13_izeigIffesEqmaKiJEaDeThOGHjSoqB1Ur5dwVW2rv5vUbL2X2u0jXsevYjewJ-4-Wbr_ZqAAo7ZkhVKoOH-YMiEKt5faBg_LXVQLbnXZlLeXUHShw0g_iEThBuayk",
                    "origin": "sponsored",
                    "url": "http://api.taboola.com/1.0/json/taboola-templates/recommendations.notify-click?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&response.id=__9a259478418a06aab96918375d8d1c04__5e6c2131f9e0f166094b327926edfe75&response.session=v2_473b101d75e6ec0a7d473704d8d9396a_22a2b35c-7eaa-4646-97bc-4c492ac84615-tuct926585f_1647104735_1647104735_CNawjgYQswsY9PHe-PcvIAEoATBmOIjrCkCvkBBI8dLYA1D___________8BWABgAGjb_5X0ga2ul6YBcAE&item.id=%7E%7EV1%7E%7E-2047596298488215567%7E%7ECnPJnmSYPxir7vSzlFtskC5dKLQe2REsTFN8A2PneMe9OSd03RFk211LqYDaWXBnlD6CtweKIb_hxshbJxLBaL3Gzi67IULKH_cPQniqvf34JR2BZr0JwlZJK_n38LmXBznfstAxgHxK10DUnx__IOZshTJzHV6HG2_zDL-kFQ13_izeigIffesEqmaKiJEaDeThOGHjSoqB1Ur5dwVW2rv5vUbL2X2u0jXsevYjewJ-4-Wbr_ZqAAo7ZkhVKoOH-YMiEKt5faBg_LXVQLbnXZlLeXUHShw0g_iEThBuayk&item.type=video&sig=e30895a21a5fb75b9c690bae433ffbb1608aef8c0710&redir=http%3A%2F%2Fnews.golfdigest.co.jp%2Flpga%2F2418%2Farticle%2F33486%2F5%2F%3Futm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiD_5D7uFHCM9hYaMx1FUz2-Cymy-7lvCzE5dzEFumhFuSC5BCjwpMiRsv-Qsnw%23tblciGiD_5D7uFHCM9hYaMx1FUz2-Cymy-7lvCzE5dzEFumhFuSC5BCjwpMiRsv-Qsnw&ui=22a2b35c-7eaa-4646-97bc-4c492ac84615-tuct926585f&cpb=GIkFIJz__________wEqFnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHRyYzAwMTA1OICsg6oFQIjrCkivkBBQ8dLYA1j___________8BYwjXFhDVHxgjZGMI7f__________ARDt__________8BGBNkYwiqIRCmLRgHZGMI0gMQ4AYYCGRjCJYUEKAcGBhkYwj0FBCeHRgfZGMI0f__________ARDR__________8BGC9keAGAAQKIAe3rp8YBkAEc"
                },
                {
                    "type": "video",
                    "name": "Next-Gen Displays Might Be Your Next Point-of-Sale Marketing Tool",
                    "created": "Fri, 17 Feb 2012 11:35:00 UTC",
                    "branding": "Entrepreneur",
                    "duration": "0",
                    "views": "0",
                    "thumbnail": [
                        {
                            "url": "http://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fcdn.taboolasyndication.com%2Fsv%2Fimages%2Fentrepreneur120.png"
                        }
                    ],
                    "categories": [
                        "why next-gen displays might be your next point-of-sale marketing tool"
                    ],
                    "id": "~~V1~~7072100003555812984~~Zl_db-12jwZ_ZSMTJHAN54SLiAOdc-6sgy8bU56LA-AZDaMJce4jup1Fuc1iPZHBRMn_0S_e1214ALcf-kGSlPoew2qHyISbADwBJUzKmw6bqfbiC5U7nuJn7Tl_mglu6oa8rQs37CF5XIAAK4U_fKlF8NqAQJAWjIC2OyS850XHENaahf-zyq_P1iQESbdmsXJpWQrfTRVttn6hzA5K4VGelGL2LpVPBK5hi3Trj9FISobih45dBDsBWowbQKogJs-uC3-WWmrUP_51FzAi-ETIjLFrfyefcx_ooZsGHf4",
                    "origin": "sponsored",
                    "url": "http://api.taboola.com/1.0/json/taboola-templates/recommendations.notify-click?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&response.id=__9a259478418a06aab96918375d8d1c04__5e6c2131f9e0f166094b327926edfe75&response.session=v2_473b101d75e6ec0a7d473704d8d9396a_22a2b35c-7eaa-4646-97bc-4c492ac84615-tuct926585f_1647104735_1647104735_CNawjgYQswsY9PHe-PcvIAEoATBmOIjrCkCvkBBI8dLYA1D___________8BWABgAGjb_5X0ga2ul6YBcAE&item.id=%7E%7EV1%7E%7E7072100003555812984%7E%7EZl_db-12jwZ_ZSMTJHAN54SLiAOdc-6sgy8bU56LA-AZDaMJce4jup1Fuc1iPZHBRMn_0S_e1214ALcf-kGSlPoew2qHyISbADwBJUzKmw6bqfbiC5U7nuJn7Tl_mglu6oa8rQs37CF5XIAAK4U_fKlF8NqAQJAWjIC2OyS850XHENaahf-zyq_P1iQESbdmsXJpWQrfTRVttn6hzA5K4VGelGL2LpVPBK5hi3Trj9FISobih45dBDsBWowbQKogJs-uC3-WWmrUP_51FzAi-ETIjLFrfyefcx_ooZsGHf4&item.type=video&sig=8abc8c28f05b1737b56ff9c6f7d5c00e3a3ecc830ccc&redir=http%3A%2F%2Fwww.entrepreneur.com%2Fblog%2F222856%3Futm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiD_5D7uFHCM9hYaMx1FUz2-Cymy-7lvCzE5dzEFumhFuSC5BCjDxtnbiZDgl0s%23tblciGiD_5D7uFHCM9hYaMx1FUz2-Cymy-7lvCzE5dzEFumhFuSC5BCjDxtnbiZDgl0s&ui=22a2b35c-7eaa-4646-97bc-4c492ac84615-tuct926585f&cpb=GIkFIJz__________wEqFnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHRyYzAwMTA1OICsg6oFQIjrCkivkBBQ8dLYA1j___________8BYwjXFhDVHxgjZGMI7f__________ARDt__________8BGBNkYwiqIRCmLRgHZGMI0gMQ4AYYCGRjCJYUEKAcGBhkYwj0FBCeHRgfZGMI0f__________ARDR__________8BGC9keAGAAQKIAe3rp8YBkAEc"
                },
                {
                    "description": "Comme chaque année, le premier jour du printemps est l’occasion de mêler gourmandise et bonne action avec l’opération « Le jour du macaron », initiée par Pierre Hermé. Le concept ? Faire un don en échange d’un macaron pour soutenir l’association Vaincre la mucoviscidose. Pour participer, rien de...",
                    "type": "video",
                    "name": "Le jour du macaron, c’est aujourd'hui ! - Elle à Table",
                    "created": "Thu, 20 Mar 2014 00:00:00 UTC",
                    "branding": "Cuisine",
                    "duration": "0",
                    "views": "0",
                    "thumbnail": [
                        {
                            "url": "http://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fa248.e.akamai.net%2Ff%2F248%2F217668%2F30d%2Fs.gimg.jp%2Fcmsimg%2F5%2F4%2F0%2F54052.jpg"
                        }
                    ],
                    "categories": [
                        "fr"
                    ],
                    "id": "~~V1~~2347514236084305630~~JqfG5PKwJnf00XBC1Kl75C5dKLQe2REsTFN8A2PneMe9OSd03RFk211LqYDaWXBnlD6CtweKIb_hxshbJxLBaL3Gzi67IULKH_cPQniqvf34JR2BZr0JwlZJK_n38LmXBznfstAxgHxK10DUnx__IOZshTJzHV6HG2_zDL-kFQ3JpQKlDH6nPzmMPUD_WgEHDeThOGHjSoqB1Ur5dwVW2rv5vUbL2X2u0jXsevYjewJHyXwphEXJ-ctFpysJGEJY-YMiEKt5faBg_LXVQLbnXZlLeXUHShw0g_iEThBuayk",
                    "origin": "sponsored",
                    "url": "http://api.taboola.com/1.0/json/taboola-templates/recommendations.notify-click?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&response.id=__9a259478418a06aab96918375d8d1c04__5e6c2131f9e0f166094b327926edfe75&response.session=v2_473b101d75e6ec0a7d473704d8d9396a_22a2b35c-7eaa-4646-97bc-4c492ac84615-tuct926585f_1647104735_1647104735_CNawjgYQswsY9PHe-PcvIAEoATBmOIjrCkCvkBBI8dLYA1D___________8BWABgAGjb_5X0ga2ul6YBcAE&item.id=%7E%7EV1%7E%7E2347514236084305630%7E%7EJqfG5PKwJnf00XBC1Kl75C5dKLQe2REsTFN8A2PneMe9OSd03RFk211LqYDaWXBnlD6CtweKIb_hxshbJxLBaL3Gzi67IULKH_cPQniqvf34JR2BZr0JwlZJK_n38LmXBznfstAxgHxK10DUnx__IOZshTJzHV6HG2_zDL-kFQ3JpQKlDH6nPzmMPUD_WgEHDeThOGHjSoqB1Ur5dwVW2rv5vUbL2X2u0jXsevYjewJHyXwphEXJ-ctFpysJGEJY-YMiEKt5faBg_LXVQLbnXZlLeXUHShw0g_iEThBuayk&item.type=video&sig=26ba73996597305796bc02123e78896a01f28b1c9b63&redir=http%3A%2F%2Fwww.elle.fr%2FElle-a-Table%2FLes-dossiers-de-la-redaction%2FNews-de-la-redaction%2FLe-jour-du-macaron-c-est-demain-2689555%3Futm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiD_5D7uFHCM9hYaMx1FUz2-Cymy-7lvCzE5dzEFumhFuSC5BCjHn7P7mZfiyYIB%23tblciGiD_5D7uFHCM9hYaMx1FUz2-Cymy-7lvCzE5dzEFumhFuSC5BCjHn7P7mZfiyYIB&ui=22a2b35c-7eaa-4646-97bc-4c492ac84615-tuct926585f&cpb=GIkFIJz__________wEqFnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHRyYzAwMTA1OICsg6oFQIjrCkivkBBQ8dLYA1j___________8BYwjXFhDVHxgjZGMI7f__________ARDt__________8BGBNkYwiqIRCmLRgHZGMI0gMQ4AYYCGRjCJYUEKAcGBhkYwj0FBCeHRgfZGMI0f__________ARDR__________8BGC9keAGAAQKIAe3rp8YBkAEc"
                },
                {
                    "description": "Faire pousser herbes aromatiques et fruits et légumes en ville, perché sur des toits-terrasses, n'est pas qu'un rêve. A Paris, les expérimentations se multiplient. Reste à leur trouver un modèle économique.",
                    "type": "video",
                    "name": "Et si on essayait l'agriculture sur toit ?",
                    "created": "Sat, 15 Nov 2014 12:15:51 UTC",
                    "branding": "Le Monde",
                    "duration": "0",
                    "views": "0",
                    "thumbnail": [
                        {
                            "url": "http://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fcdn-elle.ladmedia.fr%2Fvar%2Fplain_site%2Fstorage%2Fimages%2Felle-a-table%2Fles-dossiers-de-la-redaction%2Fnews-de-la-redaction%2Fle-jour-du-macaron-c-est-demain-2689555%2F46795555-1-fre-FR%2FLe-jour-du-macaron-c-est-demain_reference.jpg"
                        }
                    ],
                    "categories": [
                        "fr"
                    ],
                    "id": "~~V1~~-2656768923702217749~~tQnbylDSLNmeTjNpa8kLDC5dKLQe2REsTFN8A2PneMe9OSd03RFk211LqYDaWXBnlD6CtweKIb_hxshbJxLBaL3Gzi67IULKH_cPQniqvf34JR2BZr0JwlZJK_n38LmXBznfstAxgHxK10DUnx__IOZshTJzHV6HG2_zDL-kFQ0UfCyivbj_QRuEya8ncB15DeThOGHjSoqB1Ur5dwVW2rv5vUbL2X2u0jXsevYjewK5TFTIT0IGnWTGd7mb56SZ-YMiEKt5faBg_LXVQLbnXZlLeXUHShw0g_iEThBuayk",
                    "origin": "sponsored",
                    "url": "http://api.taboola.com/1.0/json/taboola-templates/recommendations.notify-click?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&response.id=__9a259478418a06aab96918375d8d1c04__5e6c2131f9e0f166094b327926edfe75&response.session=v2_473b101d75e6ec0a7d473704d8d9396a_22a2b35c-7eaa-4646-97bc-4c492ac84615-tuct926585f_1647104735_1647104735_CNawjgYQswsY9PHe-PcvIAEoATBmOIjrCkCvkBBI8dLYA1D___________8BWABgAGjb_5X0ga2ul6YBcAE&item.id=%7E%7EV1%7E%7E-2656768923702217749%7E%7EtQnbylDSLNmeTjNpa8kLDC5dKLQe2REsTFN8A2PneMe9OSd03RFk211LqYDaWXBnlD6CtweKIb_hxshbJxLBaL3Gzi67IULKH_cPQniqvf34JR2BZr0JwlZJK_n38LmXBznfstAxgHxK10DUnx__IOZshTJzHV6HG2_zDL-kFQ0UfCyivbj_QRuEya8ncB15DeThOGHjSoqB1Ur5dwVW2rv5vUbL2X2u0jXsevYjewK5TFTIT0IGnWTGd7mb56SZ-YMiEKt5faBg_LXVQLbnXZlLeXUHShw0g_iEThBuayk&item.type=video&sig=208a543c58d61a77486e849328c85af6496a5789a917&redir=http%3A%2F%2Fwww.lemonde.fr%2Fplanete%2Fvisuel%2F2014%2F11%2F15%2Fet-si-on-essayait-l-agriculture-sur-toit_4521326_3244.html%3Futm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiD_5D7uFHCM9hYaMx1FUz2-Cymy-7lvCzE5dzEFumhFuSC5BCjKp-STv7LItpEB%23tblciGiD_5D7uFHCM9hYaMx1FUz2-Cymy-7lvCzE5dzEFumhFuSC5BCjKp-STv7LItpEB&ui=22a2b35c-7eaa-4646-97bc-4c492ac84615-tuct926585f&cpb=GIkFIJz__________wEqFnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHRyYzAwMTA1OICsg6oFQIjrCkivkBBQ8dLYA1j___________8BYwjXFhDVHxgjZGMI7f__________ARDt__________8BGBNkYwiqIRCmLRgHZGMI0gMQ4AYYCGRjCJYUEKAcGBhkYwj0FBCeHRgfZGMI0f__________ARDR__________8BGC9keAGAAQKIAe3rp8YBkAEc"
                },
                {
                    "description": "Si la collection ne sort en boutique que le 30 avril prochain, Topshop nous dévoile dès aujourd'hui l'intégralité de la capsule dessinée par la plus rock des icônes de mode. A l'esprit vintage et très british, on y retrouve toute la garde-robe que Kate Moss porte au quotidien : des hauts brodés,...",
                    "type": "video",
                    "name": "Kate Moss pour Topshop, l'intégralité de la collection dévoilée",
                    "created": "Wed, 09 Apr 2014 10:21:55 UTC",
                    "branding": "Elle",
                    "duration": "0",
                    "views": "0",
                    "thumbnail": [
                        {
                            "url": "http://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fcdn-elle.ladmedia.fr%2Fvar%2Fplain_site%2Fstorage%2Fimages%2Fmode%2Fdossiers-mode%2Fkate-moss-pour-topshop-l-integralite-de-la-collection-devoilee%2F46948104-1-fre-FR%2FKate-Moss-pour-Topshop-l-integralite-de-la-collection-devoilee_reference.jpg"
                        }
                    ],
                    "categories": [
                        "fr"
                    ],
                    "id": "~~V1~~-3111871411296412953~~nQnVG9RcaWLuK7_jeOD8WC5dKLQe2REsTFN8A2PneMe9OSd03RFk211LqYDaWXBnlD6CtweKIb_hxshbJxLBaL3Gzi67IULKH_cPQniqvf34JR2BZr0JwlZJK_n38LmXBznfstAxgHxK10DUnx__IOZshTJzHV6HG2_zDL-kFQ1yvd8osYXdl5fuaaggEbG0DeThOGHjSoqB1Ur5dwVW2rv5vUbL2X2u0jXsevYjewKyAm-zJ6OxsPQby-EOeTV3-YMiEKt5faBg_LXVQLbnXZlLeXUHShw0g_iEThBuayk",
                    "origin": "sponsored",
                    "url": "http://api.taboola.com/1.0/json/taboola-templates/recommendations.notify-click?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&response.id=__9a259478418a06aab96918375d8d1c04__5e6c2131f9e0f166094b327926edfe75&response.session=v2_473b101d75e6ec0a7d473704d8d9396a_22a2b35c-7eaa-4646-97bc-4c492ac84615-tuct926585f_1647104735_1647104735_CNawjgYQswsY9PHe-PcvIAEoATBmOIjrCkCvkBBI8dLYA1D___________8BWABgAGjb_5X0ga2ul6YBcAE&item.id=%7E%7EV1%7E%7E-3111871411296412953%7E%7EnQnVG9RcaWLuK7_jeOD8WC5dKLQe2REsTFN8A2PneMe9OSd03RFk211LqYDaWXBnlD6CtweKIb_hxshbJxLBaL3Gzi67IULKH_cPQniqvf34JR2BZr0JwlZJK_n38LmXBznfstAxgHxK10DUnx__IOZshTJzHV6HG2_zDL-kFQ1yvd8osYXdl5fuaaggEbG0DeThOGHjSoqB1Ur5dwVW2rv5vUbL2X2u0jXsevYjewKyAm-zJ6OxsPQby-EOeTV3-YMiEKt5faBg_LXVQLbnXZlLeXUHShw0g_iEThBuayk&item.type=video&sig=bdec22783daf66fc6894b5406b067dbfa45bee975572&redir=http%3A%2F%2Fwww.elle.fr%2FMode%2FDossiers-mode%2FKate-Moss-pour-Topshop-l-integralite-de-la-collection-devoilee%3Futm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiD_5D7uFHCM9hYaMx1FUz2-Cymy-7lvCzE5dzEFumhFuSC5BCjaxvXcjN_m_Qc%23tblciGiD_5D7uFHCM9hYaMx1FUz2-Cymy-7lvCzE5dzEFumhFuSC5BCjaxvXcjN_m_Qc&ui=22a2b35c-7eaa-4646-97bc-4c492ac84615-tuct926585f&cpb=GIkFIJz__________wEqFnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHRyYzAwMTA1OICsg6oFQIjrCkivkBBQ8dLYA1j___________8BYwjXFhDVHxgjZGMI7f__________ARDt__________8BGBNkYwiqIRCmLRgHZGMI0gMQ4AYYCGRjCJYUEKAcGBhkYwj0FBCeHRgfZGMI0f__________ARDR__________8BGC9keAGAAQKIAe3rp8YBkAEc"
                },
                {
                    "description": "Praha - Uzavřené silnice a nehody aut i vlaků přineslo dnes v Česku sněžení se silným větrem. Problémy měly hlavně kamiony. V Karlovarském kraji byla uzavřena silnice z Božího Daru na Neklid a Klínovec, a zůstane tak nejméně do čtvrtečního rána. V Libereckém kraji zablokovala nehoda kamionu hlavní s",
                    "type": "video",
                    "name": "Silné sněžení ztěžovalo dopravu, přibylo nehod aut i vlaků",
                    "created": "Mon, 11 Feb 2019 08:42:35 UTC",
                    "branding": "msn.cs-cz",
                    "duration": "0",
                    "views": "0",
                    "thumbnail": [
                        {
                            "url": "http://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/https%3A%2F%2Fimg-s-msn-com.akamaized.net%2Ftenant%2Famp%2Fentityid%2FBBRIwRz.img%3Fh%3D200%26amp%3Bw%3D300%26amp%3Bm%3D6%26amp%3Bq%3D60%26amp%3Bo%3Df%26amp%3Bl%3Df",
                            "width": "301",
                            "height": "200"
                        }
                    ],
                    "categories": [
                        "cs"
                    ],
                    "id": "~~V1~~-3996036363883419531~~8OVfKQAapkZGTung1CrmdXsZi9yjv8_eIqEYhD7NB6o9ZEj1nSOh25J82sTDXEn1oWs157JoiAAXIKi9-eLaKG3GM7Q_aWDX9O8A-oTuarjB3pAXD2426g4yuaugyXYaN63gxaKde9rsWPArupdiqgPEfFLTNctf0R_0ZK-0Ze7FAGc5vnwRjcVjfHMZDP6MZVO9vYXRmElxEZe4W_VJZOL2Nsany5zViyVeNDKT2L6bkt4RUF7qo5n_0RGv9kLOjrOGv-6iDoYLvQ6osB3pEQ",
                    "origin": "sponsored",
                    "url": "http://api.taboola.com/1.0/json/taboola-templates/recommendations.notify-click?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&response.id=__9a259478418a06aab96918375d8d1c04__5e6c2131f9e0f166094b327926edfe75&response.session=v2_473b101d75e6ec0a7d473704d8d9396a_22a2b35c-7eaa-4646-97bc-4c492ac84615-tuct926585f_1647104735_1647104735_CNawjgYQswsY9PHe-PcvIAEoATBmOIjrCkCvkBBI8dLYA1D___________8BWABgAGjb_5X0ga2ul6YBcAE&item.id=%7E%7EV1%7E%7E-3996036363883419531%7E%7E8OVfKQAapkZGTung1CrmdXsZi9yjv8_eIqEYhD7NB6o9ZEj1nSOh25J82sTDXEn1oWs157JoiAAXIKi9-eLaKG3GM7Q_aWDX9O8A-oTuarjB3pAXD2426g4yuaugyXYaN63gxaKde9rsWPArupdiqgPEfFLTNctf0R_0ZK-0Ze7FAGc5vnwRjcVjfHMZDP6MZVO9vYXRmElxEZe4W_VJZOL2Nsany5zViyVeNDKT2L6bkt4RUF7qo5n_0RGv9kLOjrOGv-6iDoYLvQ6osB3pEQ&item.type=video&sig=debd8585059639f3dcccd2c71c90efe14638ea52e231&redir=https%3A%2F%2Fwww.msn.com%2Fcs-cz%2Fzpravy%2Fother%2Fsiln%C3%A9-sn%C4%9B%C5%BEen%C3%AD-zt%C4%9B%C5%BEovalo-dopravu-p%C5%99ibylo-nehod-aut-i-vlak%C5%AF%2Far-BBRHowo%3Futm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiD_5D7uFHCM9hYaMx1FUz2-Cymy-7lvCzE5dzEFumhFuSC5BCjL_rPt7uaDgc8B%23tblciGiD_5D7uFHCM9hYaMx1FUz2-Cymy-7lvCzE5dzEFumhFuSC5BCjL_rPt7uaDgc8B&ui=22a2b35c-7eaa-4646-97bc-4c492ac84615-tuct926585f&cpb=GIkFIJz__________wEqFnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHRyYzAwMTA1OICsg6oFQIjrCkivkBBQ8dLYA1j___________8BYwjXFhDVHxgjZGMI7f__________ARDt__________8BGBNkYwiqIRCmLRgHZGMI0gMQ4AYYCGRjCJYUEKAcGBhkYwj0FBCeHRgfZGMI0f__________ARDR__________8BGC9keAGAAQKIAe3rp8YBkAEc"
                },
                {
                    "description": "Bár a szüleink kétségkívül örülnek neki, hogy felnőttünk és megkönnyebbülnek, mikor a gyerekes szokásainkból kinövünk, az állatokkal más a helyzet: azt szeretnénk, hogy soha ne...",
                    "type": "video",
                    "name": "30 állatkölyök, aki biztosan levesz a lábadról",
                    "created": "Sun, 10 Feb 2019 15:58:02 UTC",
                    "branding": "Dobuhdo.com",
                    "duration": "0",
                    "views": "0",
                    "thumbnail": [
                        {
                            "url": "http://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fdobuhdo.com%2Fimages%2Fblog%2Fphoto_1.jpg",
                            "width": "605",
                            "height": "620"
                        }
                    ],
                    "categories": [
                        "hu"
                    ],
                    "id": "~~V1~~-4216510590368452700~~4mB77avgfmehKMZ6doGVm3sZi9yjv8_eIqEYhD7NB6o9ZEj1nSOh25J82sTDXEn1oWs157JoiAAXIKi9-eLaKG3GM7Q_aWDX9O8A-oTuarjB3pAXD2426g4yuaugyXYaN63gxaKde9rsWPArupdiqgPEfFLTNctf0R_0ZK-0Ze71nr3ED0vKFpydpKhLr93YZVO9vYXRmElxEZe4W_VJZG6Vq2D9tF4MTTwLwRozP6ibkt4RUF7qo5n_0RGv9kLOjrOGv-6iDoYLvQ6osB3pEQ",
                    "origin": "sponsored",
                    "url": "http://api.taboola.com/1.0/json/taboola-templates/recommendations.notify-click?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&response.id=__9a259478418a06aab96918375d8d1c04__5e6c2131f9e0f166094b327926edfe75&response.session=v2_473b101d75e6ec0a7d473704d8d9396a_22a2b35c-7eaa-4646-97bc-4c492ac84615-tuct926585f_1647104735_1647104735_CNawjgYQswsY9PHe-PcvIAEoATBmOIjrCkCvkBBI8dLYA1D___________8BWABgAGjb_5X0ga2ul6YBcAE&item.id=%7E%7EV1%7E%7E-4216510590368452700%7E%7E4mB77avgfmehKMZ6doGVm3sZi9yjv8_eIqEYhD7NB6o9ZEj1nSOh25J82sTDXEn1oWs157JoiAAXIKi9-eLaKG3GM7Q_aWDX9O8A-oTuarjB3pAXD2426g4yuaugyXYaN63gxaKde9rsWPArupdiqgPEfFLTNctf0R_0ZK-0Ze71nr3ED0vKFpydpKhLr93YZVO9vYXRmElxEZe4W_VJZG6Vq2D9tF4MTTwLwRozP6ibkt4RUF7qo5n_0RGv9kLOjrOGv-6iDoYLvQ6osB3pEQ&item.type=video&sig=dfd3f30771a87053e4745651ca9432303a3f6a9e4555&redir=http%3A%2F%2Fdobuhdo.com%2Fhu%2Fallatkolykok-akik-biztosan-levesznek-a-labadrol.html%3Futm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiD_5D7uFHCM9hYaMx1FUz2-Cymy-7lvCzE5dzEFumhFuSC5BCjz_Lzo1c-a2c0B%23tblciGiD_5D7uFHCM9hYaMx1FUz2-Cymy-7lvCzE5dzEFumhFuSC5BCjz_Lzo1c-a2c0B&ui=22a2b35c-7eaa-4646-97bc-4c492ac84615-tuct926585f&cpb=GIkFIJz__________wEqFnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHRyYzAwMTA1OICsg6oFQIjrCkivkBBQ8dLYA1j___________8BYwjXFhDVHxgjZGMI7f__________ARDt__________8BGBNkYwiqIRCmLRgHZGMI0gMQ4AYYCGRjCJYUEKAcGBhkYwj0FBCeHRgfZGMI0f__________ARDR__________8BGC9keAGAAQKIAe3rp8YBkAEc"
                },
                {
                    "description": "Des idées pour bosser dans d'autres conditions ?",
                    "type": "video",
                    "name": "Top 10 des plus Beaux Bureaux à la Maison",
                    "created": "Thu, 23 Jan 2014 11:34:59 UTC",
                    "branding": "Buzzly",
                    "duration": "0",
                    "views": "0",
                    "thumbnail": [
                        {
                            "url": "http://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fcdn-elle.ladmedia.fr%2Fvar%2Fplain_site%2Fstorage%2Fimages%2Felle-a-table%2Fles-dossiers-de-la-redaction%2Fnews-de-la-redaction%2Fle-jour-du-macaron-c-est-demain-2689555%2F46795555-1-fre-FR%2FLe-jour-du-macaron-c-est-demain_reference.jpg"
                        }
                    ],
                    "categories": [
                        "fr"
                    ],
                    "id": "~~V1~~2055184657886535235~~YW00NQfnhcdBprg1RU2OKC5dKLQe2REsTFN8A2PneMe9OSd03RFk211LqYDaWXBnlD6CtweKIb_hxshbJxLBaL3Gzi67IULKH_cPQniqvf34JR2BZr0JwlZJK_n38LmXBznfstAxgHxK10DUnx__IOZshTJzHV6HG2_zDL-kFQ2HIi55JAfICKRKsk1MVISFDeThOGHjSoqB1Ur5dwVW2rv5vUbL2X2u0jXsevYjewK5TFTIT0IGnWTGd7mb56SZ-YMiEKt5faBg_LXVQLbnXZlLeXUHShw0g_iEThBuayk",
                    "origin": "sponsored",
                    "url": "http://api.taboola.com/1.0/json/taboola-templates/recommendations.notify-click?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&response.id=__9a259478418a06aab96918375d8d1c04__5e6c2131f9e0f166094b327926edfe75&response.session=v2_473b101d75e6ec0a7d473704d8d9396a_22a2b35c-7eaa-4646-97bc-4c492ac84615-tuct926585f_1647104735_1647104735_CNawjgYQswsY9PHe-PcvIAEoATBmOIjrCkCvkBBI8dLYA1D___________8BWABgAGjb_5X0ga2ul6YBcAE&item.id=%7E%7EV1%7E%7E2055184657886535235%7E%7EYW00NQfnhcdBprg1RU2OKC5dKLQe2REsTFN8A2PneMe9OSd03RFk211LqYDaWXBnlD6CtweKIb_hxshbJxLBaL3Gzi67IULKH_cPQniqvf34JR2BZr0JwlZJK_n38LmXBznfstAxgHxK10DUnx__IOZshTJzHV6HG2_zDL-kFQ2HIi55JAfICKRKsk1MVISFDeThOGHjSoqB1Ur5dwVW2rv5vUbL2X2u0jXsevYjewK5TFTIT0IGnWTGd7mb56SZ-YMiEKt5faBg_LXVQLbnXZlLeXUHShw0g_iEThBuayk&item.type=video&sig=c30b9b90a268378e6648df253530327f2327757b6248&redir=http%3A%2F%2Fwww.buzzly.fr%2Ftop-10-des-plus-beaux-bureaux-a-la-maison.html%3Futm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiD_5D7uFHCM9hYaMx1FUz2-Cymy-7lvCzE5dzEFumhFuSC5BCi46djI59m2n1A%23tblciGiD_5D7uFHCM9hYaMx1FUz2-Cymy-7lvCzE5dzEFumhFuSC5BCi46djI59m2n1A&ui=22a2b35c-7eaa-4646-97bc-4c492ac84615-tuct926585f&cpb=GIkFIJz__________wEqFnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHRyYzAwMTA1OICsg6oFQIjrCkivkBBQ8dLYA1j___________8BYwjXFhDVHxgjZGMI7f__________ARDt__________8BGBNkYwiqIRCmLRgHZGMI0gMQ4AYYCGRjCJYUEKAcGBhkYwj0FBCeHRgfZGMI0f__________ARDR__________8BGC9keAGAAQKIAe3rp8YBkAEc"
                }
            ]
        }
    }

    const requestRes4Temps = {
        data: {
            list: requestRes.data.list.slice(0, 4)
        }
    }

    const badRequestRes = {
        data: null,
        err: 'err'
    }

    test('renders 8 widgets when got 8', () => {
        mainJS.renderTemplates(requestRes);
        expect(document.querySelector('.recommendations').childElementCount)
            .toBe(8)
    })

    test('renders only 4 widgets when got 4', () => {
        mainJS.renderTemplates(requestRes4Temps);
        expect(document.querySelector('.recommendations').childElementCount)
            .toBe(4)
    })

    test('showing error container when bad request', () => {
        mainJS.renderTemplates(badRequestRes);
        expect(document.querySelector('.error-container').style.display)
            .toBe('flex')
    })

    test('bad img urls fallback', () => {
        mainJS.renderTemplates(badRequestRes);
        const elImgs = document.querySelectorAll('article .img');
        elImgsUrls = elImgs.map(elImg => elImg.style.backgroundImage);
        expect(elImgsUrls[3]).toBe()
    })
})