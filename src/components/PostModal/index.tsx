import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Container,
  Content,
  Header,
  SharedContent,
  SharedCreation,
  UserInfo,
  AttachAssets,
  AssetButton,
  ShareComment,
  PostButton,
  Editor,
} from "./PostModalStyle";

function PostModal(props: any) {
  const [editorText, setEditorText] = useState("");

  const reset = (e: any) => {
    setEditorText("");
    props.handleClick(e);
  };
  return (
    <>
      {props.showModal === "open" && (
        <Container>
          <Content>
            <Header>
              <h2>Create a post</h2>
              <button onClick={(e: any) => reset(e)}>
                <img src="/images/close-icon.svg" alt="" />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                {props?.user && props?.user?.photoURL ? (
                  <img src={props.user.photoURL} alt="" />
                ) : (
                  <img src="/images/user.svg" alt="" />
                )}
                <span>{props?.user ? props?.user?.displayName : "Name"}</span>
              </UserInfo>
              <Editor>
                <textarea
                  value={editorText}
                  onChange={(e: any) => setEditorText(e.target.value)}
                  placeholder="What do you want to talk about?"
                  autoFocus={true}
                ></textarea>
              </Editor>
            </SharedContent>
            <SharedCreation>
              <AttachAssets>
                <AssetButton>
                  <img src="/images/sharePhoto-icon.svg" alt="" />
                </AssetButton>
                <AssetButton>
                  <img src="/images/shareVideo-icon.svg" alt="" />
                </AssetButton>
                <AssetButton>
                  <img src="/images/shareNote-icon.svg" alt="" />
                </AssetButton>
                <AssetButton>
                  <img src="/images/shareJob-icon.svg" alt="" />
                </AssetButton>
                <AssetButton>
                  <img src="/images/shareCertification-icon.svg" alt="" />
                </AssetButton>
                <AssetButton>
                  <img src="/images/shareStat-icon.svg" alt="" />
                </AssetButton>
                <AssetButton>
                  <img src="/images/shareDots-icon.svg" alt="" />
                </AssetButton>
              </AttachAssets>
              <ShareComment>
                <AssetButton>
                  <img src="/images/shareComment-icon.svg" alt="" />
                  <span>Anyone</span>
                </AssetButton>
              </ShareComment>

              <PostButton>Post</PostButton>
            </SharedCreation>
          </Content>
        </Container>
      )}
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(PostModal);
