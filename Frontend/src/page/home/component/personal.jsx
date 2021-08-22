import React from "react";

export default function personal() {
  return (
    <div className="postperson post-list post-list-1">
      <div className="post__items">
        <div className="owner">
          <img src="/img/avartar.jpg" alt="" />
          <a href="#">Trung Vũ</a>
        </div>
        <div className="contents">
          <span className="content">
            Hãy nhớ rằng, đó không phải là nội dung của bạn. Nó thậm chí không
            phải là nội dung của SoundCloud. Tất cả âm thanh, văn bản, hình ảnh,
            nhận xét và dữ liệu hoặc thông tin khác được liên kết với tài khoản
            người dùng trên nền tảng SoundCloud ® ("Nội dung người dùng") thuộc
            quyền sở hữu của người dùng SoundCloud ® đã tạo hoặc tải lên nó
            ("Người tải lên") và bạn phải tôn trọng quyền của họ mọi lúc. Việc
            sử dụng sai Nội dung của Người dùng có thể cấu thành vi phạm bản
            quyền và dẫn đến việc Người tải lên hoặc chủ sở hữu bản quyền khác
            sẽ thực hiện hành động chống lại bạn.
          </span>
        </div>
        <div className="like" data-index={0}>
          <img src="/img/img_music/2.jpg" className="img" alt="" />
          <h4 className="name">EDM</h4>
          <h4 className="author">Chưa biết tên</h4>
          <time className="time">2:46</time>
          <a href="#">
            <i className="fa fa-heart" />
          </a>
          <audio
            className="audio"
            src="/music/khong_loi/acoustic/bensound-buddy.mp3"
          />
        </div>
        <div className="comment">
          <form action>
            <input
              className="comment-input"
              type="text"
              placeholder="write a comment"
            />
            <button className="comment-btn">Comment</button>
          </form>
          <div className="comment__list">
            <div className="comment__list-item">
              <img className="avt" src="/img/avartar.jpg" alt="" />
              <div className="name-cmt">
                <span className="cmt-name">Trung Vũ</span>
                <div className="cmt-list">Rất hay</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
