import { useSelector } from "react-redux";
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

function LeftSide() {
  const user = useSelector((state: any) => state?.userState?.user);

  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo>
              {user && user?.photoURL ? (
                <img src={user?.photoURL} alt="" />
              ) : (
                <img src="/images/photo.svg" alt="" />
              )}
            </Photo>
            <Link>Welcome, {user ? user?.displayName : "there"} !</Link>
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

export default LeftSide;
