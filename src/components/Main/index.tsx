import {
  Article,
  Container,
  Description,
  ShareBox,
  SharedActor,
  SharedImage,
  SocialCount,
  SocialActions,
} from "./MainStyle";

function Main() {
  return (
    <Container>
      <ShareBox>
        <div>
          <img src="/images/user.svg" alt="" />
          <button>Start a post</button>
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
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="./images/user.svg" alt="" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img
                src="https://img.icons8.com/color/24/fa314a/dots-loading--v1.png"
                alt=""
              />
            </button>
          </SharedActor>
          <Description>Description</Description>
          <SharedImage>
            <a>
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/000/517/091/small_2x/eezy_62-01.png"
                alt=""
              />
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
              <a>2 comments</a>
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
      </div>
    </Container>
  );
}

export default Main;
