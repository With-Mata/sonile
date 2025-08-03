import type { Metadata } from "next";

import MessagesViewer from "./_comps/MessagesViewer";
import appConfig from "@/config/app-config";

export const metadata: Metadata = {
  title: appConfig.name,
  description: appConfig.description,
  robots: {
    index: false,
    follow: false,
  },
};

const MainPage = () => {
  return <MessagesViewer />;
};

export default MainPage;
