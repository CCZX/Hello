enum MessageTypeEnum {
  TEXT = 'text',
  IMAGE = 'image',
}

interface Message {
  type: MessageTypeEnum;
  from: string;
  to: string;
  text: string;
  imageList?: string[];
}
