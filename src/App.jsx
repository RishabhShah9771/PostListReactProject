import { useState } from "react";
import MainHeader from "./components/HeaderComponent/MainHeader";
import PostList from "./components/PostComponent/PostList";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function showModalHandler() {
    setIsModalVisible(true);
  }
  function hideModalHandler() {
    setIsModalVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList
          modalIsVisible={isModalVisible}
          onHideModal={hideModalHandler}
        />
      </main>
    </>
  );
}
export default App;
