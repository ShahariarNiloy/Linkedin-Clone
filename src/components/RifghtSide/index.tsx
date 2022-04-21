import {
  Container,
  FollowCard,
  Title,
  FeedList,
  Avatar,
} from "./RightSideStyle";

function RightSide() {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your title</h2>
          <img src="./images/feed-icon.svg" alt="" />
        </Title>
        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>Linkedin</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <div>
                <span>#Video</span>
                <button>Follow</button>
              </div>
            </a>
          </li>
        </FeedList>
      </FollowCard>
    </Container>
  );
}

export default RightSide;
