import React, { useEffect, useState } from "react";
import {
  StyledBackgroundBox,
  StyledContainBox,
  StyledTitleContainBox,
} from "@components/common/Container";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import userJSONData from "../../../test-data/get-user.json";

const StyledTitleBox = styled.div`
  position: absolute;
  width: 180px;
  height: 90px;
  left: 105px;
  top: 60px;
  background: url("src/assets/images/logo.png") no-repeat;
  background-size: contain;
  cursor: pointer;
`;

const StyledImagesBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 30px;
`;

const StyledImageBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledImage = styled.img`
  width: 138px;
  height: 138px;
`;

const StyledParagraphBox = styled.div`
  /* width: 125px;
  height: 22px; */
  font-family: "theJamsil";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  /* identical to box height */
  text-align: center;
  color: #000000;
  margin-bottom: 30px;
`;
type StyledResultTextType = {
  isEqual: boolean;
};
const StyledResultTextBox = styled.div<StyledResultTextType>`
  text-align: center;
  vertical-align: middle;
  font-family: "theJamsil";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 33px;
  text-align: center;
  color: ${(props) => (props.isEqual ? "#023C9E" : "#9E2311")};
`;
const StyledResultSentenceParagraph = styled.p`
  text-align: center;
  vertical-align: middle;
  white-space: pre-line;
  line-height: 20px; //줄높이가 안맞아서 임의 수정함
`;
const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 20px;
  gap: 10px;

  width: 340px;
  height: 56px;

  background: #ffcd5d;
  box-shadow: 5px 5px;
  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  &:hover {
    background-color: #ff9c4f;
  }
`;
const StyledParagraph = styled.p`
  font-family: "blackHanSans";
  font-weight: 400;
  font-style: normal;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height */

  display: flex;
  align-items: flex-end;

  color: #000000;
`;

const StyledResultContainerBox = styled.div`
  /* width: 316px;
  height: 119px; */
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-family: "theJamsil";
  font-style: normal;
  font-weight: 400;
  /* font-size: 30px; */
  line-height: 33px;
  text-align: center;
  margin-bottom: 30px;
`;

const StyledAnchorBox = styled.div`
  font-family: "theJamsil";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  /* identical to box height */

  text-align: center;
  text-decoration-line: underline;

  color: #666666;
  margin-bottom: 42px;
`;

function ParticipantResult() {
  const navigate = useNavigate();
  type MbtiVariablesType = {
    participant: string;
    user: string;
    participantMbti: string;
    userMbti: string;
  };
  type participantsArrayType = {
    uid: number;
    user_mbti: string;
    user_key: string;
    name: string;
  };
  type fetchDataType = {
    create_timestamp: string;
    key: string;
    mbti: string;
    name: string;
    participants: participantsArrayType[];
  };

  const [fetchData, setFetchData] = useState<fetchDataType>();
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    fetch(`https://mbti-detective-back.vercel.app/api/users/${"ABEDF12RFe"}`, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setFetchData(data);
        console.log(fetchData);
        setisLoading(false);
      })
      .catch((error) => {
        alert("데이터를 불러오는데 실패했습니다!");
        setisLoading(false);
      });
  }, []);

  let participantMbti = "";
  const paramsName = localStorage.getItem("name");
  const participantsArray: participantsArrayType[] | undefined =
    fetchData?.participants;
  participantsArray?.map((elem) => {
    if (elem.name === paramsName) {
      participantMbti = elem.user_mbti;
    }
  });
  const userMbti = fetchData?.mbti;
  const participant = paramsName;
  const user = fetchData?.name;
  const [isEqual, setIsEqual] = useState<boolean>(participantMbti === userMbti);
  return (
    <StyledBackgroundBox>
      <StyledContainBox>
        <StyledTitleContainBox>
          <StyledTitleBox onClick={() => navigate("/")} />
        </StyledTitleContainBox>

        {isLoading ? (
          <StyledResultSentenceParagraph>
            데이터를 불러오고 있습니다...
          </StyledResultSentenceParagraph>
        ) : (
          <div>
            <StyledImagesBox>
              <StyledImageBox>
                <StyledParagraphBox>{participant}의 생각</StyledParagraphBox>
                <StyledImage
                  src={`src/assets/images/mbti-text/${participantMbti}.png`}
                  alt="내가 생각하는 친구의 mbti 캐릭터 이미지"
                />
              </StyledImageBox>
              <StyledImageBox>
                <StyledParagraphBox>{user}의 MBTI</StyledParagraphBox>
                <StyledImage
                  src={`src/assets/images/mbti-text/${userMbti}.png`}
                  alt="친구의 실제 mbti 캐릭터 이미지"
                />
              </StyledImageBox>
            </StyledImagesBox>

            <StyledResultContainerBox>
              <StyledResultTextBox isEqual={isEqual}>
                {isEqual ? "정답!" : "땡!"}
              </StyledResultTextBox>
              <StyledResultSentenceParagraph>
                {`${user ?? ""}님의 MBTI는 ${userMbti ?? ""}입니다.\n
                  ${participant ?? ""}님의 응답 결과가
                  ${user ?? ""}님에게 전송되었습니다.`}
              </StyledResultSentenceParagraph>
            </StyledResultContainerBox>

            <StyledAnchorBox>
              <Link to="/result">{user ?? ""}님의 결과 보기</Link>
            </StyledAnchorBox>

            <Link to="/">
              <StyledButton>
                <StyledParagraph>내 MBTI 물어보러 가기</StyledParagraph>
              </StyledButton>
            </Link>
          </div>
        )}
      </StyledContainBox>
    </StyledBackgroundBox>
  );
}

export default ParticipantResult;