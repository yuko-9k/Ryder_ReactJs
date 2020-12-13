import React, { Component } from "react";

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <section className="aboutUs">
          <div className="container text-center">
            <h3 className="mb-5">Giới thiệu</h3>
            <div className="row d-flex align-items-center mb-5">
              <div className="col-6 text-left aboutContentLeft">
                <p>
                  Chúng tôi là hai chị em, Penny và Georgie Brown - một bộ đôi
                  rất thực tế.
                </p>
                <p>
                  Đồ đạc của chúng ta được tạo ra để đứng vững trước thử thách
                  của thời gian, được bỏ vào ba lô và sử dụng ở bất cứ nơi đâu.
                </p>
                <p>
                  Những gì chúng ta mặc là một biểu hiện của bản chất thoải mái
                  của chúng ta.
                </p>
                <p>
                  Chúng tôi lấy cảm hứng từ môi trường xung quanh - bụi rậm, sa
                  mạc, rừng, bãi biển - và tạo ra những bộ quần áo để đưa chúng
                  tôi đi xuyên quốc gia. Để đưa chúng tôi đi trên con đường.
                </p>
                <p>
                  Chúng tôi làm việc với những người hiểu đặc tính của chúng tôi
                  và cũng cam kết với môi trường của chúng tôi.
                </p>
                <p>
                  Chúng tôi muốn ghi nhận và bày tỏ lòng kính trọng đối với
                  những người trông coi quá khứ, hiện tại và tương lai của vùng
                  đất này, những người Wurundjeri của quốc gia Kulin và những
                  Người cao tuổi của họ.
                </p>
              </div>
              <div className="col-6">
                <img src="../../img/about.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
