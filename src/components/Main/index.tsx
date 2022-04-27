import { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { connect } from "react-redux";
import { getArticlesAPI } from "../../redux/actions/actions";
import PostModal from "../PostModal";
import {
  Article,
  Content,
  Container,
  Description,
  ShareBox,
  SharedActor,
  SharedImage,
  SocialCount,
  SocialActions,
} from "./MainStyle";

function Main(props: any) {
  const [showModal, setShowModal] = useState("close");
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    props.getArticles();
  }, []);

  const handleDuration = (duration: any) => {
    console.log("onDuration", duration);
    setDuration(duration);
  };
  const handleClick = (e: any) => {
    e.preventDefault();

    switch (showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("close");
    }
  };
  return (
    <>
      {props.articles.length === 0 ? (
        <p>There are no articles</p>
      ) : (
        <Container>
          <ShareBox>
            <div>
              {props?.user && props?.user?.photoURL ? (
                <img src={props.user.photoURL} alt="" />
              ) : (
                <img src="/images/user.svg" alt="" />
              )}
              <button
                onClick={handleClick}
                disabled={props?.loading ? true : false}
              >
                Start a post
              </button>
            </div>
            <div>
              <button>
                <img src="./images/photo-icon.svg" />

                <span>Photo</span>
              </button>
              <button>
                <img src="/images/video-icon.svg" />
                <span>Video</span>
              </button>

              <button>
                <img src="/images/job-icon.svg" />
                <span>Event</span>
              </button>
              <button>
                <img src="/images/article-icon.svg" />
                <span>Write article</span>
              </button>
            </div>
          </ShareBox>
          <Content>
            {props?.loading && <img src="/images/spin-loader.svg" alt="" />}
            {props.articles.length > 0 &&
              props.articles.map((article: any, key: any) => (
                <Article key={key}>
                  <SharedActor>
                    <a>
                      <img src={article?.actor?.image} alt="" />
                      <div>
                        <span>{article?.actor?.title}</span>
                        <span>{article?.actor?.description}</span>
                        <span>
                          {article?.actor?.date?.toDate()?.toLocaleDateString()}
                        </span>
                      </div>
                    </a>
                    <button>
                      <img
                        src="https://img.icons8.com/color/24/fa314a/dots-loading--v1.png"
                        alt=""
                      />
                    </button>
                  </SharedActor>
                  <Description>{article?.description}</Description>
                  <SharedImage>
                    <a>
                      {article.sharedImg == "" && article.video ? (
                        <ReactPlayer
                          width={"100%"}
                          url={article?.video}
                          onDuration={handleDuration}
                        />
                      ) : (
                        <img src={article.sharedImg} alt="" />
                      )}
                    </a>
                  </SharedImage>
                  <SocialCount>
                    <li>
                      <button>
                        <img
                          src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                          alt=""
                        />
                        <img
                          src="https://static-exp1.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8"
                          alt=""
                        />
                        <span>51</span>
                      </button>
                    </li>
                    <li>
                      <a>{article.comments} comments</a>
                    </li>
                  </SocialCount>
                  <SocialActions>
                    <button>
                      <img src="/images/like-icon.svg" alt="" />
                      <span>Like</span>
                    </button>
                    <button>
                      <img src="/images/comment-icon.svg" alt="" />
                      <span>Comment</span>
                    </button>
                    <button>
                      <img src="/images/share-icon.svg" alt="" />
                      <span>Share</span>
                    </button>
                    <button>
                      <img src="/images/send-icon.svg" alt="" />
                      <span>Send</span>
                    </button>
                  </SocialActions>
                </Article>
              ))}
          </Content>
          <PostModal showModal={showModal} handleClick={handleClick} />
        </Container>
      )}
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    user: state.userState.user,
    loading: state.articleState.loading,
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getArticles: () => dispatch(getArticlesAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
