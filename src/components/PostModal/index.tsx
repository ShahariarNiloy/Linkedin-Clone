import React, { useState } from "react";
import { connect } from "react-redux";
import * as firebase from "firebase/app";
import { Timestamp } from "firebase/firestore";
import ReactPlayer from "react-player";
import { postArticleAPI } from "../../redux/actions/actions";
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
  UploadImage,
  AssetButtonAnyone,
} from "./PostModalStyle";

function PostModal(props: any) {
  const [editorText, setEditorText] = useState("");
  const [sharedImage, setSharedImage] = useState<any>();
  const [videoLink, setVideoLink] = useState<any>();
  const [showVideoArea, setShowVideoArea] = useState(false);
  const [showImageArea, setShowImageArea] = useState(false);

  const reset = (e: any) => {
    setEditorText("");
    setSharedImage("");
    setVideoLink("");
    setShowImageArea(false);
    setShowVideoArea(false);

    props.handleClick(e);
  };

  const postArticle = (e: any) => {
    console.log(e);
    if (e.target !== e.currentTarget) {
      return;
    }
    console.log("post alone");
    const payload = {
      image: sharedImage,
      video: videoLink,
      user: props.user,
      description: editorText,
      timestamp: Timestamp.now(),
    };
    props.postArticle(payload);
    reset(e);
  };

  const showVideoLink = (area: any) => {
    setVideoLink("");
    setShowVideoArea(area);
  };
  const handleImageUpload = (e: any) => {
    setShowVideoArea(false);
    const image = e.target.files[0];

    if (image === "" || image === undefined) {
      alert(`Not an image, the file is a ${typeof image}`);
      return;
    }

    setSharedImage(image);
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
                />

                <UploadImage>
                  {showImageArea && !sharedImage ? (
                    <>
                      <input
                        type="file"
                        accept="image/gif, image/jpeg, image/png"
                        name="image"
                        id="file"
                        style={{ display: "none" }}
                        onChange={handleImageUpload}
                      />
                      <label htmlFor="file">Select an image to upload</label>
                    </>
                  ) : (
                    <></>
                  )}
                  {sharedImage && !showVideoArea ? (
                    <>
                      <img src={URL.createObjectURL(sharedImage)} alt="" />
                    </>
                  ) : (
                    <></>
                  )}
                  {showVideoArea ? (
                    <>
                      <input
                        type="text"
                        placeholder="Please input a video link"
                        value={videoLink}
                        onChange={(e) => setVideoLink(e.target.value)}
                      />
                      {videoLink && (
                        <ReactPlayer width={"100%"} url={videoLink} />
                      )}
                    </>
                  ) : (
                    <></>
                  )}
                </UploadImage>
              </Editor>
            </SharedContent>
            <SharedCreation>
              <AttachAssets>
                <AssetButton
                  onClick={() => {
                    setShowImageArea(!showImageArea);
                    setShowVideoArea(false);
                    setSharedImage("");
                  }}
                >
                  <img src="/images/sharePhoto-icon.svg" alt="" />
                </AssetButton>
                <AssetButton
                  onClick={() => {
                    setShowVideoArea(!showVideoArea);
                    setShowImageArea(false);
                  }}
                >
                  <img src="/images/shareVideo-icon.svg" alt="" />
                </AssetButton>
              </AttachAssets>
              <ShareComment>
                <AssetButtonAnyone>
                  <img src="/images/shareComment-icon.svg" alt="" />
                  <span>Anyone</span>
                </AssetButtonAnyone>
              </ShareComment>

              <PostButton
                disabled={!editorText ? true : false}
                onClick={(e) => postArticle(e)}
              >
                Post
              </PostButton>
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
const mapDispatchToProps = (dispatch: any) => ({
  postArticle: (payload: any) => dispatch(postArticleAPI(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
