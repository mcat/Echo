
var Ronik = Ronik || {};
Ronik.EchoStreamer = function(options) {
    var settings = {
        appKey: "dev.ronikdesign",
        query: "scope:" + window.location.href,
        interval: 5000,
        topic: "/ronik/echo/search"
    };
    _.extend(settings, options);


    var gaga = {
        "id": "http://api.echoenabled.com/v1/search?q=childrenof:http://www.ladygaga.com/*%20((source:Twitter%20AND%20user.id:http://twitter.com/ladygaga)%20OR%20source:LadyGaga.com)%20provider:Arktan%20-state:ModeratorDeleted%20itemsPerPage:10%20%20safeHTML:off%20children:1%20((source:Twitter%20markers:twitter-reputation-high)%20OR%20(type:comment%20provider:jskit))%20-state:ModeratorDeleted,SystemFlagged,ModeratorFlagged,CommunityFlagged%20-user.state:ModeratorBanned%20childrenSortOrder:reverseChronological%20childrenItemsPerPage:2%20",
        "updated": "2012-01-28T22:49:49Z",
        "hasMoreChildren": "true",
        "sortOrder": "reverseChronological",
        "safeHTML": "off",
        "itemsPerPage": "10",
        "children": {
            "maxDepth": "1",
            "sortOrder": "reverseChronological",
            "itemsPerPage": "2",
            "filter": "((((source:\"Twitter\" AND markers:\"twitter-reputation-high\") OR (type:\"comment\" AND provider:\"jskit\")) AND -((state:\"ModeratorDeleted\" OR ((state:\"SystemFlagged\" OR state:\"ModeratorFlagged\") OR state:\"CommunityFlagged\")))) AND -user.state:\"ModeratorBanned\")"
        },
        "nextPageAfter": "1326763200.058354",
        "nextSince": "1327791012.887373",
        "liveUpdatesTimeout": "0",
        "entries": [
            {
                "id": "http://js-kit.com/activities/post/7fdd38d4af7ef98b14e92979bf8653f4",
                "actor": {
                    "links": [
                        "http:///"
                    ],
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/person"
                    ],
                    "id": "http://twitter.com/ladygaga",
                    "title": "@LadyGaga",
                    "status": "Untouched",
                    "avatar": "http://a1.twimg.com/profile_images/1239447061/Unnamed-1_normal.jpg"
                },
                "object": {
                    "id": "http://twitter.com/ladygaga/statuses/162998631119589376",
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/article"
                    ],
                    "title": "This is so AMAZING <a href=\"http://t.co/SkAsS3zK\" rel=\"nofollow\">http://t.co/SkAsS3zK</a> <a href=\"http://twitter.com/search?q=%23HairMusicVideo\" title=\"#HairMusicVideo\" class=\"tweet-url hashtag\" rel=\"nofollow\">#HairMusicVideo</a> you guys did such an amazing job for <a href=\"http://twitter.com/search?q=%23ItGetsBetter\" title=\"#ItGetsBetter\" class=\"tweet-url hashtag\" rel=\"nofollow\">#ItGetsBetter</a>. The Choreo! I died!",
                    "permalink": "http://twitter.com/ladygaga/statuses/162998631119589376",
                    "context": [
                        {
                            "uri": "http://ctv.ca/official/twitter"
                        },
                        {
                            "uri": "http://youtube.com/watch?feature=player_embedded&v=ElvcAcg7yLA",
                            "title": "Lady Gaga - #HairMusicVideo - It Gets Better"
                        },
                        {
                            "uri": "http://ladygaga.com/official/twitter"
                        }
                    ],
                    "content": "<div class=\"note_title\">This is so AMAZING <a href=\"http://t.co/SkAsS3zK\" data-resolved=\"http://www.youtube.com/watch?v=ElvcAcg7yLA&feature=player_embedded\" rel=\"nofollow\">http://t.co/SkAsS3zK</a> <a href=\"http://twitter.com/search?q=%23HairMusicVideo\" title=\"#HairMusicVideo\" class=\"tweet-url hashtag\" rel=\"nofollow\">#HairMusicVideo</a> you guys did such an amazing job for <a href=\"http://twitter.com/search?q=%23ItGetsBetter\" title=\"#ItGetsBetter\" class=\"tweet-url hashtag\" rel=\"nofollow\">#ItGetsBetter</a>. The Choreo! I died!</div><div class=\"metadata note_metadata twitter_metadata\"><div class=\"metadata_description_div\"><div class=\"metadata_description\"><div class=\"meta_video\"><iframe width=\"425\" height=\"355\" src=\"http://www.youtube.com/embed/ElvcAcg7yLA\" frameborder=\"0\" allowfullscreen></iframe></div></div></div></div>",
                    "content_type": "text",
                    "status": "Untouched",
                    "markers": [
                        "arktan-video"
                    ],
                    "tags": [
                        "hairmusicvideo",
                        "itgetsbetter"
                    ],
                    "likes": [
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=f459db57-264a-4396-8469-86e2b9986c76",
                                "title": "AnaSilva14",
                                "avatar": "http://graph.facebook.com/100002047966145/picture?type=normal"
                            },
                            "published": "2012-01-28T21:45:10Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=193824a7-8dd7-4db4-9b20-dfc1ce0da476",
                                "title": "Haus_of_Frost",
                                "avatar": "http://graph.facebook.com/1575250773/picture?type=normal"
                            },
                            "published": "2012-01-28T21:23:30Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=e7b29891-00a6-45fd-a5d2-62886f07514f",
                                "title": "RonanBennett",
                                "avatar": "http://graph.facebook.com/100000990593611/picture?type=normal"
                            },
                            "published": "2012-01-28T19:19:24Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=cad301f1-9367-4f39-996a-6e91ccae248b",
                                "title": "BrianGanje",
                                "avatar": "http://graph.facebook.com/1080275742/picture?type=normal"
                            },
                            "published": "2012-01-28T19:13:55Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=82c826cf-de97-4b77-940f-9968a9a3f567",
                                "title": "Lucas Lima",
                                "avatar": "http://graph.facebook.com/100002168348724/picture?type=normal"
                            },
                            "published": "2012-01-28T17:31:49Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=0662420a-fe09-4162-a68a-3cd1c78cb31e",
                                "title": "GagaxLovee",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/a99394395f0d95fb292b5e2b929feec5d3885e71.jpg"
                            },
                            "published": "2012-01-28T13:26:30Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=8e9f83c2-0cd8-42af-92c1-60aaa82db04f",
                                "title": "InesLittleMonsterHayouni",
                                "avatar": "http://graph.facebook.com/100001456501478/picture?type=normal"
                            },
                            "published": "2012-01-28T12:55:50Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=b9313ba3-683c-4bcf-974f-4d1f2424f38e",
                                "title": "Lady CoCo",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/01457b633d303da034d2963f5259e9eab01e86fc.jpg"
                            },
                            "published": "2012-01-28T11:07:27Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=0771a499-ba0c-4c70-abb0-5c6009846fb4",
                                "title": "LisaJUlmer",
                                "avatar": "http://graph.facebook.com/100002089004056/picture?type=normal"
                            },
                            "published": "2012-01-28T10:53:10Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=66da90f3-daa9-4dac-b692-5abd08ced8f8",
                                "title": "IgorKlimenko"
                            },
                            "published": "2012-01-28T10:39:25Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=f7e438d3-10eb-44b7-bd0a-6520aca5b82e",
                                "title": "HausOfYouAndMe",
                                "avatar": "http://a2.twimg.com/profile_images/1499788146/finalwecollidetonight_reasonably_small_reasonably_small.jpg"
                            },
                            "published": "2012-01-28T10:31:59Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=56a84423-f46c-4264-bb51-9a03b6cdb62e",
                                "title": "Little Monster's",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/273a4660b532b7ed743d7bbd8c4b3d3145b37f23.jpg"
                            },
                            "published": "2012-01-28T09:10:40Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=47899135-6f70-4286-98fe-b9a4593da1fd",
                                "title": "Adelina",
                                "avatar": "http://graph.facebook.com/1313410676/picture?type=normal"
                            },
                            "published": "2012-01-28T08:00:24Z"
                        }
                    ],
                    "published": "2012-01-27T20:41:16Z",
                    "accumulators": {
                        "repliesCount": "1506",
                        "likesCount": "21"
                    }
                },
                "source": {
                    "name": "Twitter",
                    "uri": "http://search.twitter.com/search?q=from%3Aladygaga",
                    "icon": "http://cdn.js-kit.com/images/favicons/twitter.png"
                },
                "provider": {
                    "name": "Arktan",
                    "uri": "http://arktan.com/",
                    "icon": "http://arktan.com/images/favicon.ico"
                },
                "verbs": [
                    "http://activitystrea.ms/schema/1.0/post"
                ],
                "postedTime": "2012-01-27T20:41:16Z",
                "targets": [
                    {
                        "id": "http://ctv.ca/official/twitter",
                        "conversationID": "http://twitter.com/ladygaga/statuses/162998631119589376"
                    },
                    {
                        "id": "http://youtube.com/watch?feature=player_embedded&v=ElvcAcg7yLA",
                        "conversationID": "http://twitter.com/ladygaga/statuses/162998631119589376"
                    },
                    {
                        "id": "http://ladygaga.com/official/twitter",
                        "conversationID": "http://twitter.com/ladygaga/statuses/162998631119589376"
                    }
                ],
                "pageAfter": "1327696876.059663",
                "hasMoreChildren": "true"
            },
            {
                "id": "http://js-kit.com/activities/post/26ae2cbe6d082a4858e2fa283e07635e",
                "actor": {
                    "links": [
                        "http:///"
                    ],
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/person"
                    ],
                    "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=f459db57-264a-4396-8469-86e2b9986c76",
                    "title": "AnaSilva14",
                    "status": "Untouched",
                    "avatar": "http://graph.facebook.com/100002047966145/picture?type=normal"
                },
                "object": {
                    "id": "http://twitter.com/ECHO/item/1327787381-752-786",
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/comment"
                    ],
                    "permalink": "",
                    "context": [
                        {
                            "uri": "http://twitter.com/ladygaga/statuses/162998631119589376",
                            "title": "This is so AMAZING http://t.co/SkAsS3zK #HairMusicVideo you guys did such an amazing job for #ItGetsBetter. The Choreo! I died!"
                        }
                    ],
                    "content": "AWESOME!!! Great video!!! I love it<3",
                    "content_type": "html",
                    "status": "Untouched",
                    "markers": [
                        "site:http://www.ladygaga.com/"
                    ],
                    "published": "2012-01-28T21:49:41Z"
                },
                "source": {
                    "name": "twitter.com"
                },
                "provider": {
                    "name": "jskit",
                    "uri": "http://aboutecho.com/",
                    "icon": "http://cdn.js-kit.com/images/echo.png"
                },
                "verbs": [
                    "http://activitystrea.ms/schema/1.0/post"
                ],
                "postedTime": "2012-01-28T21:49:41Z",
                "targets": [
                    {
                        "id": "http://twitter.com/ladygaga/statuses/162998631119589376",
                        "conversationID": "http://twitter.com/ladygaga/statuses/162998631119589376"
                    }
                ],
                "pageAfter": "1327787381.098552",
                "hasMoreChildren": "false"
            },
            {
                "id": "http://js-kit.com/activities/post/d893b4be5978484e22ae4d824a03f0ae",
                "actor": {
                    "links": [
                        "http:///"
                    ],
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/person"
                    ],
                    "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=65e8a512-ecf1-45ff-9c72-96d9b3a0a6b2",
                    "title": "hollie0901",
                    "status": "Untouched",
                    "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/a1219774a02289d23e214315953ebecd84219975.jpg"
                },
                "object": {
                    "id": "http://twitter.com/ECHO/item/1327785696-58-33",
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/comment"
                    ],
                    "permalink": "",
                    "context": [
                        {
                            "uri": "http://twitter.com/ladygaga/statuses/162998631119589376",
                            "title": "This is so AMAZING http://t.co/SkAsS3zK #HairMusicVideo you guys did such an amazing job for #ItGetsBetter. The Choreo! I died!"
                        }
                    ],
                    "content": "Hi Lady GaGa i really want to be a singer. I wrote my own song but no one said its good enough can you help me im a young girl and i dont no what to do",
                    "content_type": "html",
                    "status": "Untouched",
                    "markers": [
                        "site:http://www.ladygaga.com/"
                    ],
                    "published": "2012-01-28T21:21:36Z"
                },
                "source": {
                    "name": "twitter.com"
                },
                "provider": {
                    "name": "jskit",
                    "uri": "http://aboutecho.com/",
                    "icon": "http://cdn.js-kit.com/images/echo.png"
                },
                "verbs": [
                    "http://activitystrea.ms/schema/1.0/post"
                ],
                "postedTime": "2012-01-28T21:21:36Z",
                "targets": [
                    {
                        "id": "http://twitter.com/ladygaga/statuses/162998631119589376",
                        "conversationID": "http://twitter.com/ladygaga/statuses/162998631119589376"
                    }
                ],
                "pageAfter": "1327785696.018337",
                "hasMoreChildren": "false"
            },
            {
                "id": "http://js-kit.com/activities/post/ae0729f99949ea518872d6215329d9e9",
                "actor": {
                    "links": [
                        "http:///"
                    ],
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/person"
                    ],
                    "id": "http://twitter.com/ladygaga",
                    "title": "@LadyGaga",
                    "status": "Untouched",
                    "avatar": "http://a1.twimg.com/profile_images/1239447061/Unnamed-1_normal.jpg"
                },
                "object": {
                    "id": "http://twitter.com/ladygaga/statuses/162992396265730050",
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/article"
                    ],
                    "title": "Haus meeting. Holy mother of coffee. I might need a valium today. Or maybe a tranquilizer meant for a small bunny. <a href=\"http://twitter.com/search?q=%23honoryourcreativity\" title=\"#honoryourcreativity\" class=\"tweet-url hashtag\" rel=\"nofollow\">#honoryourcreativity</a>",
                    "permalink": "http://twitter.com/ladygaga/statuses/162992396265730050",
                    "context": [
                        {
                            "uri": "http://ladygaga.com/official/twitter"
                        },
                        {
                            "uri": "http://ctv.ca/official/twitter"
                        }
                    ],
                    "content": "<div class=\"note_title\">Haus meeting. Holy mother of coffee. I might need a valium today. Or maybe a tranquilizer meant for a small bunny. <a href=\"http://twitter.com/search?q=%23honoryourcreativity\" title=\"#honoryourcreativity\" class=\"tweet-url hashtag\" rel=\"nofollow\">#honoryourcreativity</a></div>",
                    "content_type": "text",
                    "status": "Untouched",
                    "tags": [
                        "honoryourcreativity"
                    ],
                    "likes": [
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=f6147c2b-2180-4c67-a1f6-4a0a5c7c0ce7",
                                "title": "heavii",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/95f79eaaecfe6479e438013f11811ba1bebe4c5d.jpg"
                            },
                            "published": "2012-01-28T19:10:04Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=82c826cf-de97-4b77-940f-9968a9a3f567",
                                "title": "Lucas Lima",
                                "avatar": "http://graph.facebook.com/100002168348724/picture?type=normal"
                            },
                            "published": "2012-01-28T17:31:52Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=0662420a-fe09-4162-a68a-3cd1c78cb31e",
                                "title": "GagaxLovee",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/a99394395f0d95fb292b5e2b929feec5d3885e71.jpg"
                            },
                            "published": "2012-01-28T13:24:17Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=0771a499-ba0c-4c70-abb0-5c6009846fb4",
                                "title": "LisaJUlmer",
                                "avatar": "http://graph.facebook.com/100002089004056/picture?type=normal"
                            },
                            "published": "2012-01-28T10:58:09Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=66da90f3-daa9-4dac-b692-5abd08ced8f8",
                                "title": "IgorKlimenko"
                            },
                            "published": "2012-01-28T10:39:42Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=f7e438d3-10eb-44b7-bd0a-6520aca5b82e",
                                "title": "HausOfYouAndMe",
                                "avatar": "http://a2.twimg.com/profile_images/1499788146/finalwecollidetonight_reasonably_small_reasonably_small.jpg"
                            },
                            "published": "2012-01-28T10:37:56Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=56a84423-f46c-4264-bb51-9a03b6cdb62e",
                                "title": "Little Monster's",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/273a4660b532b7ed743d7bbd8c4b3d3145b37f23.jpg"
                            },
                            "published": "2012-01-28T09:16:23Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=8c8915a6-0967-4913-a148-3cbaaa72391e",
                                "title": "jazminsanchezacosta"
                            },
                            "published": "2012-01-28T04:23:39Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=be965c3e-4b92-4be0-b85c-8abe72d55bd7",
                                "title": "lilmonster82",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/b62aa54ae5f1b6cbe5e79a31968e1c301735f975.jpg"
                            },
                            "published": "2012-01-28T02:56:24Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=b90bb542-6f2e-43b2-953c-cdbb55a719ba",
                                "title": "MidahSasha",
                                "avatar": "http://graph.facebook.com/100000603189265/picture?type=normal"
                            },
                            "published": "2012-01-28T02:32:54Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=b3535f03-79d7-44be-9cd2-25280a2630c2",
                                "title": "MaribelAlonso",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/6f4bf606a20751f53a34729aad110a075e28e03c.jpg"
                            },
                            "published": "2012-01-27T23:35:40Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=e015c79f-9c88-46e3-b7bc-3ff49c6bf2fe",
                                "title": "Stefani Queen",
                                "avatar": "http://graph.facebook.com/100001730611739/picture?type=normal"
                            },
                            "published": "2012-01-27T21:15:13Z"
                        }
                    ],
                    "published": "2012-01-27T20:16:30Z",
                    "accumulators": {
                        "likesCount": "12",
                        "repliesCount": "1506"
                    }
                },
                "source": {
                    "name": "Twitter",
                    "uri": "http://search.twitter.com/search?q=from%3Aladygaga",
                    "icon": "http://cdn.js-kit.com/images/favicons/twitter.png"
                },
                "provider": {
                    "name": "Arktan",
                    "uri": "http://arktan.com/",
                    "icon": "http://arktan.com/images/favicon.ico"
                },
                "verbs": [
                    "http://activitystrea.ms/schema/1.0/post"
                ],
                "postedTime": "2012-01-27T20:16:30Z",
                "targets": [
                    {
                        "id": "http://ladygaga.com/official/twitter",
                        "conversationID": "http://twitter.com/ladygaga/statuses/162992396265730050"
                    },
                    {
                        "id": "http://ctv.ca/official/twitter",
                        "conversationID": "http://twitter.com/ladygaga/statuses/162992396265730050"
                    }
                ],
                "pageAfter": "1327695390.012593",
                "hasMoreChildren": "true"
            },
            {
                "id": "http://js-kit.com/activities/post/d76db09c026d73b2b62915dd3d3811ad",
                "actor": {
                    "links": [
                        "http:///"
                    ],
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/person"
                    ],
                    "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=e015c79f-9c88-46e3-b7bc-3ff49c6bf2fe",
                    "title": "Stefani Queen",
                    "status": "Untouched",
                    "avatar": "http://graph.facebook.com/100001730611739/picture?type=normal"
                },
                "object": {
                    "id": "http://twitter.com/ECHO/item/1327766321-621-974",
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/comment"
                    ],
                    "permalink": "",
                    "context": [
                        {
                            "uri": "http://twitter.com/ladygaga/statuses/162992396265730050",
                            "title": "Haus meeting. Holy mother of coffee. I might need a valium today. Or maybe a tranquilizer meant for a small bunny. #honoryourcreativity"
                        },
                        {
                            "uri": "http://facebook.com/pages/Little-Monsters-For-Ever/375874045761162",
                            "title": "Little Monsters For Ever"
                        }
                    ],
                    "content": "http://www.facebook.com/pages/Little-Monsters-For-Ever/375874045761162\n",
                    "content_type": "html",
                    "status": "Untouched",
                    "markers": [
                        "site:http://www.ladygaga.com/"
                    ],
                    "published": "2012-01-28T15:58:41Z"
                },
                "source": {
                    "name": "twitter.com"
                },
                "provider": {
                    "name": "jskit",
                    "uri": "http://aboutecho.com/",
                    "icon": "http://cdn.js-kit.com/images/echo.png"
                },
                "verbs": [
                    "http://activitystrea.ms/schema/1.0/post"
                ],
                "postedTime": "2012-01-28T15:58:41Z",
                "targets": [
                    {
                        "id": "http://twitter.com/ladygaga/statuses/162992396265730050",
                        "conversationID": "http://twitter.com/ladygaga/statuses/162992396265730050"
                    },
                    {
                        "id": "http://facebook.com/pages/Little-Monsters-For-Ever/375874045761162",
                        "conversationID": "http://twitter.com/ladygaga/statuses/162992396265730050"
                    }
                ],
                "pageAfter": "1327766321.090940",
                "hasMoreChildren": "false"
            },
            {
                "id": "http://js-kit.com/activities/post/4f4577709bdd1d4ab1a8a77ce04a489d",
                "actor": {
                    "links": [
                        "http:///"
                    ],
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/person"
                    ],
                    "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=e015c79f-9c88-46e3-b7bc-3ff49c6bf2fe",
                    "title": "Stefani Queen",
                    "status": "Untouched",
                    "avatar": "http://graph.facebook.com/100001730611739/picture?type=normal"
                },
                "object": {
                    "id": "http://twitter.com/ECHO/item/1327766272-391-997",
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/comment"
                    ],
                    "permalink": "",
                    "context": [
                        {
                            "uri": "http://twitter.com/ladygaga/statuses/162992396265730050",
                            "title": "Haus meeting. Holy mother of coffee. I might need a valium today. Or maybe a tranquilizer meant for a small bunny. #honoryourcreativity"
                        },
                        {
                            "uri": "http://facebook.com/pages/Little-Monsters-For-Ever/375874045761162",
                            "title": "Little Monsters For Ever"
                        }
                    ],
                    "content": " I have made page Little Monsters For Ever.Come and see it.We need to be the best!First five who comment some of Lady Gaga photos will be admins!\nhttp://www.facebook.com/pages/Little-Monsters-For-Ever/375874045761162",
                    "content_type": "html",
                    "status": "Untouched",
                    "markers": [
                        "site:http://www.ladygaga.com/"
                    ],
                    "published": "2012-01-28T15:57:52Z"
                },
                "source": {
                    "name": "twitter.com"
                },
                "provider": {
                    "name": "jskit",
                    "uri": "http://aboutecho.com/",
                    "icon": "http://cdn.js-kit.com/images/echo.png"
                },
                "verbs": [
                    "http://activitystrea.ms/schema/1.0/post"
                ],
                "postedTime": "2012-01-28T15:57:52Z",
                "targets": [
                    {
                        "id": "http://twitter.com/ladygaga/statuses/162992396265730050",
                        "conversationID": "http://twitter.com/ladygaga/statuses/162992396265730050"
                    },
                    {
                        "id": "http://facebook.com/pages/Little-Monsters-For-Ever/375874045761162",
                        "conversationID": "http://twitter.com/ladygaga/statuses/162992396265730050"
                    }
                ],
                "pageAfter": "1327766272.032010",
                "hasMoreChildren": "false"
            },
            {
                "id": "http://js-kit.com/activities/post/1e8effc2a1c0bf1ef8ada07774e90ef1",
                "actor": {
                    "links": [
                        "http:///"
                    ],
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/person"
                    ],
                    "id": "http://twitter.com/ladygaga",
                    "title": "@LadyGaga",
                    "status": "Untouched",
                    "avatar": "http://a1.twimg.com/profile_images/1239447061/Unnamed-1_normal.jpg"
                },
                "object": {
                    "id": "http://twitter.com/ladygaga/statuses/162058425763762177",
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/article"
                    ],
                    "title": "Worked all day long. Planning shoots, rehearsals and art projects. Gonna read some OSHO and sleep until the rebel recharges her bullets.",
                    "permalink": "http://twitter.com/ladygaga/statuses/162058425763762177",
                    "context": [
                        {
                            "uri": "http://ladygaga.com/official/twitter"
                        },
                        {
                            "uri": "http://ctv.ca/official/twitter"
                        }
                    ],
                    "content": "<div class=\"note_title\">Worked all day long. Planning shoots, rehearsals and art projects. Gonna read some OSHO and sleep until the rebel recharges her bullets.</div>",
                    "content_type": "text",
                    "status": "Untouched",
                    "likes": [
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=f6147c2b-2180-4c67-a1f6-4a0a5c7c0ce7",
                                "title": "heavii",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/95f79eaaecfe6479e438013f11811ba1bebe4c5d.jpg"
                            },
                            "published": "2012-01-28T19:10:07Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=0662420a-fe09-4162-a68a-3cd1c78cb31e",
                                "title": "GagaxLovee",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/a99394395f0d95fb292b5e2b929feec5d3885e71.jpg"
                            },
                            "published": "2012-01-28T13:24:39Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=0771a499-ba0c-4c70-abb0-5c6009846fb4",
                                "title": "LisaJUlmer",
                                "avatar": "http://graph.facebook.com/100002089004056/picture?type=normal"
                            },
                            "published": "2012-01-28T11:00:04Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=66da90f3-daa9-4dac-b692-5abd08ced8f8",
                                "title": "IgorKlimenko"
                            },
                            "published": "2012-01-28T10:39:53Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=65bede7e-426c-4dc5-84a8-3666ff4902f6",
                                "title": "MariaJaimez",
                                "avatar": "http://graph.facebook.com/100001966413794/picture?type=normal"
                            },
                            "published": "2012-01-28T04:47:31Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=be965c3e-4b92-4be0-b85c-8abe72d55bd7",
                                "title": "lilmonster82",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/b62aa54ae5f1b6cbe5e79a31968e1c301735f975.jpg"
                            },
                            "published": "2012-01-28T02:56:54Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=b90bb542-6f2e-43b2-953c-cdbb55a719ba",
                                "title": "MidahSasha",
                                "avatar": "http://graph.facebook.com/100000603189265/picture?type=normal"
                            },
                            "published": "2012-01-28T02:32:57Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=b3535f03-79d7-44be-9cd2-25280a2630c2",
                                "title": "MaribelAlonso",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/6f4bf606a20751f53a34729aad110a075e28e03c.jpg"
                            },
                            "published": "2012-01-27T23:35:53Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=e015c79f-9c88-46e3-b7bc-3ff49c6bf2fe",
                                "title": "Stefani Queen",
                                "avatar": "http://graph.facebook.com/100001730611739/picture?type=normal"
                            },
                            "published": "2012-01-27T21:15:07Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=a1db741d-969f-4085-9e6f-6b593af0abc1",
                                "title": "Sukdolakush7",
                                "avatar": "http://graph.facebook.com/1808801938/picture?type=normal"
                            },
                            "published": "2012-01-27T17:29:24Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=2ffb3a20-3f62-41e8-812d-a4f88ed7cfae",
                                "title": "AFBlackJesus",
                                "avatar": "http://a2.twimg.com/profile_images/1781044130/CIMG0111_reasonably_small.JPG"
                            },
                            "published": "2012-01-27T17:10:20Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=7e55bbfd-d49d-4ccc-a072-8296db4716da",
                                "title": "luli_queen",
                                "avatar": "http://a0.twimg.com/profile_images/1675564002/Dibujo_reasonably_small.JPG"
                            },
                            "published": "2012-01-27T16:38:20Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=cdbc36a8-74ec-4eab-9c19-368a882b0412",
                                "title": "Lana lilmonster",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/ef787e64f0ea9e4e72aab0bc043820d704327e7b.jpg"
                            },
                            "published": "2012-01-27T15:29:37Z"
                        }
                    ],
                    "flags": [
                        {
                            "actor": {
                                "links": [
                                    "%22http:///%22"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "%22https://umg.janraincapture.com/oauth/public_profile?uuid=a76dc346-ab7c-4261-b182-0dea33db05b7%22",
                                "title": "\"itLuucas\"",
                                "avatar": "%22http://a2.twimg.com/profile_images/1771872878/image_reasonably_small.jpg%22"
                            },
                            "published": "2012-01-26T00:21:28Z"
                        }
                    ],
                    "published": "2012-01-25T06:25:14Z",
                    "accumulators": {
                        "likesCount": "37",
                        "flagsCount": "1",
                        "repliesCount": "2570"
                    }
                },
                "source": {
                    "name": "Twitter",
                    "uri": "http://search.twitter.com/search?q=from%3Aladygaga",
                    "icon": "http://cdn.js-kit.com/images/favicons/twitter.png"
                },
                "provider": {
                    "name": "Arktan",
                    "uri": "http://arktan.com/",
                    "icon": "http://arktan.com/images/favicon.ico"
                },
                "verbs": [
                    "http://activitystrea.ms/schema/1.0/post"
                ],
                "postedTime": "2012-01-25T06:25:14Z",
                "targets": [
                    {
                        "id": "http://ladygaga.com/official/twitter",
                        "conversationID": "http://twitter.com/ladygaga/statuses/162058425763762177"
                    },
                    {
                        "id": "http://ctv.ca/official/twitter",
                        "conversationID": "http://twitter.com/ladygaga/statuses/162058425763762177"
                    }
                ],
                "pageAfter": "1327472714.057955",
                "hasMoreChildren": "true"
            },
            {
                "id": "http://js-kit.com/activities/post/33554a62751d69354e64f7d0054d1ff9",
                "actor": {
                    "links": [
                        "http:///"
                    ],
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/person"
                    ],
                    "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=2221221b-2d6a-4488-a0b9-0f45104d0084",
                    "title": "SeppeDeRoo",
                    "status": "Untouched"
                },
                "object": {
                    "id": "http://twitter.com/ECHO/item/1327761217-8-448",
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/comment"
                    ],
                    "permalink": "",
                    "context": [
                        {
                            "uri": "http://twitter.com/ladygaga/statuses/162058425763762177",
                            "title": "Worked all day long. Planning shoots, rehearsals and art projects. Gonna read some OSHO and sleep until the rebel recharges her bullets."
                        }
                    ],
                    "content": "www.facebook.com/pages/Fight-for-the-Right-of-Sexual-Freedom/237590839652992 \nPLEASE LIKE AND SHARE \nHELP FIGHTING AGAINST THE UPCOMING CONSERVATISM IN AMERICA! \nTHE PAGE IS IN DUTCH BUT WILL BE TRANSLATED IN ENGLISH VERY SOON! \nWE GOTTA FIGHT FOR OUR RIGHT",
                    "content_type": "html",
                    "status": "Untouched",
                    "markers": [
                        "site:http://www.ladygaga.com/",
                        "spam.impermium"
                    ],
                    "published": "2012-01-28T14:33:37Z"
                },
                "source": {
                    "name": "twitter.com"
                },
                "provider": {
                    "name": "jskit",
                    "uri": "http://aboutecho.com/",
                    "icon": "http://cdn.js-kit.com/images/echo.png"
                },
                "verbs": [
                    "http://activitystrea.ms/schema/1.0/post"
                ],
                "postedTime": "2012-01-28T14:33:37Z",
                "targets": [
                    {
                        "id": "http://twitter.com/ladygaga/statuses/162058425763762177",
                        "conversationID": "http://twitter.com/ladygaga/statuses/162058425763762177"
                    }
                ],
                "pageAfter": "1327761217.094991",
                "hasMoreChildren": "false"
            },
            {
                "id": "http://js-kit.com/activities/post/2e7fe9737e33f386c4c45c0674b9f50a",
                "actor": {
                    "links": [
                        "http:///"
                    ],
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/person"
                    ],
                    "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=0771a499-ba0c-4c70-abb0-5c6009846fb4",
                    "title": "LisaJUlmer",
                    "status": "Untouched",
                    "avatar": "http://graph.facebook.com/100002089004056/picture?type=normal"
                },
                "object": {
                    "id": "http://twitter.com/ECHO/item/1327748658-324-245",
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/comment"
                    ],
                    "permalink": "",
                    "context": [
                        {
                            "uri": "http://twitter.com/ladygaga/statuses/162058425763762177",
                            "title": "Worked all day long. Planning shoots, rehearsals and art projects. Gonna read some OSHO and sleep until the rebel recharges her bullets."
                        }
                    ],
                    "content": "..........................Reading Before Sleeping I've Heard is GOOD, because it Supposedly Brings What You've Read Deeper into Your SubConcious....................GREAT Stuff to Read...........Enlightening, Inspiring, Thought-Provoking,,,,,,,,,,,,,,All Great Stuff..................OSHO..............Because of You, I READ Some of His \"Work\", and it Really Makes Sense and Puts Things into Perspective...................Good Night.............Love YOU................:):):):)..............................",
                    "content_type": "html",
                    "status": "Untouched",
                    "markers": [
                        "site:http://www.ladygaga.com/"
                    ],
                    "published": "2012-01-28T11:04:18Z"
                },
                "source": {
                    "name": "twitter.com"
                },
                "provider": {
                    "name": "jskit",
                    "uri": "http://aboutecho.com/",
                    "icon": "http://cdn.js-kit.com/images/echo.png"
                },
                "verbs": [
                    "http://activitystrea.ms/schema/1.0/post"
                ],
                "postedTime": "2012-01-28T11:04:18Z",
                "targets": [
                    {
                        "id": "http://twitter.com/ladygaga/statuses/162058425763762177",
                        "conversationID": "http://twitter.com/ladygaga/statuses/162058425763762177"
                    }
                ],
                "pageAfter": "1327748658.019116",
                "hasMoreChildren": "false"
            },
            {
                "id": "http://js-kit.com/activities/post/0f3b0677decade3e3f9b7904e0b6a0db",
                "actor": {
                    "links": [
                        "http:///"
                    ],
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/person"
                    ],
                    "id": "http://twitter.com/ladygaga",
                    "title": "@LadyGaga",
                    "status": "Untouched",
                    "avatar": "http://a1.twimg.com/profile_images/1239447061/Unnamed-1_normal.jpg"
                },
                "object": {
                    "id": "http://twitter.com/ladygaga/statuses/160485566243291136",
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/article"
                    ],
                    "title": "Just saw first photos of the stage being built. Just peed all the way down to my Chanel shoes!! *sorry Karl* ahhh!!!!!!",
                    "permalink": "http://twitter.com/ladygaga/statuses/160485566243291136",
                    "context": [
                        {
                            "uri": "http://ladygaga.com/official/twitter"
                        },
                        {
                            "uri": "http://ctv.ca/official/twitter"
                        }
                    ],
                    "content": "<div class=\"note_title\">Just saw first photos of the stage being built. Just peed all the way down to my Chanel shoes!! *sorry Karl* ahhh!!!!!!</div>",
                    "content_type": "text",
                    "status": "Untouched",
                    "likes": [
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=f6147c2b-2180-4c67-a1f6-4a0a5c7c0ce7",
                                "title": "heavii",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/95f79eaaecfe6479e438013f11811ba1bebe4c5d.jpg"
                            },
                            "published": "2012-01-28T19:10:11Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=0662420a-fe09-4162-a68a-3cd1c78cb31e",
                                "title": "GagaxLovee",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/a99394395f0d95fb292b5e2b929feec5d3885e71.jpg"
                            },
                            "published": "2012-01-28T13:24:44Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=e691e139-89af-4dee-a6e3-d6987e064a2d",
                                "title": "Must Şahin",
                                "avatar": "http://graph.facebook.com/100001407656716/picture?type=normal"
                            },
                            "published": "2012-01-28T08:42:23Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=e015c79f-9c88-46e3-b7bc-3ff49c6bf2fe",
                                "title": "Stefani Queen",
                                "avatar": "http://graph.facebook.com/100001730611739/picture?type=normal"
                            },
                            "published": "2012-01-27T21:15:32Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=7e55bbfd-d49d-4ccc-a072-8296db4716da",
                                "title": "luli_queen",
                                "avatar": "http://a0.twimg.com/profile_images/1675564002/Dibujo_reasonably_small.JPG"
                            },
                            "published": "2012-01-27T16:38:31Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=47899135-6f70-4286-98fe-b9a4593da1fd",
                                "title": "Adelina",
                                "avatar": "http://graph.facebook.com/1313410676/picture?type=normal"
                            },
                            "published": "2012-01-27T14:56:56Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=9c442d1f-7aaa-4184-9773-27f71e1d62d1",
                                "title": "febianandrew",
                                "avatar": "http://a2.twimg.com/profile_images/1607668232/lego_reasonably_small.png"
                            },
                            "published": "2012-01-27T12:11:58Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=dd45f5da-ea79-4d2f-942e-8687b453ae88",
                                "title": "TessaDuRocher",
                                "avatar": "http://graph.facebook.com/727971196/picture?type=normal"
                            },
                            "published": "2012-01-26T23:02:33Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=ed0197dd-92a8-4927-9625-a8c201ded7b1",
                                "title": "CalderonedeGaGa",
                                "avatar": "http://a1.twimg.com/profile_images/1646555642/images_reasonably_small.jpg"
                            },
                            "published": "2012-01-26T11:09:47Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=66da90f3-daa9-4dac-b692-5abd08ced8f8",
                                "title": "IgorKlimenko"
                            },
                            "published": "2012-01-26T09:52:22Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=f7e438d3-10eb-44b7-bd0a-6520aca5b82e",
                                "title": "HausOfYouAndMe",
                                "avatar": "http://a2.twimg.com/profile_images/1499788146/finalwecollidetonight_reasonably_small_reasonably_small.jpg"
                            },
                            "published": "2012-01-25T13:20:00Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=d6a6429a-17df-428f-9578-9f54c9e8c2a4",
                                "title": "JudasGökhan",
                                "avatar": "http://graph.facebook.com/100000570483658/picture?type=normal"
                            },
                            "published": "2012-01-25T12:23:15Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=34c882cb-d1df-49f0-a1f6-f78f7748134f",
                                "title": "GasparMons†erSuarezz",
                                "avatar": "http://graph.facebook.com/100002002370887/picture?type=normal"
                            },
                            "published": "2012-01-24T23:32:33Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=e88fa208-2397-4091-8c4e-2a4c266f02b5",
                                "title": "SteveBuckley",
                                "avatar": "http://graph.facebook.com/708087328/picture?type=normal"
                            },
                            "published": "2012-01-24T22:53:46Z"
                        }
                    ],
                    "flags": [
                        {
                            "actor": {
                                "links": [
                                    "%22http:///%22"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "%22https://umg.janraincapture.com/oauth/public_profile?uuid=0f961ea0-7216-4f3d-a8e4-64eaa4140153%22",
                                "title": "\"AlejandroVelazquezGil\"",
                                "avatar": "%22http://graph.facebook.com/722861609/picture?type=normal%22"
                            },
                            "published": "2012-01-24T18:46:25Z"
                        }
                    ],
                    "published": "2012-01-20T22:15:15Z",
                    "accumulators": {
                        "likesCount": "48",
                        "flagsCount": "1",
                        "repliesCount": "3267"
                    }
                },
                "source": {
                    "name": "Twitter",
                    "uri": "http://search.twitter.com/search?q=from%3Aladygaga",
                    "icon": "http://cdn.js-kit.com/images/favicons/twitter.png"
                },
                "provider": {
                    "name": "Arktan",
                    "uri": "http://arktan.com/",
                    "icon": "http://arktan.com/images/favicon.ico"
                },
                "verbs": [
                    "http://activitystrea.ms/schema/1.0/post"
                ],
                "postedTime": "2012-01-20T22:15:15Z",
                "targets": [
                    {
                        "id": "http://ladygaga.com/official/twitter",
                        "conversationID": "http://twitter.com/ladygaga/statuses/160485566243291136"
                    },
                    {
                        "id": "http://ctv.ca/official/twitter",
                        "conversationID": "http://twitter.com/ladygaga/statuses/160485566243291136"
                    }
                ],
                "pageAfter": "1327097715.020850",
                "hasMoreChildren": "true"
            },
            {
                "id": "http://js-kit.com/activities/post/877ba368d3828e9fbdb73c3e402d52a8",
                "actor": {
                    "links": [
                        "http:///"
                    ],
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/person"
                    ],
                    "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=78ae9a10-8a62-41d4-adee-89229039dd1a",
                    "title": "Lord_Edilson",
                    "status": "Untouched",
                    "avatar": "http://a0.twimg.com/profile_images/1524121035/IMG037-01_reasonably_small.jpg"
                },
                "object": {
                    "id": "http://twitter.com/ECHO/item/1327698349-663-192",
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/comment"
                    ],
                    "permalink": "",
                    "context": [
                        {
                            "uri": "http://twitter.com/ladygaga/statuses/160485566243291136",
                            "title": "Just saw first photos of the stage being built. Just peed all the way down to my Chanel shoes!! *sorry Karl* ahhh!!!!!!"
                        }
                    ],
                    "content": "First: I Love You (these are the first words that come to mind when talking Lady Gaga)\n\n          Hi am a Brazilian Edilson, I'm here to say how much I love my Mother Monster (Lady Gaga). I started to like her when I first heard the song \"Just Dance\" I think it was 2008 / 2009 and in that I've identified myself with the music and other well known songs of that time ...\n       I hope you always follow ...! Because I really love you .... and sometimes I do not know how to say this because people think it's stupid, but I DO NOT ... because I believe in his talent to show how pEOPLE may be the same without them bother bout what other people say / think.\n       I already have the CD Born This Way and I'm also hoping to deliver my DVD \"The Monster Ball Tour\", I love them, they are like gold to me ...!\nI love you ... and I hope always listen to their music and the news that you always loops and that I love, but it is a pity that I can not go on a show its because I live too far away and I would not have the money to go ee your show when I think about it .... it seems that the world will end and it also hurts me too ....\nLOVE YOU LOVE YOU LOVE YOU ...... AND HOPE THIS MESSAGE Leie VC\nNOTE: I can not speak English very well, because I translated the text into Google Translator .....\nBye: Lord [e] Little Germanotta",
                    "content_type": "html",
                    "status": "Untouched",
                    "markers": [
                        "site:http://www.ladygaga.com/"
                    ],
                    "published": "2012-01-27T21:05:49Z"
                },
                "source": {
                    "name": "twitter.com"
                },
                "provider": {
                    "name": "jskit",
                    "uri": "http://aboutecho.com/",
                    "icon": "http://cdn.js-kit.com/images/echo.png"
                },
                "verbs": [
                    "http://activitystrea.ms/schema/1.0/post"
                ],
                "postedTime": "2012-01-27T21:05:49Z",
                "targets": [
                    {
                        "id": "http://twitter.com/ladygaga/statuses/160485566243291136",
                        "conversationID": "http://twitter.com/ladygaga/statuses/160485566243291136"
                    }
                ],
                "pageAfter": "1327698349.032680",
                "hasMoreChildren": "false"
            },
            {
                "id": "http://js-kit.com/activities/post/210dd82eb37551a5cb5713d2e62ff2e5",
                "actor": {
                    "links": [
                        "http:///"
                    ],
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/person"
                    ],
                    "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=cac93924-c5fc-45e2-b843-97fb581b8adc",
                    "title": "lucasmccosta",
                    "status": "Untouched"
                },
                "object": {
                    "id": "http://twitter.com/ECHO/item/1327696877-446-319",
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/comment"
                    ],
                    "permalink": "",
                    "context": [
                        {
                            "uri": "http://twitter.com/ladygaga/statuses/160485566243291136",
                            "title": "Just saw first photos of the stage being built. Just peed all the way down to my Chanel shoes!! *sorry Karl* ahhh!!!!!!"
                        }
                    ],
                    "content": "I'm brasilian and I dont speak english very good,but i'm here for say you come in Minas Gerais in Brazil, PLEASEEE I WANT TO SEE YOUR CONCERT BECAUSE I'M VERY FAN",
                    "content_type": "html",
                    "status": "Untouched",
                    "markers": [
                        "site:http://www.ladygaga.com/"
                    ],
                    "published": "2012-01-27T20:41:17Z"
                },
                "source": {
                    "name": "twitter.com"
                },
                "provider": {
                    "name": "jskit",
                    "uri": "http://aboutecho.com/",
                    "icon": "http://cdn.js-kit.com/images/echo.png"
                },
                "verbs": [
                    "http://activitystrea.ms/schema/1.0/post"
                ],
                "postedTime": "2012-01-27T20:41:17Z",
                "targets": [
                    {
                        "id": "http://twitter.com/ladygaga/statuses/160485566243291136",
                        "conversationID": "http://twitter.com/ladygaga/statuses/160485566243291136"
                    }
                ],
                "pageAfter": "1327696877.041970",
                "hasMoreChildren": "false"
            },
            {
                "id": "http://js-kit.com/activities/post/22bbfef6afd210de563aeda01dbdbc7c",
                "actor": {
                    "links": [
                        "http:///"
                    ],
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/person"
                    ],
                    "id": "http://twitter.com/ladygaga",
                    "title": "@LadyGaga",
                    "status": "Untouched",
                    "avatar": "http://a1.twimg.com/profile_images/1239447061/Unnamed-1_normal.jpg"
                },
                "object": {
                    "id": "http://twitter.com/ladygaga/statuses/160484662228160512",
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/article"
                    ],
                    "title": "Also drawings of me flipping the bird at at the ball game would be greatly appreciated. Send all to @<a class=\"tweet-url username\" href=\"http://twitter.com/vmagazine\" rel=\"nofollow\">vmagazine</a> and copy me!",
                    "permalink": "http://twitter.com/ladygaga/statuses/160484662228160512",
                    "context": [
                        {
                            "uri": "http://ladygaga.com/official/twitter"
                        },
                        {
                            "uri": "http://ctv.ca/official/twitter"
                        }
                    ],
                    "content": "<div class=\"note_title\">Also drawings of me flipping the bird at at the ball game would be greatly appreciated. Send all to @<a class=\"tweet-url username\" href=\"http://twitter.com/vmagazine\" rel=\"nofollow\">vmagazine</a> and copy me!</div>",
                    "content_type": "text",
                    "status": "Untouched",
                    "likes": [
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=5a1d2d1a-5a03-431b-a4fb-67a82355736e",
                                "title": "LITTLEMONSTERNY",
                                "avatar": "http://a0.twimg.com/profile_images/1710995518/9_reasonably_small.png"
                            },
                            "published": "2012-01-23T02:39:31Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=3c5137df-9123-446b-81a2-96711641229c",
                                "title": "GaGadict",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/470bf2117fc56e449bf0e30144f9222263053a4c.jpg"
                            },
                            "published": "2012-01-23T00:03:36Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=82523d29-73ca-4be6-a42d-6f83b615db3d",
                                "title": "Camila Castillo",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/4c242520454e62dcee80a9e8a3eaca1ece299e57.jpg"
                            },
                            "published": "2012-01-22T14:21:03Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=f0a8673a-8e6a-493f-907e-3c62b6c2d6fd",
                                "title": "sebii54"
                            },
                            "published": "2012-01-22T03:00:46Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=e0a56bc5-1827-443d-a931-59939498fb3c",
                                "title": "ALEXIA",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/c8da60dd93608de07b184f58f548f64188afc42e.jpg"
                            },
                            "published": "2012-01-21T18:14:24Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=5812f143-4102-44c1-8de8-6418645983d0",
                                "title": "TezzyPezzy",
                                "avatar": "http://graph.facebook.com/100001715174478/picture?type=normal"
                            },
                            "published": "2012-01-21T13:14:37Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=f7e438d3-10eb-44b7-bd0a-6520aca5b82e",
                                "title": "HausOfYouAndMe",
                                "avatar": "http://a2.twimg.com/profile_images/1499788146/finalwecollidetonight_reasonably_small_reasonably_small.jpg"
                            },
                            "published": "2012-01-21T13:01:01Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=56a84423-f46c-4264-bb51-9a03b6cdb62e",
                                "title": "Little Monster's",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/1d132910666bcc0cc4656d9e02e41d3dd384fc07.jpg"
                            },
                            "published": "2012-01-21T10:28:04Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=0662420a-fe09-4162-a68a-3cd1c78cb31e",
                                "title": "GagaxLovee",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/a99394395f0d95fb292b5e2b929feec5d3885e71.jpg"
                            },
                            "published": "2012-01-21T04:07:07Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=c40beadc-3212-4297-b1bf-74157b6a19a5",
                                "title": "Mario ",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/584a94475e0b89517d02feaa510415b655c3c914.jpg"
                            },
                            "published": "2012-01-21T01:21:37Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=b3535f03-79d7-44be-9cd2-25280a2630c2",
                                "title": "MaribelAlonso",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/6f4bf606a20751f53a34729aad110a075e28e03c.jpg"
                            },
                            "published": "2012-01-20T23:53:38Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=5e8c86be-d2fb-4c7d-911c-08423fc3f523",
                                "title": "alfredolovegaga",
                                "avatar": "http://a2.twimg.com/profile_images/1495021525/alfredo_3_reasonably_small.jpg"
                            },
                            "published": "2012-01-20T23:43:03Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=09e49be1-d3bb-4f54-a769-b2de54d0390a",
                                "title": "AldinaKapic",
                                "avatar": "http://graph.facebook.com/100001514938167/picture?type=normal"
                            },
                            "published": "2012-01-20T23:06:19Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=cb58ae09-0cc3-412c-8182-29b89692090f",
                                "title": "andrefm96",
                                "avatar": "http://a3.twimg.com/profile_images/1238693511/238137613_normal.jpg"
                            },
                            "published": "2012-01-20T22:36:00Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=56e818ea-a0f9-4e93-bf07-f5cef2c94cdd",
                                "title": "DouglasViniciusSantamaria",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/7c80ec49d445f019a6083adc1cefa5014e45475d.jpg"
                            },
                            "published": "2012-01-20T22:13:25Z"
                        }
                    ],
                    "published": "2012-01-20T22:11:39Z",
                    "accumulators": {
                        "likesCount": "15",
                        "repliesCount": "705"
                    }
                },
                "source": {
                    "name": "Twitter",
                    "uri": "http://search.twitter.com/search?q=from%3Aladygaga",
                    "icon": "http://cdn.js-kit.com/images/favicons/twitter.png"
                },
                "provider": {
                    "name": "Arktan",
                    "uri": "http://arktan.com/",
                    "icon": "http://arktan.com/images/favicon.ico"
                },
                "verbs": [
                    "http://activitystrea.ms/schema/1.0/post"
                ],
                "postedTime": "2012-01-20T22:11:39Z",
                "targets": [
                    {
                        "id": "http://ladygaga.com/official/twitter",
                        "conversationID": "http://twitter.com/ladygaga/statuses/160484662228160512"
                    },
                    {
                        "id": "http://ctv.ca/official/twitter",
                        "conversationID": "http://twitter.com/ladygaga/statuses/160484662228160512"
                    }
                ],
                "pageAfter": "1327097499.014254",
                "hasMoreChildren": "true"
            },
            {
                "id": "http://js-kit.com/activities/post/683162e389235ce31bf839c2326b87e5",
                "actor": {
                    "links": [
                        "http:///"
                    ],
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/person"
                    ],
                    "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=78ae9a10-8a62-41d4-adee-89229039dd1a",
                    "title": "Lord_Edilson",
                    "status": "Untouched",
                    "avatar": "http://a0.twimg.com/profile_images/1524121035/IMG037-01_reasonably_small.jpg"
                },
                "object": {
                    "id": "http://twitter.com/ECHO/item/1327698372-417-446",
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/comment"
                    ],
                    "permalink": "",
                    "context": [
                        {
                            "uri": "http://twitter.com/ladygaga/statuses/160484662228160512",
                            "title": "Also drawings of me flipping the bird at at the ball game would be greatly appreciated. Send all to @vmagazine and copy me!"
                        }
                    ],
                    "content": "First: I Love You (these are the first words that come to mind when talking Lady Gaga)\n\n          Hi am a Brazilian Edilson, I'm here to say how much I love my Mother Monster (Lady Gaga). I started to like her when I first heard the song \"Just Dance\" I think it was 2008 / 2009 and in that I've identified myself with the music and other well known songs of that time ...\n       I hope you always follow ...! Because I really love you .... and sometimes I do not know how to say this because people think it's stupid, but I DO NOT ... because I believe in his talent to show how pEOPLE may be the same without them bother bout what other people say / think.\n       I already have the CD Born This Way and I'm also hoping to deliver my DVD \"The Monster Ball Tour\", I love them, they are like gold to me ...!\nI love you ... and I hope always listen to their music and the news that you always loops and that I love, but it is a pity that I can not go on a show its because I live too far away and I would not have the money to go ee your show when I think about it .... it seems that the world will end and it also hurts me too ....\nLOVE YOU LOVE YOU LOVE YOU ...... AND HOPE THIS MESSAGE Leie VC\nNOTE: I can not speak English very well, because I translated the text into Google Translator .....\nBye: Lord [e] Little Germanotta",
                    "content_type": "html",
                    "status": "Untouched",
                    "markers": [
                        "site:http://www.ladygaga.com/"
                    ],
                    "published": "2012-01-27T21:06:12Z"
                },
                "source": {
                    "name": "twitter.com"
                },
                "provider": {
                    "name": "jskit",
                    "uri": "http://aboutecho.com/",
                    "icon": "http://cdn.js-kit.com/images/echo.png"
                },
                "verbs": [
                    "http://activitystrea.ms/schema/1.0/post"
                ],
                "postedTime": "2012-01-27T21:06:12Z",
                "targets": [
                    {
                        "id": "http://twitter.com/ladygaga/statuses/160484662228160512",
                        "conversationID": "http://twitter.com/ladygaga/statuses/160484662228160512"
                    }
                ],
                "pageAfter": "1327698372.098840",
                "hasMoreChildren": "false"
            },
            {
                "id": "http://js-kit.com/activities/post/030af2386632383e71f61d2a4a63a4b1",
                "actor": {
                    "links": [
                        "http:///"
                    ],
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/person"
                    ],
                    "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=cac93924-c5fc-45e2-b843-97fb581b8adc",
                    "title": "lucasmccosta",
                    "status": "Untouched"
                },
                "object": {
                    "id": "http://twitter.com/ECHO/item/1327696888-74-398",
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/comment"
                    ],
                    "permalink": "",
                    "context": [
                        {
                            "uri": "http://twitter.com/ladygaga/statuses/160484662228160512",
                            "title": "Also drawings of me flipping the bird at at the ball game would be greatly appreciated. Send all to @vmagazine and copy me!"
                        }
                    ],
                    "content": "I'm brasilian and I dont speak english very good,but i'm here for say you come in Minas Gerais in Brazil, PLEASEEE I WANT TO SEE YOUR CONCERT BECAUSE I'M VERY FAN",
                    "content_type": "html",
                    "status": "Untouched",
                    "markers": [
                        "site:http://www.ladygaga.com/"
                    ],
                    "published": "2012-01-27T20:41:28Z"
                },
                "source": {
                    "name": "twitter.com"
                },
                "provider": {
                    "name": "jskit",
                    "uri": "http://aboutecho.com/",
                    "icon": "http://cdn.js-kit.com/images/echo.png"
                },
                "verbs": [
                    "http://activitystrea.ms/schema/1.0/post"
                ],
                "postedTime": "2012-01-27T20:41:28Z",
                "targets": [
                    {
                        "id": "http://twitter.com/ladygaga/statuses/160484662228160512",
                        "conversationID": "http://twitter.com/ladygaga/statuses/160484662228160512"
                    }
                ],
                "pageAfter": "1327696888.063704",
                "hasMoreChildren": "false"
            },
            {
                "id": "http://js-kit.com/activities/post/9442023131f8a362c8144cdfb68eb204",
                "actor": {
                    "links": [
                        "http:///"
                    ],
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/person"
                    ],
                    "id": "http://twitter.com/ladygaga",
                    "title": "@LadyGaga",
                    "status": "Untouched",
                    "avatar": "http://a1.twimg.com/profile_images/1239447061/Unnamed-1_normal.jpg"
                },
                "object": {
                    "id": "http://twitter.com/ladygaga/statuses/160482956576702465",
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/article"
                    ],
                    "title": "Little Monsters just spoke with my editor at @<a class=\"tweet-url username\" href=\"http://twitter.com/vmagazine\" rel=\"nofollow\">vmagazine</a>. Please send in any or all drawings of me wearing pearls to be printed next issue! X",
                    "permalink": "http://twitter.com/ladygaga/statuses/160482956576702465",
                    "context": [
                        {
                            "uri": "http://ladygaga.com/official/twitter"
                        },
                        {
                            "uri": "http://ctv.ca/official/twitter"
                        }
                    ],
                    "content": "<div class=\"note_title\">Little Monsters just spoke with my editor at @<a class=\"tweet-url username\" href=\"http://twitter.com/vmagazine\" rel=\"nofollow\">vmagazine</a>. Please send in any or all drawings of me wearing pearls to be printed next issue! X</div>",
                    "content_type": "text",
                    "status": "Untouched",
                    "likes": [
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=5a1d2d1a-5a03-431b-a4fb-67a82355736e",
                                "title": "LITTLEMONSTERNY",
                                "avatar": "http://a0.twimg.com/profile_images/1710995518/9_reasonably_small.png"
                            },
                            "published": "2012-01-23T02:40:03Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=82523d29-73ca-4be6-a42d-6f83b615db3d",
                                "title": "Camila Castillo",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/4c242520454e62dcee80a9e8a3eaca1ece299e57.jpg"
                            },
                            "published": "2012-01-22T14:21:50Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=e0a56bc5-1827-443d-a931-59939498fb3c",
                                "title": "ALEXIA",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/c8da60dd93608de07b184f58f548f64188afc42e.jpg"
                            },
                            "published": "2012-01-21T18:14:23Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=56a84423-f46c-4264-bb51-9a03b6cdb62e",
                                "title": "Little Monster's",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/1d132910666bcc0cc4656d9e02e41d3dd384fc07.jpg"
                            },
                            "published": "2012-01-21T15:38:04Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=5812f143-4102-44c1-8de8-6418645983d0",
                                "title": "TezzyPezzy",
                                "avatar": "http://graph.facebook.com/100001715174478/picture?type=normal"
                            },
                            "published": "2012-01-21T13:14:48Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=f7e438d3-10eb-44b7-bd0a-6520aca5b82e",
                                "title": "HausOfYouAndMe",
                                "avatar": "http://a2.twimg.com/profile_images/1499788146/finalwecollidetonight_reasonably_small_reasonably_small.jpg"
                            },
                            "published": "2012-01-21T13:01:14Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=0662420a-fe09-4162-a68a-3cd1c78cb31e",
                                "title": "GagaxLovee",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/a99394395f0d95fb292b5e2b929feec5d3885e71.jpg"
                            },
                            "published": "2012-01-21T04:08:04Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=0771a499-ba0c-4c70-abb0-5c6009846fb4",
                                "title": "LisaJUlmer",
                                "avatar": "http://graph.facebook.com/100002089004056/picture?type=normal"
                            },
                            "published": "2012-01-21T03:51:29Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=3c5137df-9123-446b-81a2-96711641229c",
                                "title": "GaGadict",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/470bf2117fc56e449bf0e30144f9222263053a4c.jpg"
                            },
                            "published": "2012-01-21T01:05:40Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=b3535f03-79d7-44be-9cd2-25280a2630c2",
                                "title": "MaribelAlonso",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/6f4bf606a20751f53a34729aad110a075e28e03c.jpg"
                            },
                            "published": "2012-01-20T23:53:52Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=5e8c86be-d2fb-4c7d-911c-08423fc3f523",
                                "title": "alfredolovegaga",
                                "avatar": "http://a2.twimg.com/profile_images/1495021525/alfredo_3_reasonably_small.jpg"
                            },
                            "published": "2012-01-20T23:46:28Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=cb58ae09-0cc3-412c-8182-29b89692090f",
                                "title": "andrefm96",
                                "avatar": "http://a3.twimg.com/profile_images/1238693511/238137613_normal.jpg"
                            },
                            "published": "2012-01-20T22:36:01Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=1849dc22-300f-4765-ae63-f623f5a68a11",
                                "title": "<Little_Monster>",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/a5950aab172fcb0677234584787d6250092b2b43.jpg"
                            },
                            "published": "2012-01-20T22:23:04Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=56e818ea-a0f9-4e93-bf07-f5cef2c94cdd",
                                "title": "DouglasViniciusSantamaria",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/7c80ec49d445f019a6083adc1cefa5014e45475d.jpg"
                            },
                            "published": "2012-01-20T22:13:29Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=205a7fd5-0184-45e6-96de-37a24de87b10",
                                "title": "aliceloveladygaga",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/c866838ab38597fe8c8e26ef65eba6289a6b0868.jpg"
                            },
                            "published": "2012-01-20T22:09:32Z"
                        }
                    ],
                    "published": "2012-01-20T22:04:53Z",
                    "accumulators": {
                        "likesCount": "15",
                        "repliesCount": "902"
                    }
                },
                "source": {
                    "name": "Twitter",
                    "uri": "http://search.twitter.com/search?q=from%3Aladygaga",
                    "icon": "http://cdn.js-kit.com/images/favicons/twitter.png"
                },
                "provider": {
                    "name": "Arktan",
                    "uri": "http://arktan.com/",
                    "icon": "http://arktan.com/images/favicon.ico"
                },
                "verbs": [
                    "http://activitystrea.ms/schema/1.0/post"
                ],
                "postedTime": "2012-01-20T22:04:53Z",
                "targets": [
                    {
                        "id": "http://ladygaga.com/official/twitter",
                        "conversationID": "http://twitter.com/ladygaga/statuses/160482956576702465"
                    },
                    {
                        "id": "http://ctv.ca/official/twitter",
                        "conversationID": "http://twitter.com/ladygaga/statuses/160482956576702465"
                    }
                ],
                "pageAfter": "1327097093.046588",
                "hasMoreChildren": "true"
            },
            {
                "id": "http://js-kit.com/activities/post/f19c620f40e8092440259361ed12e520",
                "actor": {
                    "links": [
                        "http:///"
                    ],
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/person"
                    ],
                    "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=78ae9a10-8a62-41d4-adee-89229039dd1a",
                    "title": "Lord_Edilson",
                    "status": "Untouched",
                    "avatar": "http://a0.twimg.com/profile_images/1524121035/IMG037-01_reasonably_small.jpg"
                },
                "object": {
                    "id": "http://twitter.com/ECHO/item/1327698389-406-974",
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/comment"
                    ],
                    "permalink": "",
                    "context": [
                        {
                            "uri": "http://twitter.com/ladygaga/statuses/160482956576702465",
                            "title": "Little Monsters just spoke with my editor at @vmagazine. Please send in any or all drawings of me wearing pearls to be printed next issue! X"
                        }
                    ],
                    "content": "First: I Love You (these are the first words that come to mind when talking Lady Gaga)\n\n          Hi am a Brazilian Edilson, I'm here to say how much I love my Mother Monster (Lady Gaga). I started to like her when I first heard the song \"Just Dance\" I think it was 2008 / 2009 and in that I've identified myself with the music and other well known songs of that time ...\n       I hope you always follow ...! Because I really love you .... and sometimes I do not know how to say this because people think it's stupid, but I DO NOT ... because I believe in his talent to show how pEOPLE may be the same without them bother bout what other people say / think.\n       I already have the CD Born This Way and I'm also hoping to deliver my DVD \"The Monster Ball Tour\", I love them, they are like gold to me ...!\nI love you ... and I hope always listen to their music and the news that you always loops and that I love, but it is a pity that I can not go on a show its because I live too far away and I would not have the money to go ee your show when I think about it .... it seems that the world will end and it also hurts me too ....\nLOVE YOU LOVE YOU LOVE YOU ...... AND HOPE THIS MESSAGE Leie VC\nNOTE: I can not speak English very well, because I translated the text into Google Translator .....\nBye: Lord [e] Little Germanotta",
                    "content_type": "html",
                    "status": "Untouched",
                    "markers": [
                        "site:http://www.ladygaga.com/"
                    ],
                    "published": "2012-01-27T21:06:29Z"
                },
                "source": {
                    "name": "twitter.com"
                },
                "provider": {
                    "name": "jskit",
                    "uri": "http://aboutecho.com/",
                    "icon": "http://cdn.js-kit.com/images/echo.png"
                },
                "verbs": [
                    "http://activitystrea.ms/schema/1.0/post"
                ],
                "postedTime": "2012-01-27T21:06:29Z",
                "targets": [
                    {
                        "id": "http://twitter.com/ladygaga/statuses/160482956576702465",
                        "conversationID": "http://twitter.com/ladygaga/statuses/160482956576702465"
                    }
                ],
                "pageAfter": "1327698389.040490",
                "hasMoreChildren": "false"
            },
            {
                "id": "http://js-kit.com/activities/post/ab46e72915aad4f1168464b324a1c2dc",
                "actor": {
                    "links": [
                        "http:///"
                    ],
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/person"
                    ],
                    "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=cac93924-c5fc-45e2-b843-97fb581b8adc",
                    "title": "lucasmccosta",
                    "status": "Untouched"
                },
                "object": {
                    "id": "http://twitter.com/ECHO/item/1327696901-428-64",
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/comment"
                    ],
                    "permalink": "",
                    "context": [
                        {
                            "uri": "http://twitter.com/ladygaga/statuses/160482956576702465",
                            "title": "Little Monsters just spoke with my editor at @vmagazine. Please send in any or all drawings of me wearing pearls to be printed next issue! X"
                        }
                    ],
                    "content": "I'm brasilian and I dont speak english very good,but i'm here for say you come in Minas Gerais in Brazil, PLEASEEE I WANT TO SEE YOUR CONCERT BECAUSE I'M VERY FAN",
                    "content_type": "html",
                    "status": "Untouched",
                    "markers": [
                        "site:http://www.ladygaga.com/",
                        "spam.impermium"
                    ],
                    "published": "2012-01-27T20:41:41Z"
                },
                "source": {
                    "name": "twitter.com"
                },
                "provider": {
                    "name": "jskit",
                    "uri": "http://aboutecho.com/",
                    "icon": "http://cdn.js-kit.com/images/echo.png"
                },
                "verbs": [
                    "http://activitystrea.ms/schema/1.0/post"
                ],
                "postedTime": "2012-01-27T20:41:41Z",
                "targets": [
                    {
                        "id": "http://twitter.com/ladygaga/statuses/160482956576702465",
                        "conversationID": "http://twitter.com/ladygaga/statuses/160482956576702465"
                    }
                ],
                "pageAfter": "1327696901.042883",
                "hasMoreChildren": "false"
            },
            {
                "id": "http://js-kit.com/activities/post/20519dcacd2fa11e79c449db03d30b08",
                "actor": {
                    "links": [
                        "http:///"
                    ],
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/person"
                    ],
                    "id": "http://twitter.com/ladygaga",
                    "title": "@LadyGaga",
                    "status": "Untouched",
                    "avatar": "http://a1.twimg.com/profile_images/1239447061/Unnamed-1_normal.jpg"
                },
                "object": {
                    "id": "http://twitter.com/ladygaga/statuses/160482265024040962",
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/article"
                    ],
                    "title": "Tonight I will have one whole quart of brandy for Etta.",
                    "permalink": "http://twitter.com/ladygaga/statuses/160482265024040962",
                    "context": [
                        {
                            "uri": "http://ladygaga.com/official/twitter"
                        },
                        {
                            "uri": "http://ctv.ca/official/twitter"
                        }
                    ],
                    "content": "<div class=\"note_title\">Tonight I will have one whole quart of brandy for Etta.</div>",
                    "content_type": "text",
                    "status": "Untouched",
                    "likes": [
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=f6147c2b-2180-4c67-a1f6-4a0a5c7c0ce7",
                                "title": "heavii",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/95f79eaaecfe6479e438013f11811ba1bebe4c5d.jpg"
                            },
                            "published": "2012-01-28T19:10:25Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=66da90f3-daa9-4dac-b692-5abd08ced8f8",
                                "title": "IgorKlimenko"
                            },
                            "published": "2012-01-26T09:52:59Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=5a1d2d1a-5a03-431b-a4fb-67a82355736e",
                                "title": "LITTLEMONSTERNY",
                                "avatar": "http://a0.twimg.com/profile_images/1710995518/9_reasonably_small.png"
                            },
                            "published": "2012-01-23T02:40:11Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=e0a56bc5-1827-443d-a931-59939498fb3c",
                                "title": "ALEXIA",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/c8da60dd93608de07b184f58f548f64188afc42e.jpg"
                            },
                            "published": "2012-01-21T18:14:31Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=5812f143-4102-44c1-8de8-6418645983d0",
                                "title": "TezzyPezzy",
                                "avatar": "http://graph.facebook.com/100001715174478/picture?type=normal"
                            },
                            "published": "2012-01-21T13:14:53Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=f7e438d3-10eb-44b7-bd0a-6520aca5b82e",
                                "title": "HausOfYouAndMe",
                                "avatar": "http://a2.twimg.com/profile_images/1499788146/finalwecollidetonight_reasonably_small_reasonably_small.jpg"
                            },
                            "published": "2012-01-21T13:01:21Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=56a84423-f46c-4264-bb51-9a03b6cdb62e",
                                "title": "Little Monster's",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/1d132910666bcc0cc4656d9e02e41d3dd384fc07.jpg"
                            },
                            "published": "2012-01-21T10:27:30Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=ee01a2c0-7172-4d37-8d68-1499988b619d",
                                "title": "littlemonster11",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/45d071d92cac02fef3d916bf6424205bf87037fc.jpg"
                            },
                            "published": "2012-01-21T03:53:09Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=47efa6ff-3f2c-478b-8142-2311fe251fa1",
                                "title": "HolidavCelebration",
                                "avatar": "http://graph.facebook.com/100001881742076/picture?type=normal"
                            },
                            "published": "2012-01-21T03:12:35Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=3c5137df-9123-446b-81a2-96711641229c",
                                "title": "GaGadict",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/470bf2117fc56e449bf0e30144f9222263053a4c.jpg"
                            },
                            "published": "2012-01-21T01:05:57Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=b3535f03-79d7-44be-9cd2-25280a2630c2",
                                "title": "MaribelAlonso",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/6f4bf606a20751f53a34729aad110a075e28e03c.jpg"
                            },
                            "published": "2012-01-20T23:54:05Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=be965c3e-4b92-4be0-b85c-8abe72d55bd7",
                                "title": "lilmonster82",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/b62aa54ae5f1b6cbe5e79a31968e1c301735f975.jpg"
                            },
                            "published": "2012-01-20T23:47:52Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=cb58ae09-0cc3-412c-8182-29b89692090f",
                                "title": "andrefm96",
                                "avatar": "http://a3.twimg.com/profile_images/1238693511/238137613_normal.jpg"
                            },
                            "published": "2012-01-20T22:36:03Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=56e818ea-a0f9-4e93-bf07-f5cef2c94cdd",
                                "title": "DouglasViniciusSantamaria",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/7c80ec49d445f019a6083adc1cefa5014e45475d.jpg"
                            },
                            "published": "2012-01-20T22:13:31Z"
                        }
                    ],
                    "published": "2012-01-20T22:02:08Z",
                    "accumulators": {
                        "likesCount": "14",
                        "repliesCount": "950"
                    }
                },
                "source": {
                    "name": "Twitter",
                    "uri": "http://search.twitter.com/search?q=from%3Aladygaga",
                    "icon": "http://cdn.js-kit.com/images/favicons/twitter.png"
                },
                "provider": {
                    "name": "Arktan",
                    "uri": "http://arktan.com/",
                    "icon": "http://arktan.com/images/favicon.ico"
                },
                "verbs": [
                    "http://activitystrea.ms/schema/1.0/post"
                ],
                "postedTime": "2012-01-20T22:02:08Z",
                "targets": [
                    {
                        "id": "http://ladygaga.com/official/twitter",
                        "conversationID": "http://twitter.com/ladygaga/statuses/160482265024040962"
                    },
                    {
                        "id": "http://ctv.ca/official/twitter",
                        "conversationID": "http://twitter.com/ladygaga/statuses/160482265024040962"
                    }
                ],
                "pageAfter": "1327096928.076619",
                "hasMoreChildren": "true"
            },
            {
                "id": "http://js-kit.com/activities/post/13f687ceeb0d92e35668d5752b6a3b65",
                "actor": {
                    "links": [
                        "http:///"
                    ],
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/person"
                    ],
                    "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=78ae9a10-8a62-41d4-adee-89229039dd1a",
                    "title": "Lord_Edilson",
                    "status": "Untouched",
                    "avatar": "http://a0.twimg.com/profile_images/1524121035/IMG037-01_reasonably_small.jpg"
                },
                "object": {
                    "id": "http://twitter.com/ECHO/item/1327698405-503-158",
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/comment"
                    ],
                    "permalink": "",
                    "context": [
                        {
                            "uri": "http://twitter.com/ladygaga/statuses/160482265024040962",
                            "title": "Tonight I will have one whole quart of brandy for Etta."
                        }
                    ],
                    "content": "First: I Love You (these are the first words that come to mind when talking Lady Gaga)\n\n          Hi am a Brazilian Edilson, I'm here to say how much I love my Mother Monster (Lady Gaga). I started to like her when I first heard the song \"Just Dance\" I think it was 2008 / 2009 and in that I've identified myself with the music and other well known songs of that time ...\n       I hope you always follow ...! Because I really love you .... and sometimes I do not know how to say this because people think it's stupid, but I DO NOT ... because I believe in his talent to show how pEOPLE may be the same without them bother bout what other people say / think.\n       I already have the CD Born This Way and I'm also hoping to deliver my DVD \"The Monster Ball Tour\", I love them, they are like gold to me ...!\nI love you ... and I hope always listen to their music and the news that you always loops and that I love, but it is a pity that I can not go on a show its because I live too far away and I would not have the money to go ee your show when I think about it .... it seems that the world will end and it also hurts me too ....\nLOVE YOU LOVE YOU LOVE YOU ...... AND HOPE THIS MESSAGE Leie VC\nNOTE: I can not speak English very well, because I translated the text into Google Translator .....\nBye: Lord [e] Little Germanotta",
                    "content_type": "html",
                    "status": "Untouched",
                    "markers": [
                        "site:http://www.ladygaga.com/"
                    ],
                    "published": "2012-01-27T21:06:45Z"
                },
                "source": {
                    "name": "twitter.com"
                },
                "provider": {
                    "name": "jskit",
                    "uri": "http://aboutecho.com/",
                    "icon": "http://cdn.js-kit.com/images/echo.png"
                },
                "verbs": [
                    "http://activitystrea.ms/schema/1.0/post"
                ],
                "postedTime": "2012-01-27T21:06:45Z",
                "targets": [
                    {
                        "id": "http://twitter.com/ladygaga/statuses/160482265024040962",
                        "conversationID": "http://twitter.com/ladygaga/statuses/160482265024040962"
                    }
                ],
                "pageAfter": "1327698405.099013",
                "hasMoreChildren": "false"
            },
            {
                "id": "http://js-kit.com/activities/post/ec0fbb0d8b3f4c2f4c44705363bbaf2d",
                "actor": {
                    "links": [
                        "http:///"
                    ],
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/person"
                    ],
                    "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=cac93924-c5fc-45e2-b843-97fb581b8adc",
                    "title": "lucasmccosta",
                    "status": "Untouched"
                },
                "object": {
                    "id": "http://twitter.com/ECHO/item/1327696915-450-723",
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/comment"
                    ],
                    "permalink": "",
                    "context": [
                        {
                            "uri": "http://twitter.com/ladygaga/statuses/160482265024040962",
                            "title": "Tonight I will have one whole quart of brandy for Etta."
                        }
                    ],
                    "content": "I'm brasilian and I dont speak english very good,but i'm here for say you come in Minas Gerais in Brazil, PLEASEEE I WANT TO SEE YOUR CONCERT BECAUSE I'M VERY FAN",
                    "content_type": "html",
                    "status": "Untouched",
                    "markers": [
                        "site:http://www.ladygaga.com/"
                    ],
                    "published": "2012-01-27T20:41:55Z"
                },
                "source": {
                    "name": "twitter.com"
                },
                "provider": {
                    "name": "jskit",
                    "uri": "http://aboutecho.com/",
                    "icon": "http://cdn.js-kit.com/images/echo.png"
                },
                "verbs": [
                    "http://activitystrea.ms/schema/1.0/post"
                ],
                "postedTime": "2012-01-27T20:41:55Z",
                "targets": [
                    {
                        "id": "http://twitter.com/ladygaga/statuses/160482265024040962",
                        "conversationID": "http://twitter.com/ladygaga/statuses/160482265024040962"
                    }
                ],
                "pageAfter": "1327696915.047399",
                "hasMoreChildren": "false"
            },
            {
                "id": "http://js-kit.com/activities/post/5893292a5c5975a99409502849582567",
                "actor": {
                    "links": [
                        "http:///"
                    ],
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/person"
                    ],
                    "id": "http://twitter.com/ladygaga",
                    "title": "@LadyGaga",
                    "status": "Untouched",
                    "avatar": "http://a1.twimg.com/profile_images/1239447061/Unnamed-1_normal.jpg"
                },
                "object": {
                    "id": "http://twitter.com/ladygaga/statuses/160257888038821888",
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/article"
                    ],
                    "title": "*happiest am I when surrounded by props*m how I love preparing for tour. Don't judge me, I was born this wayysss :)",
                    "permalink": "http://twitter.com/ladygaga/statuses/160257888038821888",
                    "context": [
                        {
                            "uri": "http://ctv.ca/official/twitter"
                        },
                        {
                            "uri": "http://ladygaga.com/official/twitter"
                        }
                    ],
                    "content": "<div class=\"note_title\">*happiest am I when surrounded by props*m how I love preparing for tour. Don't judge me, I was born this wayysss :)</div>",
                    "content_type": "text",
                    "status": "Untouched",
                    "likes": [
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=f6147c2b-2180-4c67-a1f6-4a0a5c7c0ce7",
                                "title": "heavii",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/95f79eaaecfe6479e438013f11811ba1bebe4c5d.jpg"
                            },
                            "published": "2012-01-28T19:10:33Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=66da90f3-daa9-4dac-b692-5abd08ced8f8",
                                "title": "IgorKlimenko"
                            },
                            "published": "2012-01-28T10:40:28Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=5a1d2d1a-5a03-431b-a4fb-67a82355736e",
                                "title": "LITTLEMONSTERNY",
                                "avatar": "http://a0.twimg.com/profile_images/1710995518/9_reasonably_small.png"
                            },
                            "published": "2012-01-23T02:40:23Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=5812f143-4102-44c1-8de8-6418645983d0",
                                "title": "TezzyPezzy",
                                "avatar": "http://graph.facebook.com/100001715174478/picture?type=normal"
                            },
                            "published": "2012-01-21T13:14:59Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=50f8dd69-713f-43d4-b48c-88c622b4602b",
                                "title": "zxhaine28",
                                "avatar": "http://graph.facebook.com/100001464046498/picture?type=normal"
                            },
                            "published": "2012-01-21T06:00:30Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=ee01a2c0-7172-4d37-8d68-1499988b619d",
                                "title": "littlemonster11",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/45d071d92cac02fef3d916bf6424205bf87037fc.jpg"
                            },
                            "published": "2012-01-21T03:53:25Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=47efa6ff-3f2c-478b-8142-2311fe251fa1",
                                "title": "HolidavCelebration",
                                "avatar": "http://graph.facebook.com/100001881742076/picture?type=normal"
                            },
                            "published": "2012-01-21T03:20:09Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=be965c3e-4b92-4be0-b85c-8abe72d55bd7",
                                "title": "lilmonster82",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/b62aa54ae5f1b6cbe5e79a31968e1c301735f975.jpg"
                            },
                            "published": "2012-01-20T23:48:01Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=cb58ae09-0cc3-412c-8182-29b89692090f",
                                "title": "andrefm96",
                                "avatar": "http://a3.twimg.com/profile_images/1238693511/238137613_normal.jpg"
                            },
                            "published": "2012-01-20T22:36:04Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=1849dc22-300f-4765-ae63-f623f5a68a11",
                                "title": "<Little_Monster>",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/a5950aab172fcb0677234584787d6250092b2b43.jpg"
                            },
                            "published": "2012-01-20T22:23:16Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=0662420a-fe09-4162-a68a-3cd1c78cb31e",
                                "title": "GagaxLovee",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/a99394395f0d95fb292b5e2b929feec5d3885e71.jpg"
                            },
                            "published": "2012-01-20T21:03:31Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=ea2f2dd4-c3d6-47f5-ad5d-8ac9b333b199",
                                "title": "lesitacastillo"
                            },
                            "published": "2012-01-20T20:45:12Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=b3535f03-79d7-44be-9cd2-25280a2630c2",
                                "title": "MaribelAlonso",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/6f4bf606a20751f53a34729aad110a075e28e03c.jpg"
                            },
                            "published": "2012-01-20T19:39:14Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=7c4a683d-2f08-48cb-9116-7260fe71d159",
                                "title": "MBoren",
                                "avatar": "http://graph.facebook.com/786654340/picture?type=normal"
                            },
                            "published": "2012-01-20T17:22:05Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=56a84423-f46c-4264-bb51-9a03b6cdb62e",
                                "title": "Little Monster's",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/1d132910666bcc0cc4656d9e02e41d3dd384fc07.jpg"
                            },
                            "published": "2012-01-20T16:12:26Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=f376b3c3-ea06-4a8f-af9b-65f8966b392a",
                                "title": "DominikProtiva",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/5df7e7ddfd28a91079470d162af17a896f86c895.jpg"
                            },
                            "published": "2012-01-20T16:09:23Z"
                        }
                    ],
                    "published": "2012-01-20T07:10:32Z",
                    "accumulators": {
                        "likesCount": "23",
                        "repliesCount": "2872"
                    }
                },
                "source": {
                    "name": "Twitter",
                    "uri": "http://search.twitter.com/search?q=from%3Aladygaga",
                    "icon": "http://cdn.js-kit.com/images/favicons/twitter.png"
                },
                "provider": {
                    "name": "Arktan",
                    "uri": "http://arktan.com/",
                    "icon": "http://arktan.com/images/favicon.ico"
                },
                "verbs": [
                    "http://activitystrea.ms/schema/1.0/post"
                ],
                "postedTime": "2012-01-20T07:10:32Z",
                "targets": [
                    {
                        "id": "http://ctv.ca/official/twitter",
                        "conversationID": "http://twitter.com/ladygaga/statuses/160257888038821888"
                    },
                    {
                        "id": "http://ladygaga.com/official/twitter",
                        "conversationID": "http://twitter.com/ladygaga/statuses/160257888038821888"
                    }
                ],
                "pageAfter": "1327043432.096688",
                "hasMoreChildren": "true"
            },
            {
                "id": "http://js-kit.com/activities/post/e0b405db7f28406fb96b73bdfff1d5f2",
                "actor": {
                    "links": [
                        "http:///"
                    ],
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/person"
                    ],
                    "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=78ae9a10-8a62-41d4-adee-89229039dd1a",
                    "title": "Lord_Edilson",
                    "status": "Untouched",
                    "avatar": "http://a0.twimg.com/profile_images/1524121035/IMG037-01_reasonably_small.jpg"
                },
                "object": {
                    "id": "http://twitter.com/ECHO/item/1327698418-2-739",
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/comment"
                    ],
                    "permalink": "",
                    "context": [
                        {
                            "uri": "http://twitter.com/ladygaga/statuses/160257888038821888",
                            "title": "*happiest am I when surrounded by props*m how I love preparing for tour. Don't judge me, I was born this wayysss :)"
                        }
                    ],
                    "content": "First: I Love You (these are the first words that come to mind when talking Lady Gaga)\n\n          Hi am a Brazilian Edilson, I'm here to say how much I love my Mother Monster (Lady Gaga). I started to like her when I first heard the song \"Just Dance\" I think it was 2008 / 2009 and in that I've identified myself with the music and other well known songs of that time ...\n       I hope you always follow ...! Because I really love you .... and sometimes I do not know how to say this because people think it's stupid, but I DO NOT ... because I believe in his talent to show how pEOPLE may be the same without them bother bout what other people say / think.\n       I already have the CD Born This Way and I'm also hoping to deliver my DVD \"The Monster Ball Tour\", I love them, they are like gold to me ...!\nI love you ... and I hope always listen to their music and the news that you always loops and that I love, but it is a pity that I can not go on a show its because I live too far away and I would not have the money to go ee your show when I think about it .... it seems that the world will end and it also hurts me too ....\nLOVE YOU LOVE YOU LOVE YOU ...... AND HOPE THIS MESSAGE Leie VC\nNOTE: I can not speak English very well, because I translated the text into Google Translator .....\nBye: Lord [e] Little Germanotta",
                    "content_type": "html",
                    "status": "Untouched",
                    "markers": [
                        "site:http://www.ladygaga.com/"
                    ],
                    "published": "2012-01-27T21:06:58Z"
                },
                "source": {
                    "name": "twitter.com"
                },
                "provider": {
                    "name": "jskit",
                    "uri": "http://aboutecho.com/",
                    "icon": "http://cdn.js-kit.com/images/echo.png"
                },
                "verbs": [
                    "http://activitystrea.ms/schema/1.0/post"
                ],
                "postedTime": "2012-01-27T21:06:58Z",
                "targets": [
                    {
                        "id": "http://twitter.com/ladygaga/statuses/160257888038821888",
                        "conversationID": "http://twitter.com/ladygaga/statuses/160257888038821888"
                    }
                ],
                "pageAfter": "1327698418.020950",
                "hasMoreChildren": "false"
            },
            {
                "id": "http://js-kit.com/activities/post/3755d4bc1746e492acce23db45d0974f",
                "actor": {
                    "links": [
                        "http:///"
                    ],
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/person"
                    ],
                    "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=a2b5f4b5-7673-448d-973b-db1af7d165f7",
                    "title": "Grig__Or",
                    "status": "Untouched",
                    "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/92cfcc549c4e1b57d5e57f3473524b201c83c2ed.jpg"
                },
                "object": {
                    "id": "http://twitter.com/ECHO/item/1327572883-973-206",
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/comment"
                    ],
                    "permalink": "",
                    "context": [
                        {
                            "uri": "http://twitter.com/ladygaga/statuses/160257888038821888",
                            "title": "*happiest am I when surrounded by props*m how I love preparing for tour. Don't judge me, I was born this wayysss :)"
                        }
                    ],
                    "content": "Follow back Gaga. I am ur fan in my small country. I am ur caucasian fan. Love you, your music. Ur Grigor my twitter @Grig__Or",
                    "content_type": "html",
                    "status": "Untouched",
                    "markers": [
                        "site:http://www.ladygaga.com/"
                    ],
                    "published": "2012-01-26T10:14:43Z"
                },
                "source": {
                    "name": "twitter.com"
                },
                "provider": {
                    "name": "jskit",
                    "uri": "http://aboutecho.com/",
                    "icon": "http://cdn.js-kit.com/images/echo.png"
                },
                "verbs": [
                    "http://activitystrea.ms/schema/1.0/post"
                ],
                "postedTime": "2012-01-26T10:14:43Z",
                "targets": [
                    {
                        "id": "http://twitter.com/ladygaga/statuses/160257888038821888",
                        "conversationID": "http://twitter.com/ladygaga/statuses/160257888038821888"
                    }
                ],
                "pageAfter": "1327572883.029805",
                "hasMoreChildren": "false"
            },
            {
                "id": "http://js-kit.com/activities/post/e1b28fba5924837e50aa3bb717e2be4c",
                "actor": {
                    "links": [
                        "http:///"
                    ],
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/person"
                    ],
                    "id": "http://ladygaga.com/",
                    "title": "LadyGaga.com",
                    "status": "Untouched",
                    "avatar": "http://cf.echoenabled.com/3p/arktan.com/igalogo.gif"
                },
                "object": {
                    "id": "http://ladygaga.com/news/default.aspx?nid=37713",
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/article"
                    ],
                    "title": "Lady Gaga to Officially Launch Born This Way Foundation at Harvard University on February 29th | News",
                    "permalink": "http://www.ladygaga.com/news/default.aspx?nid=37713&aid=599&utm_source=rss&utm_campaign=rss&utm_medium=News&utm_content=nid_37713",
                    "context": [
                        {
                            "uri": "http://ladygaga.com/news/default.aspx?nid=37713",
                            "title": "Lady Gaga to Officially Launch Born This Way Foundation at Harvard University on February 29th"
                        },
                        {
                            "uri": "http://ladygaga.com/news/default.aspx?aid=599&nid=37713",
                            "title": "Lady Gaga to Officially Launch Born This Way Foundation at Harvard University on February 29th"
                        },
                        {
                            "uri": "http://bornthiswayfoundation.org/",
                            "title": "Born This Way Foundation  |  Born Brave: Inspirational Stories from our supporters"
                        }
                    ],
                    "content": "<a class=\"article_title\" href=\"http://www.ladygaga.com/news/default.aspx?nid=37713&aid=599&utm_source=rss&utm_campaign=rss&utm_medium=News&utm_content=nid_37713\">Lady Gaga to Officially Launch Born This Way Foundation at Harvard University on February 29th | News</a><br/><div class=\"article_body\"><span><em><strong>Born This Way Foundation to partner wth The John D. & Catherine T. MacArthur Foundation, The California Endowment, Harvard's Berman Center for Internet & Society and the Harvard Graduate School of Education on event</strong></em><br /><br />Los Angeles, CA (January 19, 2012) - Lady Gaga and her mother, Cynthia Germanotta, announced today that they will officially launch the Born This Way Foundation (BTWF) on Wednesday, February 29th, 2012 at Harvard University’s Sanders Theatre. Lady Gaga will be joined by some very special guests as she personally unveils BTWF before a crowd of policy makers, non-profit organizations, foundation leaders and youth themselves who are working to create a kinder and braver world. The one-day event will be co-hosted by BTWF, the Berkman Center for Internet & Society at Harvard, the Harvard Graduate School of Education, the John D. & Catherine T. MacArthur Foundation and The California Endowment.<br /><br />\"My daughter's foundation was born out of her passion to create a better world where people are kinder and nicer to one another and are accepted for who they are, regardless of how different they may be,” said Cynthia Germanotta. “She has experienced many of the struggles that our youth encounter today, and identifies with the lasting effects they can have without proper support. Together, we look forward to creating a new movement that will engage and empower youth and accept them as valuable members of our society.\"<br /><br />The foundation has partnered with the John D. & Catherine T. MacArthur Foundation, The California Endowment and The Berkman Center at Harvard to explore the best ways to reach youth and create a new culture of kindness, bravery, acceptance and empowerment. BTWF, a non-profit charitable organization, will address issues like self-confidence, well-being, anti-bullying, mentoring and career development and advocacy. With a focus on digital mobilization to create positive change, BTWF will lead youth into a braver new society where each individual is accepted and loved as the person they were born to be. BTWF is partnering with the Harvard Graduate School of Education on this special event to raise awareness of these issues and to provide insights on reducing all types of bullying.<br /><br />“We share the spirit of the Born This Way Foundation in our commitment to inspire social change, empower youth, and foster moral communities. It is an honor to host this historic event on our campus,” said Dean Kathleen McCartney of the Harvard Graduate School of Education.<br /><br />Additional details concerning The Born This Way Foundation launch will be announced closer to the event date, February 29th, 2012. Please visit: <a href=\"http://www.BornThisWayFoundation.org\" target=\"_blank\">www.BornThisWayFoundation.org</a> to take the pledge and become part of the movement.</span></div>",
                    "content_type": "text",
                    "status": "Untouched",
                    "likes": [
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=5a1d2d1a-5a03-431b-a4fb-67a82355736e",
                                "title": "LITTLEMONSTERNY",
                                "avatar": "http://a0.twimg.com/profile_images/1710995518/9_reasonably_small.png"
                            },
                            "published": "2012-01-23T02:40:40Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=3c5137df-9123-446b-81a2-96711641229c",
                                "title": "GaGadict",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/470bf2117fc56e449bf0e30144f9222263053a4c.jpg"
                            },
                            "published": "2012-01-23T00:41:21Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=fff4c8da-9890-4d14-be2b-8f33a351ac70",
                                "title": "WillBaillargeon",
                                "avatar": "http://graph.facebook.com/1100756046/picture?type=normal"
                            },
                            "published": "2012-01-22T00:51:15Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=47efa6ff-3f2c-478b-8142-2311fe251fa1",
                                "title": "HolidavCelebration",
                                "avatar": "http://graph.facebook.com/100001881742076/picture?type=normal"
                            },
                            "published": "2012-01-21T03:17:13Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=cb58ae09-0cc3-412c-8182-29b89692090f",
                                "title": "andrefm96",
                                "avatar": "http://a3.twimg.com/profile_images/1238693511/238137613_normal.jpg"
                            },
                            "published": "2012-01-20T22:36:08Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=0662420a-fe09-4162-a68a-3cd1c78cb31e",
                                "title": "GagaxLovee",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/a99394395f0d95fb292b5e2b929feec5d3885e71.jpg"
                            },
                            "published": "2012-01-20T21:03:49Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=b3535f03-79d7-44be-9cd2-25280a2630c2",
                                "title": "MaribelAlonso",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/6f4bf606a20751f53a34729aad110a075e28e03c.jpg"
                            },
                            "published": "2012-01-20T19:39:23Z"
                        }
                    ],
                    "published": "2012-01-19T17:32:00Z",
                    "accumulators": {
                        "likesCount": "7",
                        "repliesCount": "25"
                    }
                },
                "source": {
                    "name": "LadyGaga.com",
                    "uri": "http://ladygaga.com/",
                    "icon": "http://ladygaga.com/favicon.ico"
                },
                "provider": {
                    "name": "Arktan",
                    "uri": "http://arktan.com/",
                    "icon": "http://arktan.com/images/favicon.ico"
                },
                "verbs": [
                    "http://activitystrea.ms/schema/1.0/post"
                ],
                "postedTime": "2012-01-19T17:32:00Z",
                "targets": [
                    {
                        "id": "http://ladygaga.com/news/default.aspx?nid=37713",
                        "conversationID": "http://ladygaga.com/news/default.aspx?nid=37713"
                    },
                    {
                        "id": "http://ladygaga.com/news/default.aspx?aid=599&nid=37713",
                        "conversationID": "http://ladygaga.com/news/default.aspx?nid=37713"
                    },
                    {
                        "id": "http://bornthiswayfoundation.org/",
                        "conversationID": "http://ladygaga.com/news/default.aspx?nid=37713"
                    }
                ],
                "pageAfter": "1326994320.078660",
                "hasMoreChildren": "true"
            },
            {
                "id": "http://js-kit.com/activities/post/8893e29200e171e7e2d61fd30e005c76",
                "actor": {
                    "links": [
                        "http:///"
                    ],
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/person"
                    ],
                    "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=66da90f3-daa9-4dac-b692-5abd08ced8f8",
                    "title": "IgorKlimenko",
                    "status": "Untouched"
                },
                "object": {
                    "id": "http://ladygaga.com/ECHO/item/1327747267-295-867",
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/comment"
                    ],
                    "permalink": "",
                    "context": [
                        {
                            "uri": "http://ladygaga.com/news/default.aspx?nid=37713",
                            "title": "Lady Gaga to Officially Launch Born This Way Foundation at Harvard University on February 29th | News"
                        }
                    ],
                    "content": "(\"\")(\"\")",
                    "content_type": "html",
                    "status": "Untouched",
                    "markers": [
                        "site:http://www.ladygaga.com/"
                    ],
                    "published": "2012-01-28T10:41:07Z"
                },
                "source": {
                    "name": "umg"
                },
                "provider": {
                    "name": "jskit",
                    "uri": "http://aboutecho.com/",
                    "icon": "http://cdn.js-kit.com/images/echo.png"
                },
                "verbs": [
                    "http://activitystrea.ms/schema/1.0/post"
                ],
                "postedTime": "2012-01-28T10:41:07Z",
                "targets": [
                    {
                        "id": "http://ladygaga.com/news/default.aspx?nid=37713",
                        "conversationID": "http://ladygaga.com/news/default.aspx?nid=37713"
                    }
                ],
                "pageAfter": "1327747267.055392",
                "hasMoreChildren": "false"
            },
            {
                "id": "http://js-kit.com/activities/post/b4e68036b6e8e221a21aef70edc45d82",
                "actor": {
                    "links": [
                        "http:///"
                    ],
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/person"
                    ],
                    "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=22541cd1-10c7-4dcc-9d80-e67bc6eda07a",
                    "title": "IbrahimGo",
                    "status": "Untouched",
                    "avatar": "http://graph.facebook.com/735079747/picture?type=normal"
                },
                "object": {
                    "id": "http://ladygaga.com/ECHO/item/1327740669-847-505",
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/comment"
                    ],
                    "permalink": "",
                    "context": [
                        {
                            "uri": "http://ladygaga.com/news/default.aspx?nid=37713",
                            "title": "Lady Gaga to Officially Launch Born This Way Foundation at Harvard University on February 29th | News"
                        }
                    ],
                    "content": ".hey guys if you wanna see a tribute to GAGA by Ibrahim Go... go to this page  \nthose pictures are more than awesome \n\nfacebook.com/media/set/?set=a.139775322804512.28000.139737922808252&type=3&l=17ec35396f",
                    "content_type": "html",
                    "status": "Untouched",
                    "markers": [
                        "spam.impermium"
                    ],
                    "published": "2012-01-28T08:51:09Z"
                },
                "source": {
                    "name": "umg"
                },
                "provider": {
                    "name": "jskit",
                    "uri": "http://aboutecho.com/",
                    "icon": "http://cdn.js-kit.com/images/echo.png"
                },
                "verbs": [
                    "http://activitystrea.ms/schema/1.0/post"
                ],
                "postedTime": "2012-01-28T08:51:09Z",
                "targets": [
                    {
                        "id": "http://ladygaga.com/news/default.aspx?nid=37713",
                        "conversationID": "http://ladygaga.com/news/default.aspx?nid=37713"
                    }
                ],
                "pageAfter": "1327740669.086038",
                "hasMoreChildren": "false"
            },
            {
                "id": "http://js-kit.com/activities/post/7a8a8160d5c9d5f9fba322c34f53e276",
                "actor": {
                    "links": [
                        "http:///"
                    ],
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/person"
                    ],
                    "id": "http://ladygaga.com/",
                    "title": "LadyGaga.com",
                    "status": "Untouched",
                    "avatar": "http://cf.echoenabled.com/3p/arktan.com/igalogo.gif"
                },
                "object": {
                    "id": "http://ladygaga.com/news/default.aspx?nid=37692",
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/article"
                    ],
                    "title": "Lady Gaga Joins Google+ | News",
                    "permalink": "http://www.ladygaga.com/news/default.aspx?nid=37692&aid=599&utm_source=rss&utm_campaign=rss&utm_medium=News&utm_content=nid_37692",
                    "context": [
                        {
                            "uri": "http://ladygaga.com/news/default.aspx?nid=37692",
                            "title": "Lady Gaga : News : Lady Gaga Joins Google+"
                        },
                        {
                            "uri": "http://ladygaga.com/news/default.aspx?aid=599&nid=37692",
                            "title": "Lady Gaga Joins Google+"
                        },
                        {
                            "uri": "https://plus.google.com/106063255260898090789",
                            "title": "Lady Gaga - Google+"
                        },
                        {
                            "uri": "http://ongpl.us/ladygaga!"
                        }
                    ],
                    "content": "<a class=\"article_title\" href=\"http://www.ladygaga.com/news/default.aspx?nid=37692&aid=599&utm_source=rss&utm_campaign=rss&utm_medium=News&utm_content=nid_37692\">Lady Gaga Joins Google+ | News</a><br/><div class=\"article_body\"><span>Little Monsters on Google+, it's time to add Lady Gaga to your circles! Gaga has launched her official Google+ profile! Visit her profile and add her to your circles now at <a href=\"http://ongpl.us/ladygaga\" data-resolved=\"https://plus.google.com/106063255260898090789\" target=\"_blank\">http://ongpl.us/ladygaga</a>!</span></div>",
                    "content_type": "text",
                    "status": "Untouched",
                    "likes": [
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=f6147c2b-2180-4c67-a1f6-4a0a5c7c0ce7",
                                "title": "heavii",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/95f79eaaecfe6479e438013f11811ba1bebe4c5d.jpg"
                            },
                            "published": "2012-01-28T19:10:54Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=776af28b-d38f-4367-9e8b-cc4ba17c1d92",
                                "title": "DanAlejandroAvechuc",
                                "avatar": "http://graph.facebook.com/100001753448033/picture?type=normal"
                            },
                            "published": "2012-01-26T06:09:00Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=5a1d2d1a-5a03-431b-a4fb-67a82355736e",
                                "title": "LITTLEMONSTERNY",
                                "avatar": "http://a0.twimg.com/profile_images/1710995518/9_reasonably_small.png"
                            },
                            "published": "2012-01-23T02:40:52Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=cb58ae09-0cc3-412c-8182-29b89692090f",
                                "title": "andrefm96",
                                "avatar": "http://a3.twimg.com/profile_images/1238693511/238137613_normal.jpg"
                            },
                            "published": "2012-01-20T22:36:10Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=43c39fc8-6ddd-4929-8707-78fcbee337ed",
                                "title": "JeremyMichaelWalbert",
                                "avatar": "http://graph.facebook.com/100003302871822/picture?type=normal"
                            },
                            "published": "2012-01-20T06:51:24Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=37b27686-11fc-4ecf-a31b-cf3e75c793fe",
                                "title": "KikiMonster",
                                "avatar": "http://graph.facebook.com/100000877387795/picture?type=normal"
                            },
                            "published": "2012-01-19T18:37:13Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=0d942ab2-7f1b-4220-aac2-b895dc9bc85f",
                                "title": "TeckieGirl",
                                "avatar": "http://a2.twimg.com/profile_images/1250132083/new_hp_Pre_3_pic_reasonably_small.jpg"
                            },
                            "published": "2012-01-19T03:00:15Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=b3535f03-79d7-44be-9cd2-25280a2630c2",
                                "title": "MaribelAlonso",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/6f4bf606a20751f53a34729aad110a075e28e03c.jpg"
                            },
                            "published": "2012-01-19T02:48:03Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=ec8793c6-15bc-4fa1-84b8-1b543ca225bd",
                                "title": "SaraSchianoDiCola",
                                "avatar": "http://graph.facebook.com/100001237115557/picture?type=normal"
                            },
                            "published": "2012-01-18T19:00:28Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=0771a499-ba0c-4c70-abb0-5c6009846fb4",
                                "title": "LisaJUlmer",
                                "avatar": "http://graph.facebook.com/100002089004056/picture?type=normal"
                            },
                            "published": "2012-01-18T17:28:22Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=709d147b-d38e-49e9-94b2-8c5ccb656802",
                                "title": "tamila",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/fb7502826403532a7171211c217811e210d0ad6b.jpg"
                            },
                            "published": "2012-01-18T16:57:10Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=ef5da2a7-1e62-43bc-b36f-79c73450d961",
                                "title": "JamelGaga",
                                "avatar": "http://graph.facebook.com/100000841133494/picture?type=normal"
                            },
                            "published": "2012-01-18T11:51:31Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=66da90f3-daa9-4dac-b692-5abd08ced8f8",
                                "title": "IgorKlimenko"
                            },
                            "published": "2012-01-18T10:04:31Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=1ebb8828-3909-4064-b79d-a314398660ec",
                                "title": "RhaFiiTaLm",
                                "avatar": "http://graph.facebook.com/100001384906585/picture?type=normal"
                            },
                            "published": "2012-01-17T21:54:57Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=e0a56bc5-1827-443d-a931-59939498fb3c",
                                "title": "ALEXIA",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/c8da60dd93608de07b184f58f548f64188afc42e.jpg"
                            },
                            "published": "2012-01-17T18:32:10Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=f7e438d3-10eb-44b7-bd0a-6520aca5b82e",
                                "title": "HausOfYouAndMe",
                                "avatar": "http://a2.twimg.com/profile_images/1499788146/finalwecollidetonight_reasonably_small_reasonably_small.jpg"
                            },
                            "published": "2012-01-17T16:02:26Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=3c5137df-9123-446b-81a2-96711641229c",
                                "title": "GaGadict",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/470bf2117fc56e449bf0e30144f9222263053a4c.jpg"
                            },
                            "published": "2012-01-17T15:51:16Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=82c826cf-de97-4b77-940f-9968a9a3f567",
                                "title": "Lucas Lima",
                                "avatar": "http://graph.facebook.com/100002168348724/picture?type=normal"
                            },
                            "published": "2012-01-17T13:43:54Z"
                        },
                        {
                            "actor": {
                                "links": [
                                    "http:///"
                                ],
                                "objectTypes": [
                                    "http://activitystrea.ms/schema/1.0/person"
                                ],
                                "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=56a84423-f46c-4264-bb51-9a03b6cdb62e",
                                "title": "Little Monster's",
                                "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/1d132910666bcc0cc4656d9e02e41d3dd384fc07.jpg"
                            },
                            "published": "2012-01-17T09:37:12Z"
                        }
                    ],
                    "published": "2012-01-17T01:20:00Z",
                    "accumulators": {
                        "likesCount": "19",
                        "repliesCount": "183"
                    }
                },
                "source": {
                    "name": "LadyGaga.com",
                    "uri": "http://ladygaga.com/",
                    "icon": "http://ladygaga.com/favicon.ico"
                },
                "provider": {
                    "name": "Arktan",
                    "uri": "http://arktan.com/",
                    "icon": "http://arktan.com/images/favicon.ico"
                },
                "verbs": [
                    "http://activitystrea.ms/schema/1.0/post"
                ],
                "postedTime": "2012-01-17T01:20:00Z",
                "targets": [
                    {
                        "id": "http://ladygaga.com/news/default.aspx?nid=37692",
                        "conversationID": "http://ladygaga.com/news/default.aspx?nid=37692"
                    },
                    {
                        "id": "http://ladygaga.com/news/default.aspx?aid=599&nid=37692",
                        "conversationID": "http://ladygaga.com/news/default.aspx?nid=37692"
                    },
                    {
                        "id": "https://plus.google.com/106063255260898090789",
                        "conversationID": "http://ladygaga.com/news/default.aspx?nid=37692"
                    },
                    {
                        "id": "http://ongpl.us/ladygaga!",
                        "conversationID": "http://ladygaga.com/news/default.aspx?nid=37692"
                    }
                ],
                "pageAfter": "1326763200.058354",
                "hasMoreChildren": "true"
            },
            {
                "id": "http://js-kit.com/activities/post/cee74e3cc6cf857152bdb65f1d37cf6f",
                "actor": {
                    "links": [
                        "http:///"
                    ],
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/person"
                    ],
                    "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=78ae9a10-8a62-41d4-adee-89229039dd1a",
                    "title": "Lord_Edilson",
                    "status": "Untouched",
                    "avatar": "http://a0.twimg.com/profile_images/1524121035/IMG037-01_reasonably_small.jpg"
                },
                "object": {
                    "id": "http://ladygaga.com/ECHO/item/1327698590-837-427",
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/comment"
                    ],
                    "permalink": "",
                    "context": [
                        {
                            "uri": "http://ladygaga.com/news/default.aspx?nid=37692",
                            "title": "Lady Gaga Joins Google+ | News"
                        }
                    ],
                    "content": "First: I Love You (these are the first words that come to mind when talking Lady Gaga)\n\n          Hi am a Brazilian Edilson, I'm here to say how much I love my Mother Monster (Lady Gaga). I started to like her when I first heard the song \"Just Dance\" I think it was 2008 / 2009 and in that I've identified myself with the music and other well known songs of that time ...\n       I hope you always follow ...! Because I really love you .... and sometimes I do not know how to say this because people think it's stupid, but I DO NOT ... because I believe in his talent to show how pEOPLE may be the same without them bother bout what other people say / think.\n       I already have the CD Born This Way and I'm also hoping to deliver my DVD \"The Monster Ball Tour\", I love them, they are like gold to me ...!\nI love you ... and I hope always listen to their music and the news that you always loops and that I love, but it is a pity that I can not go on a show its because I live too far away and I would not have the money to go ee your show when I think about it .... it seems that the world will end and it also hurts me too ....\nLOVE YOU LOVE YOU LOVE YOU ...... AND HOPE THIS MESSAGE Leie VC\nNOTE: I can not speak English very well, because I translated the text into Google Translator .....\nBye: Lord [e] Little Germanotta",
                    "content_type": "html",
                    "status": "Untouched",
                    "markers": [
                        "site:http://www.ladygaga.com/"
                    ],
                    "published": "2012-01-27T21:09:50Z"
                },
                "source": {
                    "name": "umg"
                },
                "provider": {
                    "name": "jskit",
                    "uri": "http://aboutecho.com/",
                    "icon": "http://cdn.js-kit.com/images/echo.png"
                },
                "verbs": [
                    "http://activitystrea.ms/schema/1.0/post"
                ],
                "postedTime": "2012-01-27T21:09:50Z",
                "targets": [
                    {
                        "id": "http://ladygaga.com/news/default.aspx?nid=37692",
                        "conversationID": "http://ladygaga.com/news/default.aspx?nid=37692"
                    }
                ],
                "pageAfter": "1327698590.029430",
                "hasMoreChildren": "false"
            },
            {
                "id": "http://js-kit.com/activities/post/483ac60b58d95632a30b214d6025d198",
                "actor": {
                    "links": [
                        "http:///"
                    ],
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/person"
                    ],
                    "id": "https://umg.janraincapture.com/oauth/public_profile?uuid=a2b5f4b5-7673-448d-973b-db1af7d165f7",
                    "title": "Grig__Or",
                    "status": "Untouched",
                    "avatar": "https://d1lqe9temigv1p.cloudfront.net/img/92cfcc549c4e1b57d5e57f3473524b201c83c2ed.jpg"
                },
                "object": {
                    "id": "http://ladygaga.com/ECHO/item/1327572933-607-583",
                    "objectTypes": [
                        "http://activitystrea.ms/schema/1.0/comment"
                    ],
                    "permalink": "",
                    "context": [
                        {
                            "uri": "http://ladygaga.com/news/default.aspx?nid=37692",
                            "title": "Lady Gaga Joins Google+ | News"
                        }
                    ],
                    "content": "Follow back Gaga. I am ur fan in my small country. I am ur caucasian fan. Love you, your music. Ur Grigor my twitter @Grig__Or",
                    "content_type": "html",
                    "status": "Untouched",
                    "markers": [
                        "site:http://www.ladygaga.com/"
                    ],
                    "published": "2012-01-26T10:15:33Z"
                },
                "source": {
                    "name": "umg"
                },
                "provider": {
                    "name": "jskit",
                    "uri": "http://aboutecho.com/",
                    "icon": "http://cdn.js-kit.com/images/echo.png"
                },
                "verbs": [
                    "http://activitystrea.ms/schema/1.0/post"
                ],
                "postedTime": "2012-01-26T10:15:33Z",
                "targets": [
                    {
                        "id": "http://ladygaga.com/news/default.aspx?nid=37692",
                        "conversationID": "http://ladygaga.com/news/default.aspx?nid=37692"
                    }
                ],
                "pageAfter": "1327572933.047821",
                "hasMoreChildren": "false"
            }
        ]
    };

    return {
        start: function() {
            $.publish(settings.topic, [gaga]);
        }
    };
};
        
