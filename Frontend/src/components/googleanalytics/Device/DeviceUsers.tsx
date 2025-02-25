import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import styled from "styled-components";
import { FaRegQuestionCircle } from "react-icons/fa";

import DeviceUsersGraph from "./DeviceUsersGraph";
import DesktopUsersGraph from "./DesktopUsersGraph";
import MobileUsersGraph from "./MobileUsersGraph";
import TabletUsersGraph from "./TabletUsersGraph";

interface DeviceUsersProps {
  deviceCategory: string;
  activeUsers: string;
  totalUsers: string;
  newUsers: string;
}

const DeviceUsers = () => {
  const [totalDeviceUsers, setTotalDeviceUsers] = useState<DeviceUsersProps[]>(
    []
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");
  const reportData = useSelector((state: RootState) => state.ga.deviceReport);
  const [badgeClicked, setBadgeClicked] = useState<boolean>(false);

  useEffect(() => {
    setTotalDeviceUsers(
      reportData.map((data) => ({
        deviceCategory: data.dimensionValues[0].value,
        activeUsers: data.metricValues[0].value,
        totalUsers: data.metricValues[1].value,
        newUsers: data.metricValues[2].value,
      }))
    );
  }, [reportData]);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  const handleBadgeShow = () => {
    setBadgeClicked(!badgeClicked);
  };

  return (
    <Container>
      <Title>
        <div>기기별 사용자 수</div>
        <select onChange={handleCategoryChange}>
          <option value="전체">전체</option>
          <option value="desktop">데스크톱</option>
          <option value="mobile">모바일</option>
          <option value="tablet">태블릿</option>
        </select>
        <Badge onClick={handleBadgeShow}>
          <FaRegQuestionCircle />
          {badgeClicked && (
            <Tooltip>
              <div>
                활성 사용자 (activeUsers) 귀하의 사이트나 앱을 방문한 고유
                사용자 수.
              </div>
              <div>
                신규 사용자 (newUsers) 귀하의 사이트와 처음 상호작용했거나 앱을
                처음 실행한 사용자 수 (트리거된 이벤트: first_open 또는
                first_visit).
              </div>
              <div>
                총 사용자 (totalUsers) 사이트나 앱이 사용 중이었는지 여부와
                상관없이 최소 하나의 이벤트를 기록한 고유 사용자 수.
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  right: "1px",
                  cursor: "pointer",
                }}
              >
                x
              </div>
            </Tooltip>
          )}
        </Badge>
      </Title>
      <Content>
        {selectedCategory === "전체" && (
          <DeviceUsersGraph data={totalDeviceUsers} />
        )}
        {selectedCategory === "desktop" && (
          <DesktopUsersGraph
            data={totalDeviceUsers.filter(
              (data) => data.deviceCategory === "desktop"
            )}
          />
        )}
        {selectedCategory === "mobile" && (
          <MobileUsersGraph
            data={totalDeviceUsers.filter(
              (data) => data.deviceCategory === "mobile"
            )}
          />
        )}
        {selectedCategory === "tablet" && (
          <TabletUsersGraph
            data={totalDeviceUsers.filter(
              (data) => data.deviceCategory === "tablet"
            )}
          />
        )}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: white;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  height: 10%;
`;

const Badge = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  font-size: 1rem;
  cursor: pointer;
`;

const Tooltip = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  width: 180px;
  height: 200px;
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
`;

export default DeviceUsers;
