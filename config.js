// config.js
// 未來新增、修改琴譜時，只需要維護這個檔案。
// 圖片譜使用 filePaths，PDF 譜使用 pdfPath，練習影片可放在 videos。

window.scoreData = [
    {
        id: 1,
        title: "一個人想著一個人",
        composer: "",
        key: "",
        filePaths: [
            "scores/一個人想著一個人/photo_1_2026-06-09_15-08-36.jpg",
            "scores/一個人想著一個人/photo_2_2026-06-09_15-08-36.jpg",
            "scores/一個人想著一個人/photo_3_2026-06-09_15-08-36.jpg",
            "scores/一個人想著一個人/photo_4_2026-06-09_15-08-36.jpg"
        ],
        videos: []
    },
    {
        id: 2,
        title: "多年後",
        composer: "",
        key: "",
        filePaths: [
            "scores/多年後/photo_5_2026-06-09_15-08-36.jpg",
            "scores/多年後/photo_6_2026-06-09_15-08-36.jpg",
            "scores/多年後/photo_7_2026-06-09_15-08-36.jpg",
            "scores/多年後/photo_8_2026-06-09_15-08-36.jpg"
        ],
        videos: []
    },
    {
        id: 3,
        title: "愛情怎麼喊停",
        composer: "",
        key: "",
        filePaths: [
            "scores/愛情怎麼喊停/愛情怎麼喊停p1.png",
            "scores/愛情怎麼喊停/愛情怎麼喊停p2.png",
            "scores/愛情怎麼喊停/愛情怎麼喊停p3.png",
            "scores/愛情怎麼喊停/愛情怎麼喊停p4.png",
            "scores/愛情怎麼喊停/愛情怎麼喊停p5.png",
            "scores/愛情怎麼喊停/愛情怎麼喊停p6.png",
            "scores/愛情怎麼喊停/愛情怎麼喊停p7.png"
        ],
        videos: []
    },
    {
        id: 4,
        title: "魔法公主",
        composer: "",
        key: "",
        pdfPath: "scores/魔法公主/魔法公主.pdf",
        videos: []
    }
];

/*
完整範例：新增琴譜時可複製下面這段，貼到 window.scoreData 陣列裡。

{
    id: 5,
    title: "範例曲名",
    composer: "範例作曲者",
    key: "C Major",

    // 圖片譜：每一頁放一個檔案路徑。
    filePaths: [
        "scores/範例曲名/範例曲名p1.png",
        "scores/範例曲名/範例曲名p2.png"
    ],

    // 如果是 PDF 譜，請改用下面這行，並移除 filePaths。
    // pdfPath: "scores/範例曲名/範例曲名.pdf",

    videos: [
        { versionTitle: "半音階口琴版", youtubeId: "3tmd-ClpJxA" },
        { versionTitle: "示範演奏", youtubeId: "請填入 YouTube 影片 ID" }
    ]
}
*/
