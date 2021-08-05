// -- cursor move

// let cursor = document.getElementById("cursor");
// let cursorfollow = document.getElementById("cursorfollow");

// window.addEventListener("mousemove", function(e) {
//     let x = e.clientX; // lấy giá trị tọa độ x
//     let y = e.clientY; // lấy giá trị tọa độ Y
//     console.log(e);
//     cursor.style.left = x + "px"; // gán x cho cursor
//     cursor.style.top = y + "px"; // gán y cho cursor
// });

// ********** Home page *********

const pause = false;
const playList = document.querySelectorAll(".main__post-like");
const songName = document.querySelector(".player-title");
const songAuthor = document.querySelector(".player-author");
const songImg = document.querySelector(".player__img");
const songUrl = document.querySelector(".progress__song");
const playBtn = document.querySelector(".player-play");
const songTime = document.querySelector("#progress__input");
const nextBtn = document.querySelector(".player-next");
const prevBtn = document.querySelector(".player-prev");
const textTime = document.querySelector("#progress__time");

const music = {
    playing: true,
    currentIndex: 0,
    // data temporary database

    defineProperties: function() {
        Object.defineProperty(this, "currentSong", {
            get: function() {
                return this.songs[this.currentIndex];
            },
        });
    },
    songs: [{
            id: "0",
            name: "EDM",
            author: "Chưa biết tên",
            path: "/music/edm.mp3",
            image: "/img/img_music/1.jpg",
            time: "02:30",
            like: "10",
        },
        {
            id: "1",
            name: "Navada",
            author: "Chưa biết tên",
            path: "/music/navada.mp3",
            image: "/img/img_music/2.jpg",
            time: "02:30",
            like: "11",
        },
    ],

    // const playPromise = songUrl.play();

    // // In browsers that don’t yet support this functionality,
    // // playPromise won’t be defined.
    // if (playPromise !== undefined) {
    //     playPromise.then(function() {

    //     }).catch(function(error) {
    //         // Automatic playback failed.
    //         // Show a UI element to let the user manually start playback.
    //     });
    // }

    handleEvent: function() {
        // xử lý khi click nút player
        playBtn.onclick = function() {
            if (music.playing) {
                songUrl.play();
            } else {
                songUrl.pause();
            }
        };
        // sử dụng animate web api để quay img music hay CD
        const songAnimate = songImg.animate(
            [{
                transform: "rotate(360deg)",
            }, ], {
                duration: 10000, // quay trong bao nhiêu lâu
                iterations: Infinity, // quay bao nhiêu lần
            }
        );
        songAnimate.pause();

        // khi bài hát được chạy
        songUrl.onplay = function() {
            // sau khi bài hát chạy thì giá trị sẽ được gán là false
            music.playing = false;
            playBtn.classList.add("fa-pause");
            songAnimate.play();
        };
        // dừng bài hát
        songUrl.onpause = function() {
            // lần click tiếp theo giá trị này đã là false thì sẽ lột vào đây và ngược lại
            music.playing = true;
            playBtn.classList.remove("fa-pause");
            songAnimate.pause();
        };

        // xử lý thanh progress chạy theo tiến độ bài nhạc
        songUrl.ontimeupdate = function() {
            if (!!songUrl.duration) {
                const songPercent = Math.floor(
                    (songUrl.currentTime / songUrl.duration) * 100
                );

                songTime.value = songPercent;
            }
        };

        // tua nhạc với hàm onchange của html dom audioend
        songTime.onchange = function(e) {
            const seekTime = (songUrl.duration / 100) * e.target.value;
            songUrl.currentTime = seekTime;
        };

        // chuyển bài tiếp theo
        nextBtn.onclick = function() {
            music.nextSong();
            songUrl.play();
        };
        // lùi bài nhạc trước
        prevBtn.onclick = function() {
            music.prevSong();
            songUrl.play();
        };
        //next song when ended
        songUrl.onended = function() {
            nextBtn.click();
        };
    },

    nextSong: function() {
        const afterMusic = music.currentIndex;
        music.currentIndex++;
        if (music.currentIndex >= music.songs.length) {
            music.currentIndex = 0;
        }
        music.loadCurrentSong();
    },

    prevSong: function() {
        music.currentIndex--;
        if (music.currentIndex < 0) {
            music.currentIndex = music.songs.length - 1;
        }
        music.loadCurrentSong();
    },

    // đẩy đúng giá trị của bài hát vào khung chơi nhạc
    loadCurrentSong: function() {
        songName.innerHTML = this.currentSong.name;
        songAuthor.innerHTML = this.currentSong.author;
        songImg.src = this.currentSong.image;
        songUrl.src = this.currentSong.path;
    },

    // render listening history
    // render: function() {
    //     const historyMusic = document.querySelector(".menu__history-list");
    //     const htmlsHistoryMusic = this.songs.map((song) => {
    //         return;
    //         `
    //     <div class="list__item">
    //         <img class="list__item-img" src="${song.image}" alt="">
    //         <h4 class="list__item-name">${song.name}</h4>
    //         <span class="list__item-author">${song.author}</span>
    //     </div>
    //     `;
    //     });
    //     console.log("123");
    //     console.log(historyMusic);
    //     historyMusic.innerHTML = htmlsHistoryMusic.join("");
    // },

    start: function() {
        // định nghĩa thuộc tính cho object
        this.defineProperties();

        this.handleEvent();

        this.nextSong();

        this.prevSong();

        // this.loadCurrentSong();
    },
};
music.start();

// ---- Notification --------

let notiBtn = document.querySelector(".right #noti");

const noti = {
    handleBtnnotify: function() {
        notiBtn.onclick = function() {
            let displayNoti = document.querySelector(".notification");
            displayNoti.classList.toggle("active");
        };
    },

    start: function() {
        this.handleBtnnotify();
    },
};
noti.start();