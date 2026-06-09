// config.js
// 未來新增、修改琴譜時，只需要維護這個檔案。
// 圖片譜使用 filePaths，PDF 譜使用 pdfPath，練習影片可放在 videos。
// 練習資訊欄位可以幫助選調、抓速度、安排練習重點。

window.scoreData = [
    {
        id: 1,
        title: "一個人想著一個人",
        artist: "曾沛慈",
        composer: "張簡君偉",
        lyricist: "張簡君偉",
        arranger: "",
        key: "Ab Major",
        timeSignature: "4/4",
        tempo: 70,
        source: "終極一班2 片尾曲／插曲",
        filePaths: [
            "scores/一個人想著一個人/photo_1_2026-06-09_15-08-36.jpg",
            "scores/一個人想著一個人/photo_2_2026-06-09_15-08-36.jpg",
            "scores/一個人想著一個人/photo_3_2026-06-09_15-08-36.jpg",
            "scores/一個人想著一個人/photo_4_2026-06-09_15-08-36.jpg"
        ],
        practiceNotes: [
            "樂譜調號為四個降記號，練習前先熟悉 Bb、Eb、Ab、Db。",
            "速度標示為 ♩ = 70，適合先用 60 慢練，穩定後再回到原速。",
            "右手旋律有大量連線與長句，重點是換氣感、句尾收音和 p/mp 的層次。",
            "左手多為分解和弦伴奏，先單獨練穩手型，再合右手旋律。"
        ],
        videos: []
    },
    {
        id: 2,
        title: "多年後",
        artist: "曾沛慈",
        composer: "潘琪妮",
        lyricist: "潘琪妮",
        arranger: "",
        key: "Ab Major",
        timeSignature: "4/4",
        tempo: 68,
        source: "我是曾沛慈；緯來戲劇台韓劇《沒關係，是愛情啊》片頭曲",
        filePaths: [
            "scores/多年後/photo_8_2026-06-09_15-08-36.jpg",
            "scores/多年後/photo_7_2026-06-09_15-08-36.jpg",
            "scores/多年後/photo_6_2026-06-09_15-08-36.jpg",
            "scores/多年後/photo_5_2026-06-09_15-08-36.jpg"
        ],
        practiceNotes: [
            "樂譜調號為四個降記號，與《一個人想著一個人》同樣可先練 Ab 大調音階。",
            "速度標示為 ♩ = 68，整體比一般流行抒情歌更需要留白。",
            "第 1、2 結尾反覆記號要先標清楚，避免練習時走錯段落。",
            "中後段有 mf 到 f 的推進，先把左手分解和弦音量壓住，讓旋律線浮出來。"
        ],
        videos: []
    },
    {
        id: 3,
        title: "愛情怎麼喊停",
        artist: "曾沛慈",
        composer: "KENN WU",
        lyricist: "余琛懋",
        arranger: "InShow",
        key: "Bb Major",
        timeSignature: "4/4",
        tempo: 96,
        source: "原來是美男 OST 插曲",
        filePaths: [
            "scores/愛情怎麼喊停/愛情怎麼喊停p1.png",
            "scores/愛情怎麼喊停/愛情怎麼喊停p2.png",
            "scores/愛情怎麼喊停/愛情怎麼喊停p3.png",
            "scores/愛情怎麼喊停/愛情怎麼喊停p4.png",
            "scores/愛情怎麼喊停/愛情怎麼喊停p5.png",
            "scores/愛情怎麼喊停/愛情怎麼喊停p6.png",
            "scores/愛情怎麼喊停/愛情怎麼喊停p7.png"
        ],
        practiceNotes: [
            "樂譜調號為兩個降記號，練習前先熟悉 Bb、Eb。",
            "速度標示為 ♩ = 96，可先用 72 到 80 慢練左手伴奏型。",
            "右手旋律常跨小節連音，練習時先唱旋律線，再彈出語氣。",
            "伴奏密度比前兩首高，合奏時先控制左手音量，避免蓋過主旋律。"
        ],
        videos: []
    },
    {
        id: 4,
        title: "魔法公主",
        artist: "",
        composer: "久石讓",
        lyricist: "",
        arranger: "",
        key: "C Minor",
        timeSignature: "",
        tempo: "",
        source: "電影《魔法公主／もののけ姫》配樂",
        pdfPath: "scores/魔法公主/魔法公主.pdf",
        practiceNotes: [
            "以小調色彩和長旋律為核心，練習時先確保旋律音準與句尾方向。",
            "如果用鋼琴練，踏板要少量分段，避免低音和弦糊在一起。",
            "若改用旋律樂器演奏，可先標出呼吸點，再處理漸強與漸弱。",
            "PDF 目前未能直接讀取譜面細節，拍號與速度請以開譜後的標示為準。"
        ],
        videos: []
    }
];

/*
完整範例：新增琴譜時可複製下面這段，貼到 window.scoreData 陣列裡。

{
    id: 5,
    title: "範例曲名",
    artist: "範例演唱者",
    composer: "範例作曲者",
    lyricist: "範例作詞者",
    arranger: "範例編曲或製譜者",
    key: "C Major",
    timeSignature: "4/4",
    tempo: 80,
    source: "範例出處，例如電影、電視劇、專輯或遊戲",

    // 圖片譜：每一頁放一個檔案路徑，順序就是翻頁順序。
    filePaths: [
        "scores/範例曲名/範例曲名p1.png",
        "scores/範例曲名/範例曲名p2.png"
    ],

    // 如果是 PDF 譜，請改用下面這行，並移除 filePaths。
    // pdfPath: "scores/範例曲名/範例曲名.pdf",

    practiceNotes: [
        "練習前先確認調號、拍號和速度。",
        "寫下容易出錯的小節、指法、換氣點或踏板提示。"
    ],

    videos: [
        { versionTitle: "半音階口琴版", youtubeId: "3tmd-ClpJxA" },
        { versionTitle: "示範演奏", youtubeId: "請填入 YouTube 影片 ID" }
    ]
}
*/
