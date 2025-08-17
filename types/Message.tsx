import { ReactNode } from "react";

interface Message {
  id: string;
  title: string | ReactNode;
  content: ReactNode;
  createdAt?: Date;
}

export default Message;
