import React from "react";

export default function Admin() {
  return (
    <div className="admin">
      <div className="sidebar">
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus" />
          <span className="logo_name">CodingLab</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#" className="menuItem active">
              <i className="bx bx-grid-alt" />
              <span className="links_name">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="menuItem">
              <i className="bx bx-music" />
              <span className="links_name">Musics</span>
            </a>
          </li>
          <li>
            <a href="#" className="menuItem">
              <i className="bx bxs-pencil" />
              <span className="links_name">Posts</span>
            </a>
          </li>
          <li className="log_out">
            <a href="#">
              <i className="bx bx-log-out" />
              <span className="links_name">Log out</span>
            </a>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className="bx bx-menu sidebarBtn" />
            <span className="dashboard">Dashboard</span>
          </div>
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <i className="bx bx-search" />
          </div>
          <div className="profile-details">
            <img src="/img/avartar.jpg" alt="" />
            <span className="admin_name">Prem Shahi</span>
          </div>
        </nav>
        {/* dashboard page admin */}
        <div className="home-content menu-bar active">
          <div className="overview-boxes">
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Post</div>
                <div className="number">40,876</div>
                <div className="indicator">
                  <i className="bx bx-up-arrow-alt" />
                  <span className="text">Up from yesterday</span>
                </div>
              </div>
              <i className="bx bxs-pencil cart" />
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Comments</div>
                <div className="number">38,876</div>
                <div className="indicator">
                  <i className="bx bx-up-arrow-alt" />
                  <span className="text">Up from yesterday</span>
                </div>
              </div>
              <i className="bx bxs-comment-detail cart two" />
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Downloads</div>
                <div className="number">12,876</div>
                <div className="indicator">
                  <i className="bx bx-up-arrow-alt" />
                  <span className="text">Up from yesterday</span>
                </div>
              </div>
              <i className="bx bx-download cart three" />
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Users</div>
                <div className="number">11,086</div>
                <div className="indicator">
                  <i className="bx bx-down-arrow-alt down" />
                  <span className="text">Down From Today</span>
                </div>
              </div>
              <i className="bx bx-user cart four" />
            </div>
          </div>
          <div className="sales-boxes">
            <div className="recent-sales box">
              <div className="title">Recent posts</div>
              <div className="sales-details">
                <ul className="details">
                  <li className="topic">Date</li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                </ul>
                <ul className="details">
                  <li className="topic">Customer</li>
                  <li>
                    <a href="#">Alex Doe</a>
                  </li>
                  <li>
                    <a href="#">David Mart</a>
                  </li>
                  <li>
                    <a href="#">Roe Parter</a>
                  </li>
                  <li>
                    <a href="#">Diana Penty</a>
                  </li>
                  <li>
                    <a href="#">Martin Paw</a>
                  </li>
                  <li>
                    <a href="#">Doe Alex</a>
                  </li>
                  <li>
                    <a href="#">Aiana Lexa</a>
                  </li>
                  <li>
                    <a href="#">Rexel Mags</a>
                  </li>
                  <li>
                    <a href="#">Tiana Loths</a>
                  </li>
                </ul>
                <ul className="details">
                  <li className="topic">Comments</li>
                  <li>
                    <a href="#">345</a>
                  </li>
                  <li>
                    <a href="#">123</a>
                  </li>
                  <li>
                    <a href="#">3454</a>
                  </li>
                  <li>
                    <a href="#">234</a>
                  </li>
                  <li>
                    <a href="#">234</a>
                  </li>
                  <li>
                    <a href="#">456</a>
                  </li>
                  <li>
                    <a href="#">234</a>
                  </li>
                  <li>
                    <a href="#">234</a>
                  </li>
                  <li>
                    <a href="#">123</a>
                  </li>
                </ul>
                <ul className="details">
                  <li className="topic">Like</li>
                  <li>
                    <a href="#">$204.98</a>
                  </li>
                  <li>
                    <a href="#">$24.55</a>
                  </li>
                  <li>
                    <a href="#">$25.88</a>
                  </li>
                  <li>
                    <a href="#">$170.66</a>
                  </li>
                  <li>
                    <a href="#">$56.56</a>
                  </li>
                  <li>
                    <a href="#">$44.95</a>
                  </li>
                  <li>
                    <a href="#">$67.33</a>
                  </li>
                  <li>
                    <a href="#">$23.53</a>
                  </li>
                  <li>
                    <a href="#">$46.52</a>
                  </li>
                </ul>
              </div>
              <div className="button">
                <a href="#">Edit</a>
              </div>
            </div>
            <div className="top-sales box">
              <div className="title">Top favorite songs</div>
              <ul className="top-sales-details">
                <li>
                  <a href="#">
                    {/*<img src="images/sunglasses.jpg" alt="">*/}
                    <span className="product">Vuitton Sunglasses</span>
                  </a>
                  <span className="price">$1107</span>
                </li>
                <li>
                  <a href="#">
                    {/*<img src="images/jeans.jpg" alt="">*/}
                    <span className="product">Hourglass Jeans </span>
                  </a>
                  <span className="price">$1567</span>
                </li>
                <li>
                  <a href="#">
                    {/* <img src="images/nike.jpg" alt="">*/}
                    <span className="product">Nike Sport Shoe</span>
                  </a>
                  <span className="price">$1234</span>
                </li>
                <li>
                  <a href="#">
                    {/*<img src="images/scarves.jpg" alt="">*/}
                    <span className="product">Hermes Silk Scarves.</span>
                  </a>
                  <span className="price">$2312</span>
                </li>
                <li>
                  <a href="#">
                    {/*<img src="images/blueBag.jpg" alt="">*/}
                    <span className="product">Succi Ladies Bag</span>
                  </a>
                  <span className="price">$1456</span>
                </li>
                <li>
                  <a href="#">
                    {/*<img src="images/bag.jpg" alt="">*/}
                    <span className="product">Gucci Womens's Bags</span>
                  </a>
                  <span className="price">$2345</span>
                </li>
                <li>
                  <a href="#">
                    {/*<img src="images/addidas.jpg" alt="">*/}
                    <span className="product">Addidas Running Shoe</span>
                  </a>
                  <span className="price">$2345</span>
                </li>
                <li>
                  <a href="#">
                    {/*<img src="images/shirt.jpg" alt="">*/}
                    <span className="product">Bilack Wear's Shirt</span>
                  </a>
                  <span className="price">$1245</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* music page admin */}
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
                    Create your new post with a piece of music that you love or
                    see fit
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
        {/* post page admin */}
        <div className="post-content menu-bar">
          <div className="overview-boxes">
            <div className="post__items">
              <h3 className="title">Post List</h3>
              <div className="list">
                <h4 className="list__name">Author</h4>
                <h4 className="list__content">Content</h4>
                <h4 className="list__music">Music</h4>
              </div>
              <div className="post-list">
                <div className="owner">
                  <img src="/img/avartar.jpg" alt="" />
                  <a href="#">Trung Vũ</a>
                </div>
                <div className="contents">
                  <span className="content">
                    Hãy nhớ rằng, đó không phải là nội dung của bạn. Nó thậm chí
                    không phải là nội dung của SoundCloud. Tất cả âm thanh, văn
                    bản, hình ảnh, nhận xét và dữ liệu hoặc thông tin khác được
                    liên kết với tài khoản người dùng trên nền tảng SoundCloud ®
                    ("Nội dung người dùng") thuộc quyền sở hữu của người dùng
                    SoundCloud ® đã tạo hoặc tải lên nó ("Người tải lên") và bạn
                    phải tôn trọng quyền của họ mọi lúc. Việc sử dụng sai Nội
                    dung của Người dùng có thể cấu thành vi phạm bản quyền và
                    dẫn đến việc Người tải lên hoặc chủ sở hữu bản quyền khác sẽ
                    thực hiện hành động chống lại bạn.
                  </span>
                </div>
                <div className="like">
                  <img src="/img/img_music/1.jpg" className="img" alt="" />
                  <h4 className="name">EDM</h4>
                  <h4 className="author">Chưa biết tên</h4>
                </div>
                <button className="submit__btn">Delete</button>
              </div>
              <div className="post-list">
                <div className="owner">
                  <img src="/img/avartar.jpg" alt="" />
                  <a href="#">Trung Vũ</a>
                </div>
                <div className="contents">
                  <span className="content">
                    Hãy nhớ rằng, đó không phải là nội dung của bạn. Nó thậm chí
                    không phải là nội dung của SoundCloud. Tất cả âm thanh, văn
                    bản, hình ảnh, nhận xét và dữ liệu hoặc thông tin khác được
                    liên kết với tài khoản người dùng trên nền tảng SoundCloud ®
                    ("Nội dung người dùng") thuộc quyền sở hữu của người dùng
                    SoundCloud ® đã tạo hoặc tải lên nó ("Người tải lên") và bạn
                    phải tôn trọng quyền của họ mọi lúc. Việc sử dụng sai Nội
                    dung của Người dùng có thể cấu thành vi phạm bản quyền và
                    dẫn đến việc Người tải lên hoặc chủ sở hữu bản quyền khác sẽ
                    thực hiện hành động chống lại bạn.
                  </span>
                </div>
                <div className="like">
                  <img src="/img/img_music/1.jpg" className="img" alt="" />
                  <h4 className="name">EDM</h4>
                  <h4 className="author">Chưa biết tên</h4>
                </div>
                <button className="submit__btn">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
