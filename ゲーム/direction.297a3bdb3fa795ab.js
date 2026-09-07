/*
 * Scene direction for the second manuscript, audited against 背景台帳.json.
 * `at` is a literal substring of the resolved scene text. Apply matched cues
 * in their text order up to the current page start. The story core splits at
 * every real cue before pagination. Time, weather, season and audio are separate.
 * Dialogue attribution is deliberately sparse and scoped to a node.
 */
(() => {
  'use strict';
  window.VN_DIRECTION = {
    scenes: {
      "C00": {
        "label": "序章　伏せた画面",
        "date": "三月",
        "location": "湊の部屋",
        "background": "home-minato-rain-night",
        "tone": "rain",
        "cast": [
          "saki"
        ],
        "cues": [],
        "timeOfDay": "night",
        "season": "early-spring",
        "weather": "rain",
        "audioMood": "rain",
        "roomState": "lived-in"
      },
      "C01": {
        "label": "第一章　三人分の適量",
        "date": "三月一日",
        "location": "紗季の部屋・荷造り初期",
        "background": "home-saki-day",
        "tone": "day",
        "cast": [
          "saki",
          "mio"
        ],
        "cues": [
          {
            "date": "三月一日",
            "location": "紗季の部屋・玄関",
            "background": "home-saki-sunset",
            "tone": "sunset",
            "cast": [
              "saki",
              "mio"
            ],
            "timeOfDay": "sunset",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "帰り際、紗季が僕の袖を引いた。",
            "roomState": "packing-early"
          },
          {
            "date": "三月一日",
            "location": "駅への帰り道",
            "background": "street-sunset",
            "tone": "sunset",
            "cast": [
              "mio"
            ],
            "timeOfDay": "sunset",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "アパートを出てしばらくすると、同じ内容のメッセージが届いた。",
            "roomState": null
          }
        ],
        "timeOfDay": "day",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "day",
        "roomState": "packing-early"
      },
      "Q01A": {
        "label": "第一章　帰り道の返信",
        "date": "三月一日",
        "location": "駅への帰り道",
        "background": "street-sunset",
        "tone": "sunset",
        "cast": [
          "mio"
        ],
        "cues": [],
        "timeOfDay": "sunset",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "sunset",
        "roomState": null
      },
      "Q01B": {
        "label": "第一章　帰り道の返信",
        "date": "三月一日",
        "location": "駅への帰り道",
        "background": "street-sunset",
        "tone": "sunset",
        "cast": [
          "mio"
        ],
        "cues": [],
        "timeOfDay": "sunset",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "sunset",
        "roomState": null
      },
      "Q01C": {
        "label": "第一章　帰り道の返信",
        "date": "三月一日",
        "location": "駅への帰り道",
        "background": "street-sunset",
        "tone": "sunset",
        "cast": [
          "mio"
        ],
        "cues": [],
        "timeOfDay": "sunset",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "sunset",
        "roomState": null
      },
      "C01E": {
        "label": "第一章　帰り道",
        "date": "三月一日",
        "location": "駅前",
        "background": "station-front-sunset",
        "tone": "sunset",
        "cast": [
          "mio"
        ],
        "cues": [
          {
            "date": "三月一日",
            "location": "駅からの帰り道",
            "background": "station-front-sunset",
            "tone": "sunset",
            "cast": [],
            "timeOfDay": "sunset",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "僕の袋の中には二食分のカレーがあった。",
            "roomState": null
          },
          {
            "date": "三月一日",
            "location": "湊の部屋",
            "background": "home-minato-night",
            "tone": "night",
            "cast": [],
            "timeOfDay": "night",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "night",
            "at": "明日の分を冷蔵庫へ、もうひとつを冷凍庫へ入れた。",
            "roomState": "lived-in"
          }
        ],
        "timeOfDay": "sunset",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "sunset",
        "roomState": null
      },
      "C02": {
        "label": "第二章　箱の外の本",
        "date": "三月三日",
        "location": "紗季の部屋・荷造り初期",
        "background": "home-saki-night",
        "tone": "night",
        "cast": [
          "saki"
        ],
        "cues": [],
        "timeOfDay": "night",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "night",
        "roomState": "packing-early"
      },
      "C03": {
        "label": "第三章　二十時の長さ",
        "date": "三月六日",
        "location": "仕事帰りの道",
        "background": "street-night",
        "tone": "night",
        "cast": [],
        "cues": [
          {
            "date": "三月六日",
            "location": "駅前の店先",
            "background": "street-night",
            "tone": "night",
            "cast": [],
            "timeOfDay": "night",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "night",
            "at": "駅前の店でパンを買った。",
            "roomState": null
          }
        ],
        "timeOfDay": "night",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "night",
        "roomState": null
      },
      "Q02A": {
        "label": "第三章　二十時",
        "date": "三月六日",
        "location": "駅前",
        "background": "station-front-night",
        "tone": "night",
        "cast": [],
        "cues": [
          {
            "date": "三月六日",
            "location": "紗季の部屋・荷造り初期",
            "background": "home-saki-night",
            "tone": "night",
            "cast": [
              "saki"
            ],
            "timeOfDay": "night",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "night",
            "at": "八時の三分前に着いた。",
            "roomState": "packing-early"
          },
          {
            "date": "三月六日",
            "location": "紗季の部屋・玄関",
            "background": "home-saki-night",
            "tone": "night",
            "cast": [
              "saki"
            ],
            "timeOfDay": "night",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "night",
            "at": "帰るとき、紗季が言った。",
            "roomState": "packing-early"
          }
        ],
        "timeOfDay": "night",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "night",
        "roomState": null
      },
      "Q02B": {
        "label": "第三章　翌日十八時",
        "date": "三月六日",
        "location": "駅前",
        "background": "station-front-night",
        "tone": "night",
        "cast": [],
        "cues": [
          {
            "date": "三月七日・十七時半",
            "location": "食事を買う店の前",
            "background": "street-sunset",
            "tone": "sunset",
            "cast": [],
            "timeOfDay": "sunset",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "翌日、五時半に店に寄った。",
            "roomState": null
          },
          {
            "date": "三月七日・十八時",
            "location": "紗季の部屋・荷造り初期",
            "background": "home-saki-sunset",
            "tone": "sunset",
            "cast": [
              "saki"
            ],
            "timeOfDay": "sunset",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "両手が塞がるほど買うと、紗季に笑われた。",
            "roomState": "packing-early"
          },
          {
            "date": "三月七日・十八時",
            "location": "紗季の部屋・荷造り初期",
            "background": "home-saki-night",
            "tone": "night",
            "cast": [
              "saki"
            ],
            "timeOfDay": "night",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "night",
            "at": "片づけているとき、紗季のスマホにメモが開いているのが見えた。",
            "roomState": "packing-early"
          },
          {
            "date": "三月七日・十八時",
            "location": "紗季の部屋・玄関",
            "background": "home-saki-night",
            "tone": "night",
            "cast": [
              "saki"
            ],
            "timeOfDay": "night",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "night",
            "at": "玄関までの、二歩分だけだった。",
            "roomState": "packing-early"
          }
        ],
        "timeOfDay": "night",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "night",
        "roomState": null
      },
      "Q02C": {
        "label": "第三章　未定",
        "date": "三月六日",
        "location": "駅前",
        "background": "station-front-night",
        "tone": "night",
        "cast": [],
        "cues": [
          {
            "date": "三月六日",
            "location": "湊の部屋",
            "background": "home-minato-night",
            "tone": "night",
            "cast": [],
            "timeOfDay": "night",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "night",
            "at": "僕は家に帰り、パンを食べた。",
            "roomState": "lived-in"
          },
          {
            "date": "三月七日",
            "location": "湊の部屋",
            "background": "home-minato-day",
            "tone": "day",
            "cast": [],
            "timeOfDay": "day",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "翌日、紗季に写真を送った。",
            "roomState": "lived-in"
          }
        ],
        "timeOfDay": "night",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "night",
        "roomState": null
      },
      "C04": {
        "label": "第四章　予約のいらない海",
        "date": "三月九日",
        "location": "駅前",
        "background": "station-front-day",
        "tone": "day",
        "cast": [
          "saki",
          "mio"
        ],
        "cues": [
          {
            "date": "三月九日",
            "location": "駅・切符売り場と改札",
            "background": "ticket-gate-day",
            "tone": "day",
            "cast": [
              "saki",
              "mio"
            ],
            "timeOfDay": "day",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "切符は、その場で買った。",
            "roomState": null
          },
          {
            "date": "三月九日",
            "location": "海辺の食堂",
            "background": "seaside-diner-day",
            "tone": "day",
            "cast": [
              "saki",
              "mio"
            ],
            "timeOfDay": "day",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "結局、僕たちはそのどれでもない店で昼ご飯を食べた。",
            "roomState": null
          },
          {
            "date": "三月九日",
            "location": "海沿いの道",
            "background": "coast-day",
            "tone": "day",
            "cast": [
              "saki",
              "mio"
            ],
            "timeOfDay": "day",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "海沿いの道は、冬と春の境目みたいな匂いがした。",
            "roomState": null
          },
          {
            "date": "三月九日",
            "location": "海辺",
            "background": "coast-day",
            "tone": "day",
            "cast": [
              "saki",
              "mio"
            ],
            "timeOfDay": "day",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "写真を撮る場所を決めるのに、三十分かかった。",
            "roomState": null
          },
          {
            "date": "三月九日",
            "location": "帰りの電車内",
            "background": "train-sunset",
            "tone": "sunset",
            "cast": [
              "saki",
              "mio"
            ],
            "timeOfDay": "sunset",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "帰りの電車で、紗季は僕の肩にもたれて眠った。",
            "roomState": null
          }
        ],
        "timeOfDay": "day",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "day",
        "roomState": null
      },
      "C05": {
        "label": "第五章　同じ一ヶ月",
        "date": "三月十二日",
        "location": "湊の部屋",
        "background": "home-minato-rain-night",
        "tone": "rain",
        "cast": [],
        "cues": [
          {
            "date": "三月十二日",
            "location": "湊の部屋・玄関",
            "background": "home-minato-rain-night",
            "tone": "rain",
            "cast": [
              "saki"
            ],
            "timeOfDay": "night",
            "season": "early-spring",
            "weather": "rain",
            "audioMood": "rain",
            "at": "紗季の髪の先が、少し濡れていた。",
            "roomState": "lived-in"
          },
          {
            "date": "三月十二日",
            "location": "湊の部屋",
            "background": "home-minato-rain-night",
            "tone": "rain",
            "cast": [
              "saki"
            ],
            "timeOfDay": "night",
            "season": "early-spring",
            "weather": "rain",
            "audioMood": "rain",
            "at": "靴を脱ぐと、紗季は部屋の入口で一度立ち止まった。",
            "roomState": "lived-in"
          }
        ],
        "timeOfDay": "night",
        "season": "early-spring",
        "weather": "rain",
        "audioMood": "rain",
        "roomState": "lived-in"
      },
      "C05K": {
        "label": "第五章　話した夜",
        "date": "三月十二日",
        "location": "湊の部屋",
        "background": "home-minato-rain-night",
        "tone": "rain",
        "cast": [
          "saki"
        ],
        "cues": [],
        "timeOfDay": "night",
        "season": "early-spring",
        "weather": "rain",
        "audioMood": "rain",
        "roomState": "lived-in"
      },
      "C05N": {
        "label": "第五章　話さなかった夜",
        "date": "三月十二日",
        "location": "湊の部屋",
        "background": "home-minato-rain-night",
        "tone": "rain",
        "cast": [
          "saki"
        ],
        "cues": [],
        "timeOfDay": "night",
        "season": "early-spring",
        "weather": "rain",
        "audioMood": "rain",
        "roomState": "lived-in"
      },
      "C05R": {
        "label": "第五章　見せる範囲",
        "date": "三月十二日",
        "location": "湊の部屋",
        "background": "home-minato-rain-night",
        "tone": "rain",
        "cast": [
          "saki"
        ],
        "cues": [],
        "timeOfDay": "night",
        "season": "early-spring",
        "weather": "rain",
        "audioMood": "rain",
        "roomState": "lived-in"
      },
      "Q03A": {
        "label": "第五章　保存された二件",
        "date": "三月十二日",
        "location": "湊の部屋",
        "background": "home-minato-rain-night",
        "tone": "rain",
        "cast": [
          "saki"
        ],
        "cues": [],
        "timeOfDay": "night",
        "season": "early-spring",
        "weather": "rain",
        "audioMood": "rain",
        "roomState": "lived-in"
      },
      "Q03B": {
        "label": "第五章　いま話す言葉",
        "date": "三月十二日",
        "location": "湊の部屋",
        "background": "home-minato-rain-night",
        "tone": "rain",
        "cast": [
          "saki"
        ],
        "cues": [],
        "timeOfDay": "night",
        "season": "early-spring",
        "weather": "rain",
        "audioMood": "rain",
        "roomState": "lived-in"
      },
      "C06": {
        "label": "第六章　プリンのある夜",
        "date": "三月十二日",
        "location": "湊の部屋",
        "background": "home-minato-rain-night",
        "tone": "rain",
        "cast": [
          "saki"
        ],
        "cues": [
          {
            "date": "三月十二日",
            "location": "湊の部屋・玄関",
            "background": "home-minato-rain-night",
            "tone": "rain",
            "cast": [
              "saki"
            ],
            "timeOfDay": "night",
            "season": "early-spring",
            "weather": "rain",
            "audioMood": "rain",
            "at": "帰り際、僕は次に会う日を聞いた。",
            "roomState": "lived-in"
          },
          {
            "date": "三月十二日",
            "location": "湊の部屋",
            "background": "home-minato-rain-night",
            "tone": "rain",
            "cast": [],
            "timeOfDay": "night",
            "season": "early-spring",
            "weather": "rain",
            "audioMood": "rain",
            "at": "紗季が帰ったあと、僕はレシートを拾った。",
            "roomState": "lived-in"
          }
        ],
        "timeOfDay": "night",
        "season": "early-spring",
        "weather": "rain",
        "audioMood": "rain",
        "roomState": "lived-in"
      },
      "C07": {
        "label": "第七章　壊れやすい家",
        "date": "三月十四日",
        "location": "大学・建築の作業室",
        "background": "architecture-studio-day",
        "tone": "day",
        "cast": [
          "mio"
        ],
        "cues": [],
        "timeOfDay": "day",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "day",
        "roomState": null
      },
      "Q04A": {
        "label": "第七章　木箱の中身",
        "date": "三月十四日",
        "location": "大学・建築の作業室",
        "background": "architecture-studio-day",
        "tone": "day",
        "cast": [
          "mio"
        ],
        "cues": [],
        "timeOfDay": "day",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "day",
        "roomState": null
      },
      "Q04B": {
        "label": "第七章　沸かしたお湯",
        "date": "三月十四日",
        "location": "大学・建築の作業室",
        "background": "architecture-studio-day",
        "tone": "day",
        "cast": [
          "mio"
        ],
        "cues": [
          {
            "date": "三月十四日",
            "location": "大学の廊下",
            "background": "university-corridor-day",
            "tone": "day",
            "cast": [],
            "timeOfDay": "day",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "廊下へ出て、潰した箱を壁に立て直した。",
            "roomState": null
          }
        ],
        "timeOfDay": "day",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "day",
        "roomState": null
      },
      "C07E": {
        "label": "第七章　帰りのバス",
        "date": "三月十四日",
        "location": "帰りのバス車内",
        "background": "bus-sunset",
        "tone": "sunset",
        "cast": [],
        "cues": [],
        "timeOfDay": "sunset",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "sunset",
        "roomState": null
      },
      "C08": {
        "label": "第八章　送らないと決めた人",
        "date": "三月十五日",
        "location": "スプーン形の時計がある喫茶店",
        "background": "cafe-day",
        "tone": "day",
        "cast": [
          "saki"
        ],
        "cues": [],
        "timeOfDay": "day",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "day",
        "roomState": null
      },
      "Q05A": {
        "label": "第八章　冷めるまで",
        "date": "三月十五日",
        "location": "スプーン形の時計がある喫茶店",
        "background": "cafe-day",
        "tone": "day",
        "cast": [
          "saki"
        ],
        "cues": [],
        "timeOfDay": "day",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "day",
        "roomState": null
      },
      "Q05B": {
        "label": "第八章　栞を挟む",
        "date": "三月十五日",
        "location": "スプーン形の時計がある喫茶店",
        "background": "cafe-day",
        "tone": "day",
        "cast": [
          "saki"
        ],
        "cues": [],
        "timeOfDay": "day",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "day",
        "roomState": null
      },
      "C08E": {
        "label": "第八章　持ち帰るもの",
        "date": "三月十五日",
        "location": "喫茶店の前",
        "background": "street-day",
        "tone": "day",
        "cast": [
          "saki"
        ],
        "cues": [
          {
            "date": "三月十五日",
            "location": "駅前",
            "background": "station-front-day",
            "tone": "day",
            "cast": [
              "saki"
            ],
            "timeOfDay": "day",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "普段なら手を繋ぐあたりまで歩き、駅で別れた。",
            "roomState": null
          },
          {
            "date": "三月十五日",
            "location": "湊の部屋",
            "background": "home-minato-day",
            "tone": "day",
            "cast": [],
            "timeOfDay": "day",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "家で本を棚へ戻そうとしたら、空いていた場所に封筒を挟んであった。",
            "roomState": "lived-in"
          }
        ],
        "timeOfDay": "day",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "day",
        "roomState": null
      },
      "C09": {
        "label": "第九章　赤いプリン",
        "date": "三月十七日",
        "location": "印刷会社",
        "background": "print-office-day",
        "tone": "day",
        "cast": [],
        "cues": [
          {
            "date": "三月十七日・午後",
            "location": "印刷会社",
            "background": "print-office-day",
            "tone": "day",
            "cast": [],
            "timeOfDay": "day",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "午後、店主が来た。",
            "roomState": null
          },
          {
            "date": "三月十七日・午後",
            "location": "仕事帰りの道",
            "background": "street-sunset",
            "tone": "sunset",
            "cast": [],
            "timeOfDay": "sunset",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "帰る頃には、僕の指にも赤いインクが少しついていた。",
            "roomState": null
          },
          {
            "date": "三月十七日・夜",
            "location": "湊の部屋",
            "background": "home-minato-night",
            "tone": "night",
            "cast": [],
            "timeOfDay": "night",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "night",
            "at": "家で連絡用の画面を開く前に、ナギの保存履歴を見た。",
            "roomState": "lived-in"
          }
        ],
        "timeOfDay": "day",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "day",
        "roomState": null
      },
      "C10": {
        "label": "第十章　カメラの向こう",
        "date": "三月十九日",
        "location": "印刷会社・休憩時間",
        "background": "print-office-day",
        "tone": "day",
        "cast": [],
        "cues": [
          {
            "date": "三月十九日",
            "location": "大学の外のベンチ",
            "background": "university-bench-sunset",
            "tone": "sunset",
            "cast": [
              "mio"
            ],
            "timeOfDay": "sunset",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "指定されたベンチのそばで、澪は缶コーヒーを持ち替えていた。",
            "roomState": null
          },
          {
            "date": "三月十九日",
            "location": "大学の外のベンチ",
            "background": "university-bench-sunset",
            "tone": "sunset",
            "cast": [],
            "timeOfDay": "sunset",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "僕は缶の輪が残った掌を開いた。",
            "roomState": null
          }
        ],
        "timeOfDay": "day",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "day",
        "roomState": null
      },
      "C11": {
        "label": "第十一章　三つの会計",
        "date": "三月二十一日",
        "location": "いつものファミレス",
        "background": "family-restaurant-day",
        "tone": "day",
        "cast": [
          "saki",
          "mio"
        ],
        "cues": [
          {
            "date": "三月二十一日",
            "location": "ファミレスのレジ",
            "background": "family-restaurant-day",
            "tone": "day",
            "cast": [
              "saki"
            ],
            "timeOfDay": "day",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "澪は先に店を出て、鞄の中から自転車の鍵を探していた。",
            "roomState": null
          },
          {
            "date": "三月二十一日",
            "location": "ファミレスのレジ",
            "background": "family-restaurant-day",
            "tone": "day",
            "cast": [
              "saki"
            ],
            "timeOfDay": "day",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "レジの横で、紗季が小さなデザートの写真を見た。",
            "roomState": null
          },
          {
            "date": "三月二十一日",
            "location": "ファミレスの前",
            "background": "street-sunset",
            "tone": "sunset",
            "cast": [
              "saki",
              "mio"
            ],
            "timeOfDay": "sunset",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "外へ出ると、澪が鍵を見つけたところだった。",
            "roomState": null
          },
          {
            "date": "三月二十一日",
            "location": "帰り道",
            "background": "street-sunset",
            "tone": "sunset",
            "cast": [],
            "timeOfDay": "sunset",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "家までの道で、紗季が見ていたデザートの値段を思い出した。",
            "roomState": null
          }
        ],
        "timeOfDay": "day",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "day",
        "roomState": null
      },
      "C12": {
        "label": "第十二章　空欄のある予定",
        "date": "三月二十三日",
        "location": "紗季の部屋・荷造り後半",
        "background": "home-saki-packed-day",
        "tone": "day",
        "cast": [
          "saki"
        ],
        "cues": [
          {
            "date": "三月二十三日",
            "location": "紗季の部屋・荷造り後半",
            "background": "home-saki-packed-sunset",
            "tone": "sunset",
            "cast": [
              "saki"
            ],
            "timeOfDay": "sunset",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "窓の下の空いた場所に、西日が入ってきた。",
            "roomState": "packing-late"
          },
          {
            "date": "三月二十三日",
            "location": "紗季の部屋・玄関",
            "background": "home-saki-packed-sunset",
            "tone": "sunset",
            "cast": [
              "saki"
            ],
            "timeOfDay": "sunset",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "玄関で靴を履く間、紗季はドアを持っていてくれた。",
            "roomState": "packing-late"
          },
          {
            "date": "三月二十三日",
            "location": "湊の部屋",
            "background": "home-minato-night",
            "tone": "night",
            "cast": [],
            "timeOfDay": "night",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "night",
            "at": "家に帰ると、ナギのサポートから返事が来ていた。",
            "roomState": "lived-in"
          }
        ],
        "timeOfDay": "day",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "day",
        "roomState": "packing-late"
      },
      "C13": {
        "label": "次に、何を言うか",
        "date": "三月二十四日",
        "location": "湊の部屋",
        "background": "home-minato-night",
        "tone": "night",
        "cast": [],
        "cues": [],
        "timeOfDay": "night",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "night",
        "roomState": "lived-in"
      },
      "S01": {
        "label": "明日も好きな人",
        "date": "三月二十四日",
        "location": "湊の部屋",
        "background": "home-minato-night",
        "tone": "night",
        "cast": [],
        "cues": [
          {
            "date": "三月二十四日",
            "location": "アイスを買う店先",
            "background": "street-night",
            "tone": "night",
            "cast": [],
            "timeOfDay": "night",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "night",
            "at": "送ってから、僕は買い物に出た。",
            "roomState": null
          },
          {
            "date": "三月二十四日",
            "location": "湊の部屋",
            "background": "home-minato-night",
            "tone": "night",
            "cast": [],
            "timeOfDay": "night",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "night",
            "at": "部屋の冷凍庫は一つしか入らず、一つはその場で食べた。",
            "roomState": "lived-in"
          },
          {
            "date": "三月二十五日",
            "location": "大学・卒業式",
            "background": "university-gate-day",
            "tone": "day",
            "cast": [
              "saki"
            ],
            "timeOfDay": "day",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "卒業式の日、紗季は学科の友達と写真を撮っていた。",
            "roomState": null
          },
          {
            "date": "三月二十五日",
            "location": "駅・乗り場への分岐",
            "background": "ticket-gate-day",
            "tone": "day",
            "cast": [
              "saki"
            ],
            "timeOfDay": "day",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "違う電車の乗り場へ向かう前に、紗季が振り返った。",
            "roomState": null
          }
        ],
        "timeOfDay": "night",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "night",
        "roomState": "lived-in"
      },
      "S01R": {
        "label": "ベンチの端",
        "date": "三月二十六日",
        "location": "川沿いのベンチ",
        "background": "riverside-sunset",
        "tone": "sunset",
        "cast": [
          "saki"
        ],
        "cues": [],
        "timeOfDay": "sunset",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "sunset",
        "roomState": null
      },
      "S01RA": {
        "label": "少し遅いお茶",
        "date": "三月二十六日",
        "location": "川沿いのベンチ",
        "background": "riverside-sunset",
        "tone": "sunset",
        "cast": [
          "saki"
        ],
        "cues": [],
        "timeOfDay": "sunset",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "sunset",
        "roomState": null
      },
      "S01RB": {
        "label": "聞いた日の続き",
        "date": "三月二十六日",
        "location": "川沿いのベンチ",
        "background": "riverside-sunset",
        "tone": "sunset",
        "cast": [
          "saki"
        ],
        "cues": [],
        "timeOfDay": "sunset",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "sunset",
        "roomState": null
      },
      "S02": {
        "label": "二人分の予定",
        "date": "三月二十六日",
        "location": "川沿いのベンチ",
        "background": "riverside-sunset",
        "tone": "sunset",
        "cast": [
          "saki"
        ],
        "cues": [],
        "timeOfDay": "sunset",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "sunset",
        "roomState": null
      },
      "S02A": {
        "label": "日曜の九時",
        "date": "三月二十六日",
        "location": "川沿いのベンチ",
        "background": "riverside-sunset",
        "tone": "sunset",
        "cast": [
          "saki"
        ],
        "cues": [
          {
            "date": "三月二十六日",
            "location": "川沿いの帰り道",
            "background": "riverside-sunset",
            "tone": "sunset",
            "cast": [
              "saki"
            ],
            "timeOfDay": "sunset",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "帰り道、手を出すと紗季が握った。",
            "roomState": null
          }
        ],
        "timeOfDay": "sunset",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "sunset",
        "roomState": null
      },
      "S02B": {
        "label": "寝坊できる朝",
        "date": "三月二十六日",
        "location": "川沿いのベンチ",
        "background": "riverside-sunset",
        "tone": "sunset",
        "cast": [
          "saki"
        ],
        "cues": [
          {
            "date": "三月二十六日",
            "location": "川沿いの帰り道",
            "background": "riverside-sunset",
            "tone": "sunset",
            "cast": [
              "saki"
            ],
            "timeOfDay": "sunset",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "帰るとき、手を出すと紗季が握った。",
            "roomState": null
          }
        ],
        "timeOfDay": "sunset",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "sunset",
        "roomState": null
      },
      "S03": {
        "label": "五分だけ",
        "date": "三月二十六日",
        "location": "湊の部屋",
        "background": "home-minato-night",
        "tone": "night",
        "cast": [],
        "cues": [
          {
            "date": "三月二十七日・朝",
            "location": "湊の部屋",
            "background": "home-minato-morning",
            "tone": "day",
            "cast": [],
            "timeOfDay": "morning",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "画面の上に返事が出たのは、翌朝だった。",
            "roomState": "lived-in"
          },
          {
            "date": "三月二十七日",
            "location": "大学の入口",
            "background": "university-gate-day",
            "tone": "day",
            "cast": [
              "mio"
            ],
            "timeOfDay": "day",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "約束の時間、澪は紙袋を提げて来た。",
            "roomState": null
          }
        ],
        "timeOfDay": "night",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "night",
        "roomState": "lived-in"
      },
      "S03A": {
        "label": "箱の中の家",
        "date": "三月二十七日",
        "location": "大学の入口",
        "background": "university-gate-day",
        "tone": "day",
        "cast": [
          "mio"
        ],
        "cues": [],
        "timeOfDay": "day",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "day",
        "roomState": null
      },
      "S03B": {
        "label": "一人で詰めた夜",
        "date": "三月二十七日",
        "location": "大学の入口",
        "background": "university-gate-day",
        "tone": "day",
        "cast": [
          "mio"
        ],
        "cues": [],
        "timeOfDay": "day",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "day",
        "roomState": null
      },
      "S03E": {
        "label": "袋を持って帰る",
        "date": "三月二十七日",
        "location": "大学の入口",
        "background": "university-gate-day",
        "tone": "day",
        "cast": [
          "mio"
        ],
        "cues": [
          {
            "date": "三月二十七日",
            "location": "大学の入口",
            "background": "university-gate-day",
            "tone": "day",
            "cast": [],
            "timeOfDay": "day",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "紙袋の底で、容器が乾いた音を立てた。",
            "roomState": null
          },
          {
            "date": "三月二十七日",
            "location": "帰りの電車内",
            "background": "train-day",
            "tone": "day",
            "cast": [],
            "timeOfDay": "day",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "帰りの電車で確かめると、蓋はやっぱり少し違った。",
            "roomState": null
          }
        ],
        "timeOfDay": "day",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "day",
        "roomState": null
      },
      "S04": {
        "label": "空になった部屋",
        "date": "三月二十八日",
        "location": "紗季の部屋・最後の荷造り",
        "background": "home-saki-packed-day",
        "tone": "day",
        "cast": [
          "saki"
        ],
        "cues": [
          {
            "date": "三月二十八日",
            "location": "紗季の旧居・空室",
            "background": "home-saki-empty-day",
            "tone": "day",
            "cast": [
              "saki"
            ],
            "timeOfDay": "day",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "カーテンがなくなると、部屋は急に、声がよく響くようになった。",
            "roomState": "empty"
          },
          {
            "date": "三月二十八日",
            "location": "駅への道",
            "background": "street-day",
            "tone": "day",
            "cast": [
              "saki"
            ],
            "timeOfDay": "day",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "駅までキャリーケースを引いた。",
            "roomState": null
          },
          {
            "date": "三月二十八日",
            "location": "駅・改札",
            "background": "ticket-gate-day",
            "tone": "day",
            "cast": [
              "saki"
            ],
            "timeOfDay": "day",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "改札の前でケースを返した。",
            "roomState": null
          },
          {
            "date": "三月二十八日",
            "location": "湊の部屋",
            "background": "home-minato-night",
            "tone": "night",
            "cast": [],
            "timeOfDay": "night",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "night",
            "at": "その夜、届いた写真には、鍋と電気ポットだけが床に並んでいた。",
            "roomState": "lived-in"
          }
        ],
        "timeOfDay": "day",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "day",
        "roomState": "packing-late"
      },
      "S05": {
        "label": "五月の夕食",
        "date": "五月十八日",
        "location": "紗季の街の駅前",
        "background": "station-saki-sunset",
        "tone": "sunset",
        "cast": [],
        "cues": [
          {
            "date": "五月十八日",
            "location": "紗季の街の駅前",
            "background": "station-saki-sunset",
            "tone": "sunset",
            "cast": [
              "saki"
            ],
            "timeOfDay": "sunset",
            "season": "spring",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "駅で待っていると、仕事の袋を肩に掛けた紗季が小走りで来た。",
            "roomState": null
          },
          {
            "date": "五月十八日",
            "location": "紗季の街・アイスを買う店先から新居への道",
            "background": "street-saki-may-sunset",
            "tone": "sunset",
            "cast": [
              "saki"
            ],
            "timeOfDay": "sunset",
            "season": "spring",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "いちばん高いアイスを選ぶと、紗季は値札を見て、まあ十二分なら、と呟いた。",
            "roomState": null
          },
          {
            "date": "五月十八日",
            "location": "紗季の新しい部屋・台所",
            "background": "home-saki-new-night",
            "tone": "night",
            "cast": [
              "saki"
            ],
            "timeOfDay": "night",
            "season": "spring",
            "weather": "dry",
            "audioMood": "night",
            "at": "新しい台所には、あの料理の本があった。",
            "roomState": "new-home"
          }
        ],
        "timeOfDay": "sunset",
        "season": "spring",
        "weather": "dry",
        "audioMood": "sunset",
        "roomState": null
      },
      "M01": {
        "label": "同じ日の別の名前",
        "date": "三月二十四日",
        "location": "湊の部屋",
        "background": "home-minato-night",
        "tone": "night",
        "cast": [],
        "cues": [
          {
            "date": "三月二十五日・朝",
            "location": "湊の部屋",
            "background": "home-minato-morning",
            "tone": "day",
            "cast": [],
            "timeOfDay": "morning",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "卒業式の朝、ネクタイがうまく結べなかった。",
            "roomState": "lived-in"
          },
          {
            "date": "三月二十五日",
            "location": "大学・卒業式",
            "background": "university-gate-day",
            "tone": "day",
            "cast": [],
            "timeOfDay": "day",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "大学の門で、同じゼミの友人に呼び止められた。",
            "roomState": null
          },
          {
            "date": "三月二十五日",
            "location": "帰りの電車内",
            "background": "train-day",
            "tone": "day",
            "cast": [],
            "timeOfDay": "day",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "帰りの電車で、ネクタイを緩めた。",
            "roomState": null
          }
        ],
        "timeOfDay": "night",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "night",
        "roomState": "lived-in"
      },
      "M02": {
        "label": "好きだった、の過去形",
        "date": "三月二十六日・十八時",
        "location": "川沿いのベンチ",
        "background": "riverside-sunset",
        "tone": "sunset",
        "cast": [
          "saki"
        ],
        "cues": [
          {
            "date": "三月二十六日・十八時",
            "location": "川沿いのベンチ",
            "background": "riverside-sunset",
            "tone": "sunset",
            "cast": [],
            "timeOfDay": "sunset",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "ベンチに座ったまま、紗季の後ろ姿を見た。",
            "roomState": null
          }
        ],
        "timeOfDay": "sunset",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "sunset",
        "roomState": null
      },
      "M03": {
        "label": "二十分の改札",
        "date": "三月二十七日",
        "location": "紗季の部屋・玄関",
        "background": "home-saki-packed-sunset",
        "tone": "sunset",
        "cast": [
          "saki"
        ],
        "cues": [
          {
            "date": "三月二十八日",
            "location": "湊の部屋",
            "background": "home-minato-day",
            "tone": "day",
            "cast": [],
            "timeOfDay": "day",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "二十八日は、何も送らなかった。",
            "roomState": "lived-in"
          },
          {
            "date": "三月二十九日",
            "location": "湊の部屋",
            "background": "home-minato-day",
            "tone": "day",
            "cast": [],
            "timeOfDay": "day",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "澪に連絡したのは、二十九日だった。",
            "roomState": "lived-in"
          },
          {
            "date": "三月三十日・朝",
            "location": "駅・改札前",
            "background": "ticket-gate-morning",
            "tone": "day",
            "cast": [
              "mio"
            ],
            "timeOfDay": "morning",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "三十日の朝、澪は大きな鞄を足元に置いていた。",
            "roomState": null
          }
        ],
        "timeOfDay": "sunset",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "sunset",
        "roomState": "packing-late"
      },
      "M04": {
        "label": "六月の余白",
        "date": "四月",
        "location": "湊の部屋",
        "background": "home-minato-night",
        "tone": "night",
        "cast": [],
        "cues": [
          {
            "date": "四月",
            "location": "仕事帰りの商店街",
            "background": "street-sunset",
            "tone": "sunset",
            "cast": [],
            "timeOfDay": "sunset",
            "season": "spring",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "仕事帰りに、入口だけが異様に低い喫茶店を見つけた。",
            "roomState": null
          },
          {
            "date": "四月・写真を送った二日後",
            "location": "湊の部屋",
            "background": "home-minato-night",
            "tone": "night",
            "cast": [],
            "timeOfDay": "night",
            "season": "spring",
            "weather": "dry",
            "audioMood": "night",
            "at": "写真を送ると、二日後に返事が来た。",
            "roomState": "lived-in"
          },
          {
            "date": "五月半ば",
            "location": "湊の部屋",
            "background": "home-minato-night",
            "tone": "night",
            "cast": [],
            "timeOfDay": "night",
            "season": "spring",
            "weather": "dry",
            "audioMood": "night",
            "at": "五月半ば、六月十五日の展示の案内が来た。",
            "roomState": "lived-in"
          },
          {
            "date": "六月十五日",
            "location": "澪の大学・建築展示会場",
            "background": "architecture-exhibition-day",
            "tone": "day",
            "cast": [
              "mio"
            ],
            "timeOfDay": "day",
            "season": "summer",
            "weather": "dry",
            "audioMood": "day",
            "at": "会場には模型と写真が並んでいた。",
            "roomState": null
          },
          {
            "date": "六月十五日",
            "location": "展示会場から駅への道",
            "background": "street-rain-day",
            "tone": "rain",
            "cast": [
              "mio"
            ],
            "timeOfDay": "day",
            "season": "summer",
            "weather": "rain",
            "audioMood": "rain",
            "at": "片付けが終わると、外は雨だった。",
            "roomState": null
          }
        ],
        "timeOfDay": "night",
        "season": "spring",
        "weather": "dry",
        "audioMood": "night",
        "roomState": "lived-in"
      },
      "M04A": {
        "label": "半分にできないカレー",
        "date": "六月十五日",
        "location": "展示会場から駅への道",
        "background": "street-rain-day",
        "tone": "rain",
        "cast": [
          "mio"
        ],
        "cues": [
          {
            "date": "六月十五日",
            "location": "澪の街のカレー屋",
            "background": "curry-shop-night",
            "tone": "rain",
            "cast": [
              "mio"
            ],
            "timeOfDay": "night",
            "season": "summer",
            "weather": "rain",
            "audioMood": "rain",
            "at": "カレーには、大きな桃が入っていた。",
            "roomState": null
          },
          {
            "date": "六月十五日",
            "location": "宿への道",
            "background": "street-rain-night",
            "tone": "rain",
            "cast": [
              "mio"
            ],
            "timeOfDay": "night",
            "season": "summer",
            "weather": "rain",
            "audioMood": "rain",
            "at": "傘は一本ずつ持っていた。",
            "roomState": null
          },
          {
            "date": "六月十五日",
            "location": "六月の宿・入口",
            "background": "inn-entrance-rain-night",
            "tone": "rain",
            "cast": [
              "mio"
            ],
            "timeOfDay": "night",
            "season": "summer",
            "weather": "rain",
            "audioMood": "rain",
            "at": "宿の入口で、澪は少し立ち止まった。",
            "roomState": null
          },
          {
            "date": "六月十六日・朝",
            "location": "帰りの電車内",
            "background": "train-morning",
            "tone": "day",
            "cast": [],
            "timeOfDay": "morning",
            "season": "summer",
            "weather": "dry",
            "audioMood": "day",
            "at": "翌朝は一人でパンを買い、電車に乗った。",
            "roomState": null
          }
        ],
        "timeOfDay": "day",
        "season": "summer",
        "weather": "rain",
        "audioMood": "rain",
        "roomState": null
      },
      "M04B": {
        "label": "日曜の糸",
        "date": "六月十五日",
        "location": "展示会場から駅への道",
        "background": "street-rain-day",
        "tone": "rain",
        "cast": [
          "mio"
        ],
        "cues": [
          {
            "date": "六月十五日",
            "location": "駅・改札",
            "background": "ticket-gate-rain-day",
            "tone": "rain",
            "cast": [
              "mio"
            ],
            "timeOfDay": "day",
            "season": "summer",
            "weather": "rain",
            "audioMood": "rain",
            "at": "改札で手を振った。",
            "roomState": null
          },
          {
            "date": "六月十五日",
            "location": "帰りの電車内",
            "background": "train-rain-day",
            "tone": "rain",
            "cast": [],
            "timeOfDay": "day",
            "season": "summer",
            "weather": "rain",
            "audioMood": "rain",
            "at": "電車が動き始めてから、やっぱり夕飯を一緒に食べたかった、と思った。",
            "roomState": null
          },
          {
            "date": "六月十六日・朝",
            "location": "地元の製本講習会場",
            "background": "bookbinding-workshop-day",
            "tone": "day",
            "cast": [],
            "timeOfDay": "morning",
            "season": "summer",
            "weather": "dry",
            "audioMood": "day",
            "at": "翌朝の講習には、十二人が来ていた。",
            "roomState": null
          },
          {
            "date": "六月十六日",
            "location": "製本講習からの帰り道",
            "background": "street-day",
            "tone": "day",
            "cast": [],
            "timeOfDay": "day",
            "season": "summer",
            "weather": "dry",
            "audioMood": "day",
            "at": "帰りに写真を撮って澪へ送った。",
            "roomState": null
          },
          {
            "date": "六月十六日",
            "location": "湊の部屋",
            "background": "home-minato-sunset",
            "tone": "sunset",
            "cast": [],
            "timeOfDay": "sunset",
            "season": "summer",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "夕方、同じ日付で、澪から模型の修理の写真が届いた。",
            "roomState": "lived-in"
          }
        ],
        "timeOfDay": "day",
        "season": "summer",
        "weather": "rain",
        "audioMood": "rain",
        "roomState": null
      },
      "M04C": {
        "label": "二日分の夏",
        "date": "七月",
        "location": "湊の部屋・電話",
        "background": "home-minato-night",
        "tone": "night",
        "cast": [],
        "cues": [],
        "timeOfDay": "night",
        "season": "summer",
        "weather": "dry",
        "audioMood": "night",
        "roomState": "lived-in"
      },
      "M04D": {
        "label": "提出しない二日間",
        "date": "八月",
        "location": "海辺の町・海岸へ続く道",
        "background": "coast-summer-day",
        "tone": "day",
        "cast": [
          "mio"
        ],
        "cues": [
          {
            "date": "八月",
            "location": "銭湯を改装した宿・共用部",
            "background": "inn-interior-day",
            "tone": "day",
            "cast": [
              "mio"
            ],
            "timeOfDay": "day",
            "season": "summer",
            "weather": "dry",
            "audioMood": "day",
            "at": "宿には、銭湯だったころの蛇口が残っていた。",
            "roomState": null
          },
          {
            "date": "八月",
            "location": "旅行先の夏の海岸",
            "background": "coast-summer-day",
            "tone": "day",
            "cast": [
              "mio"
            ],
            "timeOfDay": "day",
            "season": "summer",
            "weather": "dry",
            "audioMood": "day",
            "at": "荷物を置いて、海岸へ出た。",
            "roomState": null
          },
          {
            "date": "八月",
            "location": "旅行先の海の見える食堂",
            "background": "seaside-diner-sunset",
            "tone": "sunset",
            "cast": [
              "mio"
            ],
            "timeOfDay": "sunset",
            "season": "summer",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "日が傾いてから、町の食堂へ入った。",
            "roomState": null
          },
          {
            "date": "八月",
            "location": "宿の廊下",
            "background": "inn-corridor-night",
            "tone": "night",
            "cast": [
              "mio"
            ],
            "timeOfDay": "night",
            "season": "summer",
            "weather": "dry",
            "audioMood": "night",
            "at": "夜、宿の自動販売機の前で会った。",
            "roomState": null
          },
          {
            "date": "八月",
            "location": "宿の中庭",
            "background": "inn-courtyard-night",
            "tone": "night",
            "cast": [
              "mio"
            ],
            "timeOfDay": "night",
            "season": "summer",
            "weather": "dry",
            "audioMood": "night",
            "at": "中庭のベンチに並んで座った。",
            "roomState": null
          },
          {
            "date": "八月・翌朝",
            "location": "宿の廊下",
            "background": "inn-corridor-morning",
            "tone": "day",
            "cast": [
              "mio"
            ],
            "timeOfDay": "morning",
            "season": "summer",
            "weather": "dry",
            "audioMood": "day",
            "at": "翌朝、別々の部屋から出てきた僕たちは、同じように少し眠そうだった。",
            "roomState": null
          },
          {
            "date": "八月・翌朝",
            "location": "帰りの電車内",
            "background": "train-morning",
            "tone": "day",
            "cast": [
              "mio"
            ],
            "timeOfDay": "morning",
            "season": "summer",
            "weather": "dry",
            "audioMood": "day",
            "at": "帰りの電車で、澪が窓際へ寄った。",
            "roomState": null
          }
        ],
        "timeOfDay": "day",
        "season": "summer",
        "weather": "dry",
        "audioMood": "day",
        "roomState": null
      },
      "M04E": {
        "label": "入口ばかりの本",
        "date": "夏の週末",
        "location": "湊の部屋・電話",
        "background": "home-minato-night",
        "tone": "night",
        "cast": [],
        "cues": [
          {
            "date": "八月・冊子展の前夜",
            "location": "湊の部屋・製本作業",
            "background": "home-minato-night",
            "tone": "night",
            "cast": [
              "mio"
            ],
            "timeOfDay": "night",
            "season": "summer",
            "weather": "dry",
            "audioMood": "night",
            "at": "前日の夜、仕事帰りに駅で澪と会って、僕の部屋で綴じた。",
            "roomState": "lived-in"
          },
          {
            "date": "八月・冊子展一日目",
            "location": "公民館二階・冊子展",
            "background": "community-exhibition-day",
            "tone": "day",
            "cast": [
              "mio"
            ],
            "timeOfDay": "day",
            "season": "summer",
            "weather": "dry",
            "audioMood": "day",
            "at": "翌日の冊子展は、公民館の二階だった。",
            "roomState": null
          },
          {
            "date": "八月・冊子展二日目",
            "location": "公民館二階・冊子展",
            "background": "community-exhibition-sunset",
            "tone": "sunset",
            "cast": [
              "mio"
            ],
            "timeOfDay": "sunset",
            "season": "summer",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "二日目の閉場までに、七冊売れた。",
            "roomState": null
          },
          {
            "date": "八月・冊子展二日目",
            "location": "公民館の展示室・出口の扉前",
            "background": "community-exhibition-sunset",
            "tone": "sunset",
            "cast": [
              "mio"
            ],
            "timeOfDay": "sunset",
            "season": "summer",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "澪は写真を撮り忘れたことに気づき、閉館しかけた扉の前で、箱ごと僕を撮った。",
            "roomState": null
          }
        ],
        "timeOfDay": "night",
        "season": "summer",
        "weather": "dry",
        "audioMood": "night",
        "roomState": "lived-in"
      },
      "M04F": {
        "label": "九月の連絡",
        "date": "九月",
        "location": "仕事帰りの道",
        "background": "street-sunset",
        "tone": "sunset",
        "cast": [],
        "cues": [
          {
            "date": "九月・二十時過ぎ",
            "location": "仕事帰りの道",
            "background": "street-night",
            "tone": "night",
            "cast": [],
            "timeOfDay": "night",
            "season": "autumn",
            "weather": "dry",
            "audioMood": "night",
            "at": "仕事を上がったのは、二十時を過ぎてからだった。",
            "roomState": null
          },
          {
            "date": "九月・二十時過ぎ",
            "location": "駅前の本屋・店先",
            "background": "bookstore-night",
            "tone": "night",
            "cast": [
              "mio"
            ],
            "timeOfDay": "night",
            "season": "autumn",
            "weather": "dry",
            "audioMood": "night",
            "at": "本屋の前で、澪は袋を二つ提げていた。",
            "roomState": null
          }
        ],
        "timeOfDay": "sunset",
        "season": "autumn",
        "weather": "dry",
        "audioMood": "sunset",
        "roomState": null
      },
      "M04G": {
        "label": "帰りの十五分",
        "date": "九月",
        "location": "駅・改札横",
        "background": "ticket-gate-night",
        "tone": "night",
        "cast": [
          "mio"
        ],
        "cues": [
          {
            "date": "九月・翌日",
            "location": "駅・改札横の店先",
            "background": "ticket-gate-day",
            "tone": "day",
            "cast": [],
            "timeOfDay": "day",
            "season": "autumn",
            "weather": "dry",
            "audioMood": "day",
            "at": "次の日、澪から、昨日のコロッケ屋の名前を聞かれた。",
            "roomState": null
          }
        ],
        "timeOfDay": "night",
        "season": "autumn",
        "weather": "dry",
        "audioMood": "night",
        "roomState": null
      },
      "M04H": {
        "label": "紙袋の間",
        "date": "九月",
        "location": "駅・改札横",
        "background": "ticket-gate-night",
        "tone": "night",
        "cast": [
          "mio"
        ],
        "cues": [
          {
            "date": "九月",
            "location": "湊の部屋",
            "background": "home-minato-night",
            "tone": "night",
            "cast": [],
            "timeOfDay": "night",
            "season": "autumn",
            "weather": "dry",
            "audioMood": "night",
            "at": "家へ帰って、追加印刷の見積もりを途中まで作った。",
            "roomState": "lived-in"
          }
        ],
        "timeOfDay": "night",
        "season": "autumn",
        "weather": "dry",
        "audioMood": "night",
        "roomState": null
      },
      "M05": {
        "label": "秋の改札",
        "date": "十月四日",
        "location": "澪の街の駅前",
        "background": "station-mio-sunset",
        "tone": "sunset",
        "cast": [
          "mio"
        ],
        "cues": [
          {
            "date": "十月四日",
            "location": "澪の街の定食屋",
            "background": "town-diner-night",
            "tone": "night",
            "cast": [
              "mio"
            ],
            "timeOfDay": "night",
            "season": "autumn",
            "weather": "dry",
            "audioMood": "night",
            "at": "魚を出す店を見つけ、二人で入った。",
            "roomState": null
          },
          {
            "date": "十月四日",
            "location": "澪の街・カレー屋の前",
            "background": "street-sunset",
            "tone": "sunset",
            "cast": [
              "mio"
            ],
            "timeOfDay": "sunset",
            "season": "autumn",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "カレー屋の前を通った。",
            "roomState": null
          },
          {
            "date": "十月四日",
            "location": "澪の街の定食屋",
            "background": "town-diner-night",
            "tone": "night",
            "cast": [
              "mio"
            ],
            "timeOfDay": "night",
            "season": "autumn",
            "weather": "dry",
            "audioMood": "night",
            "at": "別の定食屋へ入り、窓際に座った。",
            "roomState": null
          },
          {
            "date": "十月四日",
            "location": "澪の街の川沿い",
            "background": "riverside-autumn-night",
            "tone": "night",
            "cast": [
              "mio"
            ],
            "timeOfDay": "night",
            "season": "autumn",
            "weather": "dry",
            "audioMood": "night",
            "at": "食後、川沿いへ出た。",
            "roomState": null
          },
          {
            "date": "十月四日",
            "location": "澪の街・川沿いの石のベンチ",
            "background": "riverside-autumn-night",
            "tone": "night",
            "cast": [
              "mio"
            ],
            "timeOfDay": "night",
            "season": "autumn",
            "weather": "dry",
            "audioMood": "night",
            "at": "少し先に、低い石のベンチがあった。",
            "roomState": null
          }
        ],
        "timeOfDay": "sunset",
        "season": "autumn",
        "weather": "dry",
        "audioMood": "sunset",
        "roomState": null
      },
      "M06A": {
        "label": "秋の改札",
        "date": "十月四日",
        "location": "澪の街・川沿いの石のベンチ",
        "background": "riverside-autumn-night",
        "tone": "night",
        "cast": [
          "mio"
        ],
        "cues": [
          {
            "date": "十月四日",
            "location": "澪の街の本屋・店先",
            "background": "bookstore-night",
            "tone": "night",
            "cast": [
              "mio"
            ],
            "timeOfDay": "night",
            "season": "autumn",
            "weather": "dry",
            "audioMood": "night",
            "at": "本屋を出たとき、袋が二つになっていた。",
            "roomState": null
          },
          {
            "date": "十月四日",
            "location": "澪の街・駅前の信号",
            "background": "station-mio-night",
            "tone": "night",
            "cast": [
              "mio"
            ],
            "timeOfDay": "night",
            "season": "autumn",
            "weather": "dry",
            "audioMood": "night",
            "at": "駅へ向かう信号を、一つ見送った。",
            "roomState": null
          },
          {
            "date": "十月四日",
            "location": "駅・改札前",
            "background": "ticket-gate-night",
            "tone": "night",
            "cast": [
              "mio"
            ],
            "timeOfDay": "night",
            "season": "autumn",
            "weather": "dry",
            "audioMood": "night",
            "at": "改札の手前で、澪が立ち止まった。",
            "roomState": null
          },
          {
            "date": "十月四日",
            "location": "帰りの電車内",
            "background": "train-night",
            "tone": "night",
            "cast": [],
            "timeOfDay": "night",
            "season": "autumn",
            "weather": "dry",
            "audioMood": "night",
            "at": "帰りの電車で、写真が届いた。",
            "roomState": null
          },
          {
            "date": "十月四日",
            "location": "湊の部屋",
            "background": "home-minato-night",
            "tone": "night",
            "cast": [],
            "timeOfDay": "night",
            "season": "autumn",
            "weather": "dry",
            "audioMood": "night",
            "at": "部屋へ戻ると、羽根が一枚、少し曲がっていた。",
            "roomState": "lived-in"
          }
        ],
        "timeOfDay": "night",
        "season": "autumn",
        "weather": "dry",
        "audioMood": "night",
        "roomState": null
      },
      "M06B": {
        "label": "秋の改札",
        "date": "十月四日",
        "location": "澪の街・川沿いの石のベンチ",
        "background": "riverside-autumn-night",
        "tone": "night",
        "cast": [
          "mio"
        ],
        "cues": [
          {
            "date": "十月四日",
            "location": "澪の街・駅への道",
            "background": "street-night",
            "tone": "night",
            "cast": [
              "mio"
            ],
            "timeOfDay": "night",
            "season": "autumn",
            "weather": "dry",
            "audioMood": "night",
            "at": "駅まで、並んで歩いた。",
            "roomState": null
          },
          {
            "date": "十月四日",
            "location": "駅・改札前",
            "background": "ticket-gate-night",
            "tone": "night",
            "cast": [
              "mio"
            ],
            "timeOfDay": "night",
            "season": "autumn",
            "weather": "dry",
            "audioMood": "night",
            "at": "改札の前で、澪が手を上げた。",
            "roomState": null
          },
          {
            "date": "十月四日",
            "location": "帰りの電車内",
            "background": "train-night",
            "tone": "night",
            "cast": [],
            "timeOfDay": "night",
            "season": "autumn",
            "weather": "dry",
            "audioMood": "night",
            "at": "電車に乗ってから、ナギを開いた。",
            "roomState": null
          },
          {
            "date": "十月四日",
            "location": "地元の駅前・弁当を買う店先",
            "background": "station-front-night",
            "tone": "night",
            "cast": [],
            "timeOfDay": "night",
            "season": "autumn",
            "weather": "dry",
            "audioMood": "night",
            "at": "閉じて、駅前で弁当を買った。",
            "roomState": null
          },
          {
            "date": "十月四日",
            "location": "湊の部屋",
            "background": "home-minato-night",
            "tone": "night",
            "cast": [],
            "timeOfDay": "night",
            "season": "autumn",
            "weather": "dry",
            "audioMood": "night",
            "at": "部屋の明かりをつけると、残った冊子の箱が見えた。",
            "roomState": "lived-in"
          }
        ],
        "timeOfDay": "night",
        "season": "autumn",
        "weather": "dry",
        "audioMood": "night",
        "roomState": null
      },
      "U01": {
        "label": "二十六日のベンチ",
        "date": "三月二十四日",
        "location": "湊の部屋",
        "background": "home-minato-night",
        "tone": "night",
        "cast": [],
        "cues": [
          {
            "date": "三月二十六日・十八時",
            "location": "川沿いのベンチ",
            "background": "riverside-sunset",
            "tone": "sunset",
            "cast": [
              "saki"
            ],
            "timeOfDay": "sunset",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "二十六日の川沿いには、冬の枯れた草が残っていた。",
            "roomState": null
          }
        ],
        "timeOfDay": "night",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "night",
        "roomState": "lived-in"
      },
      "U01A": {
        "label": "空の容器",
        "date": "三月二十七日・午前",
        "location": "紗季の部屋・テーブルを畳んだ荷造り後半",
        "background": "home-saki-packed-day",
        "tone": "day",
        "cast": [
          "saki"
        ],
        "cues": [
          {
            "date": "三月二十七日・午前",
            "location": "紗季の部屋・玄関",
            "background": "home-saki-packed-day",
            "tone": "day",
            "cast": [
              "saki"
            ],
            "timeOfDay": "morning",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "玄関で靴を履くとき、後ろからタオルを渡された。",
            "roomState": "packing-late"
          },
          {
            "date": "三月二十七日・午前",
            "location": "紗季のアパート・階段の下",
            "background": "street-day",
            "tone": "day",
            "cast": [],
            "timeOfDay": "morning",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "階段の下で袋の中を見た。",
            "roomState": null
          }
        ],
        "timeOfDay": "morning",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "day",
        "roomState": "packing-late"
      },
      "U01B": {
        "label": "写真の裏",
        "date": "三月二十七日・昼",
        "location": "駅前",
        "background": "station-front-day",
        "tone": "day",
        "cast": [
          "saki"
        ],
        "cues": [
          {
            "date": "三月二十七日・昼",
            "location": "駅前のパン屋・店先",
            "background": "bakery-day",
            "tone": "day",
            "cast": [
              "saki"
            ],
            "timeOfDay": "day",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "駅前のパン屋から、甘い匂いがした。",
            "roomState": null
          },
          {
            "date": "三月二十七日・昼",
            "location": "駅の反対側・弁当を買う店先",
            "background": "station-front-day",
            "tone": "day",
            "cast": [],
            "timeOfDay": "day",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "僕はしばらく歩いて、駅の反対側で弁当を買った。",
            "roomState": null
          }
        ],
        "timeOfDay": "day",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "day",
        "roomState": null
      },
      "U02": {
        "label": "片方の手袋",
        "date": "三月二十七日・夕方",
        "location": "大学の外のベンチ",
        "background": "university-bench-sunset",
        "tone": "sunset",
        "cast": [],
        "cues": [
          {
            "date": "三月二十七日・夕方",
            "location": "大学の外のベンチ",
            "background": "university-bench-sunset",
            "tone": "sunset",
            "cast": [
              "mio"
            ],
            "timeOfDay": "sunset",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "澪は紙袋を二つ抱えてきた。",
            "roomState": null
          },
          {
            "date": "三月二十七日・夕方",
            "location": "大学の外のベンチ",
            "background": "university-bench-sunset",
            "tone": "sunset",
            "cast": [],
            "timeOfDay": "sunset",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "僕は駅とは反対の方へ歩いていく背中を見送った。",
            "roomState": null
          },
          {
            "date": "三月二十七日・夜",
            "location": "湊の部屋",
            "background": "home-minato-night",
            "tone": "night",
            "cast": [],
            "timeOfDay": "night",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "night",
            "at": "夜、三人のグループに紗季から連絡があった。",
            "roomState": "lived-in"
          }
        ],
        "timeOfDay": "sunset",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "sunset",
        "roomState": null
      },
      "U03": {
        "label": "一人分を知らない",
        "date": "三月三十一日",
        "location": "湊の部屋",
        "background": "home-minato-day",
        "tone": "day",
        "cast": [],
        "cues": [
          {
            "date": "三月三十一日",
            "location": "スーパー",
            "background": "supermarket-sunset",
            "tone": "sunset",
            "cast": [],
            "timeOfDay": "sunset",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "夕方、スーパーでカレーの材料を買った。",
            "roomState": null
          },
          {
            "date": "三月三十一日",
            "location": "湊の部屋・台所",
            "background": "home-minato-sunset",
            "tone": "sunset",
            "cast": [],
            "timeOfDay": "sunset",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "一人分の作り方を調べ、玉ねぎを半分に切った。",
            "roomState": "lived-in"
          },
          {
            "date": "三月三十一日",
            "location": "湊の部屋・夕食",
            "background": "home-minato-night",
            "tone": "night",
            "cast": [],
            "timeOfDay": "night",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "night",
            "at": "僕はスマホを置いて、ご飯をよそった。",
            "roomState": "lived-in"
          },
          {
            "date": "四月",
            "location": "印刷会社",
            "background": "print-office-day",
            "tone": "day",
            "cast": [],
            "timeOfDay": "day",
            "season": "spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "四月、仕事に持っていく鞄には、毎日知らない紙が増えた。",
            "roomState": null
          },
          {
            "date": "四月",
            "location": "印刷会社・昼休み",
            "background": "print-office-day",
            "tone": "day",
            "cast": [],
            "timeOfDay": "day",
            "season": "spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "昼休み、先輩からパン屋に誘われた。",
            "roomState": null
          },
          {
            "date": "四月",
            "location": "会社の近くのパン屋",
            "background": "bakery-day",
            "tone": "day",
            "cast": [],
            "timeOfDay": "day",
            "season": "spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "棚の前で迷って、一個だけ買った。",
            "roomState": null
          },
          {
            "date": "四月",
            "location": "印刷会社・午後",
            "background": "print-office-day",
            "tone": "day",
            "cast": [],
            "timeOfDay": "day",
            "season": "spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "三時には腹が減った。",
            "roomState": null
          },
          {
            "date": "四月",
            "location": "仕事帰り・パン屋の前",
            "background": "street-sunset",
            "tone": "sunset",
            "cast": [],
            "timeOfDay": "sunset",
            "season": "spring",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "帰り道に、同じパン屋を見た。",
            "roomState": null
          },
          {
            "date": "五月",
            "location": "湊の部屋",
            "background": "home-minato-day",
            "tone": "day",
            "cast": [],
            "timeOfDay": "day",
            "season": "spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "五月には、二日分作ったカレーが本当に二日でなくなるようになった。",
            "roomState": "lived-in"
          }
        ],
        "timeOfDay": "day",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "day",
        "roomState": "lived-in"
      },
      "U04": {
        "label": "それぞれの昼ごはん",
        "date": "六月のはじめ",
        "location": "湊の部屋",
        "background": "home-minato-day",
        "tone": "day",
        "cast": [],
        "cues": [
          {
            "date": "六月のおわり",
            "location": "湊の部屋",
            "background": "home-minato-day",
            "tone": "day",
            "cast": [],
            "timeOfDay": "day",
            "season": "summer",
            "weather": "dry",
            "audioMood": "day",
            "at": "六月の終わりには、澪から模型の写真が届いた。",
            "roomState": "lived-in"
          },
          {
            "date": "六月のおわり・翌日の夜",
            "location": "湊の部屋",
            "background": "home-minato-night",
            "tone": "night",
            "cast": [],
            "timeOfDay": "night",
            "season": "summer",
            "weather": "dry",
            "audioMood": "night",
            "at": "説明が返ってきたのは翌日の夜だった。",
            "roomState": "lived-in"
          },
          {
            "date": "七月・昼食前",
            "location": "湊の部屋",
            "background": "home-minato-morning",
            "tone": "day",
            "cast": [],
            "timeOfDay": "morning",
            "season": "summer",
            "weather": "dry",
            "audioMood": "day",
            "at": "七月、僕は三人のグループにメッセージを送った。",
            "roomState": "lived-in"
          },
          {
            "date": "七月十八日・昼",
            "location": "湊の部屋",
            "background": "home-minato-day",
            "tone": "day",
            "cast": [],
            "timeOfDay": "day",
            "season": "summer",
            "weather": "dry",
            "audioMood": "day",
            "at": "十八日の昼、僕は卵を二つ焼いた。",
            "roomState": "lived-in"
          },
          {
            "date": "七月十八日・昼",
            "location": "湊のアパート・玄関前",
            "background": "street-day",
            "tone": "day",
            "cast": [],
            "timeOfDay": "day",
            "season": "summer",
            "weather": "dry",
            "audioMood": "day",
            "at": "鍵を取り、部屋を出た。",
            "roomState": null
          }
        ],
        "timeOfDay": "day",
        "season": "summer",
        "weather": "dry",
        "audioMood": "day",
        "roomState": "lived-in"
      },
      "D01": {
        "label": "まだ、の使い方",
        "date": "三月二十四日",
        "location": "湊の部屋",
        "background": "home-minato-night",
        "tone": "night",
        "cast": [],
        "cues": [
          {
            "date": "三月二十五日",
            "location": "大学・卒業式",
            "background": "university-gate-day",
            "tone": "day",
            "cast": [
              "saki"
            ],
            "timeOfDay": "day",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "卒業式の日、紗季を見つけて、写真を撮るかと聞いた。",
            "roomState": null
          },
          {
            "date": "三月二十五日",
            "location": "大学・卒業式",
            "background": "university-gate-day",
            "tone": "day",
            "cast": [],
            "timeOfDay": "day",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "僕も友人たちと写真を撮った。",
            "roomState": null
          },
          {
            "date": "三月二十五日・夕方",
            "location": "湊の部屋",
            "background": "home-minato-sunset",
            "tone": "sunset",
            "cast": [],
            "timeOfDay": "sunset",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "夕方、三人のグループに澪が書いた。",
            "roomState": "lived-in"
          }
        ],
        "timeOfDay": "night",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "night",
        "roomState": "lived-in"
      },
      "D02": {
        "label": "返ってきた上着",
        "date": "三月二十六日・十八時",
        "location": "川沿いのベンチ",
        "background": "riverside-sunset",
        "tone": "sunset",
        "cast": [
          "saki"
        ],
        "cues": [
          {
            "date": "三月二十六日・十八時",
            "location": "川沿いのベンチ",
            "background": "riverside-sunset",
            "tone": "sunset",
            "cast": [],
            "timeOfDay": "sunset",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "紗季が歩き出しても、座ったままでいた。",
            "roomState": null
          },
          {
            "date": "三月二十六日・十八時",
            "location": "湊の部屋",
            "background": "home-minato-night",
            "tone": "night",
            "cast": [],
            "timeOfDay": "night",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "night",
            "at": "帰ってから、ナギに今日のことを書いた。",
            "roomState": "lived-in"
          }
        ],
        "timeOfDay": "sunset",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "sunset",
        "roomState": null
      },
      "D03": {
        "label": "返信は来る",
        "date": "三月二十七日",
        "location": "紗季の部屋・玄関",
        "background": "home-saki-packed-day",
        "tone": "day",
        "cast": [
          "saki"
        ],
        "cues": [
          {
            "date": "三月二十七日",
            "location": "湊の部屋",
            "background": "home-minato-night",
            "tone": "night",
            "cast": [],
            "timeOfDay": "night",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "night",
            "at": "澪には、紗季と別れたことを短く伝えた。",
            "roomState": "lived-in"
          },
          {
            "date": "三月二十八日",
            "location": "湊の部屋",
            "background": "home-minato-day",
            "tone": "day",
            "cast": [],
            "timeOfDay": "day",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "返事は翌日に来た。",
            "roomState": "lived-in"
          },
          {
            "date": "三月二十八日",
            "location": "湊の部屋",
            "background": "home-minato-day",
            "tone": "day",
            "cast": [],
            "timeOfDay": "day",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "二十八日、紗季が新居に着いたとグループに知らせた。",
            "roomState": "lived-in"
          },
          {
            "date": "三月三十日",
            "location": "湊の部屋",
            "background": "home-minato-day",
            "tone": "day",
            "cast": [],
            "timeOfDay": "day",
            "season": "early-spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "三十日には、澪が新しい部屋の写真を送ってきた。",
            "roomState": "lived-in"
          },
          {
            "date": "四月のおわり・昼",
            "location": "会社の近く・弁当を買う店先",
            "background": "street-day",
            "tone": "day",
            "cast": [],
            "timeOfDay": "day",
            "season": "spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "四月の終わり、会社の近くで弁当を買った。",
            "roomState": null
          },
          {
            "date": "四月のおわり・昼",
            "location": "会社近くの屋外の腰掛け",
            "background": "street-day",
            "tone": "day",
            "cast": [],
            "timeOfDay": "day",
            "season": "spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "鞄を横に置く場所がなく、膝の上で袋を開けた。",
            "roomState": null
          }
        ],
        "timeOfDay": "day",
        "season": "early-spring",
        "weather": "dry",
        "audioMood": "day",
        "roomState": "packing-late"
      },
      "D03A": {
        "label": "六個の唐揚げ",
        "date": "四月のおわり・昼",
        "location": "会社近くの屋外の腰掛け",
        "background": "street-day",
        "tone": "day",
        "cast": [],
        "cues": [
          {
            "date": "四月のおわり・夜",
            "location": "湊の部屋",
            "background": "home-minato-night",
            "tone": "night",
            "cast": [],
            "timeOfDay": "night",
            "season": "spring",
            "weather": "dry",
            "audioMood": "night",
            "at": "夜、紗季から写真が来た。",
            "roomState": "lived-in"
          }
        ],
        "timeOfDay": "day",
        "season": "spring",
        "weather": "dry",
        "audioMood": "day",
        "roomState": null
      },
      "D03B": {
        "label": "知らない味",
        "date": "四月のおわり・昼",
        "location": "会社近くの屋外の腰掛け",
        "background": "street-day",
        "tone": "day",
        "cast": [],
        "cues": [
          {
            "date": "四月のおわり・翌晩",
            "location": "湊の部屋",
            "background": "home-minato-night",
            "tone": "night",
            "cast": [],
            "timeOfDay": "night",
            "season": "spring",
            "weather": "dry",
            "audioMood": "night",
            "at": "翌晩、紗季が炒めものの写真を送ってきた。",
            "roomState": "lived-in"
          },
          {
            "date": "四月のおわり・週末",
            "location": "近所のスーパー",
            "background": "supermarket-day",
            "tone": "day",
            "cast": [],
            "timeOfDay": "day",
            "season": "spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "週末、僕は近所のスーパーで、その調味料を探した。",
            "roomState": null
          }
        ],
        "timeOfDay": "day",
        "season": "spring",
        "weather": "dry",
        "audioMood": "day",
        "roomState": null
      },
      "D03E": {
        "label": "展示の週末",
        "date": "五月",
        "location": "湊の部屋",
        "background": "home-minato-day",
        "tone": "day",
        "cast": [],
        "cues": [
          {
            "date": "展示前の金曜・夜",
            "location": "湊の部屋",
            "background": "home-minato-night",
            "tone": "night",
            "cast": [],
            "timeOfDay": "night",
            "season": "spring",
            "weather": "dry",
            "audioMood": "night",
            "at": "金曜の夜まで、経路の画面を閉じなかった。",
            "roomState": "lived-in"
          },
          {
            "date": "展示の土曜日・朝",
            "location": "湊の部屋",
            "background": "home-minato-morning",
            "tone": "day",
            "cast": [],
            "timeOfDay": "morning",
            "season": "spring",
            "weather": "dry",
            "audioMood": "day",
            "at": "土曜の朝、目覚ましを止めて、もう一度寝た。",
            "roomState": "lived-in"
          },
          {
            "date": "展示の土曜日・夕方",
            "location": "湊の部屋",
            "background": "home-minato-sunset",
            "tone": "sunset",
            "cast": [],
            "timeOfDay": "sunset",
            "season": "spring",
            "weather": "dry",
            "audioMood": "sunset",
            "at": "展示が終わったあと、澪が会場の写真を送ってきた。",
            "roomState": "lived-in"
          }
        ],
        "timeOfDay": "day",
        "season": "spring",
        "weather": "dry",
        "audioMood": "day",
        "roomState": "lived-in"
      },
      "D04": {
        "label": "次の約束",
        "date": "九月",
        "location": "湊の部屋",
        "background": "home-minato-night",
        "tone": "night",
        "cast": [],
        "cues": [
          {
            "date": "九月・翌朝",
            "location": "湊の部屋",
            "background": "home-minato-morning",
            "tone": "day",
            "cast": [],
            "timeOfDay": "morning",
            "season": "autumn",
            "weather": "dry",
            "audioMood": "day",
            "at": "澪からは、翌朝返ってきた。",
            "roomState": "lived-in"
          },
          {
            "date": "九月・翌日の夜",
            "location": "湊の部屋",
            "background": "home-minato-night",
            "tone": "night",
            "cast": [],
            "timeOfDay": "night",
            "season": "autumn",
            "weather": "dry",
            "audioMood": "night",
            "at": "翌日の夜、会社の人から連絡が来た。",
            "roomState": "lived-in"
          }
        ],
        "timeOfDay": "night",
        "season": "autumn",
        "weather": "dry",
        "audioMood": "night",
        "roomState": "lived-in"
      }
    },
    endings: {
      S05: { title: '約束', subtitle: '二人の間に、次の休日を。' },
      M06A: { title: 'ふたり', subtitle: '今のきみと、もっと一緒にいたい。' },
      M06B: { title: '返事', subtitle: '返事を聞いて、家へ帰る。' },
      U04: { title: '余白', subtitle: '一人分の昼ごはん。その先の予定。' },
      D04: { title: '大丈夫', subtitle: '優しい言葉と、決まらない次の日。' }
    },
    dialogue: {
      C00: {
        '「最近ずっと、別れ話をしようとしてた」': 'saki',
        '「いつから」': 'minato',
        '「二月の、十日くらい」': 'saki',
        '「その間も、楽しかったよ」': 'saki',
        '「楽しかった日を、嘘にしないで」': 'saki'
      },
      C01: {
        '「避難所？」': 'mio', '「三人分」': 'saki', '「県の想定する三人分？」': 'mio',
        '「一箱入れたから」': 'saki', '「ルウの箱に書いてある人数を、一回見よう」': 'mio',
        '「でも、余っても困らないでしょ」': 'saki',
        '「湊の冷蔵庫を、合意のない冷凍倉庫にしない」': 'mio', '「合意してる。今した」': 'minato',
        '「今した、の適用範囲が広い」': 'mio', '「持って帰る容器、ある？」': 'minato',
        '「どれが誰のだっけ」': 'saki', '「だいたい私の。湊の家に三つ、紗季の家に四つ。私の家に蓋が一つ」': 'mio',
        '「澪、容器の管理うまいな」': 'minato', '「うまかったら、この配分になってない」': 'mio',
        '「自分のを間違えないから。人の名前は大きくしとくの」': 'mio',
        '「私？」': 'saki', '「三日以内にお召し上がりください」': 'minato', '「引っ越しまで置いといてよ」': 'saki',
        '「似合う」': 'saki', '「食品表示が？」': 'minato',
        '「ナギ、丁寧すぎない？　冷蔵庫の引き取り日を聞いてるだけなのに、ご多忙のところ誠にって」': 'saki',
        '「冷蔵庫の最後だしね」': 'mio', '「冷蔵庫への弔辞じゃない」': 'saki',
        '「卒業アルバムに使う」': 'saki', '「大学が配る方に？」': 'minato',
        '「私が作る方。大学にこの鍋の責任はないから」': 'saki',
        '「湊、来月から、あんまり会えなくなるね」': 'saki',
        '「いや。帰ってからでいい。容器、傾けないでね」': 'saki'
      },
      Q01A: { '「何？」': 'mio', '「いや。紗季から」': 'minato', '「ああ」': 'mio' },
      Q01C: {
        '「私のカレー、片側に寄ってる」': 'mio', '「そっちの感想もあるんだ」': 'minato',
        '「人生の問題と並行して存在してるからね」': 'mio'
      },
      C01E: {
        '「九日、空けといて。遠足」': 'mio', '「遠足？」': 'minato',
        '「卒業旅行を毎回そう呼ぶと、要求水準が下がる」': 'mio',
        '「まだ何も予約してないんだっけ」': 'minato', '「日帰りだから、予約しなくても行ける」': 'mio',
        '「予約しなくても行けるのと、決めなくても行くのは、別だけど」': 'mio'
      },
      C02: {
        '「共同作業だね」': 'saki', '「もっと記念になる作業で使う言葉じゃない？」': 'minato',
        '「じゃあ、二人で初めて閉じた、歴史の本の箱」': 'saki',
        '「それも入れる？」': 'minato', '「これは持つ。会社で自己紹介するとき、見せる」': 'saki',
        '「誤植があるぞ」': 'minato', '「湊が直した。全部」': 'saki',
        '「眠かったな」': 'minato', '「私、あのとき湊のこと、ちょっと好きだった」': 'saki',
        '「ちょっと？」': 'minato', '「夜中に『大盛り』を『犬盛り』に直そうとする人だとは知らなかったから」': 'saki',
        '「それまでの働きは？」': 'minato', '「そこ込みで」': 'saki',
        '「箱、まだ七個あるよ」': 'saki', '「あと一分」': 'minato',
        '「それ、入れないの」': 'minato', '「向こうで最初に使うから、手持ち」': 'saki',
        '「湊、何食べるんだろ」': 'saki', '「僕？」': 'minato', '「私が引っ越したあと」': 'saki',
        '「ちゃんと何か食べるよ」': 'minato', '「何かは、食べるだろうけど」': 'saki',
        '「この前さ、ナギに聞いたの。家にあるもので夕飯を考えて、って。そしたら、湊の苦手なものを勝手に外してた」': 'saki',
        '「覚えてたんだ」': 'minato', '「うん。便利。でも、私一人なのに」': 'saki',
        '「僕も、一人分に戻すの下手そう」': 'minato', '「湊、私の量に慣れすぎ」': 'saki',
        '「カレー一箱は慣れてない」': 'minato', '「もう計算したんだ」': 'minato',
        '「これからは、好きなもの作れるね」': 'minato', '「そうだね」': 'saki',
        '「半年になるね」': 'saki', '「二十一日」': 'minato', '「覚えてた」': 'saki', '「覚えてるよ」': 'minato',
        '「思い出し笑い？」': 'saki', '「服、裏返しだったなって」': 'minato', '「一生言う」': 'saki',
        '「一生は、長いかな」': 'minato', '「いや。僕が先に忘れるかもしれないし」': 'minato',
        '「湊、たまにフォローで穴を広げる」': 'saki', '「あの日のプリン、おいしかった」': 'minato',
        '「同じのだよ。これ」': 'saki', '「この前言ってた話、六日はどう？」': 'minato',
        '「湊が、会う日とか考えたいって言ってたやつ？」': 'saki', '「うん。仕事のあとになるけど」': 'minato',
        '「八時なら。ここでご飯にしよう」': 'saki', '「私も、話したいことある」': 'saki',
        '「六日、仕事のあと時間ある？」': 'saki', '「あると思う」': 'minato', '「四月のこと、話したい」': 'saki',
        '「八時くらい。ここで」': 'saki', '「入れた」': 'minato', '「持っていってあげて。ついでにこれも」': 'saki'
      },
      Q02A: {
        '「仕事のこと、聞いてほしい？」': 'saki', '「あとで。先に、今日話すって言ってたこと」': 'minato',
        '「毎日電話するのは、たぶん無理」': 'saki', '「でも、ずっとメッセージだけは嫌。どのくらい会えるかも、考えたい」': 'saki',
        '「今日、来てくれてよかった」': 'saki', '「明日の朝に」': 'minato', '「湊の分は？」': 'saki',
        '「帰りに買う」': 'minato', '「さっき食べたじゃん」': 'saki'
      },
      Q02B: {
        '「私のカレーに対抗した？」': 'saki', '「適量を学んだ」': 'minato', '「悪い見本から」': 'saki',
        '「無理な日に、無理って言ってほしい」': 'saki', '「それは、僕も」': 'minato',
        '「じゃあ、無理じゃない日は、それも言おう」': 'saki',
        '「ありがとう。昨日、ちゃんと時間を決め直してくれて」': 'saki', '「昨日は、悪かった」': 'minato',
        '「今日は来たから」': 'saki'
      },
      C04: {
        '「遅刻してないのに、謝りたくなる配置だな」': 'minato', '「謝るくらいなら、あれ持って」': 'mio',
        '「集合写真」': 'mio', '「卒業を本気でやろうとしてる」': 'minato', '「本気で卒業しないと、学費がもう一年分かかる」': 'mio',
        '「判断材料、それ？」': 'minato', '「かなり上手な魚」': 'saki', '「料理人が描いたとは限らない」': 'mio',
        '「写真、食べる前しか価値がないみたいで、嫌なんだよね」': 'mio', '「じゃあ食べたあとも撮る？」': 'minato',
        '「骨の並べ方で知性を審査される」': 'mio', '「寒い」': 'saki',
        '「端には何か、別の気候があるかと思って」': 'saki', '「湊の首は？」': 'saki', '「若さで」': 'minato',
        '「私と同い年」': 'saki', '「建物って、こういうところがいい」': 'mio',
        '「新しくした人と、しなかった人の話が、同じ場所にある」': 'mio',
        '「私はまず、雨漏りしない方がいい」': 'saki', '「そこは私も」': 'mio', '「理由は？」': 'minato',
        '「今残ってる中だと、それが回りやすそう」': 'mio', '「不正確な助言でした」': 'mio', '「賠償は？」': 'minato',
        '「海を見て、心を広く」': 'mio', '「もう？」': 'saki', '「直った」': 'saki', '「寿命は分からない」': 'minato',
        '「いい。今、回れば」': 'saki', '「私のも見て」': 'mio', '「回ってるけど」': 'minato', '「診察だけ」': 'mio',
        '「こっち？」': 'minato', '「僕の右以外を持ってない」': 'minato', '「撮り直す？」': 'minato',
        '「いい。私、ちゃんといたし」': 'mio', '「いい一日だったな」': 'minato'
      },
      C05: {
        '「傘は？」': 'minato', '「持ってる。ちょっとだけだから、差さなかった」': 'saki',
        '「最近ずっと、別れ話をしようとしてた」': 'saki', '「じゃあ、なんで」': 'minato',
        '「海、楽しかったでしょ」': 'minato', '「楽しかったよ」': 'saki', '「帰り、寝てたじゃん」': 'minato',
        '「眠かったから」': 'saki', '「そんなふうに、ひとつずつ聞かないで。どれも、楽しかった」': 'saki',
        '「どうして、言わなかったの」': 'minato', '「言えば終わる気がしたから」': 'saki',
        '「この前、寂しいって言ってくれたの、嬉しかった」': 'saki', '「だったら、どうして」': 'minato',
        '「だから、言いにくくなった。今、こんな話したら、せっかく言ってくれたのにって」': 'saki',
        '「じゃあ僕、何を言えばよかったんだよ」': 'minato', '「……ごめん。それは、違うね」': 'saki',
        '「嬉しかったのは、消さない。言えなかったのは、私」': 'saki', '「分かったって、言われそうだった」': 'saki',
        '「言ってないだろ」': 'minato', '「勝手に僕の返事、決めないでよ」': 'minato', '「……そうだね」': 'saki',
        '「二月に、何回かナギに相談した。別れたいって、どう言えばいいか」': 'saki',
        '「別れ話を送るための文も、作った。でも、送らなかった」': 'saki', '「僕に送ってたのは？」': 'minato',
        '「私が、送ろうって決めた文」': 'saki', '「ナギが書いた？」': 'minato',
        '「書いてもらったのもある。自分で書いたのもある」': 'saki', '「自分で書いた方だけ、信じる？」': 'saki'
      },
      C06: {
        '「じゃあ、何しに来たの」': 'minato', '「このまま、仲よかった顔だけで引っ越したくなかった」': 'saki',
        '「半年前の文も、ナギ？」': 'minato', '「何も話さなくていいから、会いたい、ってやつ」': 'minato',
        '「じゃあ、あのとき来てくれたのも？」': 'minato', '「それは私」': 'saki',
        '「服、裏返しだったの、覚えてる？」': 'saki',
        '「文章を考えてくれたのはナギ。送ったのは私。バスに乗ったのも、途中でプリン買ったのも、私」': 'saki',
        '「何て、頼んだの」': 'minato',
        '「正確な文は覚えてない。あの相談は残してないから。励ましたいけど、頑張れって言いたくない、みたいなこと」': 'saki',
        '「心にもないことだったら、来ないよ」': 'saki', '「じゃあ、なんで今、それを言うの」': 'minato',
        '「あのときみたいに、また私が来て、ご飯を食べて。そうしたら何とかなるって、私も思ってた」': 'saki',
        '「うまくいったから。最初は」': 'saki', '「あのときは、僕も会いたかったんだよ」': 'minato', '「うん。知ってる」': 'saki',
        '「この前、寂しいって言ってくれたのも、聞こえてた」': 'saki',
        '「でも、今日みたいな話をしたら、どうなるかは、分かんなくて」': 'saki', '「僕も分かんないよ」': 'minato',
        '「最近は、何か言いたくても、先にご飯の話しちゃうんだ」': 'saki', '「私も、得意な方に逃げてた」': 'saki',
        '「僕、あの文が嬉しかった」': 'minato', '「今も、嬉しかったことは変わらない」': 'minato',
        '「十五日。昼なら」': 'saki', '「それまでは、別れないってこと？」': 'minato', '「今、それも答えるの？」': 'saki',
        '「十五日、昼だね」': 'minato', '「お茶、二杯目は温かかった」': 'saki'
      },
      C07: {
        '「豆腐？」': 'minato', '「木箱」': 'mio', '「中身は」': 'minato', '「作ってない」': 'mio',
        '「じゃあ豆腐かもしれない」': 'minato', '「来て最初に調べるの、そこなんだ」': 'mio',
        '「これ、逆さま？」': 'minato', '「今からひっくり返す。まだ触らないで」': 'mio',
        '「三十日に、これ全部持っていくの」': 'minato', '「模型は先に送る。人間と同じ扱いでは死ぬから」': 'mio',
        '「人間も大切に送ってほしいけど」': 'minato', '「寝る部屋？」': 'minato',
        '「そう。店をやってた人の。図面がなくて、娘さんに聞いた」': 'mio', '「窓、そこまで覚えてたんだ」': 'minato',
        '「朝、ここから猫が入ってきたって」': 'mio', '「紗季も、こういうの好きそう」': 'minato',
        '「知ってる。途中のを見せた」': 'mio', '「あ、そうなんだ」': 'minato', '「その紗季のことで、ちょっと」': 'minato',
        '「湊」': 'mio', '「今日、その話は無理」': 'mio', '「寝てない？」': 'minato',
        '「寝てない。でも、寝たら聞けるっていうのでもない」': 'mio', '「ごめん。部屋の番号くれたから」': 'minato',
        '「うん。私も、先に書けばよかった」': 'mio'
      },
      C10: {
        '「熱い？」': 'minato', '「買うの早すぎた。早く持って」': 'mio', '「もう、そこ座って」': 'mio',
        '「模型、着いた？」': 'minato', '「昨日。箱の角がちょっと潰れてて、向こうの先生から写真が来た」': 'mio',
        '「中は」': 'minato', '「大丈夫。自転車も」': 'mio', '「豆腐も無事か」': 'minato', '「酒瓶」': 'mio',
        '「それと、段ボール。ありがとう」': 'mio', '「倒れなかった？」': 'minato', '「そのあと先生が左から突っ込んだ」': 'mio',
        '「湊のことが、好き」': 'mio', '「友達の方じゃない」': 'mio', '「飲んでるときに言った。ごめん」': 'mio',
        '「いつから」': 'minato', '「二人が付き合う前」': 'mio', '「そんな前から？」': 'minato',
        '「毎日ずっと、同じ強さで考えてたわけじゃないけど」': 'mio', '「紗季と、今ああなってるから？」': 'minato',
        '「今ならって思ったのかって、聞いてる？」': 'mio', '「違う。……違わないかもしれない」': 'minato',
        '「ないって言い切ったら、嘘になると思う」': 'mio', '「でも、別れたら私のところに来てって話を、今日はしに来てない」': 'mio',
        '「この前、二人の話を聞けないって言ったでしょ。紗季にも言った。その理由をずっと隠してたら、また普通に相談に乗れそうな気がして。それが嫌になった」': 'mio',
        '「三人が一番いいって、言ってたじゃん」': 'minato', '「言った」': 'mio', '「あれ、けっこう頑張って言った」': 'mio',
        '「でも、紗季がいない方がいいとは、思ってなかったよ。腹立つ日もあったけど」': 'mio', '「僕に？」': 'minato', '「二人とも」': 'mio',
        '「一年のとき、初めて三人でご飯食べたの、覚えてる？」': 'mio', '「僕、水を取ってきた」': 'minato', '「氷も」': 'mio',
        '「水には入ってるだろ」': 'minato', '「別のコップにも氷、いっぱい」': 'mio', '「意味分かんなくて、紗季と笑った」': 'mio',
        '「ああいうところ、好きだったんだよね。私の話、半分も分かってない顔で、ずっといてくれるの」': 'mio',
        '「半分くらいは」': 'minato', '「じゃあ、あの道が曲がってた理由は？」': 'mio', '「直線だと、速いから」': 'minato',
        '「惜しい。そこから先が長い」': 'mio', '「九日の写真さ」': 'mio', '「タイマーが鳴ってる間、紗季が湊の腕につかまったでしょ」': 'mio',
        '「私、急いで並ばなくてもいいんだなって思った。あのまま二人で撮っても、きっといい写真になった」': 'mio',
        '「嬉しかったの。それで、嫌だった。自分が」': 'mio', '「今、何を言っても、変になりそう」': 'minato', '「うん。私も、さっきから変」': 'mio',
        '「向こうへ行くのは、僕たちと離れたいからでもある？」': 'minato', '「私、あの研究室の見学、去年三回行ってるんだけど」': 'mio',
        '「全部それだと思う？」': 'mio', '「離れたら楽かも、とは思う。でも、行きたいのは、行きたいから。あの先生、今度は建物がなくなったあとの道を調べるんだって」': 'mio',
        '「店がなくなっても、みんな同じ角で曲がるの。買うものないのに。そこをさ、歩いて」': 'mio',
        '「また長くなる」': 'mio', '「そこから先が長いんでしょ」': 'minato',
        '「紗季には、私から言う。二人ともよければ、二十一日に三人で」': 'mio', '「私が今言ったこと、先に説明しないでね」': 'mio',
        '「あと、返事」': 'mio', '「待ってるって、言いたくなってる。でも、今は言わない」': 'mio', '「三十日の切符、もう取っちゃったし」': 'mio'
      },
      M06A: {
        '「私も、付き合いたい」': 'mio', '「言うつもりだった。今日」': 'mio', '「先に言っちゃった」': 'minato',
        '「いい。言ってくれて、嬉しかった」': 'mio', '「私、今、すごい顔してる？」': 'mio', '「嬉しそう」': 'minato',
        '「なら、いい」': 'mio', '「付き合おう」': 'minato'
      },
      M06B: {
        '「付き合うのは、やめておきたい」': 'mio', '「湊といるの、楽しかった。あの本作ったときも、ほんとに」': 'mio',
        '「待ってたら、また変わる？」': 'minato', '「待たないで。今日は、付き合わないって答えに来た」': 'mio',
        '「返事、聞いた」': 'minato', '「本、作らなきゃよかったって思う？」': 'mio', '「今は、ちょっと。思いたくなる」': 'minato',
        '「でも、七冊売れたとき、嬉しかったよ。あれは覚えてる」': 'minato'
      }
    }
  };
})();
