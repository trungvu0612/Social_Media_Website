import React from "react";

export default function MusicPage() {
  return (
    <div className="music-content menu-bar">
      <div className="overview-boxes">
        <div className="post__items">
          <h3 className="title">Upload music</h3>
          <div className="left-right">
            <div className="left">
              <div className="left__items">
                <h4>Name Music</h4>
              </div>
              <div className="left__items">
                <h4>Image</h4>
              </div>
              <div className="left__items">
                <h4>Author</h4>
              </div>
              <div className="left__items">
                <h4>Link</h4>
              </div>
              <div className="left__items">
                <h4>Category</h4>
              </div>
            </div>
            <form action>
              <div className="right">
                <div className="right__items">
                  <input
                    className="input_info"
                    type="text"
                    placeholder="enter your new name"
                  />
                </div>
                <div className="right__items">
                  <input type="file" />
                </div>
                <div className="right__items">
                  <input
                    className="input_info"
                    type="text"
                    placeholder="enter your new phone"
                  />
                </div>
                <div className="right__items">
                  <input type="file" />
                </div>
                <div className="right__items checkbox">
                  <div className="checkbox">
                    <div className="checkbox__item">
                      <input type="checkbox" id="Acoustic/Fork" />
                      <i className="bx bxs-check-circle" />
                      <label htmlFor="Acoustic/Fork">Acoustic/Fork</label>
                    </div>
                    <div className="checkbox__item">
                      <input type="checkbox" id="Cinematic" />
                      <i className="bx bxs-check-circle" />
                      <label htmlFor="Cinematic">Cinematic</label>
                    </div>
                    <div className="checkbox__item">
                      <input type="checkbox" id="Pop" />
                      <i className="bx bxs-check-circle" />
                      <label htmlFor="Pop">Pop</label>
                    </div>
                    <div className="checkbox__item">
                      <input type="checkbox" id="Electronic" />
                      <i className="bx bxs-check-circle" />
                      <label htmlFor="Electronic">Electronic</label>
                    </div>
                    <div className="checkbox__item">
                      <input type="checkbox" id="Urban/groove" />
                      <i className="bx bxs-check-circle" />
                      <label htmlFor="Urban/groove">Urban/groove</label>
                    </div>
                    <div className="checkbox__item">
                      <input type="checkbox" id="Jazz" />
                      <i className="bx bxs-check-circle" />
                      <label htmlFor="Jazz">Jazz</label>
                    </div>
                    <div className="checkbox__item">
                      <input type="checkbox" id="Rock" />
                      <i className="bx bxs-check-circle" />
                      <label htmlFor="Rock">Rock</label>
                    </div>
                    <div className="checkbox__item">
                      <input type="checkbox" id="World/orthers" />
                      <i className="bx bxs-check-circle" />
                      <label htmlFor="World/orthers">World/orthers</label>
                    </div>
                    <div className="checkbox__item">
                      <input type="checkbox" id="EDM" />
                      <i className="bx bxs-check-circle" />
                      <label htmlFor="EDM">EDM</label>
                    </div>
                  </div>
                </div>
                <div className="submit">
                  <input
                    type="submit"
                    className="submit__btn"
                    defaultValue="Upload"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="overview-boxes">
        <div className="post__items">
          <div className="category">
            <div className="category__title">
              <h3>Create new post</h3>
              <span>
                Create your new post with a piece of music that you love or see
                fit
              </span>
            </div>
            <div className="category__list">
              <h4 className="category__list-item active">Acoustic/Fork</h4>
              <h4 className="category__list-item">Cinematic</h4>
              <h4 className="category__list-item">Pop</h4>
              <h4 className="category__list-item">Electronic</h4>
              <h4 className="category__list-item">Urban/groove</h4>
              <h4 className="category__list-item">Jazz</h4>
              <h4 className="category__list-item">Rock</h4>
              <h4 className="category__list-item">World/orthers</h4>
              <h4 className="category__list-item">EDM</h4>
            </div>
            <div className="category__music acoustic active">
              <div className="like">
                <img
                  className="img"
                  src="/img/img_music/khong_loi/acoustic/acousticbreeze.jpg"
                  alt=""
                />
                <h5 className="name">Breeze</h5>
                <h5 className="author">Benjamin Tissot </h5>
                <audio
                  className="audio"
                  src="/music/khong_loi/acoustic/bensound-acousticbreeze.mp3"
                />
                <button className="item-create">Edit</button>
                <button className="item-create">Delete</button>
              </div>
              <div className="like">
                <img
                  className="img"
                  src="/img/img_music/khong_loi/acoustic/acousticbreeze.jpg"
                  alt=""
                />
                <h5 className="name">Breeze</h5>
                <h5 className="author">Benjamin Tissot </h5>
                <audio
                  className="audio"
                  src="/music/khong_loi/acoustic/bensound-acousticbreeze.mp3"
                />
                <button className="item-create">Edit</button>
                <button className="item-create">Delete</button>
              </div>
              <div className="like">
                <img
                  className="img"
                  src="/img/img_music/khong_loi/acoustic/acousticbreeze.jpg"
                  alt=""
                />
                <h5 className="name">Breeze</h5>
                <h5 className="author">Benjamin Tissot </h5>
                <audio
                  className="audio"
                  src="/music/khong_loi/acoustic/bensound-acousticbreeze.mp3"
                />
                <button className="item-create">Edit</button>
                <button className="item-create">Delete</button>
              </div>
            </div>
            <div className="category__music cinematic">
              <div className="like">
                <img
                  className="img"
                  src="/img/img_music/khong_loi/acoustic/cute.jpg"
                  alt=""
                />
                <h5 className="name">Breeze</h5>
                <h5 className="author">Benjamin Tissot </h5>
                <audio
                  className="audio"
                  src="/music/khong_loi/acoustic/bensound-acousticbreeze.mp3"
                />
                <button className="item-create">Edit</button>
                <button className="item-create">Delete</button>
              </div>
              <div className="like">
                <img
                  className="img"
                  src="/img/img_music/khong_loi/acoustic/acousticbreeze.jpg"
                  alt=""
                />
                <h5 className="name">Breeze</h5>
                <h5 className="author">Benjamin Tissot </h5>
                <audio
                  className="audio"
                  src="/music/khong_loi/acoustic/bensound-acousticbreeze.mp3"
                />
                <button className="item-create">Edit</button>
                <button className="item-create">Delete</button>
              </div>
            </div>
            <div className="category__music pop">
              <div className="like">
                <img
                  className="img"
                  src="/img/img_music/khong_loi/acoustic/happiness.jpg"
                  alt=""
                />
                <h5 className="name">Breeze</h5>
                <h5 className="author">Benjamin Tissot </h5>
                <audio
                  className="audio"
                  src="/music/khong_loi/acoustic/bensound-acousticbreeze.mp3"
                />
                <button className="item-create">Edit</button>
                <button className="item-create">Delete</button>
              </div>
              <div className="like">
                <img
                  className="img"
                  src="/img/img_music/khong_loi/acoustic/acousticbreeze.jpg"
                  alt=""
                />
                <h5 className="name">Breeze</h5>
                <h5 className="author">Benjamin Tissot </h5>
                <audio
                  className="audio"
                  src="/music/khong_loi/acoustic/bensound-acousticbreeze.mp3"
                />
                <button className="item-create">Edit</button>
                <button className="item-create">Delete</button>
              </div>
            </div>
            <div className="category__music electronic">
              <div className="like">
                <img
                  className="img"
                  src="/img/img_music/khong_loi/acoustic/cute.jpg"
                  alt=""
                />
                <h5 className="name">Breeze</h5>
                <h5 className="author">Benjamin Tissot </h5>
                <audio
                  className="audio"
                  src="/music/khong_loi/acoustic/bensound-acousticbreeze.mp3"
                />
                <button className="item-create">Edit</button>
                <button className="item-create">Delete</button>
              </div>
              <div className="like">
                <img
                  className="img"
                  src="/img/img_music/khong_loi/acoustic/acousticbreeze.jpg"
                  alt=""
                />
                <h5 className="name">Breeze</h5>
                <h5 className="author">Benjamin Tissot </h5>
                <audio
                  className="audio"
                  src="/music/khong_loi/acoustic/bensound-acousticbreeze.mp3"
                />
                <button className="item-create">Edit</button>
                <button className="item-create">Delete</button>
              </div>
            </div>
            <div className="category__music urban">
              <div className="like">
                <img
                  className="img"
                  src="/img/img_music/khong_loi/acoustic/cute.jpg"
                  alt=""
                />
                <h5 className="name">Breeze</h5>
                <h5 className="author">Benjamin Tissot </h5>
                <audio
                  className="audio"
                  src="/music/khong_loi/acoustic/bensound-acousticbreeze.mp3"
                />
                <button className="item-create">Edit</button>
                <button className="item-create">Delete</button>
              </div>
              <div className="like">
                <img
                  className="img"
                  src="/img/img_music/khong_loi/acoustic/acousticbreeze.jpg"
                  alt=""
                />
                <h5 className="name">Breeze</h5>
                <h5 className="author">Benjamin Tissot </h5>
                <audio
                  className="audio"
                  src="/music/khong_loi/acoustic/bensound-acousticbreeze.mp3"
                />
                <button className="item-create">Edit</button>
                <button className="item-create">Delete</button>
              </div>
            </div>
            <div className="category__music jazz">
              <div className="like">
                <img
                  className="img"
                  src="/img/img_music/khong_loi/acoustic/cute.jpg"
                  alt=""
                />
                <h5 className="name">Breeze</h5>
                <h5 className="author">Benjamin Tissot </h5>
                <audio
                  className="audio"
                  src="/music/khong_loi/acoustic/bensound-acousticbreeze.mp3"
                />
                <button className="item-create">Edit</button>
                <button className="item-create">Delete</button>
              </div>
              <div className="like">
                <img
                  className="img"
                  src="/img/img_music/khong_loi/acoustic/acousticbreeze.jpg"
                  alt=""
                />
                <h5 className="name">Breeze</h5>
                <h5 className="author">Benjamin Tissot </h5>
                <audio
                  className="audio"
                  src="/music/khong_loi/acoustic/bensound-acousticbreeze.mp3"
                />
                <button className="item-create">Edit</button>
                <button className="item-create">Delete</button>
              </div>
            </div>
            <div className="category__music rock">
              <div className="like">
                <img
                  className="img"
                  src="/img/img_music/khong_loi/acoustic/cute.jpg"
                  alt=""
                />
                <h5 className="name">Breeze</h5>
                <h5 className="author">Benjamin Tissot </h5>
                <audio
                  className="audio"
                  src="/music/khong_loi/acoustic/bensound-acousticbreeze.mp3"
                />
                <button className="item-create">Edit</button>
                <button className="item-create">Delete</button>
              </div>
              <div className="like">
                <img
                  className="img"
                  src="/img/img_music/khong_loi/acoustic/acousticbreeze.jpg"
                  alt=""
                />
                <h5 className="name">Breeze</h5>
                <h5 className="author">Benjamin Tissot </h5>
                <audio
                  className="audio"
                  src="/music/khong_loi/acoustic/bensound-acousticbreeze.mp3"
                />
                <button className="item-create">Edit</button>
                <button className="item-create">Delete</button>
              </div>
            </div>
            <div className="category__music world">
              <div className="like">
                <img
                  className="img"
                  src="/img/img_music/khong_loi/acoustic/cute.jpg"
                  alt=""
                />
                <h5 className="name">Breeze</h5>
                <h5 className="author">Benjamin Tissot </h5>
                <audio
                  className="audio"
                  src="/music/khong_loi/acoustic/bensound-acousticbreeze.mp3"
                />
                <button className="item-create">Edit</button>
                <button className="item-create">Delete</button>
              </div>
              <div className="like">
                <img
                  className="img"
                  src="/img/img_music/khong_loi/acoustic/acousticbreeze.jpg"
                  alt=""
                />
                <h5 className="name">Breeze</h5>
                <h5 className="author">Benjamin Tissot </h5>
                <audio
                  className="audio"
                  src="/music/khong_loi/acoustic/bensound-acousticbreeze.mp3"
                />
                <button className="item-create">Edit</button>
                <button className="item-create">Delete</button>
              </div>
            </div>
            <div className="category__music edm">
              <div className="like">
                <img
                  className="img"
                  src="/img/img_music/khong_loi/acoustic/cute.jpg"
                  alt=""
                />
                <h5 className="name">Breeze</h5>
                <h5 className="author">Benjamin Tissot </h5>
                <audio
                  className="audio"
                  src="/music/khong_loi/acoustic/bensound-acousticbreeze.mp3"
                />
                <button className="item-create">Edit</button>
                <button className="item-create">Delete</button>
              </div>
              <div className="like">
                <img
                  className="img"
                  src="/img/img_music/khong_loi/acoustic/acousticbreeze.jpg"
                  alt=""
                />
                <h5 className="name">Breeze</h5>
                <h5 className="author">Benjamin Tissot </h5>
                <audio
                  className="audio"
                  src="/music/khong_loi/acoustic/bensound-acousticbreeze.mp3"
                />
                <button className="item-create">Edit</button>
                <button className="item-create">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="edit-popup">
        <div className="post__items">
          <div id="outbtn">X</div>
          <h3 className="title">Upload music</h3>
          <div className="left-right">
            <div className="left">
              <div className="left__items">
                <h4>Name Music</h4>
              </div>
              <div className="left__items">
                <h4>Image</h4>
              </div>
              <div className="left__items">
                <h4>Author</h4>
              </div>
              <div className="left__items">
                <h4>Link</h4>
              </div>
              <div className="left__items">
                <h4>Category</h4>
              </div>
            </div>
            <form action>
              <div className="right">
                <div className="right__items">
                  <input
                    className="input_info"
                    type="text"
                    placeholder="enter your new name"
                  />
                </div>
                <div className="right__items">
                  <input type="file" />
                </div>
                <div className="right__items">
                  <input
                    className="input_info"
                    type="text"
                    placeholder="enter your new phone"
                  />
                </div>
                <div className="right__items">
                  <input type="file" />
                </div>
                <div className="right__items checkbox">
                  <div className="checkbox">
                    <select>
                      <option value="Acoustic/Fork">Acoustic/Fork</option>
                      <option value="Cinematic">Cinematic</option>
                      <option value="Pop">Pop</option>
                      <option value="Electronic">Electronic</option>
                      <option value="Urban/groove">Urban/groove</option>
                      <option value="Jazz">Jazz</option>
                      <option value="Rock">Rock</option>
                      <option value="World/orthers">World/orthers</option>
                      <option value="EDM">EDM</option>
                    </select>
                  </div>
                </div>
                <div className="submit">
                  <input
                    type="submit"
                    className="submit__btn"
                    defaultValue="Upload"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
