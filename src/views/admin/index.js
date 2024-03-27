import React, { useState } from "react";
import {
  NotificationOutlined,
  UserOutlined,
  FileTextOutlined,
  IdcardOutlined,
  TeamOutlined,
  AuditOutlined,
  BugOutlined,
  RadarChartOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Input, Menu, Result } from "antd";
import { Link } from "react-router-dom";

// import DetailNews from "../components/detailAdmin_News";
// import DetailProblem from "../components/detailAdmin_Problem";
// import DetailContest from "../components/detailAdmin_Contest";

export default function Index() {
  //   const user = localStorage.getItem("dataUser")
  //     ? JSON.parse(localStorage.getItem("dataUser"))
  //     : null;
  const user = { username: "admin", role: "admin" };

  const [key, setKey] = useState("");

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem(
      <span className="uppercase font-medium text-base">Thông báo</span>,
      "notifications",
      <NotificationOutlined style={{ fontSize: 20 }} />
    ),
    getItem(
      <span className="uppercase font-medium text-base">Tài khoản</span>,
      "accounts",
      <UserOutlined style={{ fontSize: 20 }} />
    ),
    getItem(
      <span className="uppercase font-medium text-base">Người dùng</span>,
      "users",
      <IdcardOutlined style={{ fontSize: 20 }} />
    ),
    getItem(
      <span className="uppercase font-medium text-base">Bài viết</span>,
      "posts",
      <FileTextOutlined style={{ fontSize: 20 }} />
    ),
    getItem(
      <span className="uppercase font-medium text-base">Cộng đồng</span>,
      "communities",
      <TeamOutlined style={{ fontSize: 20 }} />
    ),
    getItem(
      <span className="uppercase font-medium text-base">Trang</span>,
      "pages",
      <AuditOutlined style={{ fontSize: 20 }} />
    ),
    getItem(
      <span className="uppercase font-medium text-base">
        Báo cáo, khiếu nại
      </span>,
      "reports",
      <BugOutlined style={{ fontSize: 20 }} />
    ),
    getItem(
      <span className="uppercase font-medium text-base">Thống kê</span>,
      "statistics",
      <RadarChartOutlined style={{ fontSize: 20 }} />
    ),
  ];

  const onClick = (e) => {
    setKey(e.key);
  };

  return (
    <>
      {user && user.role === "admin" ? (
        <div>
          <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-start">
                  <Link
                    to="/administration"
                    className="text-xl font-bold flex items-center lg:ml-2.5"
                  >
                    <img
                      src="/Images/logo-abc-social.jpg"
                      className="h-6 mr-2"
                      alt=""
                    />
                    <span className="self-center whitespace-nowrap">
                      ABC Social Admin
                    </span>
                  </Link>
                  <div className="lg:block lg:pl-32">
                    <Input
                      placeholder="Tìm kiếm tổng"
                      addonBefore={<SearchOutlined />}
                    />
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="flex overflow-hidden bg-white pt-16">
            <div className="fixed hidden z-20 h-full top-0 left-0 pt-16 lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75">
              <Menu mode="inline" items={items} onClick={onClick} />
            </div>
            {/* {key === "news" && (
              <div className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                <div className="py-6 px-4">
                  <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 2xl:col-span-2">
                    <DetailNews />
                  </div>
                </div>
              </div>
            )}
            {key === "problem" && (
              <div className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                <div className="py-6 px-4">
                  <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 2xl:col-span-2">
                    <DetailProblem />
                  </div>
                </div>
              </div>
            )}
            {key === "contest" && (
              <div className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                <div className="py-6 px-4">
                  <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 2xl:col-span-2">
                    <DetailContest />
                  </div>
                </div>
              </div>
            )} */}
          </div>
        </div>
      ) : (
        <Result
          status="warning"
          title="Bạn chưa được cấp quyền."
          subTitle="Vui lòng liên hệ với quản trị viên."
        />
      )}
    </>
  );
}
