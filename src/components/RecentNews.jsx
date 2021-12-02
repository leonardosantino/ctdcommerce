import "../assets/styles/recentNews.scss"
import recentNews from "../assets/imgs/recentNews.png"

function RecentNews() {
    return (
        <>
            <div className="recent-news px-5">
                Recent News
                <hr />
            </div>
            <div className="d-flex ps-5">
                <div className="col text">
                    <span className="text-top">Where To Travel</span> <br />
                    <span className="text-bottom">Matoa Where To Travel? Yogyakarta</span>
                </div>
                <div className="col recent-news">
                    <div className="d-flex justify-content-end">
                        <img className="img-fluid" src={recentNews} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default RecentNews;