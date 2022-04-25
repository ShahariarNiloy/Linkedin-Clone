import { connect } from "react-redux";
import {
  AddPhotoText,
  ArtCard,
  CardBackground,
  CommunityCard,
  Container,
  Item,
  Link,
  Photo,
  UserInfo,
  Widget,
} from "./LeftSideStyle";

function LeftSide(props: any) {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>
              Welcome, {props?.user ? props?.user?.displayName : "there"} !
            </Link>
          </a>
          <a>
            <AddPhotoText>Add a photo</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src="./images/widget-icon.svg" alt="" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt="" />
            My Items
          </span>
        </Item>
      </ArtCard>
      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img src="/images/plus-icon.svg" alt="" />
          </span>
        </a>
        <a>
          <span>Follow Hashtags</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </CommunityCard>
    </Container>
  );
}

const mapStateToProps = (state: any) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(LeftSide);
