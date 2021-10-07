import React from "react";

export default function PostPage() {
  return (
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
                không phải là nội dung của SoundCloud. Tất cả âm thanh, văn bản,
                hình ảnh, nhận xét và dữ liệu hoặc thông tin khác được liên kết
                với tài khoản người dùng trên nền tảng SoundCloud ® ("Nội dung
                người dùng") thuộc quyền sở hữu của người dùng SoundCloud ® đã
                tạo hoặc tải lên nó ("Người tải lên") và bạn phải tôn trọng
                quyền của họ mọi lúc. Việc sử dụng sai Nội dung của Người dùng
                có thể cấu thành vi phạm bản quyền và dẫn đến việc Người tải lên
                hoặc chủ sở hữu bản quyền khác sẽ thực hiện hành động chống lại
                bạn.
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
                không phải là nội dung của SoundCloud. Tất cả âm thanh, văn bản,
                hình ảnh, nhận xét và dữ liệu hoặc thông tin khác được liên kết
                với tài khoản người dùng trên nền tảng SoundCloud ® ("Nội dung
                người dùng") thuộc quyền sở hữu của người dùng SoundCloud ® đã
                tạo hoặc tải lên nó ("Người tải lên") và bạn phải tôn trọng
                quyền của họ mọi lúc. Việc sử dụng sai Nội dung của Người dùng
                có thể cấu thành vi phạm bản quyền và dẫn đến việc Người tải lên
                hoặc chủ sở hữu bản quyền khác sẽ thực hiện hành động chống lại
                bạn.
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
  );
}
